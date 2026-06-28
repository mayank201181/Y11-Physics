"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Header } from "@/components/Header";
import { PaperRunner } from "@/components/PaperRunner";
import { useStore } from "@/lib/store";
import { QUESTION_INDEX } from "@/lib/content";
import type { MCQ, QA } from "@/lib/types";

export default function ReviewPage() {
  const { dueReviewIds } = useStore();
  const ids = dueReviewIds();
  const questions = useMemo(
    () => ids.map((id) => QUESTION_INDEX[id]).filter(Boolean) as (MCQ | QA)[],
    [ids]
  );

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-6">
        <Link href="/" className="text-sm text-[var(--ink-soft)]">← Home</Link>
        <h1 className="text-2xl font-extrabold mt-2 mb-1">🧠 Smart Review</h1>
        <p className="text-[var(--ink-soft)] mb-5">Questions you found tricky, scheduled to come back at just the right moment so they stick.</p>

        {questions.length === 0 ? (
          <div className="card p-8 text-center">
            <div className="text-5xl mb-2">🎉</div>
            <p className="font-bold">Nothing due right now!</p>
            <p className="text-[var(--ink-soft)] text-sm mt-1">Great job. Missed questions reappear here on a spaced schedule (1, 3, 7, 16 then 35 days).</p>
            <Link href="/" className="btn btn-primary mt-4">Back to topics</Link>
          </div>
        ) : (
          <PaperRunner title="Smart Review" questions={questions} mode="review" storageKey="review-session" />
        )}
      </main>
    </>
  );
}
