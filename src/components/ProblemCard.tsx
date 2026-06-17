import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Problem } from '../types/problem';
import { LevelBadge } from './LevelBadge';
import { Colors } from '../constants/colors';
import { FontSize, FontWeight } from '../constants/typography';
import { Spacing, BorderRadius } from '../constants/layout';

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
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.topRow}>
        <View style={styles.leftMeta}>
          <LevelBadge level={problem.level} size="sm" />
          {isSolved && (
            <View style={styles.solvedBadge}>
              <Text style={styles.solvedText}>✓</Text>
            </View>
          )}
        </View>
        <TouchableOpacity
          onPress={onBookmarkPress}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Text style={[styles.bookmark, isBookmarked && styles.bookmarkActive]}>
            {isBookmarked ? '★' : '☆'}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {problem.title}
      </Text>

      <View style={styles.bottomRow}>
        <View style={styles.categoryTag}>
          <Text style={styles.categoryText}>{problem.category}</Text>
        </View>
        {problem.acceptRate !== undefined && (
          <Text style={styles.acceptRate}>정답률 {problem.acceptRate.toFixed(0)}%</Text>
        )}
        {problem.solveCount !== undefined && (
          <Text style={styles.solveCount}>
            {problem.solveCount >= 1000
              ? `${(problem.solveCount / 1000).toFixed(1)}k`
              : problem.solveCount}
            명
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    marginHorizontal: Spacing.lg,
    marginVertical: Spacing.xs,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    gap: Spacing.sm,
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
  solvedText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: FontWeight.bold,
  },
  bookmark: {
    fontSize: 20,
    color: Colors.textTertiary,
  },
  bookmarkActive: {
    color: '#FFD700',
  },
  title: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.semibold,
    color: Colors.textPrimary,
    lineHeight: 22,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    flexWrap: 'wrap',
  },
  categoryTag: {
    backgroundColor: Colors.surfaceElevated,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.sm,
  },
  categoryText: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
    fontWeight: FontWeight.medium,
  },
  acceptRate: {
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
  },
  solveCount: {
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
  },
});
