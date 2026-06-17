import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Concept } from '../types/concept';
import { Colors } from '../constants/colors';
import { FontSize, FontWeight } from '../constants/typography';
import { Spacing, BorderRadius } from '../constants/layout';

interface ConceptCardProps {
  concept: Concept;
  onPress: () => void;
}

export function ConceptCard({ concept, onPress }: ConceptCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.topRow}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{concept.category}</Text>
        </View>
        <Text style={styles.exampleCount}>
          예시 {concept.codeExamples.length}개
        </Text>
      </View>

      <Text style={styles.title}>{concept.title}</Text>

      <Text style={styles.summary} numberOfLines={2}>
        {concept.summary}
      </Text>

      {concept.patterns.length > 0 && (
        <View style={styles.patternsRow}>
          {concept.patterns.slice(0, 3).map((p, i) => (
            <View key={i} style={styles.patternTag}>
              <Text style={styles.patternText} numberOfLines={1}>
                {p}
              </Text>
            </View>
          ))}
          {concept.patterns.length > 3 && (
            <Text style={styles.moreText}>+{concept.patterns.length - 3}</Text>
          )}
        </View>
      )}
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
  categoryBadge: {
    backgroundColor: Colors.primaryDim,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 3,
    borderRadius: BorderRadius.sm,
  },
  categoryText: {
    fontSize: FontSize.xs,
    color: Colors.primaryLight,
    fontWeight: FontWeight.semibold,
  },
  exampleCount: {
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
  },
  summary: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  patternsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xs,
    marginTop: Spacing.xs,
  },
  patternTag: {
    backgroundColor: Colors.surfaceElevated,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.full,
    maxWidth: 140,
  },
  patternText: {
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
  },
  moreText: {
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
    paddingVertical: 2,
  },
});
