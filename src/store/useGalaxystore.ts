import { create } from "zustand";

interface GalaxyState {
  paused: boolean;
  setPaused: (value: boolean) => void;
}

export const useGalaxyStore = create<GalaxyState>((set) => ({
  paused: false,
  setPaused: (value) => set({ paused: value }),
}));
