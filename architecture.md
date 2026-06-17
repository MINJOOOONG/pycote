# Pycote Architecture

## 1. Product Goal

Pycote는 Python 코딩테스트를 연습할 수 있는 모바일 우선 학습 앱이다.

- 사용자는 문제 목록을 보고, 문제 상세를 확인하고, 직접 Python 코드를 작성하고, 예제 테스트를 실행하고, 제출 결과를 확인할 수 있어야 한다.
- 초기 MVP는 실제 온라인 저지 서버가 없더라도 mock 채점 구조로 동작해야 한다.
- 추후 Supabase/Firebase 및 서버 채점 시스템으로 확장 가능한 구조여야 한다.

---

## 2. Core User Flow

```
1. 앱 접속
2. 하단 탭 선택 → 문제풀이 | 개념요약
3. 문제풀이 탭 → 레벨별 문제 목록 확인
4. 문제 클릭 → 문제 상세 페이지 이동
5. 문제 설명 / 제한사항 / 입출력 예시 확인
6. 코드 에디터에서 Python 코드 작성
7. 실행 버튼 → 예제 테스트케이스 실행
8. 제출 버튼 → 전체 테스트 결과 확인
9. 성공/실패 상태 → 문제 목록에 반영
```

---

## 3. Main Features

### Problem Solving
- 문제 목록 (레벨 필터, 태그 필터)
- 문제 상세 (설명, 제한사항, 입출력 예시)
- Python 코드 에디터
- 실행 결과 표시
- 제출 결과 표시
- 풀이 상태 관리 (미시도 / 시도중 / 해결)

### Concept Summary
- Python 기초 문법
- 자료구조
- 알고리즘 패턴
- 문제와 개념 연결

### User Progress
- 푼 문제 수
- 정답/오답 상태
- 최근 푼 문제
- 다시 풀 문제

---

## 4. Recommended Folder Structure

```
src/
├── components/          # 공통 UI 컴포넌트 (버튼, 배지, 카드 등)
├── constants/           # 색상, 타이포그래피, 레이아웃, 레벨 설정
├── data/                # 하드코딩 mock 데이터 (문제, 개념)
├── features/
│   ├── problems/        # 문제풀이 피처
│   │   ├── screens/     # ProblemListScreen, ProblemDetailScreen
│   │   ├── components/  # CodeEditor, ResultPanel, TestCaseView
│   │   ├── hooks/       # useProblems, useProblemDetail, useCodeRunner
│   │   └── services/    # problemService (mock → API 교체 지점)
│   ├── concepts/        # 개념요약 피처
│   │   ├── screens/     # ConceptListScreen, ConceptDetailScreen
│   │   ├── hooks/       # useConcepts, useConceptDetail
│   │   └── services/    # conceptService
│   └── progress/        # 학습 현황 피처
│       ├── screens/     # ProgressSummaryScreen
│       ├── hooks/       # useProgress
│       └── services/    # progressService
├── hooks/               # 전역 공통 훅 (useDebounce 등)
├── lib/                 # 복잡한 로직 분리 (mockJudge, codeRunner 등)
├── navigation/          # RootNavigator, BottomTabNavigator, Stack navigators, types
├── store/               # Zustand 전역 상태 (필터, 북마크, 진행상태)
├── types/               # 전역 타입 정의 (problem.ts, concept.ts, common.ts)
└── utils/               # 순수 유틸 함수 (문자열, 날짜, 포맷 등)
```

### 각 폴더 역할

| 폴더 | 역할 |
|------|------|
| `components/` | 피처에 종속되지 않는 재사용 UI (LevelBadge, SearchBar, CodeBlock 등) |
| `constants/` | 디자인 토큰 및 앱 설정값. 하드코딩 금지 |
| `data/` | mock 데이터 파일. 백엔드 연동 시 삭제 예정 |
| `features/` | 기능 단위 폴더. 각 피처는 screens/hooks/services로 분리 |
| `lib/` | 비즈니스 로직이 포함된 복잡한 모듈 (채점 엔진 등) |
| `navigation/` | 화면 전환 구조 및 타입 정의 |
| `store/` | Zustand 전역 상태. persist 미들웨어로 AsyncStorage 연동 |
| `types/` | 전체 프로젝트에서 공유하는 TypeScript 타입 |
| `utils/` | 부작용 없는 순수 함수 모음 |

