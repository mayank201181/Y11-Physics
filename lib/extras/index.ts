import type { TopicExtras } from "../types";

// Engagement extras, keyed by topic id. Kept completely separate from the
// audited content in lib/topics/* so answer keys are never touched here.
// (The extras pass enriches these; interactives map to keys in EXPLORABLES_ALL.)

export const EXTRAS: Record<string, TopicExtras> = {
  ht: {
    hook: "A shiny silver teapot and a dull black one hold the same boiling water — but one keeps it hot far longer. Which, and why?",
    interactives: [],
    didYouKnow: [
      "A vacuum flask was invented by physicist James Dewar in 1892 to store liquefied gases — drinks came later!",
      "Thermal cameras 'see' the infrared radiation every warm object emits, even in total darkness.",
    ],
  },
  wv: { hook: "Light from the Sun takes 8 minutes to reach you — but the sound of thunder crawls 1 km every 3 seconds. Why the huge difference?", interactives: ["wave", "refraction"] },
  fm: { hook: "Drop a hammer and a feather on the Moon and they land together. On Earth they don't. What's really going on?", interactives: ["motion", "force"] },
  ce: { hook: "Flick a switch and the light comes on instantly — yet the electrons in the wire drift slower than a snail. How?", interactives: ["ohms-law"] },
  wep: { hook: "A roller-coaster has no engine on the track — so where does all that speed come from at the bottom of the first drop?", interactives: ["energy"] },
  fs: { hook: "Stretch a spring twice as far and it pulls back twice as hard — until, suddenly, it doesn't. What changed?", interactives: [] },
  rp: { hook: "Some atoms are ticking clocks: we can date a 5000-year-old mummy from the carbon in its bones. How?", interactives: ["half-life"] },
  slg: { hook: "Squeeze a sealed syringe of air and it pushes back; do the same with water and it barely budges. Why?", interactives: ["density", "gas"] },
  em: { hook: "Every power station and every phone charger relies on one discovery: move a magnet near a wire and electricity appears. Let's see why.", interactives: ["transformer"] },
  ge: { hook: "The electricity in your plug was made less than a second ago, possibly 300 km away. How does it get to you at exactly the right voltage?", interactives: ["transformer"] },
  ast: { hook: "Every atom in your body heavier than hydrogen was forged inside a star that died billions of years ago. Let's explore the cosmos.", interactives: ["orbit"] },
};
