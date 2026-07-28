"use client";

import {
  bind,
  play,
  setEnabled,
  setVolume,
} from "cuelume";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";

const STORAGE_KEY = "portfolio-sounds-enabled";

interface SoundContextValue {
  soundEnabled: boolean;
  toggleSounds: () => void;
}

const SoundContext = createContext<SoundContextValue | null>(null);

export function SoundProvider({ children }: { children: ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const enabled = localStorage.getItem(STORAGE_KEY) !== "false";
    const syncPreference = window.setTimeout(
      () => setSoundEnabled(enabled),
      0,
    );

    setEnabled(enabled);
    setVolume(0.45);
    bind();

    return () => window.clearTimeout(syncPreference);
  }, []);

  const toggleSounds = useCallback(() => {
    const enabled = !soundEnabled;

    if (enabled) {
      setEnabled(true);
      play("toggle");
    } else {
      play("toggle");
      setEnabled(false);
    }

    setSoundEnabled(enabled);
    localStorage.setItem(STORAGE_KEY, String(enabled));
  }, [soundEnabled]);

  return (
    <SoundContext value={{ soundEnabled, toggleSounds }}>
      {children}
    </SoundContext>
  );
}

export function useSounds() {
  const context = useContext(SoundContext);

  if (!context) {
    throw new Error("useSounds must be used within SoundProvider");
  }

  return context;
}
