import { Boxes } from "lucide-react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { goToSection } from "@/lib/scroll-nav";

export function Logo({
  className = "",
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={onNavigate ?? (() => goToSection("home", pathname, navigate))}
      className={`flex items-center gap-2 transition-transform hover:scale-[1.02] ${className}`}
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-gradient neon-ring">
        <Boxes className="h-5 w-5 text-primary-foreground" />
      </span>
      <span className="text-lg font-bold tracking-tight text-foreground">AB TALKS</span>
    </button>
  );
}
