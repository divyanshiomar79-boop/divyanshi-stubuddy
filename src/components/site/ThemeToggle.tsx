import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="glass glass-shine relative grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-transform hover:scale-110 active:scale-95 dark:shadow-[0_0_20px_-4px_var(--neon-purple)] dark:hover:shadow-[0_0_28px_-2px_var(--neon-blue)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
          >
            <Moon className="h-5 w-5 text-neon-blue drop-shadow-[0_0_6px_var(--neon-blue)]" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
          >
            <Sun className="h-5 w-5 text-neon-orange drop-shadow-[0_0_6px_var(--neon-orange)]" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
