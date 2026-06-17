import React, { useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useProblemDetail } from '../hooks/useProblemDetail';
import { useBookmarkStore } from '../../../store/bookmarkStore';
import { useProgressStore } from '../../../store/progressStore';
import { LevelBadge } from '../../../components/LevelBadge';
import { CodeBlock } from '../../../components/CodeBlock';
import { LoadingScreen } from '../../../components/LoadingScreen';
import { EmptyState } from '../../../components/EmptyState';
import { CodeEditor } from '../components/CodeEditor';
import { ResultPanel } from '../components/ResultPanel';
import { runExamples, submitCode } from '../../../lib/mockJudge';
import { Colors } from '../../../constants/colors';
import { Spacing, BorderRadius } from '../../../constants/layout';
import { FontSize, FontWeight } from '../../../constants/typography';
import { ProblemDetailNavigationProp, ProblemDetailRouteProp } from '../../../navigation/types';
import { RunResult, SubmitResult } from '../../../types/judge';

type Tab = 'problem' | 'code';

export function ProblemDetailScreen() {
  const navigation = useNavigation<ProblemDetailNavigationProp>();
  const route = useRoute<ProblemDetailRouteProp>();
  const { problemId } = route.params;

  const { data: problem, isLoading } = useProblemDetail(problemId);
  const { isBookmarked, toggleBookmark } = useBookmarkStore();
  const { getProgress, markSolved, markAttempted, saveCode } = useProgressStore();

  const [activeTab, setActiveTab] = useState<Tab>('problem');
  const [code, setCode] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [runResult, setRunResult] = useState<RunResult | null>(null);
  const [submitResult, setSubmitResult] = useState<SubmitResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const codeScrollRef = useRef<ScrollView>(null);

  const progress = problem ? getProgress(problem.id) : undefined;
  const bookmarked = problem ? isBookmarked(problem.id) : false;

  const currentCode = code ?? (problem ? (progress?.savedCode ?? problem.starterCode) : '');

  const handleCodeChange = useCallback(
    (text: string) => {
      setCode(text);
      if (problem) saveCode(problem.id, text);
      setRunResult(null);
      setSubmitResult(null);
    },
    [problem, saveCode],
  );

  const handleReset = useCallback(() => {
    if (!problem) return;
    Alert.alert('코드 초기화', '작성한 코드를 초기화하시겠습니까?', [
      { text: '취소', style: 'cancel' },
      {
        text: '초기화',
        style: 'destructive',
        onPress: () => {
          setCode(problem.starterCode);
          saveCode(problem.id, problem.starterCode);
          setRunResult(null);
          setSubmitResult(null);
        },
      },
    ]);
  }, [problem, saveCode]);

  const handleRun = useCallback(async () => {
    if (!problem || isRunning) return;
    setIsRunning(true);
    setSubmitResult(null);
    markAttempted(problem.id);
    try {
      const result = await runExamples(currentCode, problem.starterCode, problem.testCases);
      setRunResult(result);
    } finally {
      setIsRunning(false);
      codeScrollRef.current?.scrollToEnd({ animated: true });
    }
  }, [problem, currentCode, isRunning, markAttempted]);

  const handleSubmit = useCallback(async () => {
    if (!problem || isSubmitting) return;
    setIsSubmitting(true);
    setRunResult(null);
    markAttempted(problem.id);
    try {
      const result = await submitCode(currentCode, problem.starterCode, problem.testCases);
      setSubmitResult(result);
      if (result.status === 'accepted') {
        markSolved(problem.id);
      }
    } finally {
      setIsSubmitting(false);
      codeScrollRef.current?.scrollToEnd({ animated: true });
    }
  }, [problem, currentCode, isSubmitting, markAttempted, markSolved]);

  if (isLoading) return <LoadingScreen />;
  if (!problem) return <EmptyState icon="frown" title="문제를 찾을 수 없습니다" />;

  const isSolved = progress?.status === 'solved';

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      {/* ── Header ─────────────────────────────────────────── */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <LevelBadge level={problem.level} showDescription />
          {isSolved && (
            <View style={styles.solvedBadge}>
              <Feather name="check" size={11} color={Colors.success} />
              <Text style={styles.solvedBadgeText}>해결</Text>
            </View>
          )}
          <TouchableOpacity
            onPress={() => toggleBookmark(problem.id)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={styles.bookmarkBtn}
          >
            <Feather
              name="bookmark"
              size={20}
              color={bookmarked ? Colors.primary : Colors.textTertiary}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{problem.title}</Text>

        {/* ── Tab Bar ────────────────────────────────────────── */}
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'problem' && styles.tabActive]}
            onPress={() => setActiveTab('problem')}
          >
            <Text style={[styles.tabText, activeTab === 'problem' && styles.tabTextActive]}>
              문제
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'code' && styles.tabActive]}
            onPress={() => setActiveTab('code')}
          >
            <Text style={[styles.tabText, activeTab === 'code' && styles.tabTextActive]}>
              풀기
            </Text>
            {(runResult || submitResult) && <View style={styles.tabDot} />}
          </TouchableOpacity>
        </View>
      </View>

      {/* ── 문제 탭 ─────────────────────────────────────────── */}
      {activeTab === 'problem' && (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>문제 설명</Text>
            <Text style={styles.bodyText}>{problem.description}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>입력 형식</Text>
            <Text style={styles.bodyText}>{problem.inputDescription}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>출력 형식</Text>
            <Text style={styles.bodyText}>{problem.outputDescription}</Text>
          </View>

          {problem.constraints.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>제한 사항</Text>
              {problem.constraints.map((c, i) => (
                <View key={i} style={styles.bulletRow}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={[styles.bodyText, { flex: 1 }]}>{c}</Text>
                </View>
              ))}
            </View>
          )}

          <View style={styles.divider} />

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

          {/* 힌트 */}
          {problem.hints.length > 0 && (
            <>
              <TouchableOpacity
                style={styles.collapsibleRow}
                onPress={() => setShowHints((v) => !v)}
              >
                <Text style={styles.sectionTitle}>힌트 ({problem.hints.length})</Text>
                <Feather name={showHints ? 'chevron-up' : 'chevron-down'} size={16} color={Colors.textTertiary} />
              </TouchableOpacity>
              {showHints && (
                <View style={styles.section}>
                  {problem.hints.map((hint, i) => (
                    <View key={i} style={styles.hintCard}>
                      <Text style={styles.hintLabel}>힌트 {i + 1}</Text>
                      <Text style={styles.bodyText}>{hint}</Text>
                    </View>
                  ))}
                </View>
              )}
              <View style={styles.divider} />
            </>
          )}

          {/* 풀이 보기 */}
          <TouchableOpacity
            style={styles.collapsibleRow}
            onPress={() => setShowSolution((v) => !v)}
          >
            <Text style={styles.sectionTitle}>풀이 보기</Text>
            <Feather name={showSolution ? 'chevron-up' : 'chevron-down'} size={16} color={Colors.textTertiary} />
          </TouchableOpacity>
          {showSolution && (
            <View style={styles.section}>
              <CodeBlock code={problem.solution} language="python" />
              {problem.explanation ? (
                <View style={styles.explanationCard}>
                  <Text style={styles.explanationTitle}>풀이 설명</Text>
                  <Text style={styles.bodyText}>{problem.explanation}</Text>
                </View>
              ) : null}
            </View>
          )}

          {/* 태그 */}
          {problem.tags.length > 0 && (
            <View style={styles.tagsRow}>
              {problem.tags.map((tag, i) => (
                <View key={i} style={styles.tag}>
                  <Text style={styles.tagText}>#{tag}</Text>
                </View>
              ))}
            </View>
          )}

          <TouchableOpacity
            style={styles.goCodeBtn}
            onPress={() => setActiveTab('code')}
            activeOpacity={0.85}
          >
            <Feather name="code" size={15} color="#FFFFFF" />
            <Text style={styles.goCodeBtnText}>코드 작성하기</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* ── 풀기 탭 ─────────────────────────────────────────── */}
      {activeTab === 'code' && (
        <KeyboardAvoidingView
          style={styles.codeContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={100}
        >
          <ScrollView
            ref={codeScrollRef}
            style={styles.scrollView}
            contentContainerStyle={styles.codeScrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* 메타 정보 요약 */}
            <View style={styles.codeMetaRow}>
              <Text style={styles.codeMetaTitle} numberOfLines={1}>
                {problem.title}
              </Text>
              {problem.acceptRate !== undefined && (
                <Text style={styles.codeMetaRate}>정답률 {problem.acceptRate.toFixed(0)}%</Text>
              )}
            </View>

            {/* 코드 에디터 */}
            <CodeEditor
              value={currentCode}
              onChange={handleCodeChange}
              disabled={isRunning || isSubmitting}
              onReset={handleReset}
            />

            {/* 결과 패널 */}
            {(runResult || submitResult || isRunning || isSubmitting) && (
              <View style={styles.resultSection}>
                <Text style={styles.resultTitle}>
                  {submitResult ? '제출 결과' : '실행 결과'}
                </Text>
                <ResultPanel
                  runResult={runResult}
                  submitResult={submitResult}
                  isRunning={isRunning}
                  isSubmitting={isSubmitting}
                />
              </View>
            )}

            <View style={{ height: Spacing.xxxl }} />
          </ScrollView>

          {/* 실행 / 제출 버튼 */}
          <View style={styles.actionBar}>
            <TouchableOpacity
              style={[styles.runBtn, (isRunning || isSubmitting) && styles.btnDisabled]}
              onPress={handleRun}
              disabled={isRunning || isSubmitting}
              activeOpacity={0.8}
            >
              <Feather name="play" size={14} color={Colors.textPrimary} />
              <Text style={styles.runBtnText}>실행</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.submitBtn, (isRunning || isSubmitting) && styles.btnDisabled]}
              onPress={handleSubmit}
              disabled={isRunning || isSubmitting}
              activeOpacity={0.85}
            >
              <Feather name="zap" size={14} color="#FFFFFF" />
              <Text style={styles.submitBtnText}>제출</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  // Header
  header: {
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
    gap: Spacing.sm,
  },
  solvedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: Colors.successDim,
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: Colors.successBorder,
  },
  solvedBadgeText: {
    fontSize: FontSize.xs,
    color: Colors.success,
    fontWeight: FontWeight.semibold,
  },
  bookmarkBtn: {
    marginLeft: 'auto',
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
    lineHeight: 24,
  },

  // Tab Bar
  tabBar: {
    flexDirection: 'row',
    gap: 4,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    gap: 4,
  },
  tabActive: {
    borderBottomColor: Colors.primary,
  },
  tabText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium,
    color: Colors.textTertiary,
  },
  tabTextActive: {
    color: Colors.primary,
    fontWeight: FontWeight.semibold,
  },
  tabDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: Colors.primary,
  },

  // Common scroll
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: Spacing.xxxl,
  },

  // 문제 탭
  section: {
    padding: Spacing.lg,
  },
  sectionTitle: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.semibold,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  bodyText: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginHorizontal: Spacing.lg,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: Spacing.xs,
    gap: Spacing.sm,
  },
  bullet: {
    color: Colors.textTertiary,
    fontSize: FontSize.sm,
    lineHeight: 22,
  },
  exampleCard: {
    marginBottom: Spacing.md,
    backgroundColor: Colors.surfaceElevated,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  exampleLabel: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    color: Colors.textTertiary,
    marginBottom: Spacing.sm,
  },
  exampleRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  exampleBlock: {
    flex: 1,
  },
  exampleBlockLabel: {
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
    marginBottom: Spacing.xs,
  },
  exampleExplanation: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
    marginTop: Spacing.sm,
    fontStyle: 'italic',
  },
  collapsibleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.lg,
  },
  hintCard: {
    backgroundColor: Colors.surfaceElevated,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.border,
    borderLeftWidth: 3,
    borderLeftColor: Colors.warning,
  },
  hintLabel: {
    fontSize: FontSize.xs,
    color: Colors.warning,
    fontWeight: FontWeight.semibold,
    marginBottom: Spacing.xs,
  },
  explanationCard: {
    marginTop: Spacing.md,
    backgroundColor: Colors.surfaceElevated,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  explanationTitle: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Spacing.lg,
    gap: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  tag: {
    backgroundColor: Colors.surfaceHighlight,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 3,
    borderRadius: BorderRadius.full,
  },
  tagText: {
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
  },
  goCodeBtn: {
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.md,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spacing.sm,
  },
  goCodeBtnText: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: '#FFFFFF',
  },

  // 코드 탭
  codeContainer: {
    flex: 1,
  },
  codeScrollContent: {
    padding: Spacing.md,
    gap: Spacing.md,
  },
  codeMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  codeMetaTitle: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    color: Colors.textSecondary,
    flex: 1,
  },
  codeMetaRate: {
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
  },
  resultSection: {
    gap: Spacing.sm,
  },
  resultTitle: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    color: Colors.textSecondary,
  },

  // Action bar
  actionBar: {
    flexDirection: 'row',
    gap: Spacing.sm,
    padding: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    backgroundColor: Colors.background,
  },
  runBtn: {
    flex: 1,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: Colors.surfaceElevated,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  runBtnText: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.semibold,
    color: Colors.textPrimary,
  },
  submitBtn: {
    flex: 2,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: Colors.primary,
  },
  submitBtnText: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: '#FFFFFF',
  },
  btnDisabled: {
    opacity: 0.5,
  },
});
