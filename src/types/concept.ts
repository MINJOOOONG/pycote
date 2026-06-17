export type ConceptCategory =
  | 'Python Basics'
  | 'Variables'
  | 'Data Types'
  | 'String'
  | 'List'
  | 'Tuple'
  | 'Set'
  | 'Dictionary'
  | 'Function'
  | 'Recursion'
  | 'Stack'
  | 'Queue'
  | 'Heap'
  | 'DFS'
  | 'BFS'
  | 'Binary Search'
  | 'Dynamic Programming'
  | 'Greedy'
  | 'Graph'
  | 'Sorting';

export interface CodeExample {
  description: string;
  code: string;
  output?: string;
}

export interface Concept {
  id: string;
  title: string;
  category: ConceptCategory;
  summary: string;
  codeExamples: CodeExample[];
  patterns: string[];
  tips: string[];
  relatedProblemIds?: string[];
  order: number;
}
