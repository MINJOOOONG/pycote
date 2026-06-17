import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Problem } from '../types/problem';
import { LevelBadge } from './LevelBadge';
import { Card } from './Card';
import { Pill } from './Pill';
import { Colors } from '../constants/colors';
import { FontSize, FontWeight } from '../constants/typography';
import { Spacing } from '../constants/layout';

interface ProblemCardProps {
  problem: Problem;
  onPress: () => void;
  isBookmarked?: boolean;
  onBookmarkPress?: () => void;
  isSolved?: boolean;
}

export function ProblemCard({
  problem,
  onPress,
  isBookmarked = false,
  onBookmarkPress,
  isSolved = false,
}: ProblemCardProps) {
  return (
    <Card onPress={onPress} style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.leftMeta}>
          <LevelBadge level={problem.level} size="sm" />
          {isSolved && (
            <View style={styles.solvedBadge}>
              <Feather name="check" size={11} color={Colors.textInverse} />
            </View>
          )}
        </View>
        <TouchableOpacity
          onPress={onBookmarkPress}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Feather
            name="bookmark"
            size={18}
            color={isBookmarked ? Colors.primary : Colors.textQuaternary}
            style={isBookmarked ? styles.bookmarkActive : undefined}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {problem.title}
      </Text>

      <View style={styles.tagRow}>
        <Pill label={problem.category} color={Colors.textSecondary} backgroundColor={Colors.surfaceElevated} />
        {problem.tags.slice(0, 2).map((tag) => (
          <Pill key={tag} label={`#${tag}`} color={Colors.textTertiary} backgroundColor={Colors.surfaceElevated} />
        ))}
      </View>

      <View style={styles.bottomRow}>
        <View style={styles.metaItem}>
          <Feather name="clock" size={13} color={Colors.textQuaternary} />
          <Text style={styles.metaText}>약 {problem.estimatedMinutes}분</Text>
        </View>
        {problem.acceptRate !== undefined && (
          <View style={styles.metaItem}>
            <Feather name="bar-chart-2" size={13} color={Colors.textQuaternary} />
            <Text style={styles.metaText}>정답률 {problem.acceptRate.toFixed(0)}%</Text>
          </View>
        )}
        {problem.solveCount !== undefined && (
          <View style={styles.metaItem}>
            <Feather name="users" size={13} color={Colors.textQuaternary} />
            <Text style={styles.metaText}>
              {problem.solveCount >= 1000
                ? `${(problem.solveCount / 1000).toFixed(1)}k`
                : problem.solveCount}
            </Text>
          </View>
        )}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: Spacing.xl,
    marginVertical: Spacing.sm,
    gap: Spacing.md,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  solvedBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Colors.success,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookmarkActive: {
    // Feather has no filled bookmark; primary color signals active state
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.semibold,
    color: Colors.textPrimary,
    lineHeight: 23,
    letterSpacing: -0.2,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xs,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.lg,
    flexWrap: 'wrap',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
    fontWeight: FontWeight.medium,
  },
});
