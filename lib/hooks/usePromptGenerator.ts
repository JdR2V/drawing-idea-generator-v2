"use client";

import { useState, useCallback } from "react";
import { nanoid } from "nanoid";
import { generatePrompt } from "@/lib/api";
import {
  type Category,
  type Difficulty,
  type Mood,
  type GeneratedPrompt,
  type SavedPrompt,
} from "@/lib/types";

// Install nanoid for unique IDs:
// npm install nanoid

const HISTORY_KEY = "dig_history";
const FAVOURITE_KEY = "dig_favourites";
const MAX_HISTORY = 20;

function loadFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export function usePromptGenerator() {
  const [category, setCategory] = useState<Category>("any");
  const [difficulty, setDifficulty] = useState<Difficulty>("study");
  const [mood, setMood] = useState<Mood>("any");

  const [current, setCurrent] = useState<GeneratedPrompt | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [history, setHistory] = useState<SavedPrompt[]>(() =>
    loadFromStorage<SavedPrompt[]>(HISTORY_KEY, []),
  );

  const [favourites, setFavourites] = useState<SavedPrompt[]>(() =>
    loadFromStorage<SavedPrompt[]>(FAVOURITE_KEY, []),
  );

  const generate = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await generatePrompt({ category, difficulty, mood });
      setCurrent(result);

      // Add to history (newest first, max 20)
      const saved: SavedPrompt = {
        ...result,
        id: nanoid(8),
        savedAt: Date.now(),
        favourite: false,
      };

      setHistory((prev) => {
        const next = [saved, ...prev].slice(0, MAX_HISTORY);
        saveToStorage(HISTORY_KEY, next);
        return next;
      });
    } catch (err) {
      setError("Could not generate a prompt. Is the API running?");
    } finally {
      setLoading(false);
    }
  }, [category, difficulty, mood]);

  function toggleFavourite(id: string) {
    setHistory((prev) => {
      const next = prev.map((p) =>
        p.id === id ? { ...p, favourite: !p.favourite } : p,
      );
      saveToStorage(HISTORY_KEY, next);

      const favs = next.filter((p) => p.favourite);
      setFavourites(favs);
      saveToStorage(FAVOURITE_KEY, favs);

      return next;
    });
  }

  function clearHistory() {
    setHistory([]);
    saveToStorage(HISTORY_KEY, []);
  }

  return {
    // Controls
    category,
    setCategory,
    difficulty,
    setDifficulty,
    mood,
    setMood,
    // State
    current,
    loading,
    error,
    history,
    favourites,
    // Actions
    generate,
    toggleFavourite,
    clearHistory,
  };
}
