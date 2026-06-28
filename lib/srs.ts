import type { SrsItem } from "./profileTypes";

// Spaced-repetition ladder in days. Wrong answers reset to "due today" (stage 0),
// correct answers advance one rung; graduating after the final rung removes the item.
export const SRS_LADDER = [1, 3, 7, 16, 35];

const DAY = 24 * 60 * 60 * 1000;

export function scheduleNew(qid: string, now: number): SrsItem {
  // A freshly-missed question is due immediately so it surfaces in the next session.
  return { qid, stage: 0, due: now, lastResult: "wrong" };
}

export function advance(item: SrsItem, now: number): SrsItem | null {
  const nextStage = item.stage + 1;
  if (nextStage >= SRS_LADDER.length) return null; // graduated -> remove
  return {
    qid: item.qid,
    stage: nextStage,
    due: now + SRS_LADDER[nextStage] * DAY,
    lastResult: "correct",
  };
}

export function reset(item: SrsItem, now: number): SrsItem {
  return { qid: item.qid, stage: 0, due: now, lastResult: "wrong" };
}

export function dueItems(srs: Record<string, SrsItem>, now: number): string[] {
  return Object.values(srs)
    .filter((i) => i.due <= now)
    .sort((a, b) => a.due - b.due)
    .map((i) => i.qid);
}
