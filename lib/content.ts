import type { Topic, MCQ, QA, Paper, ComprehensiveExam } from "./types";
import { ht } from "./topics/ht";
import { wv } from "./topics/wv";
import { fm } from "./topics/fm";
import { ce } from "./topics/ce";
import { wep } from "./topics/wep";
import { fs } from "./topics/fs";
import { rp } from "./topics/rp";
import { slg } from "./topics/slg";
import { em } from "./topics/em";
import { ge } from "./topics/ge";
import { ast } from "./topics/ast";

// Teaching order matches the OneNote notebook (1 HT … 11 AST).
export const TOPICS: Topic[] = [ht, wv, fm, ce, wep, fs, rp, slg, em, ge, ast].sort(
  (a, b) => a.number - b.number
);

export function getTopic(id: string): Topic | undefined {
  return TOPICS.find((t) => t.id === id);
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// Auto-assemble papers from each topic's quiz pools (unless the topic overrides).
export function mcqPapers(topic: Topic): Paper<MCQ>[] {
  if (topic.questionBank?.mcqPapers?.length) return topic.questionBank.mcqPapers;
  return chunk(topic.quiz.mcq, 10).map((qs, i) => ({
    id: `${topic.id}-mcq-paper-${i + 1}`,
    title: `${topic.title} — Multiple Choice ${String.fromCharCode(65 + i)}`,
    questions: qs,
  }));
}

export function qaPapers(topic: Topic): Paper<QA>[] {
  if (topic.questionBank?.qaPapers?.length) return topic.questionBank.qaPapers;
  return chunk(topic.quiz.qa, 6).map((qs, i) => ({
    id: `${topic.id}-qa-paper-${i + 1}`,
    title: `${topic.title} — Exam Questions ${String.fromCharCode(65 + i)}`,
    questions: qs,
  }));
}

// Global question index keyed by id — powers review + challenge by id alone.
export interface IndexedMCQ extends MCQ { kind: "mcq"; topicId: string; topicTitle: string }
export interface IndexedQA extends QA { kind: "qa"; topicId: string; topicTitle: string }
export type IndexedQuestion = IndexedMCQ | IndexedQA;

export const QUESTION_INDEX: Record<string, IndexedQuestion> = (() => {
  const idx: Record<string, IndexedQuestion> = {};
  for (const t of TOPICS) {
    for (const q of t.quiz.mcq) idx[q.id] = { ...q, kind: "mcq", topicId: t.id, topicTitle: t.title };
    for (const q of t.quiz.qa) idx[q.id] = { ...q, kind: "qa", topicId: t.id, topicTitle: t.title };
  }
  return idx;
})();

export function challengeSet(topic: Topic): (MCQ | QA)[] {
  return [
    ...topic.quiz.mcq.filter((q) => q.difficulty === "challenge"),
    ...topic.quiz.qa.filter((q) => q.difficulty === "challenge"),
  ];
}

// Deterministic pick (no Math.random at module scope) for the cross-topic exam.
function pickEvenly<T>(arr: T[], n: number): T[] {
  if (arr.length <= n) return arr;
  const out: T[] = [];
  const step = arr.length / n;
  for (let i = 0; i < n; i++) out.push(arr[Math.floor(i * step)]);
  return out;
}

// Cross-topic comprehensive mock exam: a spread of questions from every topic.
export const COMPREHENSIVE_EXAM: ComprehensiveExam = (() => {
  const mcq: MCQ[] = [];
  const qa: QA[] = [];
  for (const t of TOPICS) {
    const core = t.quiz.mcq.filter((q) => q.difficulty !== "challenge");
    mcq.push(...pickEvenly(core.length ? core : t.quiz.mcq, 3));
    const coreQa = t.quiz.qa.filter((q) => q.difficulty !== "challenge");
    qa.push(...pickEvenly(coreQa.length ? coreQa : t.quiz.qa, 1));
  }
  return {
    mcqPapers: chunk(mcq, 15).map((qs, i) => ({
      id: `exam-mcq-${i + 1}`,
      title: `Mock Exam — Multiple Choice Paper ${i + 1}`,
      questions: qs,
    })),
    qaPapers: chunk(qa, 8).map((qs, i) => ({
      id: `exam-qa-${i + 1}`,
      title: `Mock Exam — Written Paper ${i + 1}`,
      questions: qs,
    })),
  };
})();

export const SUBJECT_TITLE = "Year 11 Physics";
export const SUBJECT_SUBTITLE = "Edexcel IGCSE (4PH1)";
