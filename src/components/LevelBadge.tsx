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
        { backgroundColor: config.backgroundColor },
        isSmall && styles.badgeSm,
      ]}
    >
      <View style={[styles.dot, { backgroundColor: config.color }]} />
      <Text style={[styles.label, { color: config.color }, isSmall && styles.labelSm]}>
        {config.label}
      </Text>
      {showDescription && !isSmall && (
        <Text style={[styles.description, { color: config.color }]}>
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
    gap: 5,
    paddingHorizontal: Spacing.sm + 2,
    paddingVertical: 5,
    borderRadius: BorderRadius.full,
    alignSelf: 'flex-start',
  },
  badgeSm: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 3,
    gap: 4,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  label: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    letterSpacing: 0.2,
  },
  labelSm: {
    fontSize: FontSize.xs,
  },
  description: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    opacity: 0.85,
  },
});
