import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Ripple = { id: number; x: number; y: number };

/** Glowing blue/purple ripple that follows touch on mobile. Disabled for reduced motion. */
export function TouchRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [glow, setGlow] = useState({ x: -200, y: -200, active: false });
  const id = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function onTouchStart(e: TouchEvent) {
      const t = e.touches[0];
      setGlow({ x: t.clientX, y: t.clientY, active: true });
      setRipples((r) => [...r.slice(-8), { id: id.current++, x: t.clientX, y: t.clientY }]);
    }
    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0];
      setGlow({ x: t.clientX, y: t.clientY, active: true });
    }
    function onTouchEnd() {
      setGlow((g) => ({ ...g, active: false }));
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] md:hidden">
      <motion.span
        animate={{
          x: glow.x - 48,
          y: glow.y - 48,
          opacity: glow.active ? 0.65 : 0,
          scale: glow.active ? 1 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 26, mass: 0.45 }}
        className="absolute h-24 w-24 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, var(--neon-blue), var(--neon-purple) 45%, transparent 72%)",
          boxShadow: "0 0 40px 8px color-mix(in oklab, var(--neon-purple) 50%, transparent)",
        }}
      />
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ opacity: 0.75, scale: 0 }}
            animate={{ opacity: 0, scale: 5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            onAnimationComplete={() => setRipples((prev) => prev.filter((p) => p.id !== r.id))}
            style={{ left: r.x - 36, top: r.y - 36 }}
            className="absolute h-[72px] w-[72px] rounded-full border-2 border-[color-mix(in_oklab,var(--neon-blue)_55%,transparent)]"
          >
            <span
              className="block h-full w-full rounded-full"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--neon-blue) 50%, transparent), color-mix(in oklab, var(--neon-purple) 25%, transparent) 55%, transparent 75%)",
                boxShadow:
                  "0 0 28px 6px color-mix(in oklab, var(--neon-purple) 70%, transparent), inset 0 0 16px color-mix(in oklab, var(--neon-blue) 40%, transparent)",
              }}
            />
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
