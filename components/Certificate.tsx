"use client";

export function Certificate({ name, topicTitle }: { name: string; topicTitle: string }) {
  return (
    <div className="card p-8 text-center print:bg-white print:text-black" style={{ borderWidth: 3, borderColor: "#fbbf24" }}>
      <p className="text-sm tracking-widest text-[var(--warn)]">CERTIFICATE OF MASTERY</p>
      <div className="text-5xl my-3">🏆</div>
      <p className="text-[var(--ink-soft)]">This certifies that</p>
      <p className="text-3xl font-extrabold my-1">{name}</p>
      <p className="text-[var(--ink-soft)]">has mastered</p>
      <p className="text-xl font-bold my-1">{topicTitle}</p>
      <p className="text-sm text-[var(--ink-soft)] mt-2">Year 11 Physics · Edexcel IGCSE</p>
      <button onClick={() => typeof window !== "undefined" && window.print()} className="btn btn-primary mt-4 print:hidden">🖨️ Print certificate</button>
    </div>
  );
}
