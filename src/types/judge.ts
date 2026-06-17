export interface TestCaseResult {
  id: string;
  input: string;
  expectedOutput: string;
  actualOutput: string;
  passed: boolean;
  hidden: boolean;
  executionTime: number;
}

export interface RunResult {
  status: 'success' | 'error';
  results: TestCaseResult[];
  totalTime: number;
  error?: string;
}

export type SubmitStatus = 'accepted' | 'wrong_answer' | 'runtime_error' | 'empty_code';

export interface SubmitResult {
  status: SubmitStatus;
  passedCount: number;
  totalCount: number;
  results: TestCaseResult[];
  totalTime: number;
}
