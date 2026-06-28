"use client";

import { useState } from "react";

interface Msg { role: "user" | "assistant"; content: string }

const PRESETS = [
  { label: "Explain simply", prompt: "Explain this topic to me as simply as you can." },
  { label: "Give an example", prompt: "Give me a real-world example of this." },
  { label: "Explain why", prompt: "Explain why this works, not just what it is." },
  { label: "Give me a hint", prompt: "I'm stuck — give me just the next hint, not the answer." },
];

export function AskAI({ context }: { context: string }) {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  async function send(text: string) {
    if (!text.trim() || busy) return;
    const next = [...history, { role: "user" as const, content: text }];
    setHistory(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, context, history }),
      });
      const data = await res.json();
      setHistory([...next, { role: "assistant", content: data.reply || data.error || "Hmm, try again." }]);
    } catch {
      setHistory([...next, { role: "assistant", content: "I couldn't reach the lab — try again in a moment." }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="card p-4">
      <button onClick={() => setOpen((o) => !o)} className="flex items-center gap-2 font-bold w-full">
        <span className="text-xl">🦉</span> Ask Professor Photon
        <span className="ml-auto text-[var(--ink-soft)]">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="mt-3">
          <div className="flex flex-wrap gap-2 mb-3">
            {PRESETS.map((p) => (
              <button key={p.label} className="chip" onClick={() => send(p.prompt)} disabled={busy}>{p.label}</button>
            ))}
          </div>

          {history.length > 0 && (
            <div className="space-y-2 mb-3 max-h-72 overflow-y-auto pr-1">
              {history.map((m, i) => (
                <div key={i} className={`text-sm p-2.5 rounded-xl ${m.role === "user" ? "bg-[var(--brand)]/25 ml-6" : "bg-black/25 mr-6"}`}>
                  <span className="text-xs text-[var(--ink-soft)] block mb-0.5">{m.role === "user" ? "You" : "Professor Photon"}</span>
                  {m.content}
                </div>
              ))}
              {busy && <div className="text-sm text-[var(--ink-soft)]">Professor Photon is thinking…</div>}
            </div>
          )}

          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2">
            <input className="input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask anything about physics…" />
            <button className="btn btn-primary" disabled={busy}>Ask</button>
          </form>
          <p className="text-[11px] text-[var(--ink-soft)] mt-2">Professor Photon gives hints, not full answers — so you do the thinking! 💡</p>
        </div>
      )}
    </div>
  );
}
