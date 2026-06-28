"use client";

import Link from "next/link";
import { useState } from "react";
import { Header } from "@/components/Header";
import { TOPICS } from "@/lib/content";
import type { Profile, ProgressDoc } from "@/lib/profileTypes";

interface Learner { profile: Profile; progress: ProgressDoc | null }

export default function ParentPage() {
  const [pin, setPin] = useState("");
  const [learners, setLearners] = useState<Learner[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function unlock(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const res = await fetch("/api/parent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin }),
    });
    setBusy(false);
    if (!res.ok) { setError((await res.json()).error || "Incorrect PIN."); return; }
    setLearners((await res.json()).learners);
  }

  function last7(p: ProgressDoc): { date: string; minutes: number }[] {
    const out = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
      out.push({ date: d.slice(5), minutes: p.analytics.perDay[d]?.minutes || 0 });
    }
    return out;
  }

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Link href="/" className="text-sm text-[var(--ink-soft)]">← Home</Link>
        <h1 className="text-2xl font-extrabold mt-2 mb-1">👪 Parent Dashboard</h1>
        <p className="text-[var(--ink-soft)] mb-5">Track your child&apos;s revision. PIN-protected.</p>

        {!learners ? (
          <form onSubmit={unlock} className="card p-6 max-w-sm">
            <label className="text-sm text-[var(--ink-soft)]">Enter parent PIN</label>
            <input className="input mt-1" inputMode="numeric" type="password" value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))} autoFocus />
            {error && <p className="text-sm text-[var(--bad)] mt-2">{error}</p>}
            <button className="btn btn-primary mt-3 w-full justify-center" disabled={busy}>Unlock</button>
          </form>
        ) : (
          <div className="space-y-6">
            {learners.length === 0 && <p className="text-[var(--ink-soft)]">No learners yet.</p>}
            {learners.map(({ profile, progress }) => {
              const p = progress;
              const answered = p ? Object.values(p.attempts).reduce((s, a) => s + a.correct + a.wrong, 0) : 0;
              const correct = p ? Object.values(p.attempts).reduce((s, a) => s + a.correct, 0) : 0;
              const acc = answered ? Math.round((correct / answered) * 100) : 0;
              const week = p ? last7(p) : [];
              const maxMin = Math.max(10, ...week.map((w) => w.minutes));
              return (
                <div key={profile.id} className="card p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{profile.avatar}</span>
                    <div>
                      <h2 className="text-xl font-bold">{profile.name}</h2>
                      <p className="text-sm text-[var(--ink-soft)]">⭐ {p?.stars || 0} · 🔥 {p?.streak.count || 0} day streak · 🏆 {p?.topicsMastered.length || 0} mastered</p>
                    </div>
                  </div>

                  {!p ? (
                    <p className="text-[var(--ink-soft)] text-sm">No activity yet.</p>
                  ) : (
                    <>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <Stat label="Total study time" value={`${Math.round(p.analytics.totalMinutes)} min`} />
                        <Stat label="Questions answered" value={`${answered}`} />
                        <Stat label="Accuracy" value={`${acc}%`} />
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2">This week</p>
                        <div className="flex items-end gap-2 h-24">
                          {week.map((w) => (
                            <div key={w.date} className="flex-1 flex flex-col items-center justify-end">
                              <div className="w-full rounded-t bg-[var(--brand)]" style={{ height: `${(w.minutes / maxMin) * 100}%`, minHeight: w.minutes ? 4 : 0 }} title={`${w.minutes} min`} />
                              <span className="text-[10px] text-[var(--ink-soft)] mt-1">{w.date}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2">Per topic</p>
                        <div className="grid sm:grid-cols-2 gap-1.5 text-sm">
                          {TOPICS.map((t) => {
                            const mins = Math.round(p.analytics.perTopicMinutes[t.id] || 0);
                            const done = p.topicsMastered.includes(t.id);
                            return (
                              <div key={t.id} className="flex justify-between rounded-lg bg-black/20 px-2.5 py-1.5">
                                <span>{t.icon} {t.title}</span>
                                <span className="text-[var(--ink-soft)]">{done ? "🏆 " : ""}{mins}m</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <details>
                        <summary className="text-sm font-semibold cursor-pointer">Recent activity</summary>
                        <ul className="text-xs text-[var(--ink-soft)] mt-2 space-y-1 max-h-48 overflow-y-auto">
                          {p.analytics.activity.slice(0, 30).map((a, i) => (
                            <li key={i}>{new Date(a.ts).toLocaleString()} · {a.kind}{a.topicId ? ` · ${a.topicId}` : ""}{a.detail ? ` · ${a.detail}` : ""}</li>
                          ))}
                        </ul>
                      </details>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-black/20 p-3 text-center">
      <div className="text-xl font-extrabold">{value}</div>
      <div className="text-xs text-[var(--ink-soft)]">{label}</div>
    </div>
  );
}
