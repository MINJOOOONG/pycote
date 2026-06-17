import React, { useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { PROBLEMS } from '../../../data/problems';
import { useProgressStore } from '../../../store/progressStore';
import { buildDashboard, LevelStat } from '../utils/dashboard';
import { getLevelConfig } from '../../../constants/levels';

import { Card } from '../../../components/Card';
import { ProgressBar } from '../../../components/ProgressBar';
import { SectionHeader } from '../../../components/SectionHeader';
import { LevelBadge } from '../../../components/LevelBadge';
import { Pill } from '../../../components/Pill';

import { Colors } from '../../../constants/colors';
import { FontSize, FontWeight } from '../../../constants/typography';
import { Spacing, BorderRadius, ScreenPadding, Shadow } from '../../../constants/layout';
import { Problem } from '../../../types/problem';
import { HomeNavigationProp } from '../../../navigation/types';

function greeting(): string {
  const h = new Date().getHours();
  if (h < 6) return '늦은 밤이네요';
  if (h < 12) return '좋은 아침이에요';
  if (h < 18) return '오늘도 화이팅이에요';
  return '오늘 하루 수고했어요';
}

export function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>();
  const progress = useProgressStore((s) => s.progress);

  const data = useMemo(() => buildDashboard(PROBLEMS, progress), [progress]);

  const openProblem = (id: string) => navigation.navigate('ProblemDetail', { problemId: id });
  const goProblems = () => navigation.navigate('ProblemsTab');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Greeting */}
        <View style={styles.greetingBlock}>
          <Text style={styles.brand}>PYCOTE</Text>
          <Text style={styles.greetingTitle}>{greeting()}</Text>
          <Text style={styles.greetingSub}>오늘도 한 문제씩, 꾸준함이 실력이 됩니다.</Text>
        </View>

        {/* Progress hero */}
        <View style={styles.section}>
          <Card style={styles.heroCard}>
            <View style={styles.heroTop}>
              <View>
                <Text style={styles.heroLabel}>학습 진행률</Text>
                <View style={styles.heroNumberRow}>
                  <Text style={styles.heroNumber}>{Math.round(data.progressRatio * 100)}</Text>
                  <Text style={styles.heroPercent}>%</Text>
                </View>
              </View>
              <View style={styles.heroStats}>
                <View style={styles.heroStatItem}>
                  <Text style={styles.heroStatValue}>{data.solvedCount}</Text>
                  <Text style={styles.heroStatLabel}>해결</Text>
                </View>
                <View style={styles.heroDivider} />
                <View style={styles.heroStatItem}>
                  <Text style={styles.heroStatValue}>{data.total}</Text>
                  <Text style={styles.heroStatLabel}>전체</Text>
                </View>
              </View>
            </View>
            <ProgressBar value={data.progressRatio} height={10} style={styles.heroBar} />
          </Card>
        </View>

        {/* 오늘의 학습 */}
        {data.recommended && (
          <View style={styles.section}>
            <SectionHeader title="오늘의 학습" />
            <FeaturedProblem problem={data.recommended} onPress={() => openProblem(data.recommended!.id)} />
          </View>
        )}

        {/* 이어서 풀기 */}
        {data.continueProblem && (
          <View style={styles.section}>
            <SectionHeader title="이어서 풀기" />
            <Card onPress={() => openProblem(data.continueProblem!.id)} style={styles.continueCard}>
              <View style={styles.continueIcon}>
                <Feather name="rotate-ccw" size={18} color={Colors.primary} />
              </View>
              <View style={styles.continueBody}>
                <Text style={styles.continueTitle} numberOfLines={1}>
                  {data.continueProblem.title}
                </Text>
                <Text style={styles.continueMeta}>풀이 중 · 약 {data.continueProblem.estimatedMinutes}분</Text>
              </View>
              <Feather name="chevron-right" size={20} color={Colors.textQuaternary} />
            </Card>
          </View>
        )}

        {/* 난이도별 현황 */}
        <View style={styles.section}>
          <SectionHeader title="난이도별 현황" actionLabel="문제 풀기" onAction={goProblems} />
          <Card style={styles.levelCard}>
            {data.levelStats.map((stat, i) => (
              <LevelRow key={stat.level} stat={stat} isLast={i === data.levelStats.length - 1} />
            ))}
          </Card>
        </View>

        {/* 최근 푼 문제 */}
        <View style={styles.section}>
          <SectionHeader title="최근 푼 문제" />
          {data.recentSolved.length > 0 ? (
            <Card style={styles.recentCard} padded={false}>
              {data.recentSolved.map((p, i) => (
                <RecentRow
                  key={p.id}
                  problem={p}
                  isLast={i === data.recentSolved.length - 1}
                  onPress={() => openProblem(p.id)}
                />
              ))}
            </Card>
          ) : (
            <Card style={styles.emptyRecent}>
              <Feather name="check-circle" size={20} color={Colors.textQuaternary} />
              <Text style={styles.emptyRecentText}>아직 해결한 문제가 없어요. 첫 문제를 풀어보세요!</Text>
            </Card>
          )}
        </View>

        <View style={{ height: Spacing.xxxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function FeaturedProblem({ problem, onPress }: { problem: Problem; onPress: () => void }) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.featured, Shadow.primary as object]}>
      <View style={styles.featuredHeader}>
        <Pill label="추천 문제" color={Colors.textInverse} backgroundColor="rgba(255,255,255,0.18)" />
        <Feather name="arrow-up-right" size={20} color="rgba(255,255,255,0.9)" />
      </View>
      <Text style={styles.featuredTitle}>{problem.title}</Text>
      <View style={styles.featuredMetaRow}>
        <View style={styles.featuredMeta}>
          <Feather name="bar-chart" size={13} color="rgba(255,255,255,0.85)" />
          <Text style={styles.featuredMetaText}>{getLevelConfig(problem.level).label} · {getLevelConfig(problem.level).description}</Text>
        </View>
        <View style={styles.featuredMeta}>
          <Feather name="clock" size={13} color="rgba(255,255,255,0.85)" />
          <Text style={styles.featuredMetaText}>약 {problem.estimatedMinutes}분</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function LevelRow({ stat, isLast }: { stat: LevelStat; isLast: boolean }) {
  const config = getLevelConfig(stat.level);
  const ratio = stat.total ? stat.solved / stat.total : 0;
  return (
    <View style={[styles.levelRow, !isLast && styles.levelRowBorder]}>
      <View style={styles.levelRowLeft}>
        <LevelBadge level={stat.level} size="sm" />
      </View>
      <ProgressBar value={ratio} height={6} color={config.color} style={styles.levelRowBar} />
      <Text style={styles.levelRowCount}>
        {stat.solved}<Text style={styles.levelRowTotal}>/{stat.total}</Text>
      </Text>
    </View>
  );
}

