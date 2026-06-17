import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { useConceptDetail } from '../hooks/useConceptDetail';
import { CodeBlock } from '../../../components/CodeBlock';
import { LoadingScreen } from '../../../components/LoadingScreen';
import { EmptyState } from '../../../components/EmptyState';
import { Colors } from '../../../constants/colors';
import { Spacing, BorderRadius } from '../../../constants/layout';
import { FontSize, FontWeight } from '../../../constants/typography';
import { ConceptDetailRouteProp } from '../../../navigation/types';

export function ConceptDetailScreen() {
  const route = useRoute<ConceptDetailRouteProp>();
  const { conceptId } = route.params;
  const { data: concept, isLoading } = useConceptDetail(conceptId);

  if (isLoading) return <LoadingScreen />;
  if (!concept) return <EmptyState icon="😅" title="개념을 찾을 수 없습니다" />;

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.titleSection}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{concept.category}</Text>
          </View>
          <Text style={styles.title}>{concept.title}</Text>
          <Text style={styles.summary}>{concept.summary}</Text>
        </View>

        <View style={styles.divider} />

        {/* Code Examples */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>코드 예시</Text>
          {concept.codeExamples.map((ex, i) => (
            <View key={i} style={styles.codeExampleCard}>
              <Text style={styles.codeExampleDesc}>{ex.description}</Text>
              <CodeBlock code={ex.code} language="python" />
              {ex.output && (
                <View style={styles.outputSection}>
                  <Text style={styles.outputLabel}>출력</Text>
                  <CodeBlock code={ex.output} language="output" showLineNumbers={false} />
                </View>
              )}
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        {/* Key Patterns */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>핵심 패턴</Text>
          {concept.patterns.map((pattern, i) => (
            <View key={i} style={styles.patternRow}>
              <View style={styles.patternDot} />
              <Text style={styles.patternText}>{pattern}</Text>
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        {/* Coding Test Tips */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>코딩테스트 팁</Text>
          {concept.tips.map((tip, i) => (
            <View key={i} style={styles.tipCard}>
              <Text style={styles.tipNumber}>TIP {i + 1}</Text>
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scrollView: { flex: 1 },
  scrollContent: { paddingBottom: 16 },
  titleSection: { padding: Spacing.lg },
  categoryBadge: { backgroundColor: Colors.primaryDim, paddingHorizontal: Spacing.sm, paddingVertical: 4, borderRadius: BorderRadius.sm, alignSelf: 'flex-start', marginBottom: Spacing.md },
  categoryText: { fontSize: FontSize.xs, color: Colors.primaryLight, fontWeight: FontWeight.semibold },
  title: { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.textPrimary, marginBottom: Spacing.md, lineHeight: 32 },
  summary: { fontSize: FontSize.md, color: Colors.textSecondary, lineHeight: 24 },
  divider: { height: 1, backgroundColor: Colors.border, marginHorizontal: Spacing.lg },
  section: { padding: Spacing.lg },
  sectionTitle: { fontSize: FontSize.lg, fontWeight: FontWeight.semibold, color: Colors.textPrimary, marginBottom: Spacing.lg },
  codeExampleCard: { marginBottom: Spacing.xl, backgroundColor: Colors.surface, borderRadius: BorderRadius.lg, padding: Spacing.md, borderWidth: 1, borderColor: Colors.border },
  codeExampleDesc: { fontSize: FontSize.sm, color: Colors.textSecondary, marginBottom: Spacing.md, lineHeight: 20 },
  outputSection: { marginTop: Spacing.sm },
  outputLabel: { fontSize: FontSize.xs, color: Colors.textTertiary, marginBottom: Spacing.xs },
  patternRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: Spacing.md },
  patternDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: Colors.primary, marginTop: 7, marginRight: Spacing.md },
  patternText: { flex: 1, fontSize: FontSize.sm, color: Colors.textSecondary, lineHeight: 20 },
  tipCard: { backgroundColor: Colors.surface, borderRadius: BorderRadius.md, padding: Spacing.md, marginBottom: Spacing.sm, borderWidth: 1, borderColor: Colors.border, borderLeftWidth: 3, borderLeftColor: Colors.primary },
  tipNumber: { fontSize: FontSize.xs, color: Colors.primary, fontWeight: FontWeight.bold, marginBottom: Spacing.xs },
  tipText: { fontSize: FontSize.sm, color: Colors.textSecondary, lineHeight: 20 },
  bottomPadding: { height: Spacing.xxl },
});
