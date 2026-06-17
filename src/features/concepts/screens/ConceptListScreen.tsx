import React, { useState, useCallback } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useConcepts, useConceptCategories } from '../hooks/useConcepts';
import { ConceptCard } from '../../../components/ConceptCard';
import { SearchBar } from '../../../components/SearchBar';
import { EmptyState } from '../../../components/EmptyState';
import { LoadingScreen } from '../../../components/LoadingScreen';
import { Colors } from '../../../constants/colors';
import { Spacing, BorderRadius } from '../../../constants/layout';
import { FontSize, FontWeight } from '../../../constants/typography';
import { Concept, ConceptCategory } from '../../../types/concept';
import { ConceptListNavigationProp } from '../../../navigation/types';
import { useDebounce } from '../../../hooks/useDebounce';

export function ConceptListScreen() {
  const navigation = useNavigation<ConceptListNavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ConceptCategory | 'All'>('All');

  const debouncedSearch = useDebounce(searchQuery, 300);
  const { data: categories } = useConceptCategories();
  const { data: concepts, isLoading, error } = useConcepts({
    searchQuery: debouncedSearch,
    category: selectedCategory,
  });

  const handleConceptPress = useCallback(
    (concept: Concept) => {
      navigation.navigate('ConceptDetail', { conceptId: concept.id });
    },
    [navigation]
  );

  const renderConcept = useCallback(
    ({ item }: { item: Concept }) => (
      <ConceptCard concept={item} onPress={() => handleConceptPress(item)} />
    ),
    [handleConceptPress]
  );

  if (isLoading) return <LoadingScreen />;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>개념요약</Text>
        <Text style={styles.conceptCount}>{concepts?.length ?? 0}개</Text>
      </View>

      <View style={styles.searchContainer}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="개념 검색..."
        />
      </View>

      <View style={styles.filterSection}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}
        >
          <TouchableOpacity
            style={[styles.filterChip, selectedCategory === 'All' && styles.filterChipActive]}
            onPress={() => setSelectedCategory('All')}
          >
            <Text style={[styles.filterChipText, selectedCategory === 'All' && styles.filterChipTextActive]}>
              전체
            </Text>
          </TouchableOpacity>
          {categories?.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.filterChip, selectedCategory === cat && styles.filterChipActive]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text style={[styles.filterChipText, selectedCategory === cat && styles.filterChipTextActive]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={concepts ?? []}
        keyExtractor={(item) => item.id}
        renderItem={renderConcept}
        contentContainerStyle={[
          styles.listContent,
          (!concepts || concepts.length === 0) && styles.emptyList,
        ]}
        ListEmptyComponent={
          error ? (
            <EmptyState icon="⚠️" title="오류가 발생했습니다" />
          ) : (
            <EmptyState
              icon="📚"
              title="개념이 없습니다"
              description="다른 검색어나 카테고리를 선택해보세요"
            />
          )
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', paddingHorizontal: Spacing.lg, paddingTop: Spacing.md, paddingBottom: Spacing.sm },
  headerTitle: { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  conceptCount: { fontSize: FontSize.sm, color: Colors.textTertiary },
  searchContainer: { paddingHorizontal: Spacing.lg, paddingBottom: Spacing.md },
  filterSection: { paddingBottom: Spacing.sm, borderBottomWidth: 1, borderBottomColor: Colors.border },
  filterScroll: { paddingHorizontal: Spacing.lg, gap: Spacing.sm },
  filterChip: { paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm, borderRadius: BorderRadius.full, backgroundColor: Colors.surface, borderWidth: 1, borderColor: Colors.border },
  filterChipActive: { backgroundColor: Colors.primaryDim, borderColor: Colors.primary },
  filterChipText: { fontSize: FontSize.sm, color: Colors.textSecondary, fontWeight: FontWeight.medium },
  filterChipTextActive: { color: Colors.primary },
  listContent: { paddingVertical: Spacing.md },
  emptyList: { flex: 1, justifyContent: 'center' },
});
