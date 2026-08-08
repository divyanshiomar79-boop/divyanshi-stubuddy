import { motion } from "motion/react";
import { useTheme } from "@/hooks/use-theme";

const orbs = [
  { left: "8%", top: "18%", size: 220, color: "var(--neon-purple)", dur: 22, delay: 0 },
  { left: "78%", top: "12%", size: 180, color: "var(--neon-pink)", dur: 26, delay: 2 },
  { left: "62%", top: "62%", size: 240, color: "var(--neon-blue)", dur: 30, delay: 1 },
  { left: "22%", top: "74%", size: 160, color: "var(--neon-orange)", dur: 28, delay: 3 },
  { left: "45%", top: "38%", size: 140, color: "var(--neon-pink)", dur: 24, delay: 4 },
];

const darkParticles = Array.from({ length: 48 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  size: 2 + (i % 4),
  dur: 12 + (i % 8) * 2,
  delay: (i % 12) * 0.4,
  hue: i % 3 === 0 ? "var(--neon-blue)" : i % 3 === 1 ? "var(--neon-purple)" : "var(--neon-pink)",
}));

/** Floating background orbs + dark-mode particle field. Purely decorative. */
export function Particles() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className={`absolute inset-0 ${isDark ? "mesh-drift-dark" : "mesh-drift"}`} />
      {orbs.map((o, i) => (
        <motion.span
          key={i}
          initial={{ opacity: isDark ? 0.18 : 0.14 }}
          animate={{
            y: [0, -26, 0],
            x: [0, 14, 0],
            opacity: isDark ? [0.16, 0.28, 0.16] : [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: o.dur,
            delay: o.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: o.left,
            top: o.top,
            width: o.size,
            height: o.size,
            background: `radial-gradient(circle, ${o.color}, transparent 70%)`,
          }}
          className="absolute rounded-full blur-3xl"
        />
      ))}
      {isDark &&
        darkParticles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 0.35, scale: 1 }}
            animate={{
              y: [0, -40, 0],
              x: [0, (p.id % 2 === 0 ? 18 : -18), 0],
              opacity: [0.25, 0.7, 0.25],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: p.hue,
              boxShadow: `0 0 ${p.size * 4}px ${p.hue}`,
            }}
            className="absolute rounded-full"
          />
        ))}
    </div>
  );
}
