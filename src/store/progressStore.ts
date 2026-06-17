import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ProblemProgress {
  problemId: string;
  status: 'attempted' | 'solved';
  attempts: number;
  solvedAt?: string;
  lastAttemptAt: string;
  savedCode?: string;
}

interface ProgressState {
  progress: Record<string, ProblemProgress>;
  markAttempted: (problemId: string) => void;
  markSolved: (problemId: string) => void;
  saveCode: (problemId: string, code: string) => void;
  getProgress: (problemId: string) => ProblemProgress | undefined;
  getStats: () => { solved: number; attempted: number };
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      progress: {},
      markAttempted: (problemId) => {
        const existing = get().progress[problemId];
        set({
          progress: {
            ...get().progress,
            [problemId]: {
              problemId,
              status: existing?.status === 'solved' ? 'solved' : 'attempted',
              attempts: (existing?.attempts ?? 0) + 1,
              solvedAt: existing?.solvedAt,
              lastAttemptAt: new Date().toISOString(),
            },
          },
        });
      },
      markSolved: (problemId) => {
        const existing = get().progress[problemId];
        set({
          progress: {
            ...get().progress,
            [problemId]: {
              problemId,
              status: 'solved',
              attempts: (existing?.attempts ?? 0) + 1,
              solvedAt: new Date().toISOString(),
              lastAttemptAt: new Date().toISOString(),
            },
          },
        });
      },
      saveCode: (problemId, code) => {
        const existing = get().progress[problemId];
        if (existing) {
          set({
            progress: {
              ...get().progress,
              [problemId]: { ...existing, savedCode: code },
            },
          });
        }
      },
      getProgress: (problemId) => get().progress[problemId],
      getStats: () => {
        const entries = Object.values(get().progress);
        return {
          solved: entries.filter((e) => e.status === 'solved').length,
          attempted: entries.filter((e) => e.status === 'attempted').length,
        };
      },
    }),
    {
      name: '@pycote/progress',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
