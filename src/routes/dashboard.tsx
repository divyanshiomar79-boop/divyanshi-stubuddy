import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { DashboardView } from "@/components/site/DashboardView";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — AB TALKS 60-Day Challenge" },
      {
        name: "description",
        content:
          "Track your streak, daily tasks, badges and leaderboard rank across the AB TALKS 60-day coding challenge.",
      },
      { property: "og:title", content: "Your AB TALKS Dashboard" },
      {
        property: "og:description",
        content: "Streaks, progress, badges, leaderboard and your AI mentor in one place.",
      },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-8">
        <DashboardView />
      </main>
      <Footer />
    </div>
  );
}
