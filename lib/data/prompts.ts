// ── Types ─────────────────────────────────────────────────────────────

export type Category = "character" | "historical" | "fictional" | "environment";
export type Difficulty = "warmup" | "study" | "challenge";
export type Mood =
  | "dramatic"
  | "peaceful"
  | "mysterious"
  | "playful"
  | "melancholic";

export interface PromptSeed {
  category: Category;
  subject: string;
  modifiers: string[]; // extra details the engine can add
}

// ── Character Design ──────────────────────────────────────────────────

export const characterSeeds: PromptSeed[] = [
  {
    category: "character",
    subject: "a weary bounty hunter",
    modifiers: [
      "scarred face",
      "mismatched armor",
      "haunted eyes",
      "desert setting",
    ],
  },
  {
    category: "character",
    subject: "a young street alchemist",
    modifiers: [
      "glowing vials",
      "patched coat",
      "rooftop at dusk",
      "curious expression",
    ],
  },
  {
    category: "character",
    subject: "an elderly sea captain",
    modifiers: ["storm-worn", "one glass eye", "compass tattoo", "fog setting"],
  },
  {
    category: "character",
    subject: "a masked court jester",
    modifiers: [
      "bells hidden under rags",
      "sharp eyes",
      "torchlit hall",
      "secret agenda",
    ],
  },
  {
    category: "character",
    subject: "a blind swordmaster",
    modifiers: [
      "serene expression",
      "rain soaked",
      "listening stance",
      "mountain pass",
    ],
  },
  {
    category: "character",
    subject: "a child inventor",
    modifiers: [
      "goggles too big",
      "oil stained hands",
      "cluttered workshop",
      "proud smile",
    ],
  },
  {
    category: "character",
    subject: "a reformed assassin",
    modifiers: [
      "flower market setting",
      "disguised",
      "tense posture",
      "civilian clothes",
    ],
  },
  {
    category: "character",
    subject: "a plague doctor",
    modifiers: [
      "bird mask",
      "candlelit alley",
      "bag of herbs",
      "medieval city",
    ],
  },
  {
    category: "character",
    subject: "a nomadic astronomer",
    modifiers: [
      "star charts",
      "desert night",
      "ancient telescope",
      "weathered hands",
    ],
  },
  {
    category: "character",
    subject: "a disgraced knight",
    modifiers: ["broken oath", "rusted armor", "kneeling", "rainy battlefield"],
  },
  {
    category: "character",
    subject: "a merchant of rare memories",
    modifiers: [
      "glass jars of light",
      "market stall",
      "knowing smile",
      "twilight",
    ],
  },
  {
    category: "character",
    subject: "a cartographer of impossible places",
    modifiers: [
      "ink-stained fingers",
      "floating maps",
      "library setting",
      "obsessed expression",
    ],
  },
];

// ── Historical Icons ──────────────────────────────────────────────────

export const historicalSeeds: PromptSeed[] = [
  {
    category: "historical",
    subject: "Mahatma Gandhi",
    modifiers: [
      "spinning wheel",
      "simple dhoti",
      "peaceful determination",
      "warm light",
    ],
  },
  {
    category: "historical",
    subject: "Abraham Lincoln",
    modifiers: [
      "tall hat",
      "weathered face",
      "candlelit study",
      "deep in thought",
    ],
  },
  {
    category: "historical",
    subject: "Frida Kahlo",
    modifiers: [
      "floral crown",
      "bold gaze",
      "colorful backdrop",
      "self-possessed",
    ],
  },
  {
    category: "historical",
    subject: "Leonardo da Vinci",
    modifiers: [
      "workshop full of inventions",
      "chalk in hand",
      "curious gaze",
      "Renaissance setting",
    ],
  },
  {
    category: "historical",
    subject: "Cleopatra",
    modifiers: [
      "throne room",
      "commanding presence",
      "Nile at sunset",
      "elaborate headdress",
    ],
  },
  {
    category: "historical",
    subject: "Nikola Tesla",
    modifiers: [
      "electrical arcs",
      "late night laboratory",
      "intense focus",
      "coil machines",
    ],
  },
  {
    category: "historical",
    subject: "Marie Curie",
    modifiers: [
      "glowing radium samples",
      "laboratory coat",
      "exhausted but determined",
      "Paris setting",
    ],
  },
  {
    category: "historical",
    subject: "Genghis Khan",
    modifiers: [
      "steppe horizon",
      "battle standard",
      "calculating gaze",
      "on horseback",
    ],
  },
  {
    category: "historical",
    subject: "Ada Lovelace",
    modifiers: [
      "engine diagrams",
      "Victorian study",
      "mathematical notes",
      "evening light",
    ],
  },
  {
    category: "historical",
    subject: "Sun Tzu",
    modifiers: [
      "bamboo forest",
      "scroll in hand",
      "strategic calm",
      "ancient China",
    ],
  },
  {
    category: "historical",
    subject: "Harriet Tubman",
    modifiers: [
      "night setting",
      "North Star visible",
      "determined stride",
      "forest path",
    ],
  },
  {
    category: "historical",
    subject: "Vincent van Gogh",
    modifiers: [
      "paint-covered hands",
      "Arles countryside",
      "swirling sky",
      "wild eyes",
    ],
  },
  {
    category: "historical",
    subject: "Simón Bolívar",
    modifiers: [
      "Andes mountain pass",
      "military uniform",
      "rallying troops",
      "dramatic sky",
    ],
  },
  {
    category: "historical",
    subject: "Hypatia of Alexandria",
    modifiers: [
      "ancient library",
      "geometric diagrams",
      "teaching pose",
      "sunset light",
    ],
  },
];

