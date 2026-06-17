import { useQuery } from '@tanstack/react-query';
import { conceptService } from '../services/conceptService';

export function useConceptDetail(conceptId: string) {
  return useQuery({
    queryKey: ['concept', conceptId],
    queryFn: () => conceptService.getById(conceptId),
    enabled: !!conceptId,
  });
}
