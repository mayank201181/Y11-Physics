"use client";

import { useState } from "react";

function Slider({ label, value, set, min, max, step, unit }: { label: string; value: number; set: (n: number) => void; min: number; max: number; step: number; unit?: string }) {
  return (
    <label className="block mb-3">
      <span className="text-sm flex justify-between"><span>{label}</span><span className="font-mono text-[var(--brand-2)]">{value}{unit ? ` ${unit}` : ""}</span></span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(parseFloat(e.target.value))} className="w-full accent-[var(--brand)]" />
    </label>
  );
}

function Result({ children }: { children: React.ReactNode }) {
  return <div className="mt-3 p-3 rounded-xl bg-black/25 text-sm">{children}</div>;
}

// ⚡ Ohm's law circuit lab
export function OhmsLawWidget() {
  const [v, setV] = useState(6);
  const [r, setR] = useState(3);
  const i = v / r;
  const bright = Math.min(1, i / 4);
  return (
    <div>
      <Slider label="Voltage (V)" value={v} set={setV} min={0} max={12} step={0.5} unit="V" />
      <Slider label="Resistance (R)" value={r} set={setR} min={0.5} max={12} step={0.5} unit="Ω" />
      <div className="diagram">
        <svg viewBox="0 0 240 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simple circuit with a cell and a lamp">
          <rect x="20" y="20" width="200" height="70" fill="none" stroke="#334155" strokeWidth="3" rx="6" />
          <line x1="55" y1="20" x2="55" y2="8" stroke="#334155" strokeWidth="3" />
          <line x1="70" y1="20" x2="70" y2="2" stroke="#334155" strokeWidth="5" />
          <circle cx="170" cy="20" r="14" fill={`rgba(251,191,36,${0.15 + bright * 0.85})`} stroke="#b45309" strokeWidth="2" />
          <text x="170" y="24" fontSize="9" textAnchor="middle" fill="#7c2d12">lamp</text>
        </svg>
      </div>
      <Result>
        Using <b>I = V / R</b>: current = {v} / {r} = <b>{i.toFixed(2)} A</b>.<br />
        {i > 3 ? "Lots of current — the lamp glows brightly!" : i < 0.8 ? "Little current — the lamp is dim." : "A moderate current lights the lamp."}
      </Result>
    </div>
  );
}

// 🌊 Wave speed explorer (v = f λ)
export function WaveWidget() {
  const [f, setF] = useState(2);
  const [lambda, setLambda] = useState(3);
  const v = f * lambda;
  const cycles = lambda > 0 ? 240 / (lambda * 12) : 4;
  let path = "M0 30";
  for (let x = 0; x <= 240; x += 2) path += ` L${x} ${30 - 18 * Math.sin((x / 240) * cycles * 2 * Math.PI)}`;
  return (
    <div>
      <Slider label="Frequency (f)" value={f} set={setF} min={0.5} max={8} step={0.5} unit="Hz" />
      <Slider label="Wavelength (λ)" value={lambda} set={setLambda} min={0.5} max={6} step={0.5} unit="m" />
      <div className="diagram">
        <svg viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A wave whose wavelength changes">
          <path d={path} fill="none" stroke="#0ea5e9" strokeWidth="2.5" />
        </svg>
      </div>
      <Result>Using <b>v = f × λ</b>: speed = {f} × {lambda} = <b>{v.toFixed(1)} m/s</b>. Shorter wavelength packs more waves into the same space.</Result>
    </div>
  );
}

// ☢️ Half-life simulator
export function HalfLifeWidget() {
  const [half, setHalf] = useState(5);
  const [time, setTime] = useState(10);
  const fraction = Math.pow(0.5, time / half);
  const remaining = Math.round(fraction * 1000);
  return (
    <div>
      <Slider label="Half-life" value={half} set={setHalf} min={1} max={20} step={1} unit="days" />
      <Slider label="Time elapsed" value={time} set={setTime} min={0} max={60} step={1} unit="days" />
      <div className="diagram">
        <svg viewBox="0 0 240 50" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar showing remaining undecayed nuclei">
          <rect x="10" y="15" width="220" height="20" fill="#e2e8f0" stroke="#94a3b8" />
          <rect x="10" y="15" width={220 * fraction} height="20" fill="#a855f7" />
        </svg>
      </div>
      <Result>After {time} days = {(time / half).toFixed(1)} half-lives, about <b>{remaining}</b> of every 1000 nuclei remain undecayed ({(fraction * 100).toFixed(1)}%).</Result>
    </div>
  );
}

