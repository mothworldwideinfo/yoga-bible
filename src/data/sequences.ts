export type Sequence = {
  slug: string;
  title: string;
  minutes: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  focus: string;
  premium: boolean;
  poses: string[];
  notes: string;
};

export const sequences: Sequence[] = [
  {
    slug: "morning-ground",
    title: "Morning Ground",
    minutes: 20,
    level: "Beginner",
    focus: "Wake the spine and stand tall",
    premium: false,
    poses: ["mountain", "cat-cow", "downward-dog", "warrior-i", "warrior-ii", "triangle", "child", "corpse"],
    notes: "Move with the breath. Hold standing poses 5 breaths. Rest in Child anytime.",
  },
  {
    slug: "calm-evening",
    title: "Calm Evening",
    minutes: 25,
    level: "Beginner",
    focus: "Downshift before sleep",
    premium: false,
    poses: ["cat-cow", "child", "seated-forward-fold", "bridge", "legs-up-wall", "corpse"],
    notes: "Lights low. Longer holds. Skip Bridge if it feels stimulating.",
  },
  {
    slug: "strong-legs",
    title: "Strong Legs",
    minutes: 35,
    level: "Intermediate",
    focus: "Standing strength and stamina",
    premium: true,
    poses: ["mountain", "chair", "warrior-i", "warrior-ii", "extended-side-angle", "triangle", "warrior-iii", "tree", "child", "corpse"],
    notes: "Two rounds of the standing series.",
  },
  {
    slug: "open-heart",
    title: "Open Heart",
    minutes: 30,
    level: "Intermediate",
    focus: "Backbends with support",
    premium: true,
    poses: ["cat-cow", "cobra", "bridge", "camel", "child", "seated-forward-fold", "corpse"],
    notes: "Warm thoroughly before Camel.",
  },
  {
    slug: "balance-focus",
    title: "Balance & Focus",
    minutes: 30,
    level: "Intermediate",
    focus: "Single-leg stability",
    premium: true,
    poses: ["mountain", "tree", "warrior-iii", "half-moon", "warrior-ii", "child", "corpse"],
    notes: "Practice near a wall.",
  },
  {
    slug: "peak-crow",
    title: "Peak: Crow",
    minutes: 40,
    level: "Advanced",
    focus: "Arm balance preparation",
    premium: true,
    poses: ["cat-cow", "downward-dog", "chair", "boat", "crow", "child", "seated-forward-fold", "corpse"],
    notes: "Warm wrists. Crow is a lean, not a jump.",
  },
];
