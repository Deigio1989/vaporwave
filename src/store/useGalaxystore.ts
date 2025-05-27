import { create } from "zustand";

interface GalaxyState {
  paused: boolean;
  setPaused: (value: boolean) => void;
  scale: number;
  setScale: (value: number) => void;
}

export const useGalaxyStore = create<GalaxyState>((set) => ({
  paused: false,
  setPaused: (value) => set({ paused: value }),
  scale: 1,
  setScale: (value) => set({ scale: value }),
}));
