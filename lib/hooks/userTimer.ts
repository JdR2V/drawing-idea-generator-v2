"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export type TimerPreset = 1 | 3 | 5 | "custom";

export type TimerStatus = "idle" | "running" | "paused" | "finished";

export interface TimerState {
  status: TimerStatus;
  remaining: number; // seconds remaining
  total: number; // total seconds for this session
  preset: TimerPreset;
  customMinutes: number;
}

export interface TimerActions {
  selectPreset: (preset: TimerPreset) => void;
  setCustomMinutes: (minutes: number) => void;
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
}

export function useTimer(): TimerState & TimerActions {
  const [preset, setPreset] = useState<TimerPreset>(3);
  const [customMinutes, setCustomMinutes] = useState<number>(10);
  const [status, setStatus] = useState<TimerStatus>("idle");
  const [remaining, setRemaining] = useState<number>(3 * 60);
  const [total, setTotal] = useState<number>(3 * 60);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Compute total seconds from current preset
  function getTotalSeconds(): number {
    if (preset === "custom") return customMinutes * 60;
    return preset * 60;
  }

  // Clear interval helper
  function clearTimer() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  // Tick down every second
  useEffect(() => {
    if (status !== "running") return;

    intervalRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearTimer();
          setStatus("finished");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return clearTimer;
  }, [status]);

  function selectPreset(p: TimerPreset) {
    clearTimer();
    setPreset(p);
    setStatus("idle");
    const secs = p === "custom" ? customMinutes * 60 : p * 60;
    setRemaining(secs);
    setTotal(secs);
  }

  function handleSetCustomMinutes(minutes: number) {
    const clamped = Math.max(1, Math.min(180, minutes));
    setCustomMinutes(clamped);
    if (preset === "custom") {
      const secs = clamped * 60;
      setRemaining(secs);
      setTotal(secs);
    }
  }

  function start() {
    const secs = getTotalSeconds();
    setTotal(secs);
    setRemaining(secs);
    setStatus("running");
  }

  function pause() {
    clearTimer();
    setStatus("paused");
  }
  function resume() {
    setStatus("running");
  }

  function reset() {
    clearTimer();
    const secs = getTotalSeconds();
    setTotal(secs);
    setRemaining(secs);
    setStatus("idle");
  }

  return {
    status,
    remaining,
    total,
    preset,
    customMinutes,
    selectPreset,
    setCustomMinutes: handleSetCustomMinutes,
    start,
    pause,
    resume,
    reset,
  };
}
