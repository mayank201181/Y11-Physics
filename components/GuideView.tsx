"use client";

import { useEffect, useRef, useState } from "react";
import type { Topic, TopicExtras, GuideSection } from "@/lib/types";
import { Markdown } from "./Markdown";
import { DiagramView } from "./Diagram";
import { AskAI } from "./AskAI";
import { useStore } from "@/lib/store";

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function ReadAloud({ text }: { text: string }) {
  const [speaking, setSpeaking] = useState(false);
  function toggle() {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    if (speaking) { window.speechSynthesis.cancel(); setSpeaking(false); return; }
    const u = new SpeechSynthesisUtterance(text.replace(/[*`#]/g, ""));
    u.rate = 0.95;
    u.onend = () => setSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
    setSpeaking(true);
  }
  return (
    <button className="chip" onClick={toggle} aria-label="Read aloud">
      {speaking ? "⏹ Stop" : "🔊 Read aloud"}
    </button>
  );
}

function Section({ topic, section }: { topic: Topic; section: GuideSection }) {
  const { markGuideRead, progress } = useStore();
  const key = `${topic.id}#${section.heading}`;
  const read = progress.guidesRead.includes(key);
  const [showIdea, setShowIdea] = useState(false);

  return (
    <section id={slug(section.heading)} className="card p-5 scroll-mt-20">
      <div className="flex items-center justify-between gap-2 mb-2">
        <h2 className="text-xl font-extrabold">{section.heading}</h2>
        <ReadAloud text={`${section.heading}. ${section.body}`} />
      </div>

      {section.discovery && (
        <div className="rounded-xl border border-[var(--brand)]/40 bg-[var(--brand)]/10 p-3 mb-3">
          <p className="text-xs font-bold text-[var(--brand-2)] mb-1">🤔 THINK FIRST</p>
          <Markdown text={section.discovery.problem} className="text-sm" />
          {!showIdea ? (
            <button className="btn btn-ghost text-sm mt-2" onClick={() => setShowIdea(true)}>I&apos;ve thought about it — reveal the idea</button>
          ) : (
            <div className="mt-2 text-sm border-t border-[var(--line)] pt-2"><Markdown text={section.discovery.idea} /></div>
          )}
        </div>
      )}

      <Markdown text={section.body} />

      {section.formulae && section.formulae.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {section.formulae.map((f, i) => <code key={i} className="px-2 py-1 rounded bg-black/30 text-[#c7d2fe] text-sm">{f}</code>)}
        </div>
      )}

      {section.diagrams?.map((d, i) => <DiagramView key={i} diagram={d} />)}

      {section.keyPoints && section.keyPoints.length > 0 && (
        <div className="mt-3 rounded-xl bg-black/20 p-3">
          <p className="text-xs font-bold text-[var(--ink-soft)] mb-1">KEY POINTS</p>
          <ul className="list-disc ml-5 text-sm space-y-1">{section.keyPoints.map((k, i) => <li key={i}>{k}</li>)}</ul>
        </div>
      )}

      {section.whyItWorks && (
        <div className="mt-3 rounded-xl border-l-4 border-[var(--good)] bg-[var(--good)]/10 p-3 text-sm">
          <span className="font-bold">Why does this work? </span><Markdown text={section.whyItWorks} />
        </div>
      )}

      {section.strategies && section.strategies.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {section.strategies.map((s, i) => <span key={i} className="chip">🧭 {s}</span>)}
        </div>
      )}

      {section.thinkDeeper && (
        <div className="mt-3 rounded-xl border border-[var(--warn)]/40 bg-[var(--warn)]/10 p-3 text-sm">
          <span className="font-bold">🔎 Think deeper: </span>{section.thinkDeeper}
        </div>
      )}

      <button
        className={`btn mt-4 ${read ? "btn-ghost" : "btn-primary"}`}
        onClick={() => markGuideRead(topic.id, section.heading)}
        disabled={read}
      >
        {read ? "✓ Read" : "Mark as read (+1⭐)"}
      </button>
    </section>
  );
}

export function GuideView({ topic, extras, focusSection }: { topic: Topic; extras?: TopicExtras; focusSection?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (focusSection) {
      const el = document.getElementById(slug(focusSection));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [focusSection]);

  return (
    <div ref={containerRef} className="space-y-4">
      {extras?.hook && (
        <div className="rounded-2xl p-4 text-white" style={{ background: `linear-gradient(120deg, ${topic.color}, #4f52e6)` }}>
          <p className="font-semibold">💥 {extras.hook}</p>
        </div>
      )}

      <p className="text-[var(--ink-soft)]">{topic.intro}</p>

      {topic.guide.map((s, i) => <Section key={i} topic={topic} section={s} />)}

      {extras?.didYouKnow && extras.didYouKnow.length > 0 && (
        <div className="card p-5">
          <h3 className="font-bold mb-2">💡 Did you know?</h3>
          <ul className="space-y-2 text-sm">{extras.didYouKnow.map((d, i) => <li key={i} className="rounded-xl bg-black/20 p-2.5">{d}</li>)}</ul>
        </div>
      )}

      {extras?.experiments && extras.experiments.length > 0 && (
        <div className="card p-5">
          <h3 className="font-bold mb-2">🧪 Try this at home</h3>
          {extras.experiments.map((ex, i) => (
            <div key={i} className="rounded-xl bg-black/20 p-3 mb-2">
              <p className="font-semibold">{ex.title}</p>
              <p className="text-xs text-[var(--ink-soft)] mt-1">You need: {ex.youNeed.join(", ")}</p>
              <ol className="list-decimal ml-5 text-sm mt-1">{ex.steps.map((s, j) => <li key={j}>{s}</li>)}</ol>
              <p className="text-sm mt-1"><span className="font-semibold">The science: </span>{ex.theScience}</p>
              {ex.safety && <p className="text-xs text-[var(--warn)] mt-1">⚠️ {ex.safety}</p>}
            </div>
          ))}
        </div>
      )}

      {extras?.bonusDiagrams?.map((d, i) => (
        <div key={i} className="card p-5"><DiagramView diagram={d} /></div>
      ))}

      <AskAI context={`Topic: ${topic.title}. ${topic.intro}`} />
    </div>
  );
}
