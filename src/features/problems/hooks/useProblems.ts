import { useQuery } from '@tanstack/react-query';
import { useProblemFilterStore } from '../../../store/problemFilterStore';
import { problemService } from '../services/problemService';
import { useDebounce } from '../../../hooks/useDebounce';

export function useProblems() {
  const { searchQuery, selectedLevels, selectedCategories } = useProblemFilterStore();
  const debouncedSearch = useDebounce(searchQuery, 300);

  return useQuery({
    queryKey: ['problems', debouncedSearch, selectedLevels, selectedCategories],
    queryFn: () =>
      problemService.getAll({
        searchQuery: debouncedSearch,
        levels: selectedLevels,
        categories: selectedCategories,
      }),
  });
}
