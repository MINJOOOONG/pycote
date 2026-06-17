import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useProblemDetail } from '../hooks/useProblemDetail';
import { useBookmarkStore } from '../../../store/bookmarkStore';
import { useProgressStore } from '../../../store/progressStore';
import { LevelBadge } from '../../../components/LevelBadge';
import { CodeBlock } from '../../../components/CodeBlock';
import { LoadingScreen } from '../../../components/LoadingScreen';
import { EmptyState } from '../../../components/EmptyState';
import { Colors } from '../../../constants/colors';
import { Spacing, BorderRadius } from '../../../constants/layout';
import { FontSize, FontWeight } from '../../../constants/typography';
import { ProblemDetailNavigationProp, ProblemDetailRouteProp } from '../../../navigation/types';

export function ProblemDetailScreen() {
  const navigation = useNavigation<ProblemDetailNavigationProp>();
  const route = useRoute<ProblemDetailRouteProp>();
  const { problemId } = route.params;

  const { data: problem, isLoading } = useProblemDetail(problemId);
  const { isBookmarked, toggleBookmark } = useBookmarkStore();
  const { getProgress, markSolved } = useProgressStore();

  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const progress = problem ? getProgress(problem.id) : undefined;
  const bookmarked = problem ? isBookmarked(problem.id) : false;

  if (isLoading) return <LoadingScreen />;
  if (!problem) return <EmptyState icon="😅" title="문제를 찾을 수 없습니다" />;

  const handleMarkSolved = () => {
    markSolved(problem.id);
    Alert.alert('🎉 완료!', '문제를 해결했습니다!', [{ text: '확인' }]);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Header */}
        <View style={styles.titleSection}>
          <View style={styles.titleRow}>
            <LevelBadge level={problem.level} showDescription />
            <TouchableOpacity
              onPress={() => toggleBookmark(problem.id)}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Text style={[styles.bookmarkBtn, bookmarked && styles.bookmarkedBtn]}>
                {bookmarked ? '★' : '☆'}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>{problem.title}</Text>
          <View style={styles.metaRow}>
            <View style={styles.categoryTag}>
              <Text style={styles.categoryText}>{problem.category}</Text>
            </View>
            {problem.acceptRate !== undefined && (
              <Text style={styles.metaText}>정답률 {problem.acceptRate.toFixed(0)}%</Text>
            )}
            {progress?.status === 'solved' && (
              <View style={styles.solvedTag}>
                <Text style={styles.solvedText}>✓ 해결</Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.divider} />

        {/* Problem Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>문제 설명</Text>
          <Text style={styles.bodyText}>{problem.description}</Text>
        </View>

        {/* Input / Output */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>입력 형식</Text>
          <Text style={styles.bodyText}>{problem.inputDescription}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>출력 형식</Text>
          <Text style={styles.bodyText}>{problem.outputDescription}</Text>
        </View>

        {/* Constraints */}
        {problem.constraints.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>제한 사항</Text>
            {problem.constraints.map((c, i) => (
              <View key={i} style={styles.bulletRow}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bodyText}>{c}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.divider} />

        {/* Examples */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>입출력 예시</Text>
          {problem.examples.map((ex, i) => (
            <View key={i} style={styles.exampleCard}>
              <Text style={styles.exampleLabel}>예시 {i + 1}</Text>
              <View style={styles.exampleRow}>
                <View style={styles.exampleBlock}>
                  <Text style={styles.exampleBlockLabel}>입력</Text>
                  <CodeBlock code={ex.input} language="input" showLineNumbers={false} />
                </View>
                <View style={styles.exampleBlock}>
                  <Text style={styles.exampleBlockLabel}>출력</Text>
                  <CodeBlock code={ex.output} language="output" showLineNumbers={false} />
                </View>
              </View>
              {ex.explanation && (
                <Text style={styles.exampleExplanation}>{ex.explanation}</Text>
              )}
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        {/* Hints */}
        <TouchableOpacity
          style={styles.collapsibleHeader}
          onPress={() => setShowHints((v) => !v)}
        >
          <Text style={styles.sectionTitle}>힌트 ({problem.hints.length})</Text>
          <Text style={styles.chevron}>{showHints ? '▲' : '▼'}</Text>
        </TouchableOpacity>
        {showHints && (
          <View style={styles.section}>
            {problem.hints.map((hint, i) => (
              <View key={i} style={styles.hintCard}>
                <Text style={styles.hintNumber}>힌트 {i + 1}</Text>
                <Text style={styles.bodyText}>{hint}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.divider} />

        {/* Solution */}
        <TouchableOpacity
          style={styles.collapsibleHeader}
          onPress={() => setShowSolution((v) => !v)}
        >
          <Text style={styles.sectionTitle}>풀이 보기</Text>
          <Text style={styles.chevron}>{showSolution ? '▲' : '▼'}</Text>
        </TouchableOpacity>
        {showSolution && (
          <View style={styles.section}>
            <CodeBlock code={problem.solution} language="python" />
            {problem.explanation && (
              <View style={styles.explanationCard}>
                <Text style={styles.explanationTitle}>풀이 설명</Text>
                <Text style={styles.bodyText}>{problem.explanation}</Text>
              </View>
            )}
          </View>
        )}

        {/* Tags */}
        {problem.tags.length > 0 && (
          <View style={styles.tagsSection}>
            {problem.tags.map((tag, i) => (
              <View key={i} style={styles.tag}>
                <Text style={styles.tagText}>#{tag}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.actionBar}>
        {progress?.status !== 'solved' ? (
          <TouchableOpacity style={styles.solveButton} onPress={handleMarkSolved}>
            <Text style={styles.solveButtonText}>✓ 해결 완료로 표시</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.solvedBar}>
            <Text style={styles.solvedBarText}>✓ 해결한 문제입니다</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scrollView: { flex: 1 },
  scrollContent: { paddingBottom: 16 },
  titleSection: { padding: Spacing.lg },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: Spacing.sm },
  bookmarkBtn: { fontSize: 24, color: Colors.textTertiary },
  bookmarkedBtn: { color: '#FFD700' },
  title: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.textPrimary, marginBottom: Spacing.md, lineHeight: 28 },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, flexWrap: 'wrap' },
  categoryTag: { backgroundColor: Colors.primaryDim, paddingHorizontal: Spacing.sm, paddingVertical: 3, borderRadius: BorderRadius.sm },
  categoryText: { fontSize: FontSize.xs, color: Colors.primaryLight, fontWeight: FontWeight.medium },
  metaText: { fontSize: FontSize.xs, color: Colors.textTertiary },
  solvedTag: { backgroundColor: 'rgba(0,196,113,0.15)', paddingHorizontal: Spacing.sm, paddingVertical: 3, borderRadius: BorderRadius.sm, borderWidth: 1, borderColor: 'rgba(0,196,113,0.3)' },
  solvedText: { fontSize: FontSize.xs, color: Colors.success, fontWeight: FontWeight.semibold },
  divider: { height: 1, backgroundColor: Colors.border, marginHorizontal: Spacing.lg },
  section: { padding: Spacing.lg },
  sectionTitle: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.textPrimary, marginBottom: Spacing.md },
  bodyText: { fontSize: FontSize.sm, color: Colors.textSecondary, lineHeight: 22 },
  bulletRow: { flexDirection: 'row', marginBottom: Spacing.xs },
  bullet: { color: Colors.textTertiary, marginRight: Spacing.sm, fontSize: FontSize.sm },
  exampleCard: { marginBottom: Spacing.lg, backgroundColor: Colors.surface, borderRadius: BorderRadius.md, padding: Spacing.md, borderWidth: 1, borderColor: Colors.border },
  exampleLabel: { fontSize: FontSize.sm, fontWeight: FontWeight.semibold, color: Colors.textSecondary, marginBottom: Spacing.sm },
  exampleRow: { flexDirection: 'row', gap: Spacing.sm },
  exampleBlock: { flex: 1 },
  exampleBlockLabel: { fontSize: FontSize.xs, color: Colors.textTertiary, marginBottom: Spacing.xs },
  exampleExplanation: { fontSize: FontSize.sm, color: Colors.textSecondary, marginTop: Spacing.sm, fontStyle: 'italic' },
  collapsibleHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: Spacing.lg },
  chevron: { fontSize: FontSize.sm, color: Colors.textTertiary },
  hintCard: { backgroundColor: Colors.surface, borderRadius: BorderRadius.md, padding: Spacing.md, marginBottom: Spacing.sm, borderWidth: 1, borderColor: Colors.border, borderLeftWidth: 3, borderLeftColor: Colors.warning },
  hintNumber: { fontSize: FontSize.xs, color: Colors.warning, fontWeight: FontWeight.semibold, marginBottom: Spacing.xs },
  explanationCard: { marginTop: Spacing.md, backgroundColor: Colors.surfaceElevated, borderRadius: BorderRadius.md, padding: Spacing.md },
  explanationTitle: { fontSize: FontSize.sm, fontWeight: FontWeight.semibold, color: Colors.textPrimary, marginBottom: Spacing.sm },
  tagsSection: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: Spacing.lg, gap: Spacing.sm },
  tag: { backgroundColor: Colors.surfaceElevated, paddingHorizontal: Spacing.sm, paddingVertical: 3, borderRadius: BorderRadius.full },
  tagText: { fontSize: FontSize.xs, color: Colors.textTertiary },
  bottomPadding: { height: Spacing.xxl },
  actionBar: { borderTopWidth: 1, borderTopColor: Colors.border, padding: Spacing.lg, backgroundColor: Colors.background },
  solveButton: { backgroundColor: Colors.primary, borderRadius: BorderRadius.md, padding: Spacing.lg, alignItems: 'center' },
  solveButtonText: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: '#FFFFFF' },
  solvedBar: { backgroundColor: 'rgba(0,196,113,0.15)', borderRadius: BorderRadius.md, padding: Spacing.lg, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(0,196,113,0.3)' },
  solvedBarText: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.success },
});