// 🚀 Newton's second law (F = ma)
export function ForceWidget() {
  const [m, setM] = useState(2);
  const [f, setF] = useState(10);
  const a = f / m;
  return (
    <div>
      <Slider label="Force (F)" value={f} set={setF} min={0} max={50} step={1} unit="N" />
      <Slider label="Mass (m)" value={m} set={setM} min={0.5} max={20} step={0.5} unit="kg" />
      <div className="diagram">
        <svg viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A box being pushed, arrow length shows acceleration">
          <rect x="20" y="25" width="30" height="25" fill="#6366f1" />
          <line x1="50" y1="37" x2={Math.min(230, 50 + a * 12)} y2="37" stroke="#ef4444" strokeWidth="3" markerEnd="url(#ar)" />
          <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#ef4444" /></marker></defs>
        </svg>
      </div>
      <Result>Using <b>a = F / m</b>: acceleration = {f} / {m} = <b>{a.toFixed(2)} m/s²</b>. Same force on a heavier object → smaller acceleration.</Result>
    </div>
  );
}

// 💧 Density float/sink
export function DensityWidget() {
  const [obj, setObj] = useState(0.6);
  const fluid = 1.0; // water g/cm³
  const floats = obj < fluid;
  return (
    <div>
      <Slider label="Object density" value={obj} set={setObj} min={0.1} max={2.5} step={0.1} unit="g/cm³" />
      <div className="diagram">
        <svg viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A block floating or sinking in water">
          <rect x="20" y="35" width="200" height="60" fill="#bfdbfe" stroke="#60a5fa" />
          <rect x="100" y={floats ? 22 : 70} width="40" height="25" fill="#92400e" />
        </svg>
      </div>
      <Result>Water is 1.0 g/cm³. Your object is {obj} g/cm³, so it <b>{floats ? "floats" : "sinks"}</b>. {floats ? "Less dense than water floats." : "More dense than water sinks."}</Result>
    </div>
  );
}

// 🔋 Energy store calculator (GPE & KE)
export function EnergyWidget() {
  const [m, setM] = useState(2);
  const [h, setH] = useState(5);
  const [vel, setVel] = useState(4);
  const g = 9.8;
  const gpe = m * g * h;
  const ke = 0.5 * m * vel * vel;
  return (
    <div>
      <Slider label="Mass (m)" value={m} set={setM} min={0.5} max={20} step={0.5} unit="kg" />
      <Slider label="Height (h)" value={h} set={setH} min={0} max={30} step={1} unit="m" />
      <Slider label="Speed (v)" value={vel} set={setVel} min={0} max={20} step={1} unit="m/s" />
      <Result>
        <b>GPE = m g h</b> = {m} × 9.8 × {h} = <b>{gpe.toFixed(0)} J</b><br />
        <b>KE = ½ m v²</b> = 0.5 × {m} × {vel}² = <b>{ke.toFixed(0)} J</b>
      </Result>
    </div>
  );
}

