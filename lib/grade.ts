import type { QA } from "./types";

export type GradeVerdict = "correct" | "partial" | "needs-work";

export interface GradeResult {
  verdict: GradeVerdict;
  hit: string[]; // mark-scheme points the learner appears to have covered
  missed: string[];
  ratio: number;
}

// Lightweight keyword overlap grader for written answers. The mark scheme is a
// list of points; each point may contain alternatives separated by " | ".
// We reward METHOD and REASONING coverage, not exact wording.
function normalise(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s+\-./²³°]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function pointMatched(point: string, answer: string): boolean {
  const alts = point.split("|").map((a) => normalise(a)).filter(Boolean);
  for (const alt of alts) {
    // require most significant tokens of the alternative to be present
    const tokens = alt.split(" ").filter((t) => t.length > 2);
    if (tokens.length === 0) continue;
    const present = tokens.filter((t) => answer.includes(t)).length;
    if (present / tokens.length >= 0.6) return true;
  }
  return false;
}

export function gradeQA(qa: QA, rawAnswer: string): GradeResult {
  const answer = normalise(rawAnswer);
  const hit: string[] = [];
  const missed: string[] = [];

  if (answer.length < 3) {
    return { verdict: "needs-work", hit: [], missed: qa.markScheme, ratio: 0 };
  }

  for (const point of qa.markScheme) {
    if (pointMatched(point, answer)) hit.push(point);
    else missed.push(point);
  }

  const ratio = qa.markScheme.length ? hit.length / qa.markScheme.length : 0;
  let verdict: GradeVerdict = "needs-work";
  if (ratio >= 0.75) verdict = "correct";
  else if (ratio >= 0.4) verdict = "partial";

  return { verdict, hit, missed, ratio };
}
