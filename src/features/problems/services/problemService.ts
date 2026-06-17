import { PROBLEMS } from '../../../data/problems';
import { Problem, DifficultyLevel, ProblemCategory } from '../../../types/problem';

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export interface ProblemFilters {
  searchQuery?: string;
  levels?: DifficultyLevel[];
  categories?: ProblemCategory[];
}

export const problemService = {
  getAll: async (filters?: ProblemFilters): Promise<Problem[]> => {
    await delay(200);
    let result = [...PROBLEMS];
    if (filters?.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
      );
    }
    if (filters?.levels && filters.levels.length > 0) {
      result = result.filter((p) => filters.levels!.includes(p.level));
    }
    if (filters?.categories && filters.categories.length > 0) {
      result = result.filter((p) => filters.categories!.includes(p.category));
    }
    return result;
  },

  getById: async (id: string): Promise<Problem | undefined> => {
    await delay(150);
    return PROBLEMS.find((p) => p.id === id);
  },
};
