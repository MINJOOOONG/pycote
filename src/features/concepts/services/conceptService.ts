import { CONCEPTS } from '../../../data/concepts';
import { Concept, ConceptCategory } from '../../../types/concept';

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export interface ConceptFilters {
  searchQuery?: string;
  category?: ConceptCategory | 'All';
}

export const conceptService = {
  getAll: async (filters?: ConceptFilters): Promise<Concept[]> => {
    await delay(200);
    let result = [...CONCEPTS].sort((a, b) => a.order - b.order);
    if (filters?.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.summary.toLowerCase().includes(q)
      );
    }
    if (filters?.category && filters.category !== 'All') {
      result = result.filter((c) => c.category === filters.category);
    }
    return result;
  },

  getById: async (id: string): Promise<Concept | undefined> => {
    await delay(150);
    return CONCEPTS.find((c) => c.id === id);
  },

  getCategories: async (): Promise<ConceptCategory[]> => {
    await delay(100);
    const cats = new Set(CONCEPTS.map((c) => c.category));
    return Array.from(cats) as ConceptCategory[];
  },
};
