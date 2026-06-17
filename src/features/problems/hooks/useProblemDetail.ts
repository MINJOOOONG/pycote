import { useQuery } from '@tanstack/react-query';
import { problemService } from '../services/problemService';

export function useProblemDetail(problemId: string) {
  return useQuery({
    queryKey: ['problem', problemId],
    queryFn: () => problemService.getById(problemId),
    enabled: !!problemId,
  });
}
