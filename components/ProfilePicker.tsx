"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";

const AVATARS = ["🧑‍🎓", "👩‍🔬", "👨‍🚀", "🦊", "🐼", "🦉", "🚀", "🌟", "⚡", "🔭", "🧪", "🦄"];

export function ProfilePicker() {
  const { account, selectProfile, createProfile, deleteProfile, logout } = useStore();
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(AVATARS[0]);
  const [busy, setBusy] = useState(false);

  async function add() {
    if (!name.trim()) return;
    setBusy(true);
    await createProfile(name.trim(), avatar);
    setBusy(false);
    setAdding(false);
    setName("");
  }

  return (
    <div className="min-h-screen grid place-items-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold">Who&apos;s studying? 👋</h1>
          <p className="text-[var(--ink-soft)]">{account?.familyName}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {account?.profiles.map((p) => (
            <div key={p.id} className="card p-5 text-center relative group">
              <button onClick={() => selectProfile(p.id)} className="w-full">
                <div className="text-5xl">{p.avatar}</div>
                <div className="font-bold mt-2">{p.name}</div>
              </button>
              <button
                onClick={() => {
                  if (confirm(`Remove ${p.name}? Their progress will be deleted.`)) deleteProfile(p.id);
                }}
                className="absolute top-2 right-2 text-xs text-[var(--ink-soft)] opacity-0 group-hover:opacity-100"
                aria-label={`Delete ${p.name}`}
              >
                ✕
              </button>
            </div>
          ))}

          {!adding && account && account.profiles.length < 8 && (
            <button onClick={() => setAdding(true)} className="card p-5 text-center border-dashed grid place-items-center min-h-[140px]">
              <div className="text-4xl text-[var(--ink-soft)]">＋</div>
              <div className="text-sm text-[var(--ink-soft)] mt-1">Add learner</div>
            </button>
          )}
        </div>

        {adding && (
          <div className="card p-5 mt-4">
            <input className="input mb-3" value={name} onChange={(e) => setName(e.target.value)} placeholder="Learner's name" autoFocus />
            <div className="flex flex-wrap gap-2 mb-3">
              {AVATARS.map((a) => (
                <button key={a} onClick={() => setAvatar(a)} className={`text-2xl p-1.5 rounded-lg ${avatar === a ? "bg-[var(--brand)]" : "bg-black/20"}`}>
                  {a}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button className="btn btn-primary" onClick={add} disabled={busy}>Save</button>
              <button className="btn btn-ghost" onClick={() => setAdding(false)}>Cancel</button>
            </div>
          </div>
        )}

        <div className="text-center mt-6">
          <button onClick={logout} className="text-sm text-[var(--ink-soft)] underline">Sign out</button>
        </div>
      </div>
    </div>
  );
}