function RecentRow({ problem, isLast, onPress }: { problem: Problem; isLast: boolean; onPress: () => void }) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[styles.recentRow, !isLast && styles.recentRowBorder]}>
      <View style={styles.recentCheck}>
        <Feather name="check" size={12} color={Colors.textInverse} />
      </View>
      <Text style={styles.recentTitle} numberOfLines={1}>{problem.title}</Text>
      <LevelBadge level={problem.level} size="sm" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { paddingBottom: Spacing.xl },

  greetingBlock: {
    paddingHorizontal: ScreenPadding,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  brand: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.primary,
    letterSpacing: 2,
    marginBottom: Spacing.sm,
  },
  greetingTitle: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
    letterSpacing: -0.5,
  },
  greetingSub: {
    fontSize: FontSize.sm,
    color: Colors.textTertiary,
    marginTop: 4,
  },

  section: {
    paddingHorizontal: ScreenPadding,
    marginTop: Spacing.xl,
  },

  // Hero
  heroCard: {
    gap: Spacing.lg,
  },
  heroTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  heroLabel: {
    fontSize: FontSize.sm,
    color: Colors.textTertiary,
    fontWeight: FontWeight.medium,
  },
  heroNumberRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 2,
  },
  heroNumber: {
    fontSize: 44,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
    letterSpacing: -1.5,
    lineHeight: 48,
  },
  heroPercent: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.semibold,
    color: Colors.textTertiary,
    marginBottom: 6,
    marginLeft: 2,
  },
  heroStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.lg,
    marginTop: Spacing.xs,
  },
  heroStatItem: {
    alignItems: 'center',
  },
  heroStatValue: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
  },
  heroStatLabel: {
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
    marginTop: 2,
  },
  heroDivider: {
    width: 1,
    height: 28,
    backgroundColor: Colors.border,
  },
  heroBar: {},

  // Featured
  featured: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.lg,
    padding: Spacing.xl,
    gap: Spacing.md,
  },
  featuredHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  featuredTitle: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.textInverse,
    letterSpacing: -0.3,
  },
  featuredMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.lg,
  },
  featuredMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  featuredMetaText: {
    fontSize: FontSize.xs,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: FontWeight.medium,
  },

  // Continue
  continueCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  continueIcon: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.primaryDim,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueBody: {
    flex: 1,
  },
  continueTitle: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.semibold,
    color: Colors.textPrimary,
  },
  continueMeta: {
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
    marginTop: 2,
  },

  // Level card
  levelCard: {
    gap: 0,
    paddingVertical: Spacing.xs,
  },
  levelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    paddingVertical: Spacing.md,
  },
  levelRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  levelRowLeft: {
    width: 64,
  },
  levelRowBar: {
    flex: 1,
  },
  levelRowCount: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
    width: 44,
    textAlign: 'right',
  },
  levelRowTotal: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.regular,
    color: Colors.textQuaternary,
  },

  // Recent
  recentCard: {
    overflow: 'hidden',
  },
  recentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  recentRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  recentCheck: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.success,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recentTitle: {
    flex: 1,
    fontSize: FontSize.md,
    fontWeight: FontWeight.medium,
    color: Colors.textPrimary,
  },
  emptyRecent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  emptyRecentText: {
    flex: 1,
    fontSize: FontSize.sm,
    color: Colors.textTertiary,
    lineHeight: 19,
  },
});
