import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Spark = { id: number; x: number; y: number; size: number; hue: "pink" | "purple" | "blue" };

/** Glowing cursor dot + sparkle trail. Pointer-devices only, disabled for reduced motion. */
export function CursorSparkles() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [sparks, setSparks] = useState<Spark[]>([]);
  const last = useRef(0);
  const id = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;
    setEnabled(true);

    function onMove(e: MouseEvent) {
      setPos({ x: e.clientX, y: e.clientY });
      const now = performance.now();
      if (now - last.current < 55) return;
      last.current = now;
      const next: Spark[] = Array.from({ length: 2 }, () => ({
        id: id.current++,
        x: e.clientX + (Math.random() - 0.5) * 26,
        y: e.clientY + (Math.random() - 0.5) * 26,
        size: 4 + Math.random() * 5,
        hue: (["pink", "purple", "blue"] as const)[Math.floor(Math.random() * 3)],
      }));
      setSparks((s) => [...s.slice(-14), ...next]);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <motion.span
        animate={{ x: pos.x - 9, y: pos.y - 9 }}
        transition={{ type: "spring", stiffness: 500, damping: 32, mass: 0.4 }}
        className="absolute h-[18px] w-[18px] rounded-full opacity-80 blur-[2px]"
        style={{
          background:
            "radial-gradient(circle, var(--neon-blue), var(--neon-purple) 60%, transparent)",
          boxShadow: "0 0 16px 4px color-mix(in oklab, var(--neon-purple) 60%, transparent)",
        }}
      />
      <AnimatePresence>
        {sparks.map((s) => (
          <motion.span
            key={s.id}
            initial={{ opacity: 0.9, scale: 1, x: s.x, y: s.y }}
            animate={{ opacity: 0, scale: 0.3, y: s.y - 34 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            onAnimationComplete={() => setSparks((p) => p.filter((q) => q.id !== s.id))}
            style={{ width: s.size, height: s.size }}
            className={`absolute rounded-full ${
              s.hue === "pink"
                ? "bg-neon-pink shadow-[0_0_12px_2px_var(--neon-pink)]"
                : s.hue === "blue"
                  ? "bg-neon-blue shadow-[0_0_12px_2px_var(--neon-blue)]"
                  : "bg-neon-purple shadow-[0_0_12px_2px_var(--neon-purple)]"
            }`}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
