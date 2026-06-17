import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Concept } from '../types/concept';
import { Card } from './Card';
import { Pill } from './Pill';
import { Colors } from '../constants/colors';
import { FontSize, FontWeight } from '../constants/typography';
import { Spacing } from '../constants/layout';

interface ConceptCardProps {
  concept: Concept;
  onPress: () => void;
}

export function ConceptCard({ concept, onPress }: ConceptCardProps) {
  return (
    <Card onPress={onPress} style={styles.card}>
      <View style={styles.topRow}>
        <Pill label={concept.category} color={Colors.primary} backgroundColor={Colors.primaryDim} />
        <View style={styles.exampleMeta}>
          <Feather name="code" size={13} color={Colors.textQuaternary} />
          <Text style={styles.exampleCount}>예시 {concept.codeExamples.length}</Text>
        </View>
      </View>

      <Text style={styles.title}>{concept.title}</Text>

      <Text style={styles.summary} numberOfLines={2}>
        {concept.summary}
      </Text>

      {concept.patterns.length > 0 && (
        <View style={styles.patternsRow}>
          {concept.patterns.slice(0, 3).map((p, i) => (
            <Pill key={i} label={p} color={Colors.textTertiary} backgroundColor={Colors.surfaceElevated} style={styles.patternTag} />
          ))}
          {concept.patterns.length > 3 && (
            <Text style={styles.moreText}>+{concept.patterns.length - 3}</Text>
          )}
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: Spacing.xl,
    marginVertical: Spacing.sm,
    gap: Spacing.sm,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  exampleMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  exampleCount: {
    fontSize: FontSize.xs,
    color: Colors.textQuaternary,
    fontWeight: FontWeight.medium,
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
    letterSpacing: -0.2,
  },
  summary: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  patternsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: Spacing.xs,
    marginTop: 2,
  },
  patternTag: {
    maxWidth: 150,
  },
  moreText: {
    fontSize: FontSize.xs,
    color: Colors.textQuaternary,
    paddingVertical: 2,
  },
});
