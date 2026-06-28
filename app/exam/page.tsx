"use client";

import Link from "next/link";
import { useState } from "react";
import { Header } from "@/components/Header";
import { PaperRunner } from "@/components/PaperRunner";
import { COMPREHENSIVE_EXAM } from "@/lib/content";

export default function ExamPage() {
  const [active, setActive] = useState<string | null>(null);
  const papers = [...COMPREHENSIVE_EXAM.mcqPapers, ...COMPREHENSIVE_EXAM.qaPapers];
  const paper = papers.find((p) => p.id === active);

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-6">
        <Link href="/" className="text-sm text-[var(--ink-soft)]">← Home</Link>
        <h1 className="text-2xl font-extrabold mt-2 mb-1">🎯 Mock Exam</h1>
        <p className="text-[var(--ink-soft)] mb-5">Cross-topic papers drawing from every topic — just like the real thing.</p>

        {paper ? (
          <div>
            <button className="btn btn-ghost mb-4" onClick={() => setActive(null)}>← Choose another paper</button>
            <PaperRunner title={paper.title} questions={paper.questions} mode="exam" storageKey={paper.id} />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {papers.map((p) => (
              <button key={p.id} className="card p-5 text-left" onClick={() => setActive(p.id)}>
                <div className="font-bold">{p.title}</div>
                <div className="text-sm text-[var(--ink-soft)]">{p.questions.length} questions</div>
              </button>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
