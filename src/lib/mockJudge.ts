import { TestCase } from '../types/problem';
import { RunResult, SubmitResult, SubmitStatus, TestCaseResult } from '../types/judge';

function sleep(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}

const DEFAULT_RETURNS = new Set([
  'return 0',
  'return ""',
  "return ''",
  'return []',
  'return False',
  'return None',
  'return {}',
  'return ()',
]);

function isMeaningful(code: string, starterCode: string): boolean {
  const trimmed = code.trim();
  if (!trimmed) return false;
  if (trimmed === starterCode.trim()) return false;

  const lines = trimmed
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));

  return lines.some(
    (l) => l.startsWith('return ') && !DEFAULT_RETURNS.has(l),
  );
}

export async function runExamples(
  code: string,
  starterCode: string,
  testCases: TestCase[],
): Promise<RunResult> {
  await sleep(600 + Math.random() * 400);

  if (!code.trim()) {
    return { status: 'error', results: [], totalTime: 0, error: '코드를 입력해주세요.' };
  }

  const visible = testCases.filter((tc) => !tc.hidden);
  const passed = isMeaningful(code, starterCode);

  const results: TestCaseResult[] = visible.map((tc) => ({
    id: tc.id,
    input: tc.input,
    expectedOutput: tc.expectedOutput,
    actualOutput: passed ? tc.expectedOutput : '오답',
    passed,
    hidden: false,
    executionTime: Math.floor(Math.random() * 15) + 1,
  }));

  return {
    status: 'success',
    results,
    totalTime: results.reduce((s, r) => s + r.executionTime, 0),
  };
}

export async function submitCode(
  code: string,
  starterCode: string,
  testCases: TestCase[],
): Promise<SubmitResult> {
  await sleep(1000 + Math.random() * 800);

  if (!code.trim()) {
    return {
      status: 'empty_code',
      passedCount: 0,
      totalCount: testCases.length,
      results: [],
      totalTime: 0,
    };
  }

  const passed = isMeaningful(code, starterCode);

  const results: TestCaseResult[] = testCases.map((tc) => ({
    id: tc.id,
    input: tc.hidden ? '(숨겨진 입력)' : tc.input,
    expectedOutput: tc.hidden ? '(숨겨진 정답)' : tc.expectedOutput,
    actualOutput: passed ? (tc.hidden ? '(정답)' : tc.expectedOutput) : '오답',
    passed,
    hidden: tc.hidden,
    executionTime: Math.floor(Math.random() * 50) + 5,
  }));

  const passedCount = results.filter((r) => r.passed).length;

  let status: SubmitStatus = 'wrong_answer';
  if (passedCount === testCases.length) status = 'accepted';

  return {
    status,
    passedCount,
    totalCount: testCases.length,
    results,
    totalTime: results.reduce((s, r) => s + r.executionTime, 0),
  };
}
