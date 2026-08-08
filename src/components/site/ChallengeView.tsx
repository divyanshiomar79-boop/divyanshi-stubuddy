import { motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { Github, Linkedin, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { dayTask } from "@/data/mock";

export function ChallengeView({ day }: { day: string }) {
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!github.trim() || !linkedin.trim()) {
      setError("Please add both links");
      setSubmitted(false);
      toast.error("Please add both links");
      return;
    }
    setError("");
    try {
      localStorage.setItem(
        "day12_submission",
        JSON.stringify({
          day,
          github: github.trim(),
          linkedin: linkedin.trim(),
          submittedAt: new Date().toISOString(),
        }),
      );
    } catch {
      /* storage unavailable */
    }
    setSubmitted(true);
    toast.success(`Submitted! Day ${day} completed`);
    setGithub("");
    setLinkedin("");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass glass-shine rounded-3xl p-6 sm:p-9"
    >
      <span className="glass inline-flex rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        Day {day} of 60
      </span>
      <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
        <span className="text-gradient">Day {day} Task</span>
      </h1>
      <p className="mt-3 text-sm text-muted-foreground sm:text-base">{dayTask.description}</p>

      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        <div>
          <label htmlFor="github" className="mb-2 flex items-center gap-2 text-sm font-medium">
            <Github className="h-4 w-4 text-neon-blue" /> GitHub Link
          </label>
          <input
            id="github"
            type="url"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="https://github.com/username/day-12"
            className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-neon-pink/70 focus:ring-2 focus:ring-ring/40"
          />
        </div>
        <div>
          <label
            htmlFor="linkedin"
            className="mb-2 flex items-center gap-2 text-sm font-medium"
          >
            <Linkedin className="h-4 w-4 text-neon-pink" /> LinkedIn Post Link
          </label>
          <input
            id="linkedin"
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://linkedin.com/posts/..."
            className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-neon-pink/70 focus:ring-2 focus:ring-ring/40"
          />
        </div>
        {error && (
          <p role="alert" className="text-sm text-neon-orange">
            {error}
          </p>
        )}
        <button
          type="submit"
          className="shimmer w-full rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-primary-foreground neon-ring"
        >
          Submit Proof of Work
        </button>
      </form>

      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 flex items-center gap-2 rounded-xl bg-secondary/60 px-4 py-3 text-sm"
        >
          <CheckCircle2 className="h-4 w-4 text-neon-pink" />
          Proof submitted for Day {day}. Great work!
        </motion.p>
      )}
    </motion.div>
  );
}
