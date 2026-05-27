"use client";

import { useEffect } from "react";
import { usePromptGenerator } from "@/lib/hooks/usePromptGenerator";
import { useTimer } from "@/lib/hooks/userTimer";
import { PromptControls } from "@/components/generator/PromtControls";
import { PromptCard } from "@/components/generator/PromptCard";
import { HistoryDrawer } from "@/components/generator/HistoryDrawer";
import { TimerDisplay } from "@/components/timer/TimerDisplay";

export default function Home() {
  const pg = usePromptGenerator();
  const timer = useTimer();

  // Read shared prompt from URL on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shared = params.get("prompt");
    if (shared) {
      // Display the shared prompt directly without an API call
      // This is a simplified version — expand as needed
    }
  }, []);

  const isFavourite = pg.current
    ? pg.history.some((h) => h.prompt === pg.current?.prompt && h.favourite)
    : false;

  const currentId = pg.current
    ? (pg.history.find((h) => h.prompt === pg.current?.prompt)?.id ?? "")
    : "";

  return (
    <main className="max-w-2xl mx-auto px-5 pt-16 pb-20">
      {/* ── HEADER ──────────────────────────────────────────────── */}
      <div className="mb-10">
        <div
          className="flex items-center gap-3 mb-4 text-xs tracking-[0.2em] uppercase"
          style={{ color: "var(--accent)" }}
        >
          <div
            className="w-6 h-px"
            style={{
              background: "linear-gradient(90deg, var(--accent), transparent)",
            }}
          />
          drawing challenge tool
        </div>

        <h1
          className="font-display font-bold leading-tight tracking-tight mb-3"
          style={{
            fontSize: "clamp(2rem, 6vw, 3rem)",
            fontFamily: "var(--font-display)",
            color: "var(--text-primary)",
          }}
        >
          Drawing Idea
          <br />
          <em style={{ color: "var(--accent)" }}>Generator</em>
        </h1>

        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Break your art block. Set a timer. Draw something.
          <br />
        </p>
      </div>

      {/* ── CONTROLS ────────────────────────────────────────────── */}
      <PromptControls
        category={pg.category}
        difficulty={pg.difficulty}
        mood={pg.mood}
        loading={pg.loading}
        onCategory={pg.setCategory}
        onDifficulty={pg.setDifficulty}
        onMood={pg.setMood}
        onGenerate={pg.generate}
      />

      {/* ── ERROR ───────────────────────────────────────────────── */}
      {pg.error && (
        <div
          className="rounded-xl border px-4 py-3 mb-5 text-xs"
          style={{
            borderColor: "rgba(239,68,68,0.2)",
            color: "#ef4444",
            backgroundColor: "rgba(239,68,68,0.05)",
          }}
        >
          {pg.error}
        </div>
      )}

      {/* ── PROMPT CARD ─────────────────────────────────────────── */}
      {pg.current && (
        <PromptCard
          prompt={pg.current}
          isFavourite={isFavourite}
          onFavourite={() => pg.toggleFavourite(currentId)}
        />
      )}

      {/* ── TIMER ───────────────────────────────────────────────── */}
      <div className="mb-5">
        <TimerDisplay {...timer} />
      </div>

      {/* ── HISTORY ─────────────────────────────────────────────── */}
      <HistoryDrawer
        history={pg.history}
        onFavourite={pg.toggleFavourite}
        onClearHistory={pg.clearHistory}
      />
    </main>
  );
}
