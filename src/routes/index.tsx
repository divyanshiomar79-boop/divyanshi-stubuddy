import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "motion/react";
import { scrollToSection } from "@/lib/scroll-nav";
import {
  ArrowRight,
  CalendarCheck,
  TrendingUp,
  Code2,
  Award,
  Rocket,
  CheckSquare,
  Share2,
  Trophy,
  CalendarDays,
  Medal,
  Sparkles,
  Target,
  Users,
  Flame,
} from "lucide-react";
import heroCube from "@/assets/hero-cube.jpg";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { DashboardView } from "@/components/site/DashboardView";
import { ChallengeView } from "@/components/site/ChallengeView";
import { ChallengesSection } from "@/components/site/ChallengesSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { badges, completedDays, stats } from "@/data/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AB TALKS — 60-Day DSA Challenge for Indian Students" },
      {
        name: "description",
        content:
          "Master DSA, build in public and get hired with the AB TALKS 60-day coding challenge for Indian college students.",
      },
      { property: "og:title", content: "AB TALKS — Master DSA. Build in Public. Get Hired." },
      {
        property: "og:description",
        content: "Join the 60-day coding challenge: daily tasks, streaks, badges and leaderboards.",
      },
    ],
  }),
  component: Landing,
});

const features = [
  { Icon: CalendarCheck, title: "Daily Tasks", text: "Handpicked tasks every single day" },
  { Icon: TrendingUp, title: "Track Progress", text: "Visualize your journey" },
  { Icon: Code2, title: "Build in Public", text: "Share on LinkedIn and grow" },
  { Icon: Award, title: "Earn Badges", text: "Unlock badges and rewards" },
];

const steps = [
  {
    Icon: Rocket,
    n: "01",
    title: "Join Challenge",
    text: "Join the 60-day challenge and get started",
  },
  {
    Icon: CheckSquare,
    n: "02",
    title: "Complete Tasks",
    text: "Solve daily tasks and build your skills",
  },
  {
    Icon: Share2,
    n: "03",
    title: "Track & Share",
    text: "Track your progress and share in public",
  },
  { Icon: Trophy, n: "04", title: "Get Hired", text: "Build credibility and land your dream job" },
];

const aboutPoints = [
  { Icon: Target, title: "Our Mission", text: "Empower Indian students to master DSA and land their dream job." },
  { Icon: Users, title: "Community", text: "Join thousands of students building together and supporting each other." },
  { Icon: Flame, title: "Stay Consistent", text: "Build a daily coding habit that transforms your career." },
];

const calendarDays = Array.from({ length: 35 }, (_, i) => i - 2);

function Landing() {
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    const timer = window.setTimeout(() => scrollToSection(id), 120);
    return () => window.clearTimeout(timer);
  }, [hash]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-8">
        {/* ─── HOME ─── */}
        <section
          id="home"
          className="grid items-center gap-10 py-14 scroll-mt-20 md:grid-cols-2 md:py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <span className="glass inline-flex rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              60-Day Challenge
            </span>
            <h1 className="mt-5 text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Master <span className="text-neon-blue">DSA.</span>
              <br />
              Build in <span className="text-neon-pink">Public.</span>
              <br />
              <span className="text-gradient">Get Hired.</span>
            </h1>
            <p className="mt-5 max-w-md text-sm text-muted-foreground sm:text-base">
              Take the 60-day challenge, build your skills consistently and transform your career.
            </p>
            <a
              href="#challenge"
              className="shimmer mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3 text-sm font-semibold text-primary-foreground neon-ring"
            >
              Join Challenge <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <motion.img
              animate={{ y: [0, -14, 0], rotate: [0, 2.5, 0, -2.5, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              src={heroCube}
              width={1024}
              height={1024}
              alt="Glowing 3D purple cube mascot of the AB TALKS coding challenge"
              className="glow-pulse mx-auto w-full max-w-md rounded-[2rem]"
            />
          </motion.div>
        </section>

        {/* ─── Feature cards ─── */}
        <section className="grid grid-cols-1 gap-4 pb-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass glass-hover glass-shine rounded-2xl p-5"
            >
              <span className="glass grid h-11 w-11 place-items-center rounded-xl">
                <f.Icon className="float-slow h-5 w-5 text-neon-pink" />
              </span>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
            </motion.article>
          ))}
        </section>

        {/* ─── CHALLENGE ─── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="glass glass-shine mt-10 scroll-mt-20 rounded-3xl p-6 sm:p-10"
        >
          <h2 className="text-center text-2xl font-bold sm:text-3xl">How It Works</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Simple steps to transform your skills
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="text-center"
              >
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-gradient neon-ring">
                  <s.Icon className="float-slow h-7 w-7 text-primary-foreground" />
                </span>
                <p className="mt-4 text-xs font-semibold tracking-widest text-neon-orange">{s.n}</p>
                <h3 className="mt-1 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ─── Today's task (ChallengeView) ─── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-10 max-w-2xl scroll-mt-20"
        >
          <ChallengeView day="12" />
        </motion.section>

        {/* ─── DASHBOARD ─── */}
        <motion.section
          id="dashboard"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="scroll-mt-20 py-10"
        >
          <DashboardView />
        </motion.section>

        {/* ─── CALENDAR ─── */}
        <motion.section
          id="calendar"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="glass glass-shine scroll-mt-20 rounded-3xl p-6 sm:p-10"
        >
          <h2 className="flex items-center gap-2 text-center text-2xl font-bold sm:text-3xl">
            <CalendarDays className="h-6 w-6 text-neon-blue" /> Challenge Calendar
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Track your daily progress across the 60-day journey
          </p>
          <div className="mt-8 grid grid-cols-7 gap-1.5 text-center text-[11px] sm:gap-2">
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
                  className={`grid aspect-square place-items-center rounded-full text-[10px] sm:text-xs ${
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
        </motion.section>

        {/* ─── BADGES ─── */}
        <motion.section
          id="badges"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="glass glass-shine mt-10 scroll-mt-20 rounded-3xl p-6 sm:p-10"
        >
          <h2 className="flex items-center gap-2 text-center text-2xl font-bold sm:text-3xl">
            <Medal className="h-6 w-6 text-neon-pink" /> Earn Badges
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Unlock rewards as you progress through the challenge
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 sm:grid-cols-5">
            {badges.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-gradient neon-ring">
                  <Medal className="h-7 w-7 text-primary-foreground" />
                </span>
                <p className="mt-3 text-[11px] text-muted-foreground">{b.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ─── ABOUT ─── */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="glass glass-shine mt-10 scroll-mt-20 rounded-3xl p-6 sm:p-10"
        >
          <h2 className="text-center text-2xl font-bold sm:text-3xl">About AB TALKS</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
            AB TALKS is a 60-day coding challenge designed for Indian college students. Master DSA,
            build in public, and get hired.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {aboutPoints.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="glass glass-hover glass-shine rounded-2xl p-6 text-center"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient neon-ring">
                  <p.Icon className="float-slow h-6 w-6 text-primary-foreground" />
                </span>
                <h3 className="mt-4 font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <ChallengesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
