export type DifficultyLevel = 0 | 1 | 2 | 3 | 4 | 5;

export type ProblemCategory =
  | 'Array'
  | 'String'
  | 'Stack'
  | 'Queue'
  | 'Heap'
  | 'DFS'
  | 'BFS'
  | 'BinarySearch'
  | 'DynamicProgramming'
  | 'Greedy'
  | 'Graph'
  | 'Sorting'
  | 'HashTable'
  | 'TwoPointer'
  | 'SlidingWindow'
  | 'Recursion'
  | 'Math';

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
  hidden: boolean;
}

export interface Problem {
  id: string;
  title: string;
  level: DifficultyLevel;
  category: ProblemCategory;
  description: string;
  inputDescription: string;
  outputDescription: string;
  constraints: string[];
  examples: Example[];
  starterCode: string;
  testCases: TestCase[];
  hints: string[];
  solution: string;
  explanation: string;
  tags: string[];
  acceptRate?: number;
  solveCount?: number;
  createdAt: string;
}
