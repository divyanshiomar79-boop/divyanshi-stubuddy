import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { goToSection } from "@/lib/scroll-nav";
import { useTheme } from "@/hooks/use-theme";

const sections = [
  { label: "Home", id: "home" },
  { label: "Challenge", id: "challenge" },
  { label: "Dashboard", id: "dashboard" },
  { label: "Calendar", id: "calendar" },
  { label: "Badges", id: "badges" },
  { label: "About", id: "about" },
  { label: "Testimonials", id: "testimonials" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const ids = sections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.3, 0.5] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  function handleNav(id: string) {
    goToSection(id, pathname, navigate);
  }

  const navLink = (id: string, label: string, mobile = false) => {
    const active = pathname === "/" && activeId === id;
    const base = mobile
      ? "rounded-lg px-2 py-2 text-left text-sm transition-colors"
      : "text-sm transition-colors";
    const state = active
      ? "font-semibold text-foreground drop-shadow-[0_0_8px_var(--neon-blue)]"
      : "text-muted-foreground hover:text-foreground";
    return (
      <button key={id} onClick={() => handleNav(id)} className={`${base} ${state}`}>
        {label}
      </button>
    );
  };

  const showGlass = scrolled || isDark;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        showGlass
          ? `glass glass-shine border-b ${
              isDark
                ? "border-[color-mix(in_oklab,var(--neon-blue)_35%,transparent)] shadow-[0_8px_32px_-12px_color-mix(in_oklab,var(--neon-purple)_55%,transparent)]"
                : "border-white/10 bg-background/55 shadow-[0_10px_30px_-20px_var(--neon-purple)] backdrop-blur-2xl backdrop-saturate-150"
            }`
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <Logo onNavigate={() => handleNav("home")} />
        <div className="hidden items-center gap-7 md:flex">
          {sections.map((s) => navLink(s.id, s.label))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => handleNav("challenge")}
            className="shimmer hidden rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-primary-foreground neon-ring sm:inline-flex"
          >
            Join Challenge
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="glass glass-shine grid h-10 w-10 shrink-0 place-items-center rounded-xl md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
      {open && (
        <div className="glass border-t border-border/50 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setOpen(false);
                  handleNav(s.id);
                }}
                className={`rounded-lg px-2 py-2 text-left text-sm transition-colors ${
                  pathname === "/" && activeId === s.id
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                handleNav("challenge");
              }}
              className="shimmer mt-2 rounded-full bg-brand-gradient px-5 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Join Challenge
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
