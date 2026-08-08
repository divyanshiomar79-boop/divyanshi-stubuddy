import { motion } from "motion/react";
import { Briefcase, Code2, Users } from "lucide-react";

const challenges = [
  {
    title: "60-Day Coding Challenge",
    description: "One real task every day to build your DSA muscles",
    badges: ["60 days"],
    tag: "Enrolling now",
    button: "Start the challenge",
  },
  {
    title: "Vibe Code Hackathon",
    description: "Build anything using AI in 48 hours",
    badges: ["48 hours", "Teams of 1-3"],
    tag: "Registration closed",
    button: "Explore ABTalks",
  },
  {
    title: "31 Days AI Cohort",
    description: "Build and deploy a production AI chatbot",
    badges: ["31 days"],
    tag: "Applications open",
    button: "Apply now",
  },
  {
    title: "Claude Challenge",
    description: "Master Claude through focused prompt-engineering",
    badges: ["60 days", "AI mastery"],
    tag: "New",
    button: "Join the Claude track",
  },
];

const stats = [
  { Icon: Users, value: "10,000+", label: "members" },
  { Icon: Code2, value: "500+", label: "projects" },
  { Icon: Briefcase, value: "100+", label: "hiring partners" },
];

export function ChallengesSection() {
  return (
    <motion.section
      id="challenge"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="mt-10 scroll-mt-20"
    >
      <h2 className="text-center text-2xl font-bold sm:text-3xl">Our Challenges</h2>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {challenges.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass glass-hover glass-shine flex flex-col rounded-2xl p-5"
          >
            <span className="glass inline-flex w-fit rounded-full px-3 py-1 text-[10px] font-semibold tracking-wide text-neon-blue uppercase">
              {c.tag}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-foreground"
                >
                  {b}
                </span>
              ))}
            </div>
            <button
              type="button"
              className="shimmer mt-5 w-full rounded-full bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-primary-foreground neon-ring"
            >
              {c.button}
            </button>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="glass glass-shine mt-8 grid grid-cols-1 gap-4 rounded-2xl p-6 sm:grid-cols-3 sm:gap-6"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
            className="flex items-center gap-4 sm:flex-col sm:text-center"
          >
            <span className="glass grid h-12 w-12 shrink-0 place-items-center rounded-xl sm:mx-auto">
              <s.Icon className="h-5 w-5 text-neon-blue" />
            </span>
            <div>
              <p className="text-2xl font-extrabold">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
