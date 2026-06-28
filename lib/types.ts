// Core content types for the Y11 Physics study app (Edexcel IGCSE Physics 4PH1).
// AUDITED CONTENT lives here and in lib/topics/*. Engagement extras are kept
// completely separate in lib/extras/* so content edits never touch answer keys.

export type Difficulty = "warmup" | "core" | "challenge";

/** One worked method for a question (AoPS multi-path solutions). */
export interface Solution {
  label: string; // e.g. "Method 1: using v² = u² + 2as"
  steps: string[]; // each step is a markdown-lite line
}

export interface MCQ {
  id: string; // GLOBALLY UNIQUE, e.g. "fm-mcq-q03"
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  guideRef?: string; // heading of the guide section this relates to
  difficulty?: Difficulty;
  hints?: string[]; // laddered hints (gentle -> key step)
  strategy?: string; // named problem-solving move
}

export interface QA {
  id: string; // GLOBALLY UNIQUE, e.g. "fm-qa-q02"
  question: string;
  marks?: number;
  modelAnswer: string;
  markScheme: string[]; // keyword/point-based mark scheme (used by grader)
  commonError?: string;
  guideRef?: string;
  difficulty?: Difficulty;
  hints?: string[];
  strategy?: string;
  solutions?: Solution[]; // optional multi-method worked solutions
}

export interface Diagram {
  caption?: string;
  svg: string; // inline SVG string (no backticks / ${ } inside)
}

export interface GuideSection {
  heading: string;
  body: string; // markdown-lite (supports **bold**, *italic*, lists, `code`)
  diagrams?: Diagram[];
  keyPoints?: string[];
  thinkDeeper?: string;
  // AoPS additions:
  discovery?: { problem: string; idea: string }; // problem-first opener
  strategies?: string[];
  whyItWorks?: string;
  formulae?: string[]; // key equations for this section
}

export interface FlashCard {
  front: string;
  back: string;
}

export interface LearnSmart {
  bigIdea: string;
  mustKnow: string[];
  keywords: { term: string; definition: string }[];
  flashcards?: FlashCard[];
}

export interface Paper<T> {
  id: string;
  title: string;
  questions: T[];
}

export interface Topic {
  id: string;
  code: string; // notebook code, e.g. "FM"
  number: number; // teaching order 1..11
  title: string;
  subject: string;
  icon: string; // emoji
  color: string; // tailwind-ish accent (hex)
  intro: string;
  guide: GuideSection[];
  learn: LearnSmart;
  quiz: { mcq: MCQ[]; qa: QA[] };
  // Papers are auto-assembled by the content layer from the quiz pools, but a
  // topic may override with hand-curated papers.
  questionBank?: { mcqPapers: Paper<MCQ>[]; qaPapers: Paper<QA>[] };
}

/** Cross-topic comprehensive mock exam. */
export interface ComprehensiveExam {
  mcqPapers: Paper<MCQ>[];
  qaPapers: Paper<QA>[];
}

// ---- Engagement extras (separate from audited content) ----
export interface Experiment {
  title: string;
  youNeed: string[];
  steps: string[];
  theScience: string;
  safety?: string;
}

export interface TopicExtras {
  hook?: string;
  didYouKnow?: string[];
  experiments?: Experiment[];
  bonusDiagrams?: Diagram[];
  interactives?: string[]; // explorable widget keys
}