---

## 5. Data Model

```typescript
type DifficultyLevel = 0 | 1 | 2 | 3 | 4 | 5;

type Problem = {
  id: string;
  title: string;
  level: DifficultyLevel;
  tags: string[];
  category: ProblemCategory;
  description: string;
  constraints: string[];
  examples: Example[];
  starterCode: string;
  solutionCode?: string;
  testCases: TestCase[];
  acceptRate?: number;
  solveCount?: number;
};

type Example = {
  input: string;
  output: string;
  explanation?: string;
};

type TestCase = {
  input: string;
  expectedOutput: string;
  hidden?: boolean;
};

// 추가 제안 타입

type RunResult = {
  status: 'success' | 'error' | 'timeout';
  output?: string;
  error?: string;
  executionTime?: number;
};

type SubmitResult = {
  status: 'accepted' | 'wrong_answer' | 'runtime_error' | 'time_limit_exceeded';
  passedCount: number;
  totalCount: number;
  failedCase?: TestCase;
  executionTime?: number;
};

type ProblemProgress = {
  problemId: string;
  status: 'unsolved' | 'attempted' | 'solved';
  attempts: number;
  savedCode?: string;
  solvedAt?: string;
  lastAttemptAt: string;
};

type Concept = {
  id: string;
  category: ConceptCategory;
  title: string;
  summary: string;
  codeExamples: CodeExample[];
  keyPatterns: string[];
  tips: string[];
  relatedProblemIds?: string[];
  order: number;
};

type CodeExample = {
  title: string;
  code: string;
  language: 'python';
  explanation?: string;
};
```

---

## 6. Code Execution Strategy

### MVP: Mock Judge (현재)

실제 Python 실행 서버 없이 프론트엔드에서 mock 채점 구조로 동작한다.

```
사용자 코드 입력
  → lib/mockJudge.ts
    → 예제 테스트케이스와 문자열 비교
      → RunResult / SubmitResult 반환
```

- 코드 문자열은 Zustand store에 저장 (AsyncStorage 영속)
- 실행 버튼: 예제 테스트만 비교
- 제출 버튼: 숨김 포함 전체 테스트케이스 비교
- 실제 Python은 실행하지 않음 (보안 원칙)

### 추후 확장: Backend Judge Server

```
사용자 코드 입력
  → features/problems/services/judgeService.ts
    → POST /api/judge  (API Route 또는 별도 서버)
      → Docker sandbox에서 Python 실행
        → stdin/stdout 기반 테스트케이스 비교
          → SubmitResult 반환
```

확장 시 고려사항:
- Docker 기반 격리 실행 환경
- timeout 제한 (기본 2초)
- memory 제한 (기본 256MB)
- stdin/stdout 기반 테스트
- 브라우저에서 Python 코드를 직접 실행하지 않음 (보안 원칙 유지)
- `judgeService.ts`의 함수 시그니처를 mock과 동일하게 유지하여 교체 비용 최소화

---

## 7. UI Architecture

모바일 우선(Mobile First) 기준으로 설계한다.

### 화면 목록

| 화면 | 역할 |
|------|------|
| `ProblemListScreen` | 문제 목록, 레벨/태그 필터, 검색 |
| `ProblemDetailScreen` | 문제 설명, 제한사항, 입출력 예시, 에디터 진입 |
| `CodeEditorScreen` | Python 코드 작성, 실행/제출 버튼 |
| `ResultPanel` | 실행/제출 결과 표시 (하단 슬라이드 또는 별도 뷰) |
| `ConceptListScreen` | 개념 목록, 카테고리 필터 |
| `ConceptDetailScreen` | 개념 설명, 코드 예시, 팁 |
| `ProgressSummaryScreen` | 학습 현황, 푼 문제 수, 최근 활동 |

