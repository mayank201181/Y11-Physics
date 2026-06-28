"use client";

import {
  OhmsLawWidget, WaveWidget, HalfLifeWidget, ForceWidget, DensityWidget,
  EnergyWidget, RefractionWidget, TransformerWidget, MotionWidget, OrbitWidget, GasWidget,
} from "./InteractiveWidgets";

export interface Explorable {
  key: string;
  title: string;
  blurb: string;
  Component: React.ComponentType;
}

export const EXPLORABLES_ALL: Record<string, Explorable> = {
  "ohms-law": { key: "ohms-law", title: "⚡ Ohm's Law Circuit Lab", blurb: "Change voltage and resistance and watch the current — and the lamp — respond.", Component: OhmsLawWidget },
  wave: { key: "wave", title: "🌊 Wave Speed Explorer", blurb: "See how frequency and wavelength set the speed of a wave.", Component: WaveWidget },
  "half-life": { key: "half-life", title: "☢️ Half-Life Simulator", blurb: "Watch radioactive nuclei decay over time.", Component: HalfLifeWidget },
  force: { key: "force", title: "🚀 Force & Acceleration", blurb: "Push masses with forces and see F = ma in action.", Component: ForceWidget },
  density: { key: "density", title: "💧 Float or Sink?", blurb: "Compare an object's density to water.", Component: DensityWidget },
  energy: { key: "energy", title: "🔋 Energy Store Calculator", blurb: "Calculate gravitational and kinetic energy.", Component: EnergyWidget },
  refraction: { key: "refraction", title: "🔭 Refraction Ray Box", blurb: "Bend light as it enters glass with Snell's law.", Component: RefractionWidget },
  transformer: { key: "transformer", title: "🧲 Transformer Designer", blurb: "Set the turns ratio and see step-up vs step-down.", Component: TransformerWidget },
  motion: { key: "motion", title: "🏃 Speed–Distance–Time", blurb: "Work out speed from distance and time.", Component: MotionWidget },
  orbit: { key: "orbit", title: "🌌 Orbit Speed", blurb: "Explore how orbital radius affects speed.", Component: OrbitWidget },
  gas: { key: "gas", title: "🌡️ Gas Pressure Law", blurb: "Heat a fixed volume of gas and watch the pressure rise.", Component: GasWidget },
};

export function ExplorableView({ keys }: { keys: string[] }) {
  const items = keys.map((k) => EXPLORABLES_ALL[k]).filter(Boolean);
  if (items.length === 0)
    return <p className="text-[var(--ink-soft)]">An interactive widget for this topic is coming soon.</p>;
  return (
    <div className="space-y-5">
      {items.map((ex) => (
        <div key={ex.key} className="card p-5">
          <h3 className="font-bold text-lg">{ex.title}</h3>
          <p className="text-sm text-[var(--ink-soft)] mb-3">{ex.blurb}</p>
          <ex.Component />
        </div>
      ))}
    </div>
  );
}
