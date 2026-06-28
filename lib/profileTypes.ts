// Account / profile / progress types for cloud sync + parent dashboard.

export interface Account {
  id: string;
  familyName: string;
  passwordHash: string; // scrypt
  passwordSalt: string;
  pinHash: string; // parent PIN (scrypt)
  pinSalt: string;
  createdAt: number;
  profiles: Profile[];
}

export interface Profile {
  id: string;
  name: string;
  avatar: string; // emoji
  createdAt: number;
}

export interface SrsItem {
  qid: string;
  stage: number; // index into the SRS ladder
  due: number; // timestamp (ms) when next due
  lastResult?: "correct" | "wrong";
}

export interface DayStat {
  date: string; // YYYY-MM-DD
  minutes: number;
  answered: number;
  correct: number;
}

export interface ActivityEntry {
  ts: number;
  kind: "guide" | "quiz" | "paper" | "challenge" | "review";
  topicId?: string;
  detail?: string;
}

export interface Analytics {
  totalMinutes: number;
  sessions: number;
  perDay: Record<string, DayStat>;
  perTopicMinutes: Record<string, number>;
  activity: ActivityEntry[]; // capped recent log
}

export interface ProgressDoc {
  profileId: string;
  stars: number;
  awarded: Record<string, number>; // qid -> stars awarded (so we never double-count)
  attempts: Record<string, { correct: number; wrong: number }>; // qid -> tally
  guidesRead: string[]; // section keys "topicId#heading"
  missed: string[]; // qids currently in the review queue
  srs: Record<string, SrsItem>;
  challengeBest: Record<string, number>; // topicId -> best score
  topicsMastered: string[];
  streak: { count: number; lastActive: string };
  goalMinutes: number;
  analytics: Analytics;
  updatedAt: number;
}

export function emptyProgress(profileId: string): ProgressDoc {
  return {
    profileId,
    stars: 0,
    awarded: {},
    attempts: {},
    guidesRead: [],
    missed: [],
    srs: {},
    challengeBest: {},
    topicsMastered: [],
    streak: { count: 0, lastActive: "" },
    goalMinutes: 20,
    analytics: {
      totalMinutes: 0,
      sessions: 0,
      perDay: {},
      perTopicMinutes: {},
      activity: [],
    },
    updatedAt: 0,
  };
}
