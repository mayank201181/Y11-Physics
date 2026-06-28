"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { MCQ, QA } from "@/lib/types";
import { gradeQA, type GradeResult } from "@/lib/grade";
import { useStore } from "@/lib/store";
import { Markdown } from "./Markdown";
import { AskAI } from "./AskAI";

type Q = MCQ | QA;
function isMCQ(q: Q): q is MCQ {
  return Array.isArray((q as MCQ).options);
}

const DIFF_LABEL: Record<string, { t: string; c: string }> = {
  warmup: { t: "Warm-up", c: "#34d399" },
  core: { t: "Core", c: "#60a5fa" },
  challenge: { t: "Challenge", c: "#f472b6" },
};

function baseStars(q: Q): number {
  const d = q.difficulty || "core";
  if (isMCQ(q)) return d === "warmup" ? 1 : d === "core" ? 2 : 3;
  return d === "warmup" ? 2 : d === "core" ? 3 : 4;
}

interface AnswerState {
  done: boolean;
  correct: boolean;
  chosen?: number; // mcq
  written?: string; // qa
  grade?: GradeResult;
  hintsUsed: number;
  starsEarned: number;
}

export function PaperRunner({
  title,
  questions,
  mode,
  topicId,
  storageKey,
  timedSeconds,
  onComplete,
}: {
  title: string;
  questions: Q[];
  mode: "quiz" | "paper" | "challenge" | "review" | "exam";
  topicId?: string;
  storageKey?: string;
  timedSeconds?: number;
  onComplete?: (summary: { correct: number; total: number; stars: number }) => void;
}) {
  const { recordAnswer } = useStore();
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});
  const [revealHints, setRevealHints] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [draft, setDraft] = useState("");
  const [timeLeft, setTimeLeft] = useState(timedSeconds || 0);
  const [finished, setFinished] = useState(false);
  const recorded = useRef<Set<string>>(new Set());

  const q = questions[idx];

  // resume from localStorage
  useEffect(() => {
    if (!storageKey || typeof window === "undefined") return;
    const saved = localStorage.getItem(`y11phys.run.${storageKey}`);
    if (saved) {
      try {
        const p = JSON.parse(saved);
        setAnswers(p.answers || {});
        setIdx(p.idx || 0);
      } catch {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  useEffect(() => {
    if (!storageKey || typeof window === "undefined") return;
    localStorage.setItem(`y11phys.run.${storageKey}`, JSON.stringify({ answers, idx }));
  }, [answers, idx, storageKey]);

  // reset per-question scratch state
  useEffect(() => {
    setRevealHints(0);
    setShowSolution(false);
    setDraft(answers[q?.id]?.written || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  // timer (challenge mode)
  useEffect(() => {
    if (!timedSeconds || finished) return;
    if (timeLeft <= 0) { finish(); return; }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, timedSeconds, finished]);

  const answered = answers[q?.id];

  const summary = useMemo(() => {
    const vals = Object.values(answers);
    return {
      correct: vals.filter((a) => a.correct).length,
      total: questions.length,
      stars: vals.reduce((s, a) => s + a.starsEarned, 0),
    };
  }, [answers, questions.length]);

  function commit(state: AnswerState) {
    setAnswers((prev) => ({ ...prev, [q.id]: state }));
    if (!recorded.current.has(q.id)) {
      recorded.current.add(q.id);
      recordAnswer({
        qid: q.id,
        correct: state.correct,
        stars: state.starsEarned,
        kind: mode === "exam" ? "paper" : (mode as "quiz" | "paper" | "challenge" | "review"),
        topicId,
      });
    }
  }

  function answerMCQ(choice: number) {
    if (answered?.done) return;
    const correct = choice === (q as MCQ).answerIndex;
    const stars = correct ? Math.max(1, baseStars(q) + (revealHints === 0 ? 1 : 0)) : 0;
    commit({ done: true, correct, chosen: choice, hintsUsed: revealHints, starsEarned: stars });
  }

  function checkQA() {
    if (answered?.done) return;
    const grade = gradeQA(q as QA, draft);
    const correct = grade.verdict === "correct";
    let stars = 0;
    if (grade.verdict === "correct") stars = Math.max(1, baseStars(q) + (revealHints === 0 ? 1 : 0));
    else if (grade.verdict === "partial") stars = Math.max(1, baseStars(q) - 1);
    commit({ done: true, correct, written: draft, grade, hintsUsed: revealHints, starsEarned: stars });
    setShowSolution(false);
  }

  function finish() {
    setFinished(true);
    onComplete?.(summary);
    if (storageKey && typeof window !== "undefined") localStorage.removeItem(`y11phys.run.${storageKey}`);
  }

  if (finished) {
    const pct = Math.round((summary.correct / Math.max(1, summary.total)) * 100);
    return (
      <div className="card p-6 text-center">
        <div className="text-5xl mb-2">{pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "💪"}</div>
        <h2 className="text-2xl font-extrabold">Set complete!</h2>
        <p className="text-[var(--ink-soft)] mt-1">You got {summary.correct} of {summary.total} ({pct}%) and earned ⭐ {summary.stars} stars.</p>
        <div className="mt-4 flex gap-2 justify-center">
          {topicId && <Link href={`/topic/${topicId}`} className="btn btn-ghost">Back to topic</Link>}
          <Link href="/" className="btn btn-primary">Home</Link>
        </div>
      </div>
    );
  }

  if (!q) return <p>No questions here yet.</p>;
  const diff = DIFF_LABEL[q.difficulty || "core"];
  const hints = q.hints || [];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <h1 className="text-xl font-extrabold">{title}</h1>
        {timedSeconds != null && (
          <span className={`chip ${timeLeft < 15 ? "text-[var(--bad)]" : ""}`}>⏱️ {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}</span>
        )}
      </div>

      {/* navigator */}
      <div className="flex flex-wrap gap-1.5">
        {questions.map((qq, i) => {
          const a = answers[qq.id];
          const state = a?.done ? (a.correct ? "bg-[var(--good)]" : a.grade?.verdict === "partial" ? "bg-[var(--warn)]" : "bg-[var(--bad)]") : i === idx ? "bg-[var(--brand)]" : "bg-black/30";
          return (
            <button key={qq.id} onClick={() => setIdx(i)} className={`w-7 h-7 rounded-lg text-xs font-bold ${state}`} aria-label={`Question ${i + 1}`}>
              {i + 1}
            </button>
          );
        })}
      </div>

      <div className="card p-5">
        <div className="flex items-center gap-2 mb-3 text-xs">
          <span className="chip">Q{idx + 1} / {questions.length}</span>
          {diff && <span className="chip" style={{ color: diff.c, borderColor: diff.c }}>{diff.t}</span>}
          {q.strategy && <span className="chip">🧭 {q.strategy}</span>}
          {(q as QA).marks ? <span className="chip">{(q as QA).marks} marks</span> : null}
          {q.guideRef && topicId && (
            <Link href={`/topic/${topicId}?section=${encodeURIComponent(q.guideRef)}`} className="chip ml-auto">📖 Guide</Link>
          )}
        </div>

        <p className="font-semibold text-lg mb-4">{q.question}</p>

        {/* MCQ */}
        {isMCQ(q) && (
          <div className="space-y-2">
            {q.options.map((opt, oi) => {
              let cls = "btn-ghost w-full justify-start text-left";
              if (answered?.done) {
                if (oi === q.answerIndex) cls = "w-full justify-start text-left bg-[var(--good)]/25 border border-[var(--good)]";
                else if (oi === answered.chosen) cls = "w-full justify-start text-left bg-[var(--bad)]/25 border border-[var(--bad)]";
                else cls = "btn-ghost w-full justify-start text-left opacity-60";
              }
              return (
                <button key={oi} className={`btn ${cls}`} onClick={() => answerMCQ(oi)} disabled={answered?.done}>
                  <span className="font-bold mr-1">{String.fromCharCode(65 + oi)}.</span> {opt}
                </button>
              );
            })}
          </div>
        )}

        {/* QA */}
        {!isMCQ(q) && (
          <div>
            {!answered?.done ? (
              <>
                <textarea className="input min-h-[120px]" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Write your answer — explain your reasoning…" />
                <button className="btn btn-primary mt-2" onClick={checkQA} disabled={draft.trim().length < 2}>I&apos;ve tried — check my answer</button>
              </>
            ) : (
              <div className="text-sm bg-black/20 rounded-xl p-3 mb-2">
                <span className="text-[var(--ink-soft)] text-xs">Your answer:</span>
                <p className="mt-1 whitespace-pre-wrap">{answered.written}</p>
              </div>
            )}
          </div>
        )}

        {/* hint ladder */}
        {!answered?.done && hints.length > 0 && (
          <div className="mt-4">
            {Array.from({ length: revealHints }).map((_, i) => (
              <div key={i} className="text-sm bg-[var(--brand)]/15 border border-[var(--brand)]/40 rounded-xl p-2.5 mb-2">💡 Hint {i + 1}: {hints[i]}</div>
            ))}
            {revealHints < hints.length && (
              <button className="btn btn-ghost text-sm" onClick={() => setRevealHints((h) => h + 1)}>
                {revealHints === 0 ? "Need a hint?" : "Another hint"} ({hints.length - revealHints} left)
              </button>
            )}
          </div>
        )}

        {/* feedback */}
        {answered?.done && (
          <div className="mt-4 space-y-3">
            {isMCQ(q) ? (
              <div className={`p-3 rounded-xl ${answered.correct ? "bg-[var(--good)]/15" : "bg-[var(--bad)]/15"}`}>
                <p className="font-bold mb-1">{answered.correct ? `✅ Correct! +${answered.starsEarned}⭐` : "❌ Not quite"}</p>
                <Markdown text={q.explanation} className="text-sm" />
              </div>
            ) : (
              <div className={`p-3 rounded-xl ${answered.grade?.verdict === "correct" ? "bg-[var(--good)]/15" : answered.grade?.verdict === "partial" ? "bg-[var(--warn)]/15" : "bg-[var(--bad)]/15"}`}>
                <p className="font-bold mb-1">
                  {answered.grade?.verdict === "correct" ? `✅ Strong answer! +${answered.starsEarned}⭐` : answered.grade?.verdict === "partial" ? `🟡 Partly there +${answered.starsEarned}⭐` : "🔴 Keep working at it"}
                </p>
                <p className="text-xs text-[var(--ink-soft)]">You covered {answered.grade?.hit.length} of {(q as QA).markScheme.length} mark-scheme points. Be honest with yourself comparing to the model answer below.</p>
              </div>
            )}

            {!isMCQ(q) && (
              <details className="card p-3" open>
                <summary className="cursor-pointer font-semibold">Model answer & mark scheme</summary>
                <div className="mt-2">
                  <Markdown text={(q as QA).modelAnswer} className="text-sm" />
                  <ul className="text-sm mt-2 list-disc ml-5 text-[var(--ink-soft)]">
                    {(q as QA).markScheme.map((m, i) => <li key={i}>{m.split("|")[0].trim()}</li>)}
                  </ul>
                  {(q as QA).commonError && <p className="text-xs mt-2 text-[var(--warn)]">⚠️ Common error: {(q as QA).commonError}</p>}
                </div>
              </details>
            )}

            {/* multi-method solutions */}
            {(q as QA).solutions?.length ? (
              <div>
                {!showSolution ? (
                  <button className="btn btn-ghost text-sm" onClick={() => setShowSolution(true)}>Show worked solution(s)</button>
                ) : (
                  <div className="space-y-2">
                    {(q as QA).solutions!.map((s, si) => (
                      <div key={si} className="card p-3">
                        <p className="font-semibold text-sm mb-1">{s.label}</p>
                        <ol className="text-sm list-decimal ml-5 text-[var(--ink-soft)]">
                          {s.steps.map((st, i) => <li key={i}>{st}</li>)}
                        </ol>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* nav buttons */}
      <div className="flex justify-between gap-2">
        <button className="btn btn-ghost" onClick={() => setIdx((i) => Math.max(0, i - 1))} disabled={idx === 0}>← Prev</button>
        {idx < questions.length - 1 ? (
          <button className="btn btn-primary" onClick={() => setIdx((i) => i + 1)}>Next →</button>
        ) : (
          <button className="btn btn-primary" onClick={finish}>Finish ✓</button>
        )}
      </div>

      {topicId && answered?.done && (
        <AskAI context={`Question: ${q.question}`} />
      )}
    </div>
  );
}
