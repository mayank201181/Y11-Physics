"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";

export function Mascot() {
  const { progress, dueReviewIds, activeProfile } = useStore();
  const [open, setOpen] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !activeProfile) return null;

  const due = dueReviewIds().length;
  const todayKey = new Date().toISOString().slice(0, 10);
  const minsToday = progress.analytics.perDay[todayKey]?.minutes || 0;
  const goal = progress.goalMinutes || 20;

  let msg = "Ready to learn some physics? Pick a topic to begin! 🚀";
  if (due > 0) msg = `You have ${due} review question${due > 1 ? "s" : ""} due. A quick review locks them into memory! 🧠`;
  else if (minsToday < goal) msg = `${minsToday}/${goal} min today — ${goal - minsToday} more to hit your daily goal! ⏱️`;
  else if (progress.streak.count > 0) msg = `Goal smashed! 🎉 You're on a ${progress.streak.count}-day streak. Keep it alive!`;

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-[260px]">
      {open && (
        <div className="card p-3 mb-2 text-sm pop relative">
          <button onClick={() => setDismissed(true)} className="absolute top-1 right-2 text-[var(--ink-soft)]" aria-label="Dismiss">✕</button>
          <div className="font-bold mb-1">Professor Photon</div>
          <p className="text-[var(--ink-soft)]">{msg}</p>
        </div>
      )}
      <button onClick={() => setOpen((o) => !o)} className="text-4xl floaty ml-auto block" aria-label="Toggle mascot">
        🦉
      </button>
    </div>
  );
}
