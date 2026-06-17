import { Problem, DifficultyLevel } from '../../../types/problem';
import { ProblemProgress } from '../../../store/progressStore';

export interface LevelStat {
  level: DifficultyLevel;
  total: number;
  solved: number;
}

export interface DashboardData {
  total: number;
  solvedCount: number;
  attemptedCount: number;
  progressRatio: number;
  /** Recommended next problem (untouched, easiest first). */
  recommended?: Problem;
  /** Most recently attempted-but-unsolved problem. */
  continueProblem?: Problem;
  /** Recently solved problems, newest first. */
  recentSolved: Problem[];
  levelStats: LevelStat[];
}

const LEVELS: DifficultyLevel[] = [0, 1, 2, 3, 4, 5];

export function buildDashboard(
  problems: Problem[],
  progress: Record<string, ProblemProgress>,
): DashboardData {
  const byId = new Map(problems.map((p) => [p.id, p]));

  const solvedEntries = Object.values(progress)
    .filter((p) => p.status === 'solved')
    .sort((a, b) => (b.solvedAt ?? '').localeCompare(a.solvedAt ?? ''));

  const attemptedEntries = Object.values(progress)
    .filter((p) => p.status === 'attempted')
    .sort((a, b) => b.lastAttemptAt.localeCompare(a.lastAttemptAt));

  const solvedIds = new Set(solvedEntries.map((e) => e.problemId));

  const recentSolved = solvedEntries
    .map((e) => byId.get(e.problemId))
    .filter((p): p is Problem => Boolean(p))
    .slice(0, 3);

  const continueProblem = attemptedEntries
    .map((e) => byId.get(e.problemId))
    .find((p): p is Problem => Boolean(p));

  const sortedByLevel = [...problems].sort(
    (a, b) => a.level - b.level || a.id.localeCompare(b.id),
  );
  const recommended =
    sortedByLevel.find((p) => !progress[p.id]) ??
    sortedByLevel.find((p) => !solvedIds.has(p.id));

  const levelStats: LevelStat[] = LEVELS.map((level) => {
    const inLevel = problems.filter((p) => p.level === level);
    return {
      level,
      total: inLevel.length,
      solved: inLevel.filter((p) => solvedIds.has(p.id)).length,
    };
  }).filter((s) => s.total > 0);

  return {
    total: problems.length,
    solvedCount: solvedIds.size,
    attemptedCount: attemptedEntries.length,
    progressRatio: problems.length ? solvedIds.size / problems.length : 0,
    recommended,
    continueProblem,
    recentSolved,
    levelStats,
  };
}
