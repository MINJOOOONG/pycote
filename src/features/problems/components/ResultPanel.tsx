import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../../../constants/colors';
import { FontSize, FontWeight } from '../../../constants/typography';
import { Spacing, BorderRadius } from '../../../constants/layout';
import { RunResult, SubmitResult, SubmitStatus } from '../../../types/judge';

interface Props {
  runResult?: RunResult | null;
  submitResult?: SubmitResult | null;
  isRunning?: boolean;
  isSubmitting?: boolean;
}

function PassIcon({ passed }: { passed: boolean }) {
  return (
    <Text style={[styles.icon, { color: passed ? Colors.success : Colors.error }]}>
      {passed ? '✓' : '✗'}
    </Text>
  );
}

function statusLabel(s: SubmitStatus) {
  switch (s) {
    case 'accepted': return '정답입니다!';
    case 'wrong_answer': return '오답입니다';
    case 'runtime_error': return '런타임 에러';
    case 'empty_code': return '코드를 입력해주세요';
  }
}

export function ResultPanel({ runResult, submitResult, isRunning, isSubmitting }: Props) {
  if (isRunning || isSubmitting) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingIcon}>{isSubmitting ? '⚡' : '▶'}</Text>
        <Text style={styles.loadingText}>
          {isSubmitting ? '채점 중...' : '실행 중...'}
        </Text>
      </View>
    );
  }

  if (submitResult) {
    const accepted = submitResult.status === 'accepted';
    return (
      <View style={styles.container}>
        <View style={[styles.banner, accepted ? styles.bannerSuccess : styles.bannerError]}>
          <Text style={[styles.bannerTitle, { color: accepted ? Colors.success : Colors.error }]}>
            {accepted ? '✓  ' : '✗  '}{statusLabel(submitResult.status)}
          </Text>
          {submitResult.status !== 'empty_code' && (
            <Text style={styles.bannerSub}>
              {submitResult.passedCount} / {submitResult.totalCount} 테스트케이스 통과
            </Text>
          )}
          <Text style={styles.bannerTime}>총 {submitResult.totalTime}ms</Text>
        </View>

        {submitResult.results.length > 0 && (
          <View style={styles.caseList}>
            {submitResult.results.map((r, i) => (
              <View key={r.id} style={[styles.caseRow, r.passed ? styles.casePass : styles.caseFail]}>
                <PassIcon passed={r.passed} />
                <View style={styles.caseContent}>
                  <Text style={styles.caseName}>
                    테스트 {i + 1}{r.hidden ? ' (숨김)' : ''}
                  </Text>
                  {!r.hidden && (
                    <>
                      <Text style={styles.caseDetail} numberOfLines={1}>입력: {r.input}</Text>
                      <Text style={styles.caseDetail} numberOfLines={1}>정답: {r.expectedOutput}</Text>
                      {!r.passed && (
                        <Text style={[styles.caseDetail, { color: Colors.error }]} numberOfLines={1}>
                          출력: {r.actualOutput}
                        </Text>
                      )}
                    </>
                  )}
                  <Text style={styles.caseTime}>{r.executionTime}ms</Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  }

  if (runResult) {
    if (runResult.status === 'error') {
      return (
        <View style={styles.container}>
          <View style={[styles.banner, styles.bannerError]}>
            <Text style={[styles.bannerTitle, { color: Colors.error }]}>오류</Text>
            <Text style={styles.bannerSub}>{runResult.error}</Text>
          </View>
        </View>
      );
    }

    const allPassed = runResult.results.every((r) => r.passed);
    return (
      <View style={styles.container}>
        <View style={[styles.banner, allPassed ? styles.bannerSuccess : styles.bannerError]}>
          <Text style={[styles.bannerTitle, { color: allPassed ? Colors.success : Colors.error }]}>
            {allPassed ? '✓  실행 성공' : '✗  일부 케이스 실패'}
          </Text>
          <Text style={styles.bannerTime}>총 {runResult.totalTime}ms</Text>
        </View>

        <View style={styles.caseList}>
          {runResult.results.map((r, i) => (
            <View key={r.id} style={[styles.caseRow, r.passed ? styles.casePass : styles.caseFail]}>
              <PassIcon passed={r.passed} />
              <View style={styles.caseContent}>
                <Text style={styles.caseName}>예제 {i + 1}</Text>
                <Text style={styles.caseDetail} numberOfLines={1}>입력: {r.input}</Text>
                <Text style={styles.caseDetail} numberOfLines={1}>정답: {r.expectedOutput}</Text>
                {!r.passed && (
                  <Text style={[styles.caseDetail, { color: Colors.error }]} numberOfLines={1}>
                    출력: {r.actualOutput}
                  </Text>
                )}
                <Text style={styles.caseTime}>{r.executionTime}ms</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.sm,
  },
  loading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    paddingVertical: Spacing.xl,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  loadingIcon: {
    fontSize: 16,
    color: Colors.primary,
  },
  loadingText: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    fontWeight: FontWeight.medium,
  },
  banner: {
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    gap: 4,
    borderWidth: 1,
  },
  bannerSuccess: {
    backgroundColor: Colors.successDim,
    borderColor: Colors.successBorder,
  },
  bannerError: {
    backgroundColor: Colors.errorDim,
    borderColor: Colors.errorBorder,
  },
  bannerTitle: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
  },
  bannerSub: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  bannerTime: {
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
  },
  caseList: {
    gap: Spacing.xs,
  },
  caseRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.sm,
    padding: Spacing.sm,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
  },
  casePass: {
    backgroundColor: Colors.successDim,
    borderColor: Colors.successBorder,
  },
  caseFail: {
    backgroundColor: Colors.errorDim,
    borderColor: Colors.errorBorder,
  },
  icon: {
    fontSize: 14,
    fontWeight: FontWeight.bold,
    marginTop: 1,
    width: 16,
  },
  caseContent: {
    flex: 1,
    gap: 2,
  },
  caseName: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    color: Colors.textPrimary,
  },
  caseDetail: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
    fontFamily: 'monospace',
  },
  caseTime: {
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
    marginTop: 2,
  },
});
