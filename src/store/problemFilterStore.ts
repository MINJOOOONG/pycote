import { create } from 'zustand';
import { DifficultyLevel, ProblemCategory } from '../types/problem';

interface ProblemFilterState {
  searchQuery: string;
  selectedLevels: DifficultyLevel[];
  selectedCategories: ProblemCategory[];
  setSearchQuery: (query: string) => void;
  toggleLevel: (level: DifficultyLevel) => void;
  toggleCategory: (category: ProblemCategory) => void;
  resetFilters: () => void;
}

export const useProblemFilterStore = create<ProblemFilterState>()((set, get) => ({
  searchQuery: '',
  selectedLevels: [],
  selectedCategories: [],
  setSearchQuery: (query) => set({ searchQuery: query }),
  toggleLevel: (level) => {
    const { selectedLevels } = get();
    set({
      selectedLevels: selectedLevels.includes(level)
        ? selectedLevels.filter((l) => l !== level)
        : [...selectedLevels, level],
    });
  },
  toggleCategory: (category) => {
    const { selectedCategories } = get();
    set({
      selectedCategories: selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories, category],
    });
  },
  resetFilters: () => set({ searchQuery: '', selectedLevels: [], selectedCategories: [] }),
}));
