"use client";

import { useState } from "react";
import { type GeneratedPrompt } from "@/lib/types";

interface Props {
  prompt: GeneratedPrompt;
  isFavourite: boolean;
  onFavourite: () => void;
}

const CATEGORY_LABELS: Record<string, string> = {
  character: "✏️ character",
  historical: "🏛️ historical",
  fictional: "📖 fictional",
  environment: "🌍 environment",
};

const DIFFICULTY_LABELS: Record<string, string> = {
  warmup: "warm-up",
  study: "study",
  challenge: "challenge",
};

export function PromptCard({ prompt, isFavourite, onFavourite }: Props) {
  const [copied, setCopied] = useState(false);

  function copyPrompt() {
    navigator.clipboard.writeText(prompt.prompt).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function sharePrompt() {
    const encoded = encodeURIComponent(prompt.prompt);
    const url = `${window.location.origin}?prompt=${encoded}`;
    navigator.clipboard.writeText(url).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div
      className="rounded-2xl border p-6 mb-5 animate-fade-in-up"
      style={{
        borderColor: "var(--border-bright)",
        backgroundColor: "var(--bg-secondary)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      {/* Category + difficulty badges */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <span
          className="text-[10px] tracking-wider px-2.5 py-1 rounded-full border"
          style={{
            borderColor: "var(--border-bright)",
            color: "var(--accent)",
          }}
        >
          {CATEGORY_LABELS[prompt.category] ?? prompt.category}
        </span>
        <span
          className="text-[10px] tracking-wider px-2.5 py-1 rounded-full border"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          {DIFFICULTY_LABELS[prompt.difficulty] ?? prompt.difficulty}
        </span>
        <span
          className="text-[10px] tracking-wider px-2.5 py-1 rounded-full border"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          {prompt.mood}
        </span>
      </div>

      {/* The prompt itself — this is the star */}
      <p
        className="font-display leading-relaxed mb-6"
        style={{
          fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
          fontFamily: "var(--font-display)",
          color: "var(--text-primary)",
          fontStyle: "italic",
        }}
      >
        "{prompt.prompt}"
      </p>

      {/* Actions */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={copyPrompt}
          className="text-xs px-4 py-2 rounded-lg border tracking-wider transition-all duration-150"
          style={{
            backgroundColor: copied
              ? "rgba(217,119,6,0.1)"
              : "var(--bg-surface)",
            color: copied ? "var(--accent)" : "var(--text-secondary)",
            borderColor: copied ? "var(--border-bright)" : "var(--border)",
          }}
        >
          {copied ? "copied ✓" : "copy prompt"}
        </button>

        <button
          onClick={sharePrompt}
          className="text-xs px-4 py-2 rounded-lg border tracking-wider transition-all duration-150"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          share ↗
        </button>

        <button
          onClick={onFavourite}
          className="text-xs px-4 py-2 rounded-lg border tracking-wider transition-all duration-150 ml-auto"
          style={{
            backgroundColor: isFavourite
              ? "rgba(217,119,6,0.1)"
              : "transparent",
            color: isFavourite ? "var(--accent)" : "var(--text-muted)",
            borderColor: isFavourite ? "var(--border-bright)" : "var(--border)",
          }}
        >
          {isFavourite ? "★ saved" : "☆ save"}
        </button>
      </div>
    </div>
  );
}
