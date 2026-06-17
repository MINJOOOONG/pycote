import { DifficultyLevel } from '../types/problem';
import { Colors } from './colors';

interface LevelConfig {
  label: string;
  color: string;
  backgroundColor: string;
  description: string;
}

export const LEVEL_CONFIG: Record<DifficultyLevel, LevelConfig> = {
  0: {
    label: 'Lv.0',
    color: Colors.level0,
    backgroundColor: 'rgba(158, 160, 170, 0.15)',
    description: '입문',
  },
  1: {
    label: 'Lv.1',
    color: Colors.level1,
    backgroundColor: 'rgba(0, 196, 113, 0.15)',
    description: '쉬움',
  },
  2: {
    label: 'Lv.2',
    color: Colors.level2,
    backgroundColor: 'rgba(0, 158, 255, 0.15)',
    description: '보통',
  },
  3: {
    label: 'Lv.3',
    color: Colors.level3,
    backgroundColor: 'rgba(232, 160, 0, 0.15)',
    description: '어려움',
  },
  4: {
    label: 'Lv.4',
    color: Colors.level4,
    backgroundColor: 'rgba(255, 107, 53, 0.15)',
    description: '매우 어려움',
  },
  5: {
    label: 'Lv.5',
    color: Colors.level5,
    backgroundColor: 'rgba(224, 32, 32, 0.15)',
    description: '최고 난이도',
  },
};

export const getLevelConfig = (level: DifficultyLevel): LevelConfig =>
  LEVEL_CONFIG[level];
