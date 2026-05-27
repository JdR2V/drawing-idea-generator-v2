export type Category =
  | "character"
  | "historical"
  | "fictional"
  | "environment"
  | "any";
export type Difficulty = "warmup" | "study" | "challenge";
export type Mood =
  | "dramatic"
  | "peaceful"
  | "mysterious"
  | "playful"
  | "melancholic"
  | "any";

export interface GenerateRequest {
  category: Category;
  difficulty: Difficulty;
  mood: Mood;
}

export interface GeneratedPrompt {
  prompt: string;
  subject: string;
  category: string;
  modifiers: string[];
  difficulty: string;
  mood: string;
  source: string;
}

export interface SavedPrompt extends GeneratedPrompt {
  id: string; // nanoid for localStorage key
  savedAt: number; // Date.now()
  favourite: boolean;
}
