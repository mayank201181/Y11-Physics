"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";

export function AuthGate() {
  const { login, signup } = useStore();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [familyName, setFamilyName] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const err =
      mode === "login"
        ? await login(familyName.trim(), password)
        : await signup(familyName.trim(), password, pin);
    setBusy(false);
    if (err) setError(err);
  }

  return (
    <div className="min-h-screen grid place-items-center p-4">
      <div className="w-full max-w-md card p-7">
        <div className="text-center mb-5">
          <div className="text-5xl floaty">⚛️</div>
          <h1 className="text-2xl font-extrabold mt-2">Year 11 Physics Lab</h1>
          <p className="text-[var(--ink-soft)] text-sm">Edexcel IGCSE · revise, practise, master</p>
        </div>

        <div className="flex gap-2 mb-5 p-1 rounded-xl bg-black/20">
          {(["login", "signup"] as const).map((m) => (
            <button
              key={m}
              onClick={() => { setMode(m); setError(null); }}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold ${
                mode === m ? "bg-[var(--brand)] text-white" : "text-[var(--ink-soft)]"
              }`}
            >
              {m === "login" ? "Sign in" : "Create family account"}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="text-xs text-[var(--ink-soft)]">Family name</label>
            <input className="input mt-1" value={familyName} onChange={(e) => setFamilyName(e.target.value)} placeholder="e.g. The Rawat Family" required />
          </div>
          <div>
            <label className="text-xs text-[var(--ink-soft)]">Password</label>
            <input className="input mt-1" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" required />
          </div>
          {mode === "signup" && (
            <div>
              <label className="text-xs text-[var(--ink-soft)]">Parent PIN (4–6 digits)</label>
              <input className="input mt-1" inputMode="numeric" value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))} placeholder="Used for the parent dashboard" required />
            </div>
          )}
          {error && <p className="text-sm text-[var(--bad)]">{error}</p>}
          <button className="btn btn-primary w-full justify-center" disabled={busy}>
            {busy ? "Please wait…" : mode === "login" ? "Sign in" : "Create account"}
          </button>
        </form>

        <p className="text-xs text-[var(--ink-soft)] mt-4 text-center">
          One family account holds multiple learner profiles, and progress syncs across every device.
        </p>
      </div>
    </div>
  );
}
