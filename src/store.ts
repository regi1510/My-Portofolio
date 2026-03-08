import { create } from 'zustand';

interface AppState {
  appState: 'zero-state' | 'bento-sphere' | 'project-view';
  setAppState: (state: 'zero-state' | 'bento-sphere' | 'project-view') => void;
  cursorPosition: [number, number];
  setCursorPosition: (pos: [number, number]) => void;
  scrollVelocity: number;
  setScrollVelocity: (vel: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  appState: 'zero-state',
  setAppState: (state) => set({ appState: state }),
  cursorPosition: [0, 0],
  setCursorPosition: (pos) => set({ cursorPosition: pos }),
  scrollVelocity: 0,
  setScrollVelocity: (vel) => set({ scrollVelocity: vel }),
}));
