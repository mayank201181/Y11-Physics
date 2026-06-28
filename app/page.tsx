"use client";

import Link from "next/link";
import { TOPICS, SUBJECT_TITLE, SUBJECT_SUBTITLE } from "@/lib/content";
import { useStore } from "@/lib/store";
import { Header } from "@/components/Header";
import { rankFor, nextRank } from "@/lib/ranks";

export default function Home() {
  const { progress, activeProfile, dueReviewIds, setGoal } = useStore();
  const rank = rankFor(progress.stars);
  const next = nextRank(progress.stars);
  const due = dueReviewIds().length;
  const todayKey = new Date().toISOString().slice(0, 10);
  const mins = progress.analytics.perDay[todayKey]?.minutes || 0;
  const goal = progress.goalMinutes || 20;
  const goalPct = Math.min(100, Math.round((mins / goal) * 100));

  function topicProgress(topicId: string): number {
    const t = TOPICS.find((x) => x.id === topicId)!;
    const total = t.guide.length + t.quiz.mcq.length + t.quiz.qa.length;
    const readCount = progress.guidesRead.filter((g) => g.startsWith(`${topicId}#`)).length;
    const answered = [...t.quiz.mcq, ...t.quiz.qa].filter((q) => progress.awarded[q.id]).length;
    return total ? Math.round(((readCount + answered) / total) * 100) : 0;
  }

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        <div className="card p-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold">Hi {activeProfile?.name}! {activeProfile?.avatar}</h1>
              <p className="text-[var(--ink-soft)]">{SUBJECT_TITLE} · {SUBJECT_SUBTITLE}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-extrabold">⭐ {progress.stars}</div>
              <div className="text-sm text-[var(--ink-soft)]">{rank.emoji} {rank.name}</div>
            </div>
          </div>

          {next && (
            <div className="mt-4">
              <div className="flex justify-between text-xs text-[var(--ink-soft)] mb-1">
                <span>Progress to {next.emoji} {next.name}</span>
                <span>{progress.stars} / {next.minStars}⭐</span>
              </div>
              <div className="h-2.5 rounded-full bg-black/30 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)]" style={{ width: `${Math.min(100, (progress.stars / next.minStars) * 100)}%` }} />
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
            <div className="rounded-xl bg-black/20 p-3 text-center">
              <div className="text-2xl font-extrabold">🔥 {progress.streak.count}</div>
              <div className="text-xs text-[var(--ink-soft)]">day streak</div>
            </div>
            <Link href="/review" className="rounded-xl bg-black/20 p-3 text-center hover:bg-black/30">
              <div className="text-2xl font-extrabold">🧠 {due}</div>
              <div className="text-xs text-[var(--ink-soft)]">reviews due</div>
            </Link>
            <div className="rounded-xl bg-black/20 p-3 text-center">
              <div className="text-2xl font-extrabold">📚 {progress.topicsMastered.length}/{TOPICS.length}</div>
              <div className="text-xs text-[var(--ink-soft)]">topics mastered</div>
            </div>
            <div className="rounded-xl bg-black/20 p-3 text-center">
              <div className="text-2xl font-extrabold">⏱️ {goalPct}%</div>
              <div className="text-xs text-[var(--ink-soft)]">
                daily goal ({mins}/{goal}m)
                <select className="block mx-auto mt-1 bg-transparent text-[var(--ink-soft)] text-xs" value={goal} onChange={(e) => setGoal(parseInt(e.target.value))}>
                  {[10, 15, 20, 30, 45, 60].map((g) => <option key={g} value={g} className="bg-[var(--card)]">{g} min</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold">Topics</h2>
            <Link href="/exam" className="btn btn-ghost text-sm">🎯 Mock Exam</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TOPICS.map((t) => {
              const pct = topicProgress(t.id);
              const mastered = progress.topicsMastered.includes(t.id);
              return (
                <Link key={t.id} href={`/topic/${t.id}`} className="card p-4 hover:scale-[1.02] transition-transform relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-24 h-24 opacity-20 blur-xl" style={{ background: t.color }} />
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{t.icon}</div>
                    <div className="min-w-0">
                      <div className="text-xs text-[var(--ink-soft)]">{t.number}. {t.code} {mastered && "· 🏆"}</div>
                      <div className="font-bold truncate">{t.title}</div>
                    </div>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-black/30 overflow-hidden">
                    <div className="h-full" style={{ width: `${pct}%`, background: t.color }} />
                  </div>
                  <div className="text-xs text-[var(--ink-soft)] mt-1">{pct}% complete</div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
