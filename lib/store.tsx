"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import type { Account, Profile, ProgressDoc } from "./profileTypes";
import { emptyProgress } from "./profileTypes";
import { scheduleNew, advance, reset, dueItems } from "./srs";
import { QUESTION_INDEX } from "./content";

type Status = "loading" | "anon" | "no-profile" | "ready";

interface PublicAccount {
  id: string;
  familyName: string;
  profiles: Profile[];
}

interface RecordArgs {
  qid: string;
  correct: boolean;
  stars: number; // stars to award if not already earned (we keep the max)
  kind: "quiz" | "paper" | "challenge" | "review";
  topicId?: string;
}

interface StoreValue {
  status: Status;
  account: PublicAccount | null;
  activeProfile: Profile | null;
  progress: ProgressDoc;
  // auth
  signup: (familyName: string, password: string, pin: string) => Promise<string | null>;
  login: (familyName: string, password: string) => Promise<string | null>;
  logout: () => Promise<void>;
  // profiles
  createProfile: (name: string, avatar: string) => Promise<void>;
  updateProfile: (id: string, name: string, avatar: string) => Promise<void>;
  deleteProfile: (id: string) => Promise<void>;
  selectProfile: (id: string) => void;
  switchProfile: () => void;
  // progress
  recordAnswer: (args: RecordArgs) => void;
  markGuideRead: (topicId: string, heading: string) => void;
  recordChallenge: (topicId: string, score: number) => void;
  heartbeat: (minutes: number, topicId?: string) => void;
  setGoal: (minutes: number) => void;
  markTopicMastered: (topicId: string) => void;
  dueReviewIds: () => string[];
}

const StoreContext = createContext<StoreValue | null>(null);

