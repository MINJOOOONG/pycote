import { Problem } from '../types/problem';

export const PROBLEMS: Problem[] = [
  // ── Lv.0 ────────────────────────────────────────────────────────────────

  {
    id: 'prob_0001',
    title: '두 수의 합',
    level: 0,
    category: 'Math',
    description:
      '두 정수 `a`와 `b`가 주어집니다. `a`와 `b`의 합을 반환하는 함수를 작성하세요.',
    inputDescription: '두 정수 a, b',
    outputDescription: 'a와 b의 합',
    constraints: ['-1,000,000 ≤ a, b ≤ 1,000,000'],
    examples: [
      { input: 'a = 1, b = 2', output: '3' },
      { input: 'a = 100, b = 200', output: '300' },
    ],
    starterCode: 'def solution(a, b):\n    return 0',
    testCases: [
      { id: 'tc1', input: 'a = 1, b = 2', expectedOutput: '3', hidden: false },
      { id: 'tc2', input: 'a = 100, b = 200', expectedOutput: '300', hidden: false },
      { id: 'tc3', input: 'a = -1, b = 1', expectedOutput: '0', hidden: true },
      { id: 'tc4', input: 'a = 0, b = 0', expectedOutput: '0', hidden: true },
      { id: 'tc5', input: 'a = 999, b = 1', expectedOutput: '1000', hidden: true },
    ],
    hints: [
      'Python의 + 연산자를 사용하세요.',
      'return a + b 한 줄로 해결됩니다.',
    ],
    solution: 'def solution(a, b):\n    return a + b',
    explanation: '두 수를 더해 반환합니다. Python의 + 연산자를 사용하면 됩니다.',
    tags: ['수학', '기초'],
    acceptRate: 95.2,
    solveCount: 98500,
    estimatedMinutes: 3,
    createdAt: '2024-01-01',
  },

  {
    id: 'prob_0002',
    title: '짝수와 홀수',
    level: 0,
    category: 'Math',
    description:
      '정수 `num`이 짝수이면 `"Even"`을, 홀수이면 `"Odd"`를 반환하는 함수를 작성하세요.',
    inputDescription: '정수 num',
    outputDescription: '"Even" 또는 "Odd"',
    constraints: ['-1,000 ≤ num ≤ 1,000', 'num은 정수'],
    examples: [
      { input: 'num = 3', output: 'Odd' },
      { input: 'num = 4', output: 'Even' },
    ],
    starterCode: 'def solution(num):\n    return ""',
    testCases: [
      { id: 'tc1', input: 'num = 3', expectedOutput: 'Odd', hidden: false },
      { id: 'tc2', input: 'num = 4', expectedOutput: 'Even', hidden: false },
      { id: 'tc3', input: 'num = 0', expectedOutput: 'Even', hidden: true },
      { id: 'tc4', input: 'num = -5', expectedOutput: 'Odd', hidden: true },
      { id: 'tc5', input: 'num = 1000', expectedOutput: 'Even', hidden: true },
    ],
    hints: [
      '나머지 연산자 %를 사용하세요. 짝수는 num % 2 == 0 입니다.',
      '삼항 연산자: "Even" if num % 2 == 0 else "Odd"',
    ],
    solution: 'def solution(num):\n    return "Even" if num % 2 == 0 else "Odd"',
    explanation:
      '나머지 연산자(%)로 2로 나눈 나머지가 0이면 짝수, 아니면 홀수입니다.',
    tags: ['수학', '조건문'],
    acceptRate: 93.8,
    solveCount: 95200,
    estimatedMinutes: 3,
    createdAt: '2024-01-01',
  },

  {
    id: 'prob_0003',
    title: '문자열 뒤집기',
    level: 0,
    category: 'String',
    description:
      '문자열 `s`가 주어집니다. 문자열을 뒤집어서 반환하는 함수를 작성하세요.',
    inputDescription: '문자열 s (1 ≤ len(s) ≤ 1,000)',
    outputDescription: '뒤집힌 문자열',
    constraints: ['1 ≤ len(s) ≤ 1,000', 's는 알파벳 소문자로만 구성'],
    examples: [
      { input: 's = "hello"', output: 'olleh' },
      { input: 's = "python"', output: 'nohtyp' },
    ],
    starterCode: 'def solution(s):\n    return ""',
    testCases: [
      { id: 'tc1', input: 's = "hello"', expectedOutput: 'olleh', hidden: false },
      { id: 'tc2', input: 's = "python"', expectedOutput: 'nohtyp', hidden: false },
      { id: 'tc3', input: 's = "a"', expectedOutput: 'a', hidden: true },
      { id: 'tc4', input: 's = "abcd"', expectedOutput: 'dcba', hidden: true },
      { id: 'tc5', input: 's = "racecar"', expectedOutput: 'racecar', hidden: true },
    ],
    hints: [
      'Python 슬라이싱을 활용하세요.',
      's[::-1]은 문자열을 뒤집는 파이썬만의 강력한 표현입니다.',
    ],
    solution: 'def solution(s):\n    return s[::-1]',
    explanation:
      '슬라이싱 s[::-1]은 step을 -1로 설정하여 문자열을 역순으로 반환합니다.',
    tags: ['문자열', '슬라이싱'],
    acceptRate: 91.5,
    solveCount: 88300,
    estimatedMinutes: 4,
    createdAt: '2024-01-02',
  },

  {
    id: 'prob_0004',
    title: '배열의 최솟값',
    level: 0,
    category: 'Array',
    description:
      '정수 배열 `arr`이 주어집니다. 배열에서 가장 작은 값을 반환하는 함수를 작성하세요.',
    inputDescription: '정수 배열 arr',
    outputDescription: 'arr에서 가장 작은 정수',
    constraints: ['1 ≤ len(arr) ≤ 1,000', '-1,000,000 ≤ arr[i] ≤ 1,000,000'],
    examples: [
      { input: 'arr = [3, 1, 2]', output: '1' },
      { input: 'arr = [5, 2, 7, 1]', output: '1' },
    ],
    starterCode: 'def solution(arr):\n    return 0',
    testCases: [
      { id: 'tc1', input: 'arr = [3, 1, 2]', expectedOutput: '1', hidden: false },
      { id: 'tc2', input: 'arr = [5, 2, 7, 1]', expectedOutput: '1', hidden: false },
      { id: 'tc3', input: 'arr = [10]', expectedOutput: '10', hidden: true },
      { id: 'tc4', input: 'arr = [-1, -5, 3]', expectedOutput: '-5', hidden: true },
      { id: 'tc5', input: 'arr = [100, 200, 50]', expectedOutput: '50', hidden: true },
    ],
    hints: [
      'Python 내장 함수 min()을 사용하세요.',
      '직접 반복문으로도 구현할 수 있습니다.',
    ],
    solution: 'def solution(arr):\n    return min(arr)',
    explanation:
      'Python의 내장 함수 min()은 iterable에서 최솟값을 O(n)으로 반환합니다.',
    tags: ['배열', '내장함수'],
    acceptRate: 94.1,
    solveCount: 92100,
    estimatedMinutes: 4,
    createdAt: '2024-01-02',
  },

  {
    id: 'prob_0005',
    title: '나누기와 나머지',
    level: 0,
    category: 'Math',
    description:
      '두 정수 `a`, `b`가 주어질 때, `a`를 `b`로 나눈 **몫**과 **나머지**를 `[몫, 나머지]` 형태의 리스트로 반환하는 함수를 작성하세요.',
    inputDescription: '두 정수 a, b (b ≠ 0)',
    outputDescription: '[a // b, a % b]',
    constraints: ['-1,000 ≤ a ≤ 1,000', '1 ≤ b ≤ 1,000'],
    examples: [
      { input: 'a = 10, b = 3', output: '[3, 1]', explanation: '10 ÷ 3 = 몫 3, 나머지 1' },
      { input: 'a = 7, b = 2', output: '[3, 1]', explanation: '7 ÷ 2 = 몫 3, 나머지 1' },
    ],
    starterCode: 'def solution(a, b):\n    return []',
    testCases: [
      { id: 'tc1', input: 'a = 10, b = 3', expectedOutput: '[3, 1]', hidden: false },
      { id: 'tc2', input: 'a = 7, b = 2', expectedOutput: '[3, 1]', hidden: false },
      { id: 'tc3', input: 'a = 100, b = 7', expectedOutput: '[14, 2]', hidden: true },
      { id: 'tc4', input: 'a = 5, b = 5', expectedOutput: '[1, 0]', hidden: true },
      { id: 'tc5', input: 'a = 0, b = 3', expectedOutput: '[0, 0]', hidden: true },
    ],
    hints: [
      '정수 나눗셈은 // 연산자, 나머지는 % 연산자를 사용하세요.',
      'Python의 divmod(a, b)도 활용할 수 있습니다.',
    ],
    solution: 'def solution(a, b):\n    return [a // b, a % b]',
    explanation:
      '// 연산자는 몫, % 연산자는 나머지를 반환합니다. divmod(a, b)로도 동일하게 구현 가능합니다.',
    tags: ['수학', '연산자'],
    acceptRate: 89.3,
    solveCount: 81200,
    estimatedMinutes: 5,
    createdAt: '2024-01-03',
  },

  // ── Lv.1 ────────────────────────────────────────────────────────────────

  {
    id: 'prob_0006',
    title: '두 정수 사이의 합',
    level: 1,
    category: 'Math',
    description:
      '두 정수 `a`, `b`가 주어질 때 `a`와 `b` 사이에 있는 모든 정수의 합을 반환하세요. `a`와 `b`가 같은 경우 해당 값을 반환합니다. `a > b`인 경우도 처리해야 합니다.',
    inputDescription: '두 정수 a, b',
    outputDescription: 'a 이상 b 이하 (또는 b 이상 a 이하) 모든 정수의 합',
    constraints: ['-10,000,000 ≤ a, b ≤ 10,000,000', 'a ≤ b가 보장되지 않습니다'],
    examples: [
      { input: 'a = 3, b = 5', output: '12', explanation: '3 + 4 + 5 = 12' },
      { input: 'a = 3, b = 3', output: '3' },
      { input: 'a = 5, b = 3', output: '12', explanation: 'a > b인 경우' },
    ],
    starterCode: 'def solution(a, b):\n    return 0',
    testCases: [
      { id: 'tc1', input: 'a = 3, b = 5', expectedOutput: '12', hidden: false },
      { id: 'tc2', input: 'a = 3, b = 3', expectedOutput: '3', hidden: false },
      { id: 'tc3', input: 'a = 5, b = 3', expectedOutput: '12', hidden: true },
      { id: 'tc4', input: 'a = -4, b = 1', expectedOutput: '-9', hidden: true },
      { id: 'tc5', input: 'a = 1, b = 100', expectedOutput: '5050', hidden: true },
    ],
    hints: [
      'a > b인 경우도 처리해야 합니다. min/max로 순서를 맞춰보세요.',
      'sum(range(start, end + 1))을 사용하면 간결합니다.',
      '등차수열 합 공식: (첫째항 + 끝항) * 항수 // 2도 활용 가능합니다.',
    ],
    solution:
      'def solution(a, b):\n    if a > b:\n        a, b = b, a\n    return sum(range(a, b + 1))',
    explanation:
      'a > b인 경우를 스왑으로 처리한 뒤 range()와 sum()으로 합산합니다.',
    tags: ['수학', '범위', '등차수열'],
    acceptRate: 77.4,
    solveCount: 62800,
    estimatedMinutes: 8,
    createdAt: '2024-01-04',
  },

  {
    id: 'prob_0007',
    title: '가운데 글자 가져오기',
    level: 1,
    category: 'String',
    description:
      '단어 `s`의 가운데 글자를 반환하는 함수를 만들어 보세요. 단어의 길이가 짝수라면 가운데 **두 글자**를 반환합니다.',
    inputDescription: '문자열 s',
    outputDescription: '가운데 글자(홀수 길이) 또는 가운데 두 글자(짝수 길이)',
    constraints: ['s의 길이는 1 이상 100 이하', 's는 알파벳으로만 구성'],
    examples: [
      { input: 's = "abcde"', output: 'c', explanation: '길이 5 → 인덱스 2' },
      { input: 's = "qwer"', output: 'we', explanation: '길이 4 → 인덱스 1, 2' },
    ],
    starterCode: 'def solution(s):\n    return ""',
    testCases: [
      { id: 'tc1', input: 's = "abcde"', expectedOutput: 'c', hidden: false },
      { id: 'tc2', input: 's = "qwer"', expectedOutput: 'we', hidden: false },
      { id: 'tc3', input: 's = "a"', expectedOutput: 'a', hidden: true },
      { id: 'tc4', input: 's = "ab"', expectedOutput: 'ab', hidden: true },
      { id: 'tc5', input: 's = "hello"', expectedOutput: 'l', hidden: true },
      { id: 'tc6', input: 's = "python"', expectedOutput: 'th', hidden: true },
    ],
    hints: [
      '문자열 길이를 n이라 할 때, 가운데 인덱스는 n // 2입니다.',
      '홀수: s[n//2] / 짝수: s[n//2 - 1 : n//2 + 1]',
    ],
    solution:
      'def solution(s):\n    n = len(s)\n    mid = n // 2\n    return s[mid] if n % 2 == 1 else s[mid - 1:mid + 1]',
    explanation:
      '홀수 길이는 중간 인덱스 하나, 짝수 길이는 중간 두 인덱스를 슬라이싱으로 반환합니다.',
    tags: ['문자열', '슬라이싱', '인덱싱'],
    acceptRate: 74.2,
    solveCount: 58400,
    estimatedMinutes: 10,
    createdAt: '2024-01-04',
  },

  {
    id: 'prob_0008',
    title: '핸드폰 번호 가리기',
    level: 1,
    category: 'String',
    description:
      '핸드폰 번호를 나타내는 문자열 `phone_number`가 주어질 때, 마지막 4자리를 제외한 나머지를 모두 `*`로 바꾼 문자열을 반환하세요.',
    inputDescription: '문자열 phone_number (숫자로만 구성)',
    outputDescription: '마지막 4자리만 남기고 나머지는 * 처리한 문자열',
    constraints: ['4 ≤ phone_number.length ≤ 20', 'phone_number는 숫자로만 구성'],
    examples: [
      { input: 'phone_number = "01033334444"', output: '*******4444' },
      { input: 'phone_number = "027778888"', output: '*****8888' },
    ],
    starterCode: 'def solution(phone_number):\n    return ""',
    testCases: [
      { id: 'tc1', input: 'phone_number = "01033334444"', expectedOutput: '*******4444', hidden: false },
      { id: 'tc2', input: 'phone_number = "027778888"', expectedOutput: '*****8888', hidden: false },
      { id: 'tc3', input: 'phone_number = "12345"', expectedOutput: '*2345', hidden: true },
      { id: 'tc4', input: 'phone_number = "1234"', expectedOutput: '1234', hidden: true },
      { id: 'tc5', input: 'phone_number = "0100000001"', expectedOutput: '******0001', hidden: true },
    ],
    hints: [
      '마지막 4자리: phone_number[-4:]',
      '앞부분 마스킹: "*" * (len(phone_number) - 4)',
    ],
    solution:
      'def solution(phone_number):\n    return "*" * (len(phone_number) - 4) + phone_number[-4:]',
    explanation:
      '길이 - 4만큼의 * 문자열과 마지막 4자리를 이어붙이면 됩니다.',
    tags: ['문자열', '슬라이싱'],
    acceptRate: 82.6,
    solveCount: 71300,
    estimatedMinutes: 7,
    createdAt: '2024-01-05',
  },

  {
    id: 'prob_0009',
    title: '정수 내림차순으로 배치',
    level: 1,
    category: 'Sorting',
    description:
      '정수 `n`의 각 자릿수를 내림차순으로 정렬하여 정수로 반환하세요. 예를 들어 n이 `118372`이면 `873211`을 반환합니다.',
    inputDescription: '양의 정수 n',
    outputDescription: '각 자릿수를 내림차순으로 정렬한 정수',
    constraints: ['1 ≤ n ≤ 8,000,000,000'],
    examples: [
      { input: 'n = 118372', output: '873211' },
      { input: 'n = 100', output: '100' },
    ],
    starterCode: 'def solution(n):\n    return 0',
    testCases: [
      { id: 'tc1', input: 'n = 118372', expectedOutput: '873211', hidden: false },
      { id: 'tc2', input: 'n = 100', expectedOutput: '100', hidden: false },
      { id: 'tc3', input: 'n = 1', expectedOutput: '1', hidden: true },
      { id: 'tc4', input: 'n = 125', expectedOutput: '521', hidden: true },
      { id: 'tc5', input: 'n = 9876543210', expectedOutput: '9876543210', hidden: true },
    ],
    hints: [
      '정수를 문자열로 변환해 각 자릿수를 다루세요: str(n)',
      'sorted()에 reverse=True를 사용해 내림차순 정렬 후 다시 int로 변환하세요.',
    ],
    solution:
      'def solution(n):\n    return int("".join(sorted(str(n), reverse=True)))',
    explanation:
      'str(n)으로 각 자릿수를 문자로 변환하고, sorted(reverse=True)로 정렬 후 join해서 int로 변환합니다.',
    tags: ['정렬', '문자열 변환'],
    acceptRate: 71.8,
    solveCount: 54700,
    estimatedMinutes: 10,
    createdAt: '2024-01-05',
  },

  {
    id: 'prob_0010',
    title: '콜라츠 추측',
    level: 1,
    category: 'Math',
    description:
      '1937년 Lothar Collatz가 제기한 추측에 따르면, 어떤 양의 정수에 다음 규칙을 반복하면 항상 1에 도달합니다.\n\n규칙:\n• 입력값이 짝수이면 2로 나눕니다.\n• 입력값이 홀수이면 3을 곱하고 1을 더합니다.\n\n주어진 수 num이 1이 되기까지 몇 번의 규칙이 필요한지 반환하세요. 500번 이내에 1이 되지 않으면 -1을 반환합니다.',
    inputDescription: '양의 정수 num',
    outputDescription: '1이 되기까지 필요한 횟수 (500번 초과 시 -1)',
    constraints: ['1 ≤ num ≤ 8,000,000'],
    examples: [
      { input: 'num = 6', output: '8', explanation: '6→3→10→5→16→8→4→2→1 (8번)' },
      { input: 'num = 1', output: '0', explanation: '이미 1이므로 0번' },
      { input: 'num = 16', output: '4', explanation: '16→8→4→2→1 (4번)' },
    ],
    starterCode: 'def solution(num):\n    return 0',
    testCases: [
      { id: 'tc1', input: 'num = 6', expectedOutput: '8', hidden: false },
      { id: 'tc2', input: 'num = 1', expectedOutput: '0', hidden: false },
      { id: 'tc3', input: 'num = 16', expectedOutput: '4', hidden: true },
      { id: 'tc4', input: 'num = 626331', expectedOutput: '-1', hidden: true },
      { id: 'tc5', input: 'num = 27', expectedOutput: '111', hidden: true },
    ],
    hints: [
      'while 반복문으로 num이 1이 될 때까지 반복하세요.',
      '500번 초과 시 -1을 반환하는 조건을 잊지 마세요.',
      '짝수/홀수 분기: if num % 2 == 0',
    ],
    solution:
      'def solution(num):\n    count = 0\n    while num != 1:\n        if count >= 500:\n            return -1\n        num = num // 2 if num % 2 == 0 else num * 3 + 1\n        count += 1\n    return count',
    explanation:
      'while 루프로 num이 1이 될 때까지 반복하며 횟수를 셉니다. 500회 초과 시 즉시 -1을 반환합니다.',
    tags: ['수학', '반복문', '시뮬레이션'],
    acceptRate: 68.3,
    solveCount: 49100,
    estimatedMinutes: 12,
    createdAt: '2024-01-06',
  },
];
