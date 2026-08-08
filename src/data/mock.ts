export const user = { name: "Divyanshi" };

export const stats = {
  streak: 12,
  tasksCompleted: 48,
  currentDay: 12,
  badgesEarned: 5,
  totalDays: 60,
  bestStreak: 23,
  nextBadges: 2,
};

export const progressPercent = 80;

export const recentActivity = [
  { day: 12, title: "Day 12 – Arrays", status: "Completed", time: "2h ago" },
  { day: 11, title: "Day 11 – Strings", status: "Completed", time: "1d ago" },
  { day: 10, title: "Day 10 – Linked List", status: "Completed", time: "2d ago" },
];

export const badges = [
  { name: "Starter", color: "neon-blue" },
  { name: "Consistent", color: "neon-pink" },
  { name: "Problem Solver", color: "neon-orange" },
  { name: "Sharer", color: "neon-blue" },
  { name: "Top Performer", color: "neon-orange" },
];

export const leaderboard = [
  { rank: 1, name: "CodeMaster", days: 120 },
  { rank: 2, name: "DevWizard", days: 110 },
  { rank: 3, name: "AlgorithmNinja", days: 100 },
  { rank: 4, name: "ReactRani", days: 92 },
  { rank: 5, name: "You (Divyanshi)", days: 48, isYou: true },
];

export const completedDays = Array.from({ length: 12 }, (_, i) => i + 1);

export const mentorMessage =
  "Great job on your consistency! You've solved 48 tasks so far. Keep going! You're on the right track to mastering DSA.";

export const dayTask = {
  day: 12,
  title: "Day 12 Task",
  description: "Build a responsive navbar using React and Tailwind",
};