const PROFILE_KEY = "y11phys.activeProfile";
const cacheKey = (pid: string) => `y11phys.progress.${pid}`;

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<Status>("loading");
  const [account, setAccount] = useState<PublicAccount | null>(null);
  const [activeProfile, setActiveProfile] = useState<Profile | null>(null);
  const [progress, setProgress] = useState<ProgressDoc>(emptyProgress(""));
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ---- initial load ----
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" });
        if (!res.ok) {
          setStatus("anon");
          return;
        }
        const data = await res.json();
        if (!data.account) {
          setStatus("anon");
          return;
        }
        setAccount(data.account);
        const savedId =
          typeof window !== "undefined" ? localStorage.getItem(PROFILE_KEY) : null;
        const prof =
          data.account.profiles.find((p: Profile) => p.id === savedId) ||
          (data.account.profiles.length === 1 ? data.account.profiles[0] : null);
        if (prof) {
          await loadProgress(prof);
        } else {
          setStatus(data.account.profiles.length ? "no-profile" : "no-profile");
        }
      } catch {
        setStatus("anon");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadProgress = useCallback(async (prof: Profile) => {
    setActiveProfile(prof);
    if (typeof window !== "undefined") localStorage.setItem(PROFILE_KEY, prof.id);
    // optimistic: load cache first
    let doc = emptyProgress(prof.id);
    if (typeof window !== "undefined") {
      const cached = localStorage.getItem(cacheKey(prof.id));
      if (cached) {
        try {
          doc = { ...doc, ...JSON.parse(cached) };
        } catch {}
      }
    }
    setProgress(doc);
    setStatus("ready");
    try {
      const res = await fetch(`/api/progress?profileId=${prof.id}`, {
        cache: "no-store",
      });
      if (res.ok) {
        const remote = await res.json();
        if (remote.progress && remote.progress.updatedAt >= doc.updatedAt) {
          setProgress({ ...emptyProgress(prof.id), ...remote.progress });
        }
      }
    } catch {}
  }, []);

  // ---- sync (debounced) ----
  const queueSync = useCallback(
    (doc: ProgressDoc) => {
      if (typeof window !== "undefined")
        localStorage.setItem(cacheKey(doc.profileId), JSON.stringify(doc));
      if (syncTimer.current) clearTimeout(syncTimer.current);
      syncTimer.current = setTimeout(async () => {
        try {
          await fetch("/api/progress", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ progress: doc }),
          });
        } catch {}
      }, 1200);
    },
    []
  );

  const mutate = useCallback(
    (fn: (d: ProgressDoc) => ProgressDoc) => {
      setProgress((prev) => {
        const next = fn({ ...prev });
        next.updatedAt = Date.now();
        queueSync(next);
        return next;
      });
    },
    [queueSync]
  );

  // ---- streak helper ----
  function bumpStreak(d: ProgressDoc) {
    const t = today();
    if (d.streak.lastActive === t) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    d.streak = {
      count: d.streak.lastActive === yesterday ? d.streak.count + 1 : 1,
      lastActive: t,
    };
  }

  function logActivity(d: ProgressDoc, entry: ProgressDoc["analytics"]["activity"][number]) {
    d.analytics.activity = [entry, ...d.analytics.activity].slice(0, 80);
  }

  // ---- actions ----
  const recordAnswer = useCallback(
    ({ qid, correct, stars, kind, topicId }: RecordArgs) => {
      mutate((d) => {
        const tally = d.attempts[qid] || { correct: 0, wrong: 0 };
        if (correct) tally.correct += 1;
        else tally.wrong += 1;
        d.attempts[qid] = tally;

        if (correct) {
          const prevAward = d.awarded[qid] || 0;
          if (stars > prevAward) {
            d.stars += stars - prevAward;
            d.awarded[qid] = stars;
          }
        }

        // SRS + missed queue
        const now = Date.now();
        if (correct) {
          if (d.srs[qid]) {
            const nxt = advance(d.srs[qid], now);
            if (nxt) d.srs[qid] = nxt;
            else {
              delete d.srs[qid];
              d.missed = d.missed.filter((m) => m !== qid);
            }
          }
        } else {
          d.srs[qid] = d.srs[qid] ? reset(d.srs[qid], now) : scheduleNew(qid, now);
          if (!d.missed.includes(qid)) d.missed.push(qid);
        }

        bumpStreak(d);
        const day = (d.analytics.perDay[today()] ||= {
          date: today(),
          minutes: 0,
          answered: 0,
          correct: 0,
        });
        day.answered += 1;
        if (correct) day.correct += 1;
        logActivity(d, {
          ts: now,
          kind: kind === "quiz" ? "quiz" : kind === "paper" ? "paper" : kind,
          topicId: topicId || QUESTION_INDEX[qid]?.topicId,
          detail: correct ? "correct" : "wrong",
        });
        return d;
      });
    },
    [mutate]
  );

  const markGuideRead = useCallback(
    (topicId: string, heading: string) => {
      const key = `${topicId}#${heading}`;
      mutate((d) => {
        if (!d.guidesRead.includes(key)) {
          d.guidesRead.push(key);
          d.stars += 1;
          bumpStreak(d);
          logActivity(d, { ts: Date.now(), kind: "guide", topicId, detail: heading });
        }
        return d;
      });
    },
    [mutate]
  );

  const recordChallenge = useCallback(
    (topicId: string, score: number) => {
      mutate((d) => {
        const best = d.challengeBest[topicId] || 0;
        if (score > best) {
          d.challengeBest[topicId] = score;
          d.stars += Math.max(0, score - best);
        }
        bumpStreak(d);
        logActivity(d, { ts: Date.now(), kind: "challenge", topicId, detail: `score ${score}` });
        return d;
      });
    },
    [mutate]
  );

  const heartbeat = useCallback(
    (minutes: number, topicId?: string) => {
      mutate((d) => {
        d.analytics.totalMinutes += minutes;
        const day = (d.analytics.perDay[today()] ||= {
          date: today(),
          minutes: 0,
          answered: 0,
          correct: 0,
        });
        day.minutes += minutes;
        if (topicId)
          d.analytics.perTopicMinutes[topicId] =
            (d.analytics.perTopicMinutes[topicId] || 0) + minutes;
        return d;
      });
    },
    [mutate]
  );

  const setGoal = useCallback(
    (minutes: number) => mutate((d) => ((d.goalMinutes = minutes), d)),
    [mutate]
  );

  const markTopicMastered = useCallback(
    (topicId: string) =>
      mutate((d) => {
        if (!d.topicsMastered.includes(topicId)) d.topicsMastered.push(topicId);
        return d;
      }),
    [mutate]
  );

  const dueReviewIds = useCallback(() => dueItems(progress.srs, Date.now()), [progress.srs]);

  // ---- auth ----
  const refreshMe = useCallback(async () => {
    const res = await fetch("/api/auth/me", { cache: "no-store" });
    const data = await res.json();
    setAccount(data.account || null);
    return data.account as PublicAccount | null;
  }, []);

  const signup = useCallback(
    async (familyName: string, password: string, pin: string) => {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ familyName, password, pin }),
      });
      if (!res.ok) return (await res.json()).error || "Sign up failed";
      const acc = await refreshMe();
      setStatus(acc && acc.profiles.length ? "ready" : "no-profile");
      return null;
    },
    [refreshMe]
  );

  const login = useCallback(
    async (familyName: string, password: string) => {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ familyName, password }),
      });
      if (!res.ok) return (await res.json()).error || "Login failed";
      const acc = await refreshMe();
      if (acc && acc.profiles.length === 1) await loadProgress(acc.profiles[0]);
      else setStatus("no-profile");
      return null;
    },
    [refreshMe, loadProgress]
  );

  const logout = useCallback(async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setAccount(null);
    setActiveProfile(null);
    setProgress(emptyProgress(""));
    setStatus("anon");
    if (typeof window !== "undefined") localStorage.removeItem(PROFILE_KEY);
  }, []);

  const createProfile = useCallback(
    async (name: string, avatar: string) => {
      const res = await fetch("/api/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, avatar }),
      });
      if (res.ok) {
        const acc = await refreshMe();
        const newest = acc?.profiles[acc.profiles.length - 1];
        if (newest) await loadProgress(newest);
      }
    },
    [refreshMe, loadProgress]
  );

  const updateProfile = useCallback(
    async (id: string, name: string, avatar: string) => {
      await fetch("/api/profiles", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name, avatar }),
      });
      const acc = await refreshMe();
      const updated = acc?.profiles.find((p) => p.id === id);
      if (updated && activeProfile?.id === id) setActiveProfile(updated);
    },
    [refreshMe, activeProfile]
  );

  const deleteProfile = useCallback(
    async (id: string) => {
      await fetch("/api/profiles", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const acc = await refreshMe();
      if (activeProfile?.id === id) {
        setActiveProfile(null);
        setStatus("no-profile");
      }
      void acc;
    },
    [refreshMe, activeProfile]
  );

  const selectProfile = useCallback(
    (id: string) => {
      const prof = account?.profiles.find((p) => p.id === id);
      if (prof) loadProgress(prof);
    },
    [account, loadProgress]
  );

  const switchProfile = useCallback(() => {
    setActiveProfile(null);
    setStatus("no-profile");
    if (typeof window !== "undefined") localStorage.removeItem(PROFILE_KEY);
  }, []);

  const value: StoreValue = {
    status,
    account,
    activeProfile,
    progress,
    signup,
    login,
    logout,
    createProfile,
    updateProfile,
    deleteProfile,
    selectProfile,
    switchProfile,
    recordAnswer,
    markGuideRead,
    recordChallenge,
    heartbeat,
    setGoal,
    markTopicMastered,
    dueReviewIds,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreValue {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
