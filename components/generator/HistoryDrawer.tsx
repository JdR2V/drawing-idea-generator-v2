"use client";

import { useState } from "react";
import { type SavedPrompt } from "@/lib/types";

interface Props {
  history: SavedPrompt[];
  onFavourite: (id: string) => void;
  onClearHistory: () => void;
}

export function HistoryDrawer({ history, onFavourite, onClearHistory }: Props) {
  const [open, setOpen] = useState(false);
  const [showFavs, setShowFavs] = useState(false);

  const displayed = showFavs ? history.filter((p) => p.favourite) : history;

  if (history.length === 0) return null;

  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-3
                   transition-colors duration-150"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="flex items-center gap-3">
          <span
            className="text-[9px] tracking-[0.2em] uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            history
          </span>
          <span
            className="text-[9px] px-2 py-0.5 rounded-full border"
            style={{ borderColor: "var(--border)", color: "var(--accent)" }}
          >
            {history.length}
          </span>
        </div>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          {open ? "▲" : "▼"}
        </span>
      </button>

      {/* Content */}
      {open && (
        <div style={{ backgroundColor: "var(--bg-primary)" }}>
          {/* Filter tabs */}
          <div
            className="flex gap-2 px-5 py-3 border-b"
            style={{ borderColor: "var(--border)" }}
          >
            {[
              {
                label: "all",
                active: !showFavs,
                onClick: () => setShowFavs(false),
              },
              {
                label: "★ saved",
                active: showFavs,
                onClick: () => setShowFavs(true),
              },
            ].map((tab) => (
              <button
                key={tab.label}
                onClick={tab.onClick}
                className="text-[10px] tracking-wider px-3 py-1 rounded-full border"
                style={{
                  backgroundColor: tab.active
                    ? "var(--accent-subtle)"
                    : "transparent",
                  color: tab.active ? "var(--accent)" : "var(--text-muted)",
                  borderColor: tab.active
                    ? "var(--border-bright)"
                    : "var(--border)",
                }}
              >
                {tab.label}
              </button>
            ))}
            <button
              onClick={onClearHistory}
              className="text-[10px] tracking-wider ml-auto"
              style={{ color: "var(--text-muted)" }}
            >
              clear
            </button>
          </div>

          {/* Prompt list */}
          <div className="max-h-64 overflow-y-auto">
            {displayed.length === 0 ? (
              <div
                className="px-5 py-6 text-center text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                {showFavs ? "no saved prompts yet" : "no history yet"}
              </div>
            ) : (
              displayed.map((p) => (
                <div
                  key={p.id}
                  className="flex items-start gap-3 px-5 py-3 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p
                    className="flex-1 text-xs leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {p.prompt}
                  </p>
                  <button
                    onClick={() => onFavourite(p.id)}
                    className="flex-shrink-0 text-sm mt-0.5"
                    style={{
                      color: p.favourite
                        ? "var(--accent)"
                        : "var(--text-muted)",
                    }}
                  >
                    {p.favourite ? "★" : "☆"}
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
