export type MockData = {
  user: { name: string; profileComplete: boolean; avatar: string | null };
  streak: { current: number; best: number; freezeTokens: number };
  progress: {
    currentDay: number;
    totalDays: number;
    completedDays: number;
    completionPercent: number;
    missedDay: boolean;
  };
  todayTask: {
    day: number;
    title: string;
    description: string;
    completed: boolean;
  };
  achievements: { id: string; name: string; earned: boolean }[];
  dailyQuote: { text: string; author: string };
  quickLinks: { label: string; path: string }[];
  scenarios: {
    zeroStreak: {
      streak: MockData["streak"];
      progress: MockData["progress"];
    };
    missedDay: { progress: Pick<MockData["progress"], "currentDay" | "totalDays" | "completedDays" | "completionPercent" | "missedDay"> };
    emptyProfile: { user: MockData["user"] };
  };
};
