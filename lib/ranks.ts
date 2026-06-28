export interface Rank {
  name: string;
  minStars: number;
  emoji: string;
}

// Physics-flavoured rank ladder.
export const RANKS: Rank[] = [
  { name: "Curious Cadet", minStars: 0, emoji: "🌱" },
  { name: "Lab Assistant", minStars: 20, emoji: "🔬" },
  { name: "Junior Physicist", minStars: 60, emoji: "⚙️" },
  { name: "Circuit Wizard", minStars: 120, emoji: "⚡" },
  { name: "Wave Rider", minStars: 200, emoji: "🌊" },
  { name: "Force Master", minStars: 300, emoji: "🚀" },
  { name: "Quantum Explorer", minStars: 430, emoji: "⚛️" },
  { name: "Astrophysicist", minStars: 600, emoji: "🌌" },
  { name: "Newton's Heir", minStars: 800, emoji: "🍎" },
  { name: "Einstein Class", minStars: 1050, emoji: "🧠" },
];

export function rankFor(stars: number): Rank {
  let r = RANKS[0];
  for (const rank of RANKS) if (stars >= rank.minStars) r = rank;
  return r;
}

export function nextRank(stars: number): Rank | null {
  for (const rank of RANKS) if (stars < rank.minStars) return rank;
  return null;
}
