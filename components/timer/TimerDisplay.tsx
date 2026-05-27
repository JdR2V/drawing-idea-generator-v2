"use client";

import {
  type TimerState,
  type TimerActions,
  type TimerPreset,
} from "@/lib/hooks/useTimer";

type Props = TimerState & TimerActions;

// Format seconds as MM:SS
function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

// Progress as percentage (0-100)
function progress(remaining: number, total: number): number {
  if (total === 0) return 0;
  return ((total - remaining) / total) * 100;
}

const PRESETS: { label: string; value: TimerPreset }[] = [
  { label: "1 min", value: 1 },
  { label: "3 min", value: 3 },
  { label: "5 min", value: 5 },
  { label: "custom", value: "custom" },
];

export function TimerDisplay(props: Props) {
  const {
    status,
    remaining,
    total,
    preset,
    customMinutes,
    selectPreset,
    setCustomMinutes,
    start,
    pause,
    resume,
    reset,
  } = props;

  const pct = progress(remaining, total);
  const isLow = remaining <= 30 && status === "running";
  const finished = status === "finished";

  return (
    <div
      className={`rounded-2xl border p-5 ${finished ? "timer-flash" : ""}`}
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      {/* Label */}
      <div
        className="text-[9px] tracking-[0.2em] uppercase mb-4 flex items-center gap-3"
        style={{ color: "var(--text-muted)" }}
      >
        <span>challenge timer</span>
        <div
          className="flex-1 h-px"
          style={{ backgroundColor: "var(--border)" }}
        />
      </div>

      {/* Preset selector */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {PRESETS.map((p) => (
          <button
            key={String(p.value)}
            onClick={() => selectPreset(p.value)}
            disabled={status === "running"}
            className="text-xs px-3 py-1.5 rounded-lg border tracking-wider
                       transition-all duration-150 disabled:opacity-40"
            style={{
              backgroundColor:
                preset === p.value
                  ? "var(--accent-subtle)"
                  : "var(--bg-surface)",
              color:
                preset === p.value ? "var(--accent)" : "var(--text-secondary)",
              borderColor:
                preset === p.value ? "var(--border-bright)" : "var(--border)",
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Custom input */}
      {preset === "custom" && (
        <div className="flex items-center gap-2 mb-4">
          <input
            type="number"
            min={1}
            max={180}
            value={customMinutes}
            onChange={(e) => setCustomMinutes(Number(e.target.value))}
            disabled={status === "running"}
            className="w-20 text-center text-sm border rounded-lg px-2 py-1.5
                       bg-transparent outline-none disabled:opacity-40"
            style={{
              borderColor: "var(--border-bright)",
              color: "var(--text-primary)",
            }}
          />
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            minutes
          </span>
        </div>
      )}

      {/* Countdown display */}
      <div className="flex items-center gap-5 mb-4">
        <div
          className={`font-display font-bold tracking-tight ${isLow ? "timer-pulse" : ""}`}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
            color: finished
              ? "var(--accent)"
              : isLow
                ? "#ef4444"
                : "var(--text-primary)",
            fontFamily: "var(--font-display)",
          }}
        >
          {finished ? "done!" : formatTime(remaining)}
        </div>

        {/* Progress ring — simple bar */}
        <div className="flex-1">
          <div
            className="h-1.5 rounded-full overflow-hidden"
            style={{ backgroundColor: "var(--bg-raised)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: `${pct}%`,
                backgroundColor: finished
                  ? "var(--accent)"
                  : isLow
                    ? "#ef4444"
                    : "var(--accent)",
              }}
            />
          </div>
          <div
            className="text-[9px] mt-1 tracking-wider"
            style={{ color: "var(--text-muted)" }}
          >
            {finished
              ? "time is up"
              : status === "idle"
                ? "ready"
                : `${Math.round(pct)}% elapsed`}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        {status === "idle" && (
          <button
            onClick={start}
            className="text-xs px-5 py-2 rounded-lg tracking-wider transition-all duration-150"
            style={{ backgroundColor: "var(--accent)", color: "#fff" }}
          >
            start →
          </button>
        )}
        {status === "running" && (
          <button
            onClick={pause}
            className="text-xs px-5 py-2 rounded-lg border tracking-wider"
            style={{
              borderColor: "var(--border-bright)",
              color: "var(--text-secondary)",
            }}
          >
            pause
          </button>
        )}
        {status === "paused" && (
          <button
            onClick={resume}
            className="text-xs px-5 py-2 rounded-lg tracking-wider"
            style={{ backgroundColor: "var(--accent)", color: "#fff" }}
          >
            resume →
          </button>
        )}
        {status !== "idle" && (
          <button
            onClick={reset}
            className="text-xs px-4 py-2 rounded-lg border tracking-wider"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
          >
            reset
          </button>
        )}
      </div>
    </div>
  );
}
