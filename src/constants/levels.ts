import { DifficultyLevel } from '../types/problem';
import { Colors } from './colors';

interface LevelConfig {
  label: string;
  color: string;
  backgroundColor: string;
  description: string;
}

/** Single source of truth for difficulty display. Never hardcode level colors elsewhere. */
export const LEVEL_CONFIG: Record<DifficultyLevel, LevelConfig> = {
  0: {
    label: 'Lv.0',
    color: Colors.level0,
    backgroundColor: 'rgba(100, 116, 139, 0.10)',
    description: '입문',
  },
  1: {
    label: 'Lv.1',
    color: Colors.level1,
    backgroundColor: 'rgba(22, 163, 74, 0.10)',
    description: '쉬움',
  },
  2: {
    label: 'Lv.2',
    color: Colors.level2,
    backgroundColor: 'rgba(37, 99, 235, 0.10)',
    description: '보통',
  },
  3: {
    label: 'Lv.3',
    color: Colors.level3,
    backgroundColor: 'rgba(217, 119, 6, 0.10)',
    description: '어려움',
  },
  4: {
    label: 'Lv.4',
    color: Colors.level4,
    backgroundColor: 'rgba(234, 88, 12, 0.10)',
    description: '매우 어려움',
  },
  5: {
    label: 'Lv.5',
    color: Colors.level5,
    backgroundColor: 'rgba(220, 38, 38, 0.10)',
    description: '최고 난이도',
  },
};

export const getLevelConfig = (level: DifficultyLevel): LevelConfig =>
  LEVEL_CONFIG[level];
