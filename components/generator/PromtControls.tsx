"use client";

import { type Category, type Difficulty, type Mood } from "@/lib/types";

interface Props {
  category: Category;
  difficulty: Difficulty;
  mood: Mood;
  loading: boolean;
  onCategory: (v: Category) => void;
  onDifficulty: (v: Difficulty) => void;
  onMood: (v: Mood) => void;
  onGenerate: () => void;
}

function ToggleGroup<T extends string>({
  label,
  options,
  value,
  onChange,
  disabled,
}: {
  label: string;
  options: { label: string; value: T }[];
  value: T;
  onChange: (v: T) => void;
  disabled?: boolean;
}) {
  return (
    <div>
      <div
        className="text-[9px] tracking-[0.18em] uppercase mb-2"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            disabled={disabled}
            className="text-xs px-3 py-1.5 rounded-lg border tracking-wider
                       transition-all duration-150 disabled:opacity-50"
            style={{
              backgroundColor:
                value === opt.value
                  ? "var(--accent-subtle)"
                  : "var(--bg-surface)",
              color:
                value === opt.value ? "var(--accent)" : "var(--text-secondary)",
              borderColor:
                value === opt.value ? "var(--border-bright)" : "var(--border)",
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function PromptControls({
  category,
  difficulty,
  mood,
  loading,
  onCategory,
  onDifficulty,
  onMood,
  onGenerate,
}: Props) {
  return (
    <div
      className="rounded-2xl border p-5 mb-5"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div className="flex flex-col gap-5">
        <ToggleGroup
          label="category"
          value={category}
          onChange={onCategory}
          disabled={loading}
          options={[
            { label: "any", value: "any" },
            { label: "character", value: "character" },
            { label: "historical", value: "historical" },
            { label: "fictional", value: "fictional" },
            { label: "environment", value: "environment" },
          ]}
        />

        <ToggleGroup
          label="difficulty"
          value={difficulty}
          onChange={onDifficulty}
          disabled={loading}
          options={[
            { label: "warm-up", value: "warmup" },
            { label: "study", value: "study" },
            { label: "challenge", value: "challenge" },
          ]}
        />

        <ToggleGroup
          label="mood"
          value={mood}
          onChange={onMood}
          disabled={loading}
          options={[
            { label: "any", value: "any" },
            { label: "dramatic", value: "dramatic" },
            { label: "peaceful", value: "peaceful" },
            { label: "mysterious", value: "mysterious" },
            { label: "playful", value: "playful" },
            { label: "melancholic", value: "melancholic" },
          ]}
        />

        <button
          onClick={onGenerate}
          disabled={loading}
          className="w-full text-sm tracking-widest py-3 rounded-xl
                     transition-all duration-200 disabled:opacity-50
                     disabled:cursor-not-allowed font-medium"
          style={{ backgroundColor: "var(--accent)", color: "#fff" }}
        >
          {loading ? "generating..." : "generate prompt →"}
        </button>
      </div>
    </div>
  );
}
