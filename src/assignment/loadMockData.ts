import raw from "@/data/mockData.json";
import type { MockData } from "./types";

export const mockData = raw as MockData;

/** Read ?scenario=zeroStreak|missedDay|emptyProfile to preview edge cases. */
export function loadMockData(): MockData {
  if (typeof window === "undefined") return mockData;

  const scenario = new URLSearchParams(window.location.search).get("scenario");
  if (!scenario) return mockData;

  const base = structuredClone(mockData);

  if (scenario === "zeroStreak") {
    base.streak = { ...mockData.scenarios.zeroStreak.streak };
    base.progress = { ...mockData.scenarios.zeroStreak.progress };
    base.todayTask = { ...base.todayTask, day: 1, completed: false };
  }

  if (scenario === "missedDay") {
    base.progress = { ...base.progress, ...mockData.scenarios.missedDay.progress };
  }

  if (scenario === "emptyProfile") {
    base.user = { ...mockData.scenarios.emptyProfile.user };
  }

  return base;
}
