import { useQuery } from '@tanstack/react-query';
import { conceptService, ConceptFilters } from '../services/conceptService';

export function useConcepts(filters?: ConceptFilters) {
  return useQuery({
    queryKey: ['concepts', filters?.searchQuery, filters?.category],
    queryFn: () => conceptService.getAll(filters),
  });
}

export function useConceptCategories() {
  return useQuery({
    queryKey: ['concept-categories'],
    queryFn: () => conceptService.getCategories(),
    staleTime: Infinity,
  });
}
