import { create } from "zustand";

export const useChangeTimer = create((set) => ({
    currentTime: 0,
    incrTimer: (value) => set((state) => ({ currentTime: value})),
  }));