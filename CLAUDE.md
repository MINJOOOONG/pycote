# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**pycote** — Python coding interview prep app for Korean developers. Mobile-first, dark theme, targets Programmers/Baekjoon-style problems optimized for commute studying.

## Commands

```bash
# Install dependencies
npm install

# Start development server (web)
CI=1 EXPO_NO_TELEMETRY=1 EXPO_OFFLINE=1 npx expo start --web --port 8081

# Start for mobile (QR code)
npx expo start

# TypeScript check
npx tsc --noEmit
```

**Important**: Expo requires `EXPO_OFFLINE=1` in this environment because the CI container blocks Expo's version-check API. Without it, the dev server fails to start.

## Architecture

Feature-based folder structure under `src/`:

```
src/
├── features/
│   ├── problems/          # Problem solving feature
│   │   ├── screens/       # ProblemListScreen, ProblemDetailScreen
│   │   ├── hooks/         # useProblems, useProblemDetail (TanStack Query)
│   │   └── services/      # problemService (mock data → future API)
│   └── concepts/          # Concept summary feature
│       ├── screens/       # ConceptListScreen, ConceptDetailScreen
│       ├── hooks/         # useConcepts, useConceptDetail, useConceptCategories
│       └── services/      # conceptService
├── components/            # Shared UI: ProblemCard, ConceptCard, LevelBadge,
│                          #   SearchBar, CodeBlock, EmptyState, LoadingScreen
├── navigation/            # RootNavigator → BottomTabNavigator → Stack navigators
├── store/                 # Zustand: problemFilterStore, bookmarkStore, progressStore
├── data/                  # Mock data: problems.ts (30 problems), concepts.ts (20 concepts)
├── types/                 # problem.ts, concept.ts, common.ts
├── constants/             # colors.ts, typography.ts, layout.ts, levels.ts
└── hooks/                 # useDebounce
```

## Data Flow

```
Mock data files (src/data/)
  → *Service (src/features/*/services/)   ← swap this layer for real API
    → TanStack Query hooks (src/features/*/hooks/)
      → Screens
```

Zustand stores handle client-only state (filters, bookmarks, progress). TanStack Query handles server/async state. `bookmarkStore` and `progressStore` are persisted to AsyncStorage via Zustand's `persist` middleware.

## Key Conventions

- **Relative imports only** — no path aliases (`@/...`). The project does not configure babel-plugin-module-resolver.
- **Level system**: `DifficultyLevel = 0|1|2|3|4|5`. All display config (color, Korean label) lives in `src/constants/levels.ts` `LEVEL_CONFIG`. Never hardcode level colors elsewhere.
- **Adding a real backend**: Replace service functions in `src/features/*/services/`. The query hooks and screens are backend-agnostic.
- **Dark theme only**: All colors reference `Colors` from `src/constants/colors.ts`. Do not hardcode color strings in components.
- **Navigation types**: All screen param types are in `src/navigation/types.ts`. Always use the typed `useNavigation<T>()` hook.
- **2D list initialization**: Use `[[0]*m for _ in range(n)]`, never `[[0]*m]*n` (shared reference bug).

## Current Navigation Structure

```
BottomTab
├── ProblemsTab → ProblemList → ProblemDetail
└── ConceptsTab → ConceptList → ConceptDetail
```

Future tabs (not implemented): 통계, 북마크, 프로필.

## Mock Data

30 problems (`src/data/problems.ts`), IDs `prob_0001`–`prob_0030`, distributed Lv.0–5.
20 concepts (`src/data/concepts.ts`), IDs `concept_01`–`concept_20`, one per `ConceptCategory`.

When the real backend is ready, delete `src/data/` and update the service functions to call the API.
