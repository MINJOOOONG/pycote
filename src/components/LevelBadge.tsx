import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DifficultyLevel } from '../types/problem';
import { getLevelConfig } from '../constants/levels';
import { FontSize, FontWeight } from '../constants/typography';
import { BorderRadius, Spacing } from '../constants/layout';

interface LevelBadgeProps {
  level: DifficultyLevel;
  size?: 'sm' | 'md';
  showDescription?: boolean;
}

export function LevelBadge({ level, size = 'md', showDescription = false }: LevelBadgeProps) {
  const config = getLevelConfig(level);
  const isSmall = size === 'sm';

  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: config.backgroundColor, borderColor: config.color + '40' },
        isSmall && styles.badgeSm,
      ]}
    >
      <Text
        style={[
          styles.label,
          { color: config.color },
          isSmall && styles.labelSm,
        ]}
      >
        {config.label}
      </Text>
      {showDescription && !isSmall && (
        <Text style={[styles.description, { color: config.color + 'CC' }]}>
          {config.description}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  badgeSm: {
    paddingHorizontal: Spacing.xs + 2,
    paddingVertical: 2,
  },
  label: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    letterSpacing: 0.3,
  },
  labelSm: {
    fontSize: FontSize.xs,
  },
  description: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.medium,
  },
});