### 컴포넌트 분리 기준

```
screens/         → 화면 단위. 데이터 페칭 및 레이아웃 조합만 담당
  └── features/problems/components/
        ├── CodeEditor       → 코드 입력 영역 (에디터 라이브러리 래핑)
        ├── ResultPanel      → 실행/제출 결과 표시
        ├── TestCaseView     → 입출력 예시 카드
        └── SubmitButton     → 실행/제출 상태 관리 버튼

components/      → 피처 독립적인 공통 UI
  ├── LevelBadge
  ├── SearchBar
  ├── CodeBlock
  ├── EmptyState
  └── LoadingScreen
```

---

## 8. State Management

### 현재: Zustand + AsyncStorage

| 상태 | 저장소 | 영속 |
|------|--------|------|
| 선택한 문제 | navigation params | N |
| 작성 중인 코드 | `progressStore.savedCode` | Y |
| 실행 결과 | local component state | N |
| 제출 결과 | local component state | N |
| 푼 문제 상태 | `progressStore` | Y |
| 즐겨찾기 | `bookmarkStore` | Y |
| 레벨/태그 필터 | `problemFilterStore` | N |
| 최근 풀이 기록 | `progressStore` | Y |

### 추후: Supabase / Firebase 이전

- `progressStore`, `bookmarkStore`의 서비스 레이어만 교체
- Zustand 액션 내부에서 API 호출로 전환
- 화면 컴포넌트와 훅은 변경 없음

---

## 9. Future Roadmap

### Phase 1: Mock MVP (현재)
- [x] 문제 데이터 하드코딩 (30문제)
- [x] 문제 목록 / 상세 화면
- [x] 레벨 필터, 검색
- [x] 개념 요약 (20개)
- [x] 풀이 상태 AsyncStorage 저장
- [ ] 코드 에디터 통합
- [ ] 실행/제출 mock 채점

### Phase 2: Real Judge
- [ ] 서버 API 추가 (Next.js API Route 또는 FastAPI)
- [ ] Docker 기반 Python 실행 환경
- [ ] 테스트케이스 자동 채점
- [ ] timeout / memory 제한
- [ ] runtime error 처리

### Phase 3: User System
- [ ] Supabase 로그인 (이메일 / 소셜)
- [ ] 사용자별 풀이 기록 동기화
- [ ] 북마크 서버 저장
- [ ] 오답노트

### Phase 4: Content Expansion
- [ ] 문제 레벨 및 수량 확대
- [ ] 개념 요약 추가
- [ ] 알고리즘 유형별 학습 경로
- [ ] 문제-개념 연결 기능

---

## 10. Engineering Rules

1. **기능별 폴더 구조 유지** — 새 기능은 반드시 `features/` 아래 독립 폴더로 추가한다.
2. **문제 데이터와 UI 분리** — `data/`와 `components/`는 서로 직접 참조하지 않는다.
3. **타입 정의 우선** — 구현 전 `types/`에 타입을 먼저 정의한다.
4. **mock → API 교체 가능한 구조** — 서비스 함수 시그니처를 유지하면 내부 구현만 교체한다.
5. **모바일 화면 우선** — 모든 컴포넌트는 모바일 기준으로 먼저 설계한다.
6. **복잡한 로직은 lib/utils로 분리** — 화면 컴포넌트에 비즈니스 로직을 두지 않는다.
7. **색상/스타일 하드코딩 금지** — 반드시 `constants/colors.ts`의 `Colors`를 사용한다.
8. **레벨 색상은 LEVEL_CONFIG 사용** — `constants/levels.ts`의 `LEVEL_CONFIG` 외부에서 레벨 색상을 정의하지 않는다.
9. **상대 경로 import** — `@/` 경로 별칭을 사용하지 않는다.
10. **새 기능 추가 시 이 파일 업데이트** — architecture.md는 항상 현재 구조를 반영해야 한다.
