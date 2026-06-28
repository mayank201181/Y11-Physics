"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/lib/store";
import { rankFor } from "@/lib/ranks";

export function Header() {
  const { progress, activeProfile, switchProfile, logout, dueReviewIds } = useStore();
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const rank = rankFor(progress.stars);
  const due = dueReviewIds().length;

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-[rgba(11,16,32,0.75)] border-b border-[var(--line)]">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 font-extrabold">
          <span className="text-xl">⚛️</span>
          <span className="hidden sm:inline">Physics Lab</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3 text-sm">
          <Link href="/review" className="chip relative" title="Spaced-repetition review">
            🧠 <span className="hidden sm:inline">Review</span>
            {due > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--bad)] text-white rounded-full text-[10px] w-5 h-5 grid place-items-center">{due}</span>
            )}
          </Link>
          <span className="chip" title="Stars earned">⭐ {progress.stars}</span>
          <span className="chip hidden sm:inline-flex" title="Your rank">{rank.emoji} {rank.name}</span>
          {progress.streak.count > 0 && <span className="chip" title="Daily streak">🔥 {progress.streak.count}</span>}

          <div className="relative">
            <button onClick={() => setMenu((m) => !m)} className="text-2xl" aria-label="Profile menu">
              {activeProfile?.avatar || "🧑‍🎓"}
            </button>
            {menu && (
              <div className="absolute right-0 mt-2 w-48 card p-2 text-sm" onMouseLeave={() => setMenu(false)}>
                <div className="px-2 py-1 text-[var(--ink-soft)]">{activeProfile?.name}</div>
                <button className="w-full text-left px-2 py-1.5 rounded hover:bg-white/5" onClick={() => { setMenu(false); switchProfile(); }}>🔄 Switch learner</button>
                <button className="w-full text-left px-2 py-1.5 rounded hover:bg-white/5" onClick={() => { setMenu(false); router.push("/parent"); }}>👪 Parent dashboard</button>
                <button className="w-full text-left px-2 py-1.5 rounded hover:bg-white/5" onClick={() => { setMenu(false); logout(); }}>🚪 Sign out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
