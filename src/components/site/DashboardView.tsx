import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  LayoutDashboard,
  Swords,
  Calendar,
  Medal,
  TrendingUp,
  Bot,
  User,
  Settings,
  Flame,
  CheckCircle2,
  CalendarDays,
  Shield,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { CountUp } from "@/components/site/CountUp";
import {
  user,
  stats,
  progressPercent,
  recentActivity,
  badges,
  leaderboard,
  mentorMessage,
  completedDays,
} from "@/data/mock";

const nav = [
  { label: "Dashboard", Icon: LayoutDashboard, active: true },
  { label: "Challenge", Icon: Swords, to: "/day/$day", params: { day: "12" } },
  { label: "Calendar", Icon: Calendar },
  { label: "Badges", Icon: Medal },
  { label: "Progress", Icon: TrendingUp },
  { label: "AI Mentor", Icon: Bot },
  { label: "Profile", Icon: User },
  { label: "Settings", Icon: Settings },
];

const statCards = [
  {
    label: "Current Streak",
    value: stats.streak,
    unit: "days",
    sub: `Best: ${stats.bestStreak} days`,
    Icon: Flame,
    tone: "text-neon-orange",
  },
  {
    label: "Tasks Completed",
    value: stats.tasksCompleted,
    unit: `/${stats.totalDays}`,
    sub: "80% Completed",
    Icon: CheckCircle2,
    tone: "text-neon-pink",
  },
  {
    label: "Current Day",
    value: stats.currentDay,
    unit: `/${stats.totalDays}`,
    sub: `Day ${stats.currentDay} of ${stats.totalDays}`,
    Icon: CalendarDays,
    tone: "text-neon-blue",
  },
  {
    label: "Badges Earned",
    value: stats.badgesEarned,
    unit: "Badges",
    sub: `Next: ${stats.nextBadges} badges`,
    Icon: Shield,
    tone: "text-neon-orange",
  },
];

const calendarDays = Array.from({ length: 35 }, (_, i) => i - 2);

export function DashboardView() {
  return (
    <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
      <aside className="glass glass-shine h-fit rounded-2xl p-3 lg:sticky lg:top-24">
        <ul className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
          {nav.map((n) => {
            const cls = `flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm whitespace-nowrap transition-colors ${
              n.active
                ? "bg-brand-gradient font-semibold text-primary-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`;
            return (
              <li key={n.label}>
                {n.to ? (
                  <Link to={n.to} params={n.params} className={cls}>
                    <n.Icon className="h-4 w-4 shrink-0" />
                    {n.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => toast(`${n.label} coming soon!`)}
                    className={cls}
                  >
                    <n.Icon className="h-4 w-4 shrink-0" />
                    {n.label}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </aside>

      <div className="min-w-0 space-y-6">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="min-w-0"
        >
          <h1 className="truncate text-2xl font-bold sm:text-3xl">
            Good evening, {user.name}! 👋
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">Keep building, keep growing!</p>
        </motion.header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statCards.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glass glass-hover glass-shine rounded-2xl p-5"
            >
              <p className="text-xs text-muted-foreground">{c.label}</p>
              <c.Icon className={`float-slow mt-3 h-7 w-7 ${c.tone}`} />
              <p className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold">
                  <CountUp value={c.value} />
                </span>
                <span className="text-xs text-muted-foreground">{c.unit}</span>
              </p>
              <p className="mt-2 text-xs text-muted-foreground">{c.sub}</p>
            </motion.div>
          ))}
        </section>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="glass glass-hover glass-shine rounded-2xl p-6"
          >
            <h2 className="font-semibold">Your Progress</h2>
            <p className="mt-1 text-sm text-muted-foreground">You're doing great! Keep it up.</p>
            <div className="mt-5 flex items-center gap-4">
              <div className="h-3 min-w-0 flex-1 overflow-hidden rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progressPercent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative h-full rounded-full bg-brand-gradient shadow-[0_0_18px_-2px_var(--neon-pink)]"
                >
                  <span className="absolute top-1/2 right-0 h-3 w-3 -translate-y-1/2 rounded-full bg-neon-pink shadow-[0_0_14px_4px_var(--neon-pink)]" />
                </motion.div>
              </div>
              <span className="shrink-0 text-lg font-bold">{progressPercent}%</span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              {stats.currentDay} / {stats.totalDays} days completed
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="glass glass-hover glass-shine rounded-2xl p-6"
          >
            <h2 className="flex items-center gap-2 font-semibold">
              <Sparkles className="h-4 w-4 text-neon-pink" /> AI Mentor
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">{mentorMessage}</p>
            <button
              onClick={() => toast("AI Mentor coming soon!")}
              className="shimmer mt-5 w-full rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground neon-ring"
            >
              Ask AI Mentor
            </button>
          </motion.section>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="glass glass-hover glass-shine rounded-2xl p-6">
            <h2 className="font-semibold">Recent Activity</h2>
            <ul className="mt-4 space-y-3">
              {recentActivity.map((a) => (
                <li
                  key={a.day}
                  className="glass glass-hover grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl p-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-neon-pink" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{a.title}</p>
                    <p className="text-xs text-muted-foreground">{a.status}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">{a.time}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/day/$day"
              params={{ day: "12" }}
              className="mt-4 inline-block text-sm text-neon-pink hover:underline"
            >
              Go to today's task →
            </Link>
          </section>

          <section className="glass glass-hover glass-shine rounded-2xl p-6">
            <h2 className="font-semibold">Streak Calendar</h2>
            <div className="mt-4 grid grid-cols-7 gap-1.5 text-center text-[11px]">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <span key={d} className="text-muted-foreground">
                  {d}
                </span>
              ))}
              {calendarDays.map((d) => {
                const inMonth = d >= 1 && d <= 31;
                const active = inMonth && completedDays.includes(d);
                const today = d === 12;
                return (
                  <span
                    key={d}
                    className={`grid aspect-square place-items-center rounded-full ${
                      today
                        ? "bg-brand-gradient font-bold text-primary-foreground"
                        : active
                          ? "border border-primary/70 bg-primary/25 text-foreground shadow-[0_0_12px] shadow-primary/60"
                          : inMonth
                            ? "text-muted-foreground"
                            : "text-muted-foreground/40"
                    }`}
                  >
                    {inMonth ? d : d < 1 ? 30 + d : d - 31}
                  </span>
                );
              })}
            </div>
          </section>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="glass glass-hover glass-shine rounded-2xl p-6">
            <h2 className="font-semibold">Badges</h2>
            <div className="mt-5 grid grid-cols-3 gap-4 sm:grid-cols-5">
              {badges.map((b) => (
                <div key={b.name} className="text-center">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient neon-ring">
                    <Medal className="h-5 w-5 text-primary-foreground" />
                  </span>
                  <p className="mt-2 text-[11px] text-muted-foreground">{b.name}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="glass glass-hover glass-shine rounded-2xl p-6">
            <h2 className="font-semibold">Leaderboard</h2>
            <ul className="mt-4 space-y-2">
              {leaderboard.map((l) => (
                <li
                  key={l.rank}
                  className={`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${
                    l.isYou ? "bg-brand-gradient text-primary-foreground" : "bg-secondary/50"
                  }`}
                >
                  <span className="w-4 shrink-0 font-bold">{l.rank}</span>
                  <span className="truncate">{l.name}</span>
                  <span className="shrink-0 text-xs opacity-80">{l.days} days</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