// ── Fictional Characters ──────────────────────────────────────────────

export const fictionalSeeds: PromptSeed[] = [
  {
    category: "fictional",
    subject: "Sherlock Holmes",
    modifiers: [
      "Baker Street fog",
      "pipe and magnifying glass",
      "deductive gaze",
      "Victorian London",
    ],
  },
  {
    category: "fictional",
    subject: "Elizabeth Bennet",
    modifiers: [
      "Pemberley gardens",
      "wit in her expression",
      "period dress",
      "book in hand",
    ],
  },
  {
    category: "fictional",
    subject: "Gandalf",
    modifiers: [
      "Moria bridge",
      "staff raised",
      "dramatic lighting",
      "ancient power",
    ],
  },
  {
    category: "fictional",
    subject: "Dracula",
    modifiers: [
      "castle battlements",
      "moonlit",
      "commanding presence",
      "shadows swirling",
    ],
  },
  {
    category: "fictional",
    subject: "Hamlet",
    modifiers: [
      "castle at Elsinore",
      "skull in hand",
      "tormented",
      "night setting",
    ],
  },
  {
    category: "fictional",
    subject: "Don Quixote",
    modifiers: [
      "windmill battle",
      "dented armor",
      "Rocinante rearing",
      "golden plains",
    ],
  },
  {
    category: "fictional",
    subject: "Medusa",
    modifiers: [
      "snake hair",
      "ancient Greek setting",
      "powerful stance",
      "stone victims around",
    ],
  },
  {
    category: "fictional",
    subject: "Captain Ahab",
    modifiers: [
      "ship deck in storm",
      "harpoon raised",
      "obsession in his eyes",
      "whale on horizon",
    ],
  },
  {
    category: "fictional",
    subject: "Lady Macbeth",
    modifiers: [
      "candlelit chamber",
      "sleepwalking",
      "guilt expression",
      "castle setting",
    ],
  },
  {
    category: "fictional",
    subject: "Quasimodo",
    modifiers: [
      "Notre Dame rooftop",
      "looking over Paris",
      "longing expression",
      "bell behind him",
    ],
  },
  {
    category: "fictional",
    subject: "Cyrano de Bergerac",
    modifiers: [
      "dueling pose",
      "moonlit balcony",
      "theatrical flair",
      "17th century Paris",
    ],
  },
  {
    category: "fictional",
    subject: "The Count of Monte Cristo",
    modifiers: [
      "Chateau d'If cliff",
      "cape in wind",
      "revenge and sorrow",
      "sea at night",
    ],
  },
  {
    category: "fictional",
    subject: "Robinson Crusoe",
    modifiers: [
      "tropical beach",
      "makeshift tools",
      "scanning the horizon",
      "weathered survival",
    ],
  },
  {
    category: "fictional",
    subject: "Jekyll and Hyde",
    modifiers: [
      "transformation moment",
      "mirror reflection",
      "Victorian laboratory",
      "dual nature",
    ],
  },
];

// ── Environments ──────────────────────────────────────────────────────

