"use client";

import { useParams, useSearchParams, notFound } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { getTopic, mcqPapers, qaPapers, challengeSet } from "@/lib/content";
import { EXTRAS } from "@/lib/extras";
import { Header } from "@/components/Header";
import { GuideView } from "@/components/GuideView";
import { PaperRunner } from "@/components/PaperRunner";
import { ExplorableView } from "@/components/Explorables";
import { Certificate } from "@/components/Certificate";
import { useStore } from "@/lib/store";

type Tab = "guide" | "interactive" | "quiz" | "papers" | "challenge";

export default function TopicPage() {
  return (
    <Suspense fallback={<div className="min-h-screen grid place-items-center text-[var(--ink-soft)]">Loading…</div>}>
      <TopicInner />
    </Suspense>
  );
}

function TopicInner() {
  const params = useParams<{ id: string }>();
  const search = useSearchParams();
  const topic = getTopic(params.id);
  const { heartbeat, progress, activeProfile, markTopicMastered, recordChallenge } = useStore();
  const [tab, setTab] = useState<Tab>("guide");

  useEffect(() => {
    if (search.get("section")) setTab("guide");
    if (search.get("tab")) setTab(search.get("tab") as Tab);
  }, [search]);

  // heartbeat: 1 minute of study time while on this topic
  useEffect(() => {
    if (!topic) return;
    const t = setInterval(() => {
      if (typeof document !== "undefined" && !document.hidden) heartbeat(1, topic.id);
    }, 60000);
    return () => clearInterval(t);
  }, [topic, heartbeat]);

  if (!topic) return notFound();
  const extras = EXTRAS[topic.id];
  const challenge = challengeSet(topic);

  // mastery check: read all guides + earned stars on most questions
  const allRead = topic.guide.every((s) => progress.guidesRead.includes(`${topic.id}#${s.heading}`));
  const qTotal = topic.quiz.mcq.length + topic.quiz.qa.length;
  const qDone = [...topic.quiz.mcq, ...topic.quiz.qa].filter((q) => progress.awarded[q.id]).length;
  const mastered = progress.topicsMastered.includes(topic.id);
  const canMaster = allRead && qTotal > 0 && qDone / qTotal >= 0.8;

  const TABS: { key: Tab; label: string }[] = [
    { key: "guide", label: "📖 Guide" },
    { key: "interactive", label: "🔬 Interactive" },
    { key: "quiz", label: "✏️ Quiz" },
    { key: "papers", label: "📄 Papers" },
    { key: "challenge", label: "🔥 Challenge" },
  ];

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-6">
        <Link href="/" className="text-sm text-[var(--ink-soft)]">← All topics</Link>
        <div className="flex items-center gap-3 mt-2 mb-4">
          <span className="text-4xl">{topic.icon}</span>
          <div>
            <div className="text-xs text-[var(--ink-soft)]">{topic.number}. {topic.code}</div>
            <h1 className="text-2xl font-extrabold">{topic.title}</h1>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
          {TABS.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)} className={`btn whitespace-nowrap ${tab === t.key ? "btn-primary" : "btn-ghost"}`}>{t.label}</button>
          ))}
        </div>

        {tab === "guide" && <GuideView topic={topic} extras={extras} focusSection={search.get("section") || undefined} />}

        {tab === "interactive" && <ExplorableView keys={extras?.interactives || []} />}

        {tab === "quiz" && (
          <PaperRunner
            title={`${topic.title} — Quiz`}
            questions={[...topic.quiz.mcq, ...topic.quiz.qa]}
            mode="quiz"
            topicId={topic.id}
            storageKey={`quiz-${topic.id}`}
          />
        )}

        {tab === "papers" && (
          <div className="space-y-6">
            {mcqPapers(topic).map((p) => (
              <details key={p.id} className="card p-4">
                <summary className="cursor-pointer font-bold">{p.title} <span className="text-[var(--ink-soft)] text-sm">({p.questions.length} questions)</span></summary>
                <div className="mt-4"><PaperRunner title={p.title} questions={p.questions} mode="paper" topicId={topic.id} storageKey={p.id} /></div>
              </details>
            ))}
            {qaPapers(topic).map((p) => (
              <details key={p.id} className="card p-4">
                <summary className="cursor-pointer font-bold">{p.title} <span className="text-[var(--ink-soft)] text-sm">({p.questions.length} questions)</span></summary>
                <div className="mt-4"><PaperRunner title={p.title} questions={p.questions} mode="paper" topicId={topic.id} storageKey={p.id} /></div>
              </details>
            ))}

            {/* mastery + certificate */}
            <div className="card p-5">
              <h3 className="font-bold mb-2">🏆 Mastery</h3>
              {mastered ? (
                <Certificate name={activeProfile?.name || "Physicist"} topicTitle={topic.title} />
              ) : canMaster ? (
                <button className="btn btn-primary" onClick={() => markTopicMastered(topic.id)}>Claim mastery certificate!</button>
              ) : (
                <p className="text-sm text-[var(--ink-soft)]">Read every guide section and answer at least 80% of the questions correctly to earn your mastery certificate. ({Math.round((qDone / Math.max(1, qTotal)) * 100)}% questions done{allRead ? "" : ", guide unfinished"})</p>
              )}
            </div>
          </div>
        )}

        {tab === "challenge" && (
          challenge.length > 0 ? (
            <PaperRunner
              title={`${topic.title} — Timed Challenge`}
              questions={challenge}
              mode="challenge"
              topicId={topic.id}
              timedSeconds={challenge.length * 90}
              onComplete={(s) => recordChallenge(topic.id, s.stars)}
            />
          ) : (
            <p className="text-[var(--ink-soft)]">Challenge questions for this topic are coming soon.</p>
          )
        )}
      </main>
    </>
  );
}
