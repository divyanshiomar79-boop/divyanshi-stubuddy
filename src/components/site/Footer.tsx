import { Instagram, Linkedin, Youtube, Mail, MessageCircle } from "lucide-react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { goToSection } from "@/lib/scroll-nav";
import { Logo } from "./Logo";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/abtalksonai?igsh=YnEwcmFlMmw4a3J6",
    Icon: Instagram,
  },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/abtalks-on-ai/", Icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com/@abtalksonai?si=hoEXKKHCr8CIZSdH", Icon: Youtube },
  { label: "X", href: "https://x.com/abtalksonai", Icon: MessageCircle },
  { label: "Discord", href: "https://discord.com/invite/j4Q8tvDj6", Icon: MessageCircle },
];

export function Footer() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();

  return (
    <footer className="mt-20 border-t border-border/60 px-4 py-10 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,1fr)_auto]">
        <div className="min-w-0">
          <Logo onNavigate={() => goToSection("home", pathname, navigate)} />
          <p className="mt-3 text-sm text-muted-foreground">
            60-Day Coding Challenge{"\u00a0"}
          </p>
          <a
            href="mailto:Team@abtalks.in"
            className="mt-3 inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-accent"
          >
            <Mail className="h-4 w-4" /> Team@abtalks.in
          </a>
        </div>
        <div className="flex flex-wrap items-start gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="glass glass-hover grid h-10 w-10 place-items-center rounded-xl"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-muted-foreground">© 2026 AB TALKS</p>
    </footer>
  );
}