export const environmentSeeds: PromptSeed[] = [
  {
    category: "environment",
    subject: "a sunken cathedral",
    modifiers: [
      "light through stained glass",
      "fish swimming through nave",
      "silent and eerie",
    ],
  },
  {
    category: "environment",
    subject: "a market on a moving glacier",
    modifiers: [
      "traders in thick furs",
      "ice fog",
      "lanterns swaying",
      "crevasse nearby",
    ],
  },
  {
    category: "environment",
    subject: "a forest where the trees grow from thin to thick",
    modifiers: [
      "roots in the sky",
      "canopy below",
      "disorienting light",
      "strange birds",
    ],
  },
  {
    category: "environment",
    subject: "an abandoned space elevator",
    modifiers: [
      "vines reclaiming steel",
      "cloud level view",
      "silent machinery",
      "golden hour",
    ],
  },
  {
    category: "environment",
    subject: "a desert of broken hourglasses",
    modifiers: [
      "sand spilling everywhere",
      "time motif",
      "sunset palette",
      "lone wanderer",
    ],
  },
  {
    category: "environment",
    subject: "a city built inside a storm cloud",
    modifiers: [
      "lightning as streets",
      "floating platforms",
      "rain upward",
      "electric atmosphere",
    ],
  },
  {
    category: "environment",
    subject: "a lighthouse at the edge of a flat world",
    modifiers: [
      "abyss beyond",
      "keeper watching",
      "stars close enough to touch",
      "wind-worn",
    ],
  },
  {
    category: "environment",
    subject: "an underground river market",
    modifiers: [
      "bioluminescent flora",
      "cave ceiling",
      "boats laden with goods",
      "echoing sounds",
    ],
  },
  {
    category: "environment",
    subject: "ruins of a giant mechanical creature",
    modifiers: [
      "people living inside its ribs",
      "steam still escaping",
      "jungle reclaiming it",
    ],
  },
  {
    category: "environment",
    subject: "a library that rearranges itself at night",
    modifiers: [
      "books mid-flight",
      "moonlight through dome",
      "lone reader",
      "dust and shadows",
    ],
  },
  {
    category: "environment",
    subject: "a port town on the back of a sea turtle",
    modifiers: [
      "curved horizon",
      "anchor chains into the ocean",
      "normal life on impossible ground",
    ],
  },
  {
    category: "environment",
    subject: "a graveyard where the headstones are doors",
    modifiers: [
      "light under some doors",
      "fog",
      "caretaker with keys",
      "twilight",
    ],
  },
];

// ── All seeds combined ────────────────────────────────────────────────

export const allSeeds: PromptSeed[] = [
  ...characterSeeds,
  ...historicalSeeds,
  ...fictionalSeeds,
  ...environmentSeeds,
];

// ── Difficulty descriptors ────────────────────────────────────────────

export const difficultyDescriptors: Record<Difficulty, string[]> = {
  warmup: [
    "Focus on basic shapes and silhouette only.",
    "Quick gesture — capture the energy, not the detail.",
    "Thumbnail only — no larger than a playing card.",
    "Loose lines welcome. Speed over accuracy.",
  ],
  study: [
    "Include light and shadow.",
    "Pay attention to proportions.",
    "Add at least one detailed element.",
    "Consider the background even if you leave it minimal.",
  ],
  challenge: [
    "Full composition with foreground, midground, and background.",
    "Include at least three light sources.",
    "Render textures: fabric, skin, metal, or stone.",
    "Tell a story — the viewer should wonder what happens next.",
  ],
};

// ── Mood descriptors ──────────────────────────────────────────────────

export const moodDescriptors: Record<Mood, string[]> = {
  dramatic: [
    "High contrast lighting.",
    "Strong diagonals in the composition.",
    "Tension in the pose or scene.",
  ],
  peaceful: [
    "Soft diffused light.",
    "Open space in the composition.",
    "A sense of stillness.",
  ],
  mysterious: [
    "Deep shadows with hidden details.",
    "An unanswered question in the image.",
    "Fog, smoke, or obscured elements.",
  ],
  playful: [
    "Unexpected scale relationships.",
    "Bright accents against the moodier palette.",
    "A hint of movement or action.",
  ],
  melancholic: [
    "Fading light — dusk or dawn.",
    "Isolation or distance between subjects.",
    "Something left behind or abandoned.",
  ],
};