// 🔭 Refraction (Snell's law)
export function RefractionWidget() {
  const [angle, setAngle] = useState(40);
  const n = 1.5; // glass
  const sinR = Math.sin((angle * Math.PI) / 180) / n;
  const refr = (Math.asin(Math.min(1, sinR)) * 180) / Math.PI;
  return (
    <div>
      <Slider label="Angle of incidence" value={angle} set={setAngle} min={0} max={85} step={1} unit="°" />
      <div className="diagram">
        <svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Light ray bending as it enters glass">
          <rect x="0" y="60" width="240" height="60" fill="#dbeafe" />
          <line x1="0" y1="60" x2="240" y2="60" stroke="#1e3a8a" strokeWidth="1" strokeDasharray="4" />
          <line x1="120" y1="10" x2="120" y2="110" stroke="#94a3b8" strokeDasharray="3" />
          <line x1={120 - 90 * Math.sin((angle * Math.PI) / 180)} y1={60 - 90 * Math.cos((angle * Math.PI) / 180)} x2="120" y2="60" stroke="#ef4444" strokeWidth="2.5" />
          <line x1="120" y1="60" x2={120 + 60 * Math.sin((refr * Math.PI) / 180)} y2={60 + 60 * Math.cos((refr * Math.PI) / 180)} stroke="#ef4444" strokeWidth="2.5" />
        </svg>
      </div>
      <Result>Going from air into glass (n = 1.5), a ray at {angle}° refracts to <b>{refr.toFixed(0)}°</b> — it bends <b>towards</b> the normal because it slows down.</Result>
    </div>
  );
}

// 🧲 Transformer (turns ratio)
export function TransformerWidget() {
  const [np, setNp] = useState(100);
  const [ns, setNs] = useState(200);
  const [vp, setVp] = useState(230);
  const vs = (vp * ns) / np;
  return (
    <div>
      <Slider label="Primary turns (Nₚ)" value={np} set={setNp} min={10} max={500} step={10} />
      <Slider label="Secondary turns (Nₛ)" value={ns} set={setNs} min={10} max={500} step={10} />
      <Slider label="Primary voltage (Vₚ)" value={vp} set={setVp} min={1} max={400} step={1} unit="V" />
      <Result>
        Using <b>Vₚ/Vₛ = Nₚ/Nₛ</b>: secondary voltage = <b>{vs.toFixed(1)} V</b>.<br />
        This is a <b>{ns > np ? "step-up" : ns < np ? "step-down" : "1:1"}</b> transformer.
      </Result>
    </div>
  );
}

// 🏃 Speed–distance–time
export function MotionWidget() {
  const [dist, setDist] = useState(100);
  const [time, setTime] = useState(20);
  const speed = dist / time;
  return (
    <div>
      <Slider label="Distance" value={dist} set={setDist} min={1} max={1000} step={1} unit="m" />
      <Slider label="Time" value={time} set={setTime} min={1} max={120} step={1} unit="s" />
      <Result>Using <b>speed = distance / time</b>: speed = {dist} / {time} = <b>{speed.toFixed(2)} m/s</b> ({(speed * 3.6).toFixed(1)} km/h).</Result>
    </div>
  );
}

// 🌌 Orbital speed (v = 2πr / T)
export function OrbitWidget() {
  const [r, setR] = useState(7000);
  const [T, setT] = useState(90);
  const v = (2 * Math.PI * r * 1000) / (T * 60);
  return (
    <div>
      <Slider label="Orbital radius" value={r} set={setR} min={6500} max={42000} step={500} unit="km" />
      <Slider label="Orbital period" value={T} set={setT} min={50} max={1440} step={10} unit="min" />
      <Result>Using <b>v = 2πr / T</b>: orbital speed ≈ <b>{(v / 1000).toFixed(2)} km/s</b>. Higher orbits move more slowly.</Result>
    </div>
  );
}

// 🌡️ Pressure law (gas) P/T constant
export function GasWidget() {
  const [t1, setT1] = useState(300);
  const [p1, setP1] = useState(100);
  const [t2, setT2] = useState(450);
  const p2 = (p1 * t2) / t1;
  return (
    <div>
      <Slider label="Start temp T₁ (K)" value={t1} set={setT1} min={100} max={600} step={10} unit="K" />
      <Slider label="Start pressure P₁" value={p1} set={setP1} min={50} max={300} step={10} unit="kPa" />
      <Slider label="New temp T₂ (K)" value={t2} set={setT2} min={100} max={800} step={10} unit="K" />
      <Result>At constant volume <b>P/T is constant</b>, so P₂ = P₁ × T₂/T₁ = <b>{p2.toFixed(0)} kPa</b>. Hotter gas → faster particles → more pressure.</Result>
    </div>
  );
}
