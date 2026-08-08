import { Link } from "@tanstack/react-router";
import { Map } from "lucide-react";

const routes = [
  { path: "/", label: "/" },
  { path: "/assignment/dashboard", label: "/assignment/dashboard" },
  { path: "/assignment/day/12", label: "/assignment/day/12" },
];

export function RouteMap() {
  return (
    <section className="glass glass-shine mt-8 rounded-2xl p-5">
      <h3 className="flex items-center gap-2 text-sm font-semibold">
        <Map className="h-4 w-4 text-neon-blue" /> Route Map
      </h3>
      <ul className="mt-3 space-y-2 font-mono text-xs text-muted-foreground">
        {routes.map((r) => (
          <li key={r.path}>
            <Link to={r.path} className="text-neon-blue transition-colors hover:text-neon-pink">
              {r.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
