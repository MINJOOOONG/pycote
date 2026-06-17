import React, { useCallback } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useProblems } from '../hooks/useProblems';
import { useProblemFilterStore } from '../../../store/problemFilterStore';
import { useBookmarkStore } from '../../../store/bookmarkStore';
import { useProgressStore } from '../../../store/progressStore';
import { ProblemCard } from '../../../components/ProblemCard';
import { SearchBar } from '../../../components/SearchBar';
import { EmptyState } from '../../../components/EmptyState';
import { LoadingScreen } from '../../../components/LoadingScreen';
import { getLevelConfig } from '../../../constants/levels';
import { Colors } from '../../../constants/colors';
import { Spacing, BorderRadius, ScreenPadding } from '../../../constants/layout';
import { FontSize, FontWeight } from '../../../constants/typography';
import { DifficultyLevel, Problem } from '../../../types/problem';
import { ProblemListNavigationProp } from '../../../navigation/types';

const LEVELS: DifficultyLevel[] = [0, 1, 2, 3, 4, 5];

export function ProblemListScreen() {
  const navigation = useNavigation<ProblemListNavigationProp>();
  const { data: problems, isLoading, error } = useProblems();
  const { searchQuery, selectedLevels, setSearchQuery, toggleLevel, resetFilters } =
    useProblemFilterStore();
  const { isBookmarked, toggleBookmark } = useBookmarkStore();
  const { getProgress } = useProgressStore();

  const hasFilters = selectedLevels.length > 0;

  const handleProblemPress = useCallback(
    (problem: Problem) => navigation.navigate('ProblemDetail', { problemId: problem.id }),
    [navigation],
  );

  const renderProblem = useCallback(
    ({ item }: { item: Problem }) => {
      const progress = getProgress(item.id);
      return (
        <ProblemCard
          problem={item}
          onPress={() => handleProblemPress(item)}
          isBookmarked={isBookmarked(item.id)}
          onBookmarkPress={() => toggleBookmark(item.id)}
          isSolved={progress?.status === 'solved'}
        />
      );
    },
    [handleProblemPress, isBookmarked, toggleBookmark, getProgress],
  );

  if (isLoading) return <LoadingScreen />;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>문제풀이</Text>
        <Text style={styles.headerSub}>
          총 {problems?.length ?? 0}개의 Python 문제
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <SearchBar value={searchQuery} onChangeText={setSearchQuery} placeholder="문제 검색..." />
      </View>

      <View style={styles.filterSection}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}
        >
          <TouchableOpacity
            style={[styles.chip, !hasFilters && styles.chipActive]}
            onPress={resetFilters}
            activeOpacity={0.8}
          >
            <Text style={[styles.chipText, !hasFilters && styles.chipTextActive]}>전체</Text>
          </TouchableOpacity>
          {LEVELS.map((level) => {
            const active = selectedLevels.includes(level);
            const config = getLevelConfig(level);
            return (
              <TouchableOpacity
                key={level}
                style={[
                  styles.chip,
                  active && { backgroundColor: config.backgroundColor, borderColor: config.color },
                ]}
                onPress={() => toggleLevel(level)}
                activeOpacity={0.8}
              >
                <View style={[styles.chipDot, { backgroundColor: config.color }]} />
                <Text style={[styles.chipText, active && { color: config.color, fontWeight: FontWeight.semibold }]}>
                  {config.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <FlatList
        data={problems ?? []}
        keyExtractor={(item) => item.id}
        renderItem={renderProblem}
        contentContainerStyle={[
          styles.listContent,
          (!problems || problems.length === 0) && styles.emptyList,
        ]}
        ListEmptyComponent={
          error ? (
            <EmptyState icon="alert-triangle" title="오류가 발생했습니다" description="잠시 후 다시 시도해주세요" />
          ) : (
            <EmptyState icon="search" title="검색 결과가 없습니다" description="다른 검색어나 필터를 사용해보세요" />
          )
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: {
    paddingHorizontal: ScreenPadding,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  headerTitle: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
    letterSpacing: -0.5,
  },
  headerSub: {
    fontSize: FontSize.sm,
    color: Colors.textTertiary,
    marginTop: 2,
  },
  searchContainer: {
    paddingHorizontal: ScreenPadding,
    paddingBottom: Spacing.md,
  },
  filterSection: {
    paddingBottom: Spacing.md,
  },
  filterScroll: {
    paddingHorizontal: ScreenPadding,
    gap: Spacing.sm,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: Spacing.md,
    height: 36,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  chipActive: {
    backgroundColor: Colors.primaryDim,
    borderColor: Colors.primary,
  },
  chipDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  chipText: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    fontWeight: FontWeight.medium,
  },
  chipTextActive: {
    color: Colors.primary,
    fontWeight: FontWeight.semibold,
  },
  listContent: {
    paddingTop: Spacing.xs,
    paddingBottom: Spacing.xl,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
  },
});
