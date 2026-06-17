import { Problem } from '../types/problem';

export const PROBLEMS: Problem[] = [
  // ─────────────────────────────────────────────────────────────
  // Level 0 — 매우 기본 (prob_0001 ~ prob_0005)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'prob_0001',
    title: '두 수의 합',
    level: 0,
    category: 'Math',
    description:
      '두 정수 a와 b가 주어집니다. 두 수의 합을 반환하는 함수를 작성하세요.',
    inputDescription: '정수 a와 정수 b가 주어집니다. (-1,000,000 ≤ a, b ≤ 1,000,000)',
    outputDescription: 'a와 b의 합을 정수로 반환합니다.',
    constraints: [
      '-1,000,000 ≤ a ≤ 1,000,000',
      '-1,000,000 ≤ b ≤ 1,000,000',
    ],
    examples: [
      {
        input: 'a = 3, b = 5',
        output: '8',
        explanation: '3 + 5 = 8',
      },
      {
        input: 'a = -2, b = 7',
        output: '5',
        explanation: '-2 + 7 = 5',
      },
    ],
    hints: [
      'Python의 + 연산자를 사용하세요.',
      '음수도 올바르게 처리되는지 확인하세요.',
    ],
    solution: `def solution(a, b):
    return a + b`,
    explanation:
      '가장 기본적인 덧셈 문제입니다. Python의 + 연산자를 사용해 두 수를 더한 결과를 반환합니다. 정수 범위 내에서 오버플로우 걱정 없이 사용할 수 있습니다.',
    tags: ['math', 'basic', 'operator'],
    acceptRate: 95,
    solveCount: 98500,
    createdAt: '2024-01-01',
  },
  {
    id: 'prob_0002',
    title: '짝수와 홀수',
    level: 0,
    category: 'Math',
    description:
      '정수 num이 주어질 때, num이 짝수이면 "Even", 홀수이면 "Odd"를 반환하는 함수를 작성하세요.',
    inputDescription: '정수 num이 주어집니다. (-1,000 ≤ num ≤ 1,000)',
    outputDescription: 'num이 짝수이면 "Even", 홀수이면 "Odd"를 반환합니다.',
    constraints: [
      '-1,000 ≤ num ≤ 1,000',
      'num은 정수입니다.',
    ],
    examples: [
      {
        input: 'num = 4',
        output: '"Even"',
        explanation: '4는 2로 나누어 떨어지므로 짝수입니다.',
      },
      {
        input: 'num = 3',
        output: '"Odd"',
        explanation: '3은 2로 나누어 떨어지지 않으므로 홀수입니다.',
      },
    ],
    hints: [
      '% (나머지) 연산자를 사용하세요.',
      'num % 2 == 0이면 짝수, 그렇지 않으면 홀수입니다.',
    ],
    solution: `def solution(num):
    return "Even" if num % 2 == 0 else "Odd"`,
    explanation:
      '나머지 연산자(%)를 이용해 2로 나눈 나머지가 0이면 짝수, 1이면 홀수로 판단합니다. Python의 삼항 표현식(조건부 표현식)을 사용하면 한 줄로 깔끔하게 작성할 수 있습니다. 음수의 경우에도 Python의 % 연산은 올바른 결과를 반환합니다.',
    tags: ['math', 'conditional', 'basic'],
    acceptRate: 94,
    solveCount: 95200,
    createdAt: '2024-01-01',
  },
  {
    id: 'prob_0003',
    title: '배열의 최댓값',
    level: 0,
    category: 'Array',
    description:
      '정수로 이루어진 배열 array가 주어질 때, 배열에서 가장 큰 값을 반환하는 함수를 작성하세요.',
    inputDescription: '정수 배열 array가 주어집니다. (1 ≤ array의 길이 ≤ 1,000, -1,000 ≤ 원소 ≤ 1,000)',
    outputDescription: '배열에서 가장 큰 정수를 반환합니다.',
    constraints: [
      '1 ≤ array의 길이 ≤ 1,000',
      '-1,000 ≤ array의 원소 ≤ 1,000',
      'array의 원소는 모두 정수입니다.',
    ],
    examples: [
      {
        input: 'array = [1, 8, 3, 5, 2]',
        output: '8',
        explanation: '배열에서 가장 큰 값은 8입니다.',
      },
      {
        input: 'array = [-3, -1, -5]',
        output: '-1',
        explanation: '모두 음수일 때도 가장 큰 값인 -1을 반환합니다.',
      },
    ],
    hints: [
      'Python 내장 함수 max()를 활용하세요.',
      '직접 반복문으로 최댓값을 찾아도 됩니다.',
    ],
    solution: `def solution(array):
    return max(array)`,
    explanation:
      'Python 내장 함수 max()를 사용하면 배열의 최댓값을 O(n) 시간에 쉽게 구할 수 있습니다. 직접 구현한다면 현재까지의 최댓값을 변수에 저장하며 순회하는 방법을 사용합니다. 배열이 비어있는 경우는 제약 조건상 발생하지 않으므로 예외 처리는 필요하지 않습니다.',
    tags: ['array', 'basic', 'built-in'],
    acceptRate: 93,
    solveCount: 91000,
    createdAt: '2024-01-01',
  },
  {
    id: 'prob_0004',
    title: '문자열 길이',
    level: 0,
    category: 'String',
    description:
      '문자열 s가 주어질 때, 문자열의 길이를 반환하는 함수를 작성하세요.',
    inputDescription: '문자열 s가 주어집니다. (0 ≤ s의 길이 ≤ 1,000)',
    outputDescription: '문자열 s의 길이를 정수로 반환합니다.',
    constraints: [
      '0 ≤ s의 길이 ≤ 1,000',
      's는 영문자, 숫자, 공백으로만 이루어져 있습니다.',
    ],
    examples: [
      {
        input: 's = "Hello"',
        output: '5',
        explanation: '"Hello"는 5글자입니다.',
      },
      {
        input: 's = ""',
        output: '0',
        explanation: '빈 문자열의 길이는 0입니다.',
      },
    ],
    hints: [
      'Python 내장 함수 len()을 사용하세요.',
      '빈 문자열도 처리할 수 있는지 확인하세요.',
    ],
    solution: `def solution(s):
    return len(s)`,
    explanation:
      'Python의 내장 함수 len()은 문자열, 리스트, 튜플 등 시퀀스 자료형의 길이를 반환합니다. 빈 문자열("")에 대해 0을 반환하므로 별도 처리가 필요 없습니다. 시간 복잡도는 O(1)입니다.',
    tags: ['string', 'basic', 'built-in'],
    acceptRate: 96,
    solveCount: 102000,
    createdAt: '2024-01-01',
  },
  {
    id: 'prob_0005',
    title: '절댓값 정렬',
    level: 0,
    category: 'Array',
    description:
      '정수가 담긴 배열 array가 주어질 때, 배열의 원소를 절댓값 기준으로 오름차순 정렬하여 반환하는 함수를 작성하세요. 절댓값이 같을 경우 음수를 앞에 배치합니다.',
    inputDescription: '정수 배열 array가 주어집니다. (1 ≤ array의 길이 ≤ 1,000, -1,000 ≤ 원소 ≤ 1,000)',
    outputDescription: '절댓값 기준으로 오름차순 정렬된 배열을 반환합니다.',
    constraints: [
      '1 ≤ array의 길이 ≤ 1,000',
      '-1,000 ≤ array의 원소 ≤ 1,000',
      '원소에는 중복이 있을 수 있습니다.',
    ],
    examples: [
      {
        input: 'array = [-3, 1, 2, -8, 5]',
        output: '[1, 2, -3, 5, -8]',
        explanation: '절댓값 기준으로 정렬하면 1, 2, 3, 5, 8 순서입니다.',
      },
      {
        input: 'array = [-1, 1, 0]',
        output: '[0, -1, 1]',
        explanation: '0의 절댓값은 0이고, 1과 -1의 절댓값이 같으므로 음수가 먼저 옵니다.',
      },
    ],
    hints: [
      'sorted() 함수의 key 매개변수를 활용하세요.',
      'key=lambda x: (abs(x), x)로 절댓값 우선, 같으면 음수 우선 정렬을 할 수 있습니다.',
    ],
    solution: `def solution(array):
    return sorted(array, key=lambda x: (abs(x), x))`,
    explanation:
      'Python의 sorted() 함수에서 key 매개변수로 정렬 기준을 지정합니다. 튜플 (abs(x), x)를 key로 사용하면 첫 번째로 절댓값 기준 오름차순, 절댓값이 같을 경우 두 번째로 실제 값 기준 오름차순(음수 우선)으로 정렬됩니다. 람다 함수를 이용해 간결하게 표현할 수 있습니다.',
    tags: ['array', 'sorting', 'lambda'],
    acceptRate: 90,
    solveCount: 78000,
    createdAt: '2024-01-01',
  },

  // ─────────────────────────────────────────────────────────────
  // Level 1 — 기본 알고리즘 (prob_0006 ~ prob_0013)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'prob_0006',
    title: '문자열 뒤집기',
    level: 1,
    category: 'String',
    description:
      '문자열 s가 주어졌을 때, 문자열을 뒤집어서 반환하는 함수를 작성하세요.',
    inputDescription: '문자열 s가 주어집니다. (1 ≤ s의 길이 ≤ 100,000)',
    outputDescription: '문자열 s를 뒤집은 문자열을 반환합니다.',
    constraints: [
      '1 ≤ s의 길이 ≤ 100,000',
      's는 알파벳 소문자로만 이루어져 있습니다.',
    ],
    examples: [
      {
        input: 's = "hello"',
        output: '"olleh"',
        explanation: '"hello"를 뒤집으면 "olleh"가 됩니다.',
      },
      {
        input: 's = "abcde"',
        output: '"edcba"',
        explanation: '"abcde"를 뒤집으면 "edcba"가 됩니다.',
      },
    ],
    hints: [
      'Python 슬라이싱 s[::-1]을 활용하세요.',
      'reversed() 함수와 join()을 이용할 수도 있습니다.',
    ],
    solution: `def solution(s):
    return s[::-1]`,
    explanation:
      'Python에서 문자열 슬라이싱 s[::-1]은 문자열을 역순으로 반환하는 가장 파이썬스러운 방법입니다. 슬라이싱 [start:stop:step]에서 step을 -1로 지정하면 뒤에서부터 순서대로 문자를 선택합니다. reversed(s)와 "".join()을 조합해도 동일한 결과를 얻을 수 있습니다.',
    tags: ['string', 'slicing', 'basic'],
    acceptRate: 84,
    solveCount: 63000,
    createdAt: '2024-01-02',
  },
  {
    id: 'prob_0007',
    title: '소수 판별',
    level: 1,
    category: 'Math',
    description:
      '정수 n이 주어질 때, n이 소수이면 True, 소수가 아니면 False를 반환하는 함수를 작성하세요.',
    inputDescription: '정수 n이 주어집니다. (2 ≤ n ≤ 1,000,000)',
    outputDescription: 'n이 소수이면 True, 아니면 False를 반환합니다.',
    constraints: [
      '2 ≤ n ≤ 1,000,000',
      'n은 자연수입니다.',
    ],
    examples: [
      {
        input: 'n = 7',
        output: 'True',
        explanation: '7은 1과 7 외에 약수가 없으므로 소수입니다.',
      },
      {
        input: 'n = 12',
        output: 'False',
        explanation: '12는 1, 2, 3, 4, 6, 12의 약수를 가지므로 소수가 아닙니다.',
      },
    ],
    hints: [
      '2부터 루트 n까지의 수로 나누어 보세요.',
      'n의 약수는 루트 n을 기준으로 대칭적으로 존재합니다.',
    ],
    solution: `import math

def solution(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True`,
    explanation:
      '소수 판별의 핵심은 2부터 루트 n까지만 나누어 보면 된다는 것입니다. n = a × b라면 a와 b 중 하나는 반드시 루트 n 이하이기 때문입니다. math.sqrt(n)을 이용해 제곱근을 구하고 int()로 변환하여 정수 범위까지만 검사합니다. 시간 복잡도는 O(루트 n)입니다.',
    tags: ['math', 'prime', 'optimization'],
    acceptRate: 81,
    solveCount: 57000,
    createdAt: '2024-01-02',
  },
  {
    id: 'prob_0008',
    title: '약수의 합',
    level: 1,
    category: 'Math',
    description:
      '정수 n이 입력으로 주어질 때, n의 모든 약수의 합을 반환하는 함수를 작성하세요.',
    inputDescription: '정수 n이 주어집니다. (1 ≤ n ≤ 3,000)',
    outputDescription: 'n의 모든 약수의 합을 정수로 반환합니다.',
    constraints: [
      '1 ≤ n ≤ 3,000',
      'n은 자연수입니다.',
    ],
    examples: [
      {
        input: 'n = 12',
        output: '28',
        explanation: '12의 약수는 1, 2, 3, 4, 6, 12이고 합은 1+2+3+4+6+12 = 28입니다.',
      },
      {
        input: 'n = 5',
        output: '6',
        explanation: '5의 약수는 1, 5이고 합은 1+5 = 6입니다.',
      },
    ],
    hints: [
      '1부터 n까지 반복하며 나누어 떨어지는 수를 합산하세요.',
      '리스트 컴프리헨션과 sum()을 활용하면 간결하게 작성할 수 있습니다.',
    ],
    solution: `def solution(n):
    return sum(i for i in range(1, n + 1) if n % i == 0)`,
    explanation:
      '약수는 n을 나누어 떨어지게 하는 수입니다. 1부터 n까지 모든 수를 확인하여 n % i == 0인 수를 합산합니다. 제너레이터 표현식을 sum()에 전달하면 메모리 효율적으로 계산할 수 있습니다. n의 크기가 작으므로 O(n) 풀이로 충분합니다.',
    tags: ['math', 'divisor', 'comprehension'],
    acceptRate: 83,
    solveCount: 59000,
    createdAt: '2024-01-02',
  },
  {
    id: 'prob_0009',
    title: '가운데 글자 가져오기',
    level: 1,
    category: 'String',
    description:
      '단어 s의 가운데 글자를 반환하는 함수를 작성하세요. 단어의 길이가 짝수라면 가운데 두 글자를 반환합니다.',
    inputDescription: '문자열 s가 주어집니다. (1 ≤ s의 길이 ≤ 100)',
    outputDescription:
      's의 길이가 홀수이면 가운데 1글자, 짝수이면 가운데 2글자를 반환합니다.',
    constraints: [
      '1 ≤ s의 길이 ≤ 100',
      's는 알파벳 소문자로만 이루어져 있습니다.',
    ],
    examples: [
      {
        input: 's = "abcde"',
        output: '"c"',
        explanation: '"abcde"의 가운데 글자는 3번째 "c"입니다.',
      },
      {
        input: 's = "qwer"',
        output: '"we"',
        explanation: '"qwer"의 가운데 두 글자는 "we"입니다.',
      },
    ],
    hints: [
      '문자열의 길이를 2로 나눈 몫을 활용하세요.',
      '홀수 길이: s[n//2], 짝수 길이: s[n//2 - 1 : n//2 + 1]',
    ],
    solution: `def solution(s):
    n = len(s)
    mid = n // 2
    if n % 2 == 1:
        return s[mid]
    else:
        return s[mid - 1:mid + 1]`,
    explanation:
      '문자열 길이 n을 2로 나눈 몫(mid)이 가운데 인덱스입니다. 홀수 길이이면 s[mid] 한 글자를 반환하고, 짝수 길이이면 s[mid-1:mid+1] 두 글자를 슬라이싱합니다. 예를 들어 길이 4인 문자열의 mid는 2이므로 s[1:3]이 가운데 두 글자가 됩니다.',
    tags: ['string', 'slicing', 'index'],
    acceptRate: 79,
    solveCount: 52000,
    createdAt: '2024-01-02',
  },
  {
    id: 'prob_0010',
    title: '같은 숫자는 싫어',
    level: 1,
    category: 'Stack',
    description:
      '배열 arr가 주어집니다. 배열에서 연속하여 나타나는 같은 숫자를 제거하여 반환하는 함수를 작성하세요.',
    inputDescription:
      '0 이상 9 이하의 숫자로 이루어진 배열 arr가 주어집니다. (1 ≤ arr의 길이 ≤ 1,000,000)',
    outputDescription:
      '연속된 중복을 제거한 배열을 반환합니다.',
    constraints: [
      '1 ≤ arr의 길이 ≤ 1,000,000',
      '0 ≤ arr의 원소 ≤ 9',
      '완전히 중복된 원소가 아닌 연속된 중복만 제거합니다.',
    ],
    examples: [
      {
        input: 'arr = [1, 1, 3, 3, 0, 1, 1]',
        output: '[1, 3, 0, 1]',
        explanation: '연속된 1, 1 -> 1, 연속된 3, 3 -> 3, 연속된 1, 1 -> 1로 줄입니다.',
      },
      {
        input: 'arr = [4, 4, 4, 3, 3]',
        output: '[4, 3]',
        explanation: '연속된 4 세 개는 4 하나로, 연속된 3 두 개는 3 하나로 줄입니다.',
      },
    ],
    hints: [
      '스택을 활용하세요.',
      '스택의 top 원소와 현재 원소를 비교합니다.',
      '스택이 비어있거나 top과 다른 값이면 스택에 push합니다.',
    ],
    solution: `def solution(arr):
    stack = []
    for num in arr:
        if not stack or stack[-1] != num:
            stack.append(num)
    return stack`,
    explanation:
      '스택을 이용한 연속 중복 제거 문제입니다. 현재 원소를 스택의 top과 비교하여 다를 때만 push합니다. 스택이 비어있거나 마지막 원소(top)와 현재 값이 다를 때만 스택에 추가하면 연속 중복이 자동으로 제거됩니다. 시간 복잡도는 O(n), 공간 복잡도도 O(n)입니다.',
    tags: ['stack', 'array', 'deduplication'],
    acceptRate: 77,
    solveCount: 48000,
    createdAt: '2024-01-02',
  },
  {
    id: 'prob_0011',
    title: '핸드폰 번호 가리기',
    level: 1,
    category: 'String',
    description:
      '전화번호가 문자열 phone_number로 주어질 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 * 로 가린 문자열을 반환하는 함수를 작성하세요.',
    inputDescription: '문자열 phone_number가 주어집니다. (4 ≤ phone_number의 길이 ≤ 20)',
    outputDescription: '뒷 4자리만 남기고 나머지를 *로 마스킹한 문자열을 반환합니다.',
    constraints: [
      '4 ≤ phone_number의 길이 ≤ 20',
      'phone_number는 숫자로만 이루어져 있습니다.',
    ],
    examples: [
      {
        input: 'phone_number = "01033334444"',
        output: '"*******4444"',
        explanation: '뒷 4자리 4444를 제외한 앞 7자리를 *로 마스킹합니다.',
      },
      {
        input: 'phone_number = "027778888"',
        output: '"*****8888"',
        explanation: '뒷 4자리 8888을 제외한 앞 5자리를 *로 마스킹합니다.',
      },
    ],
    hints: [
      '문자열 곱셈 "*" * n을 활용하세요.',
      '슬라이싱으로 뒷 4자리를 추출하세요.',
    ],
    solution: `def solution(phone_number):
    return "*" * (len(phone_number) - 4) + phone_number[-4:]`,
    explanation:
      '문자열 길이에서 4를 뺀 만큼 *을 반복하고, 마지막 4글자를 슬라이싱으로 붙입니다. "*" * n은 * 문자를 n번 반복한 문자열을 만들고, phone_number[-4:]는 뒤에서 4번째 인덱스부터 끝까지 슬라이싱합니다. 두 문자열을 + 연산자로 연결하면 완성입니다.',
    tags: ['string', 'slicing', 'masking'],
    acceptRate: 82,
    solveCount: 55000,
    createdAt: '2024-01-02',
  },
  {
    id: 'prob_0012',
    title: '자릿수 더하기',
    level: 1,
    category: 'Math',
    description:
      '자연수 n이 주어질 때, n의 각 자릿수의 합을 반환하는 함수를 작성하세요.',
    inputDescription: '자연수 n이 주어집니다. (1 ≤ n ≤ 100,000,000)',
    outputDescription: 'n의 각 자릿수의 합을 반환합니다.',
    constraints: [
      '1 ≤ n ≤ 100,000,000',
      'n은 자연수입니다.',
    ],
    examples: [
      {
        input: 'n = 123',
        output: '6',
        explanation: '1 + 2 + 3 = 6',
      },
      {
        input: 'n = 987',
        output: '24',
        explanation: '9 + 8 + 7 = 24',
      },
    ],
    hints: [
      'n을 문자열로 변환한 뒤 각 문자를 정수로 변환하여 합산하세요.',
      '% 연산과 // 연산으로 자릿수를 하나씩 추출할 수도 있습니다.',
    ],
    solution: `def solution(n):
    return sum(int(d) for d in str(n))`,
    explanation:
      'str(n)으로 숫자를 문자열로 변환하면 각 자릿수를 문자로 접근할 수 있습니다. 제너레이터 표현식을 사용해 각 문자를 int()로 변환한 후 sum()으로 합산합니다. 수학적으로는 n % 10으로 일의 자리를 추출하고 n //= 10을 반복하는 방법도 있습니다.',
    tags: ['math', 'string', 'digit'],
    acceptRate: 80,
    solveCount: 51000,
    createdAt: '2024-01-02',
  },
  {
    id: 'prob_0013',
    title: '두 배열의 교집합',
    level: 1,
    category: 'HashTable',
    description:
      '두 배열 arr1, arr2가 주어질 때, 두 배열의 공통 원소를 오름차순으로 정렬하여 반환하는 함수를 작성하세요.',
    inputDescription:
      '정수 배열 arr1과 arr2가 각각 주어집니다. (1 ≤ 각 배열의 길이 ≤ 1,000, -1,000 ≤ 원소 ≤ 1,000)',
    outputDescription: '두 배열의 교집합을 오름차순 정렬하여 반환합니다.',
    constraints: [
      '1 ≤ 각 배열의 길이 ≤ 1,000',
      '-1,000 ≤ 배열의 원소 ≤ 1,000',
      '공통 원소가 없으면 빈 배열을 반환합니다.',
    ],
    examples: [
      {
        input: 'arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7]',
        output: '[3, 4, 5]',
        explanation: '두 배열에 공통으로 존재하는 원소는 3, 4, 5입니다.',
      },
      {
        input: 'arr1 = [1, 2], arr2 = [3, 4]',
        output: '[]',
        explanation: '공통 원소가 없으므로 빈 배열을 반환합니다.',
      },
    ],
    hints: [
      'Python의 set 자료형의 & 연산자를 사용하면 교집합을 쉽게 구할 수 있습니다.',
      'set으로 변환 후 교집합을 구하고 sorted()로 정렬하세요.',
    ],
    solution: `def solution(arr1, arr2):
    return sorted(set(arr1) & set(arr2))`,
    explanation:
      '두 배열을 set으로 변환하면 중복이 제거되고 교집합(&) 연산을 O(min(n,m)) 시간에 수행할 수 있습니다. 결과를 sorted()로 정렬하여 반환합니다. 해시 테이블 기반의 set을 사용하므로 리스트 순회보다 효율적입니다.',
    tags: ['set', 'hashtable', 'intersection'],
    acceptRate: 78,
    solveCount: 46000,
    createdAt: '2024-01-02',
  },

  // ─────────────────────────────────────────────────────────────
  // Level 2 — 중급 (prob_0014 ~ prob_0021)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'prob_0014',
    title: '올바른 괄호',
    level: 2,
    category: 'Stack',
    description:
      '괄호가 바르게 짝지어졌다는 것은 "(" 문자로 열렸으면 반드시 짝지어서 ")" 문자로 닫혀야 한다는 뜻입니다. "(" 또는 ")"로만 이루어진 문자열 s가 주어질 때, 문자열이 올바른 괄호이면 True, 그렇지 않으면 False를 반환하는 함수를 작성하세요.',
    inputDescription:
      '"(" 또는 ")"로만 이루어진 문자열 s가 주어집니다. (1 ≤ s의 길이 ≤ 100,000)',
    outputDescription: '올바른 괄호이면 True, 아니면 False를 반환합니다.',
    constraints: [
      '1 ≤ s의 길이 ≤ 100,000',
      's는 "(" 또는 ")"로만 이루어져 있습니다.',
    ],
    examples: [
      {
        input: 's = "()()"',
        output: 'True',
        explanation: '모든 괄호가 올바르게 짝지어져 있습니다.',
      },
      {
        input: 's = "(())()"',
        output: 'True',
        explanation: '중첩 괄호도 올바르게 처리됩니다.',
      },
      {
        input: 's = ")("',
        output: 'False',
        explanation: '닫는 괄호가 먼저 나왔으므로 올바르지 않습니다.',
      },
    ],
    hints: [
      '스택을 사용하거나, 카운터 변수를 사용하세요.',
      '"("가 나오면 카운트를 증가, ")"가 나오면 카운트를 감소합니다.',
      '카운트가 음수가 되는 순간 즉시 False를 반환하세요.',
    ],
    solution: `def solution(s):
    count = 0
    for ch in s:
        if ch == '(':
            count += 1
        else:
            count -= 1
            if count < 0:
                return False
    return count == 0`,
    explanation:
      '스택 대신 정수 카운터를 사용해 메모리를 절약합니다. "("가 나올 때마다 카운터를 증가시키고 ")"가 나올 때 감소시킵니다. 카운터가 음수가 되면 짝 없는 닫는 괄호가 있는 것이므로 즉시 False를 반환합니다. 순회가 끝난 후 카운터가 0이어야 모든 여는 괄호가 닫혔다는 의미입니다.',
    tags: ['stack', 'string', 'parentheses'],
    acceptRate: 65,
    solveCount: 38000,
    createdAt: '2024-01-03',
  },
  {
    id: 'prob_0015',
    title: '기능개발',
    level: 2,
    category: 'Queue',
    description:
      '각 기능은 진도가 100%일 때 배포할 수 있습니다. 뒤에 있는 기능이 먼저 완료되어도 앞 기능이 완료될 때까지 기다려야 합니다. 배포 시 앞 기능이 완료되면 뒤에 완료된 기능들도 함께 배포됩니다. 각 배포마다 몇 개의 기능이 배포되는지 배열로 반환하세요.',
    inputDescription:
      '작업 진도 배열 progresses와 개발 속도 배열 speeds가 주어집니다. (1 ≤ 배열 길이 ≤ 100, 0 < progresses[i] < 100, 0 < speeds[i] ≤ 100)',
    outputDescription: '각 배포마다 배포되는 기능의 수를 담은 배열을 반환합니다.',
    constraints: [
      '1 ≤ progresses의 길이 ≤ 100',
      '0 < progresses[i] < 100',
      '0 < speeds[i] ≤ 100',
    ],
    examples: [
      {
        input: 'progresses = [93, 30, 55], speeds = [1, 30, 5]',
        output: '[2, 1]',
        explanation:
          '기능 1은 7일, 기능 2는 3일, 기능 3은 9일 후 완료됩니다. 7일째 기능 1, 2 함께 배포(2개), 9일째 기능 3 배포(1개).',
      },
      {
        input: 'progresses = [95, 90, 99, 99, 80, 99], speeds = [1, 1, 1, 1, 1, 1]',
        output: '[1, 3, 2]',
        explanation: '완료일: 5, 10, 1, 1, 20, 1일. 첫 배포 1개, 두 번째 3개, 세 번째 2개.',
      },
    ],
    hints: [
      '각 기능의 완료까지 걸리는 일수를 먼저 계산하세요.',
      'math.ceil((100 - progress) / speed)로 완료 일수를 구합니다.',
      '첫 번째 기능의 완료일을 기준으로 함께 배포되는 기능을 묶습니다.',
    ],
    solution: `import math
from collections import deque

def solution(progresses, speeds):
    days = [math.ceil((100 - p) / s) for p, s in zip(progresses, speeds)]
    result = []
    queue = deque(days)

    while queue:
        current_max = queue.popleft()
        count = 1
        while queue and queue[0] <= current_max:
            queue.popleft()
            count += 1
        result.append(count)

    return result`,
    explanation:
      '먼저 각 기능의 완료 일수를 math.ceil()로 계산합니다. 이후 큐를 활용하여 앞에서부터 처리합니다. 첫 번째 기능의 완료 일수(current_max)를 기준으로, 이후 기능들의 완료 일수가 current_max 이하인 것들을 함께 배포합니다. current_max보다 큰 완료 일수를 만나면 새로운 배포 묶음이 시작됩니다.',
    tags: ['queue', 'simulation', 'deque'],
    acceptRate: 62,
    solveCount: 35000,
    createdAt: '2024-01-03',
  },
  {
    id: 'prob_0016',
    title: '다리를 지나는 트럭',
    level: 2,
    category: 'Queue',
    description:
      '트럭 여러 대가 강을 가로지르는 일차선 다리를 순서대로 건너려 합니다. 다리에는 bridge_length대의 트럭이 올라갈 수 있으며, 다리는 weight 이하의 무게를 견딥니다. 트럭은 매 초 1칸씩 이동합니다. 모든 트럭이 다리를 건너는 데 걸리는 최소 시간을 반환하세요.',
    inputDescription:
      '다리 길이 bridge_length, 최대 하중 weight, 트럭 무게 배열 truck_weights가 주어집니다.',
    outputDescription: '모든 트럭이 다리를 건너는 데 걸리는 최소 시간을 반환합니다.',
    constraints: [
      '1 ≤ bridge_length ≤ 10,000',
      '1 ≤ weight ≤ 10,000',
      '1 ≤ truck_weights의 길이 ≤ 10,000',
      '1 ≤ truck_weights의 원소 ≤ weight',
    ],
    examples: [
      {
        input: 'bridge_length = 2, weight = 10, truck_weights = [7, 4, 5, 6]',
        output: '8',
        explanation: '시뮬레이션 결과 모든 트럭이 건너는 데 8초가 걸립니다.',
      },
      {
        input: 'bridge_length = 100, weight = 100, truck_weights = [10]',
        output: '101',
        explanation: '길이 100인 다리를 트럭 1대가 건너는 데 101초가 걸립니다.',
      },
    ],
    hints: [
      '다리를 bridge_length 크기의 큐로 표현하세요.',
      '매 초마다 다리 큐를 shift하고 새 트럭을 올릴지 결정합니다.',
      '현재 다리 위 총 무게를 추적하세요.',
    ],
    solution: `from collections import deque

def solution(bridge_length, weight, truck_weights):
    bridge = deque([0] * bridge_length)
    current_weight = 0
    time = 0
    trucks = deque(truck_weights)

    while trucks or current_weight > 0:
        time += 1
        removed = bridge.popleft()
        current_weight -= removed

        if trucks:
            next_truck = trucks[0]
            if current_weight + next_truck <= weight:
                bridge.append(trucks.popleft())
                current_weight += next_truck
            else:
                bridge.append(0)

    return time`,
    explanation:
      '다리를 0으로 채운 deque로 표현하여 매 초마다 왼쪽에서 제거하고 오른쪽에 추가합니다. 왼쪽에서 제거되는 값만큼 current_weight를 줄이고, 다음 트럭이 올라올 수 있으면 추가합니다. 트럭 큐가 비고 다리 위 무게도 0이 되면 종료합니다. 시간 복잡도는 O(bridge_length + 트럭 수)입니다.',
    tags: ['queue', 'deque', 'simulation'],
    acceptRate: 59,
    solveCount: 32000,
    createdAt: '2024-01-03',
  },
  {
    id: 'prob_0017',
    title: '이진 탐색',
    level: 2,
    category: 'BinarySearch',
    description:
      '정렬된 정수 배열 arr와 찾고자 하는 값 target이 주어질 때, 이진 탐색으로 target의 인덱스를 반환하는 함수를 작성하세요. target이 배열에 없으면 -1을 반환합니다.',
    inputDescription:
      '오름차순으로 정렬된 정수 배열 arr와 정수 target이 주어집니다. (1 ≤ arr의 길이 ≤ 1,000,000)',
    outputDescription:
      'target이 arr에 있으면 해당 인덱스를, 없으면 -1을 반환합니다.',
    constraints: [
      '1 ≤ arr의 길이 ≤ 1,000,000',
      '-10^9 ≤ arr의 원소 ≤ 10^9',
      'arr는 오름차순으로 정렬되어 있습니다.',
      '배열 내 원소는 중복이 없습니다.',
    ],
    examples: [
      {
        input: 'arr = [1, 3, 5, 7, 9, 11], target = 7',
        output: '3',
        explanation: '7은 인덱스 3에 위치합니다.',
      },
      {
        input: 'arr = [1, 3, 5, 7, 9, 11], target = 4',
        output: '-1',
        explanation: '4는 배열에 없으므로 -1을 반환합니다.',
      },
    ],
    hints: [
      'left, right 두 포인터로 탐색 범위를 좁혀가세요.',
      'mid = (left + right) // 2로 중간 인덱스를 구합니다.',
      'arr[mid]와 target을 비교해 탐색 범위를 절반으로 줄이세요.',
    ],
    solution: `def solution(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1`,
    explanation:
      '이진 탐색은 정렬된 배열에서 O(log n) 시간에 원소를 찾는 알고리즘입니다. left와 right 포인터로 탐색 범위를 유지하며, mid 인덱스의 값을 target과 비교해 범위를 절반씩 줄입니다. target이 mid 값보다 크면 left를 mid+1로, 작으면 right를 mid-1로 이동합니다. left > right가 되면 탐색 실패입니다.',
    tags: ['binary-search', 'array', 'search'],
    acceptRate: 61,
    solveCount: 34000,
    createdAt: '2024-01-03',
  },
  {
    id: 'prob_0018',
    title: '타겟 넘버',
    level: 2,
    category: 'DFS',
    description:
      'n개의 음이 아닌 정수가 있습니다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들 수 있는 방법은 5가지입니다.\n\n-1+1+1+1+1 = 3\n+1-1+1+1+1 = 3\n+1+1-1+1+1 = 3\n+1+1+1-1+1 = 3\n+1+1+1+1-1 = 3\n\n숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 반환하세요.',
    inputDescription:
      '정수 배열 numbers와 정수 target이 주어집니다. (2 ≤ numbers의 길이 ≤ 20, 1 ≤ numbers의 원소 ≤ 50, 1 ≤ target ≤ 1,000)',
    outputDescription: '타겟 넘버를 만드는 방법의 수를 반환합니다.',
    constraints: [
      '2 ≤ numbers의 길이 ≤ 20',
      '1 ≤ numbers의 원소 ≤ 50',
      '1 ≤ target ≤ 1,000',
    ],
    examples: [
      {
        input: 'numbers = [1, 1, 1, 1, 1], target = 3',
        output: '5',
        explanation: '위에 설명된 5가지 방법이 있습니다.',
      },
      {
        input: 'numbers = [4, 1, 2, 1], target = 4',
        output: '2',
        explanation: '+4+1-2+1=4, +4-1+2-1=4로 2가지 방법이 있습니다.',
      },
    ],
    hints: [
      'DFS(깊이 우선 탐색)로 모든 경우의 수를 탐색하세요.',
      '각 숫자에 대해 +와 - 두 가지 선택지가 있습니다.',
      '재귀 함수의 기저 조건은 모든 숫자를 사용했을 때입니다.',
    ],
    solution: `def solution(numbers, target):
    count = 0

    def dfs(index, current_sum):
        nonlocal count
        if index == len(numbers):
            if current_sum == target:
                count += 1
            return
        dfs(index + 1, current_sum + numbers[index])
        dfs(index + 1, current_sum - numbers[index])

    dfs(0, 0)
    return count`,
    explanation:
      'DFS를 이용해 각 숫자에 대해 더하거나 빼는 두 가지 경우를 모두 탐색합니다. 재귀 함수 dfs(index, current_sum)는 현재 인덱스와 누적 합을 인자로 받습니다. 모든 숫자를 처리했을 때(index == len(numbers)) 합이 target과 같으면 카운트를 증가시킵니다. 전체 경우의 수는 2^n이지만 n이 최대 20이므로 충분합니다.',
    tags: ['dfs', 'recursion', 'brute-force'],
    acceptRate: 63,
    solveCount: 36000,
    createdAt: '2024-01-03',
  },
  {
    id: 'prob_0019',
    title: '게임 맵 최단거리',
    level: 2,
    category: 'BFS',
    description:
      'ROR 게임에서 상대 팀 진영으로 최단 거리로 이동하려 합니다. 지도는 n x m 크기의 이차원 배열 maps로 주어지며, 0은 벽, 1은 이동 가능한 공간입니다. 캐릭터는 (0, 0)에서 출발해 (n-1, m-1)에 도달해야 합니다. 상하좌우로만 이동할 수 있으며, 이동할 수 없는 경우 -1을 반환하세요.',
    inputDescription:
      '게임 맵 maps가 주어집니다. (1 ≤ n ≤ 100, 1 ≤ m ≤ 100, maps[i][j]는 0 또는 1)',
    outputDescription: '최단 이동 횟수를 반환합니다. 도달할 수 없으면 -1을 반환합니다.',
    constraints: [
      '1 ≤ maps의 행 수 ≤ 100',
      '1 ≤ maps의 열 수 ≤ 100',
      'maps[i][j]는 0 또는 1입니다.',
      'maps[0][0]과 maps[n-1][m-1]은 항상 1입니다.',
    ],
    examples: [
      {
        input: 'maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]',
        output: '11',
        explanation: '최단 경로의 거리는 11입니다.',
      },
      {
        input: 'maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]',
        output: '-1',
        explanation: '목적지에 도달할 수 없습니다.',
      },
    ],
    hints: [
      'BFS는 최단 경로 문제에 적합합니다.',
      '방문한 칸을 재방문하지 않도록 visited 배열을 사용하세요.',
      'deque를 사용하여 BFS를 구현하세요.',
    ],
    solution: `from collections import deque

def solution(maps):
    n, m = len(maps), len(maps[0])
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    visited = [[False] * m for _ in range(n)]
    queue = deque([(0, 0, 1)])
    visited[0][0] = True

    while queue:
        x, y, dist = queue.popleft()
        if x == n - 1 and y == m - 1:
            return dist
        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            if 0 <= nx < n and 0 <= ny < m and not visited[nx][ny] and maps[nx][ny] == 1:
                visited[nx][ny] = True
                queue.append((nx, ny, dist + 1))

    return -1`,
    explanation:
      'BFS는 최단 경로를 보장하는 탐색 알고리즘입니다. (행, 열, 거리)를 큐에 담아 상하좌우로 이동하며 탐색합니다. 방문 여부를 visited 배열로 관리해 중복 방문을 방지합니다. 목적지 (n-1, m-1)에 도달하면 즉시 거리를 반환하고, 큐가 비면 도달 불가이므로 -1을 반환합니다.',
    tags: ['bfs', 'graph', 'shortest-path', 'grid'],
    acceptRate: 57,
    solveCount: 30000,
    createdAt: '2024-01-03',
  },
  {
    id: 'prob_0020',
    title: '더 맵게',
    level: 2,
    category: 'Heap',
    description:
      '모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다. 스코빌 지수가 K 미만인 음식이 있다면 가장 맵지 않은 음식 두 개를 꺼내 섞습니다.\n\n새 음식의 스코빌 지수 = 가장 맵지 않은 음식 + (두 번째로 맵지 않은 음식 x 2)\n\n모든 음식이 K 이상이 될 때까지 반복한 횟수를 반환하세요. 불가능하면 -1을 반환합니다.',
    inputDescription:
      '스코빌 지수를 담은 정수 배열 scoville과 기준값 K가 주어집니다. (2 ≤ scoville의 길이 ≤ 1,000,000, 0 ≤ scoville의 원소 ≤ 1,000,000, 0 ≤ K ≤ 1,000,000,000)',
    outputDescription: '모든 음식이 K 이상이 되는 최소 횟수, 불가능하면 -1을 반환합니다.',
    constraints: [
      '2 ≤ scoville의 길이 ≤ 1,000,000',
      '0 ≤ scoville의 원소 ≤ 1,000,000',
      '0 ≤ K ≤ 1,000,000,000',
    ],
    examples: [
      {
        input: 'scoville = [1, 2, 3, 9, 10, 12], K = 7',
        output: '2',
        explanation:
          '1회: 1 + 2*2 = 5, 힙 = [2, 3, 5, 9, 10, 12]. 2회: 2 + 3*2 = 8, 힙 = [3, 5, 8, 9, 10, 12]. 최솟값 3 < 7이므로... 실제로는 2번 만에 모든 지수가 7 이상이 됩니다.',
      },
    ],
    hints: [
      '최솟값을 빠르게 구하려면 최솟값 힙(min-heap)을 사용하세요.',
      'Python의 heapq 모듈은 기본적으로 min-heap을 제공합니다.',
      '힙에 원소가 1개만 남았을 때도 K 미만이면 -1을 반환합니다.',
    ],
    solution: `import heapq

def solution(scoville, K):
    heap = scoville[:]
    heapq.heapify(heap)
    count = 0

    while heap[0] < K:
        if len(heap) < 2:
            return -1
        first = heapq.heappop(heap)
        second = heapq.heappop(heap)
        new_food = first + second * 2
        heapq.heappush(heap, new_food)
        count += 1

    return count`,
    explanation:
      '최솟값을 O(log n)에 구하고 삽입하는 min-heap이 핵심입니다. heapify()로 배열을 힙으로 변환하고, 최솟값이 K 미만이면 가장 작은 두 원소를 꺼내 새 음식을 만들어 다시 삽입합니다. 힙에 1개만 남았는데 여전히 K 미만이면 불가능하므로 -1을 반환합니다. 전체 시간 복잡도는 O(n log n)입니다.',
    tags: ['heap', 'priority-queue', 'greedy'],
    acceptRate: 56,
    solveCount: 29000,
    createdAt: '2024-01-03',
  },
  {
    id: 'prob_0021',
    title: '계단 오르기',
    level: 2,
    category: 'DynamicProgramming',
    description:
      '계단에는 일정한 점수가 있으며 이 점수를 더하며 올라갑니다. 조건:\n1. 계단은 한 번에 1칸 또는 2칸씩 오를 수 있습니다.\n2. 연속된 3개의 계단을 모두 밟을 수 없습니다.\n3. 마지막 계단은 반드시 밟아야 합니다.\n\n계단 점수 배열이 주어질 때 얻을 수 있는 최대 점수를 반환하세요.',
    inputDescription:
      '각 계단의 점수 배열 staircase가 주어집니다. (1 ≤ staircase의 길이 ≤ 300, 1 ≤ staircase의 원소 ≤ 10,000)',
    outputDescription: '얻을 수 있는 최대 점수를 반환합니다.',
    constraints: [
      '1 ≤ staircase의 길이 ≤ 300',
      '1 ≤ staircase의 원소 ≤ 10,000',
      '연속된 3계단을 모두 밟을 수 없습니다.',
    ],
    examples: [
      {
        input: 'staircase = [10, 20, 15, 25, 10, 20]',
        output: '75',
        explanation: '1, 2, 4, 6번째 계단을 밟으면 10+20+25+20=75. 1, 2, 4, 5 -> 10+20+25+10=65. 최적은 75입니다.',
      },
      {
        input: 'staircase = [1, 2, 3]',
        output: '5',
        explanation: '1, 3번째 또는 2, 3번째 계단을 밟아 최대 2+3=5를 얻습니다.',
      },
    ],
    hints: [
      'dp[i] = i번째 계단을 밟을 때 최대 점수로 정의하세요.',
      'i번 계단을 밟으려면 i-2에서 오거나, i-3에서 와서 i-1을 밟고 오는 두 가지 경우가 있습니다.',
      '기저 조건(n=1, n=2, n=3)을 먼저 처리하세요.',
    ],
    solution: `def solution(staircase):
    n = len(staircase)
    if n == 1:
        return staircase[0]
    if n == 2:
        return staircase[0] + staircase[1]

    dp = [0] * n
    dp[0] = staircase[0]
    dp[1] = staircase[0] + staircase[1]
    dp[2] = max(staircase[0] + staircase[2], staircase[1] + staircase[2])

    for i in range(3, n):
        dp[i] = max(
            dp[i - 2] + staircase[i],
            dp[i - 3] + staircase[i - 1] + staircase[i]
        )

    return dp[n - 1]`,
    explanation:
      'DP 점화식은 두 가지 경우로 나뉩니다. 첫째, i-2번 계단에서 바로 i번으로 오는 경우(dp[i-2] + staircase[i]), 둘째, i-3번 계단에서 i-1번을 밟고 i번으로 오는 경우(dp[i-3] + staircase[i-1] + staircase[i])입니다. 3연속 밟기를 방지하기 위해 i-1에서 바로 i로 오는 단독 경우는 포함하지 않습니다.',
    tags: ['dp', 'dynamic-programming', 'staircase'],
    acceptRate: 55,
    solveCount: 28000,
    createdAt: '2024-01-03',
  },

  // ─────────────────────────────────────────────────────────────
  // Level 3 — 고급 (prob_0022 ~ prob_0026)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'prob_0022',
    title: '네트워크',
    level: 3,
    category: 'DFS',
    description:
      '네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 컴퓨터 A와 B가 직접 연결되어 있고, B와 C가 직접 연결되어 있을 때 A와 C도 같은 네트워크에 속합니다. 컴퓨터의 개수 n과 연결 정보 2차원 배열 computers가 주어질 때, 네트워크의 개수를 반환하는 함수를 작성하세요.',
    inputDescription:
      '컴퓨터의 수 n과 연결 정보 행렬 computers가 주어집니다. (1 ≤ n ≤ 200, computers[i][j]는 0 또는 1)',
    outputDescription: '네트워크의 개수를 반환합니다.',
    constraints: [
      '1 ≤ n ≤ 200',
      'computers[i][i]는 항상 1입니다.',
      'computers[i][j] == computers[j][i]',
    ],
    examples: [
      {
        input: 'n = 3, computers = [[1,1,0],[1,1,0],[0,0,1]]',
        output: '2',
        explanation: '컴퓨터 0과 1은 연결되어 있고, 컴퓨터 2는 독립적입니다.',
      },
      {
        input: 'n = 3, computers = [[1,1,0],[1,1,1],[0,1,1]]',
        output: '1',
        explanation: '모든 컴퓨터가 연결되어 있으므로 네트워크는 1개입니다.',
      },
    ],
    hints: [
      '연결된 컴포넌트(Connected Component)의 개수를 세는 문제입니다.',
      'DFS 또는 BFS로 연결된 모든 노드를 방문 처리하세요.',
      '아직 방문하지 않은 노드에서 새로운 DFS를 시작할 때마다 네트워크 수를 증가시킵니다.',
    ],
    solution: `def solution(n, computers):
    visited = [False] * n

    def dfs(node):
        visited[node] = True
        for neighbor in range(n):
            if computers[node][neighbor] == 1 and not visited[neighbor]:
                dfs(neighbor)

    count = 0
    for i in range(n):
        if not visited[i]:
            dfs(i)
            count += 1

    return count`,
    explanation:
      '그래프의 연결 컴포넌트 수를 구하는 문제입니다. 방문하지 않은 노드에서 DFS를 시작해 연결된 모든 노드를 방문 처리합니다. 새로운 DFS 시작 시마다 네트워크 수를 1 증가시킵니다. 인접 행렬 형태의 입력이므로 모든 노드를 순회하며 연결 여부를 확인합니다. n이 최대 200이므로 O(n^2) 시간 복잡도로 충분합니다.',
    tags: ['dfs', 'graph', 'connected-component'],
    acceptRate: 48,
    solveCount: 22000,
    createdAt: '2024-01-04',
  },
  {
    id: 'prob_0023',
    title: '단어 변환',
    level: 3,
    category: 'BFS',
    description:
      '두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.\n\n1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.\n2. words에 있는 단어로만 변환할 수 있습니다.\n\n최소 변환 횟수를 반환하세요. 변환이 불가능하면 0을 반환합니다.',
    inputDescription:
      '시작 단어 begin, 목표 단어 target, 단어 집합 words가 주어집니다. (3 ≤ 단어 길이 ≤ 10, 3 ≤ words의 길이 ≤ 50)',
    outputDescription: '최소 변환 횟수를 반환합니다. 불가능하면 0을 반환합니다.',
    constraints: [
      '단어의 길이는 3 이상 10 이하입니다.',
      'words의 길이는 3 이상 50 이하입니다.',
      'begin과 target의 길이는 같습니다.',
      '모든 단어는 알파벳 소문자로만 이루어져 있습니다.',
    ],
    examples: [
      {
        input: 'begin = "hit", target = "cog", words = ["hot","dot","dog","lot","log","cog"]',
        output: '4',
        explanation: 'hit -> hot -> dot -> dog -> cog (4번 변환)',
      },
      {
        input: 'begin = "hit", target = "cog", words = ["hot","dot","dog","lot","log"]',
        output: '0',
        explanation: 'target "cog"가 words에 없어 변환이 불가능합니다.',
      },
    ],
    hints: [
      '각 단어를 노드로, 한 글자 차이 나는 단어 간에 간선이 있는 그래프로 모델링하세요.',
      'BFS로 begin에서 target까지 최단 경로를 찾으세요.',
      '두 단어에서 다른 글자 수가 1인지 확인하는 함수를 작성하세요.',
    ],
    solution: `from collections import deque

def solution(begin, target, words):
    if target not in words:
        return 0

    def diff_count(w1, w2):
        return sum(c1 != c2 for c1, c2 in zip(w1, w2))

    queue = deque([(begin, 0)])
    visited = set()
    visited.add(begin)

    while queue:
        word, steps = queue.popleft()
        if word == target:
            return steps
        for next_word in words:
            if next_word not in visited and diff_count(word, next_word) == 1:
                visited.add(next_word)
                queue.append((next_word, steps + 1))

    return 0`,
    explanation:
      'BFS를 이용한 최단 경로 탐색 문제(Word Ladder)입니다. 현재 단어에서 한 글자만 다른 단어들을 이웃으로 간주하고 BFS로 탐색합니다. diff_count() 함수로 두 단어 간 차이 글자 수를 확인합니다. target이 words에 없으면 초기에 0을 반환하고, BFS가 완료될 때까지 target을 찾지 못하면 0을 반환합니다.',
    tags: ['bfs', 'graph', 'word-ladder'],
    acceptRate: 42,
    solveCount: 18000,
    createdAt: '2024-01-04',
  },
  {
    id: 'prob_0024',
    title: '가장 긴 증가하는 부분 수열',
    level: 3,
    category: 'DynamicProgramming',
    description:
      '정수 배열 arr가 주어질 때, 가장 긴 증가하는 부분 수열(LIS, Longest Increasing Subsequence)의 길이를 반환하세요. 부분 수열은 연속할 필요가 없습니다.',
    inputDescription:
      '정수 배열 arr가 주어집니다. (1 ≤ arr의 길이 ≤ 1,000, -1,000 ≤ arr의 원소 ≤ 1,000)',
    outputDescription: '가장 긴 증가하는 부분 수열의 길이를 반환합니다.',
    constraints: [
      '1 ≤ arr의 길이 ≤ 1,000',
      '-1,000 ≤ arr의 원소 ≤ 1,000',
    ],
    examples: [
      {
        input: 'arr = [10, 20, 10, 30, 20, 50]',
        output: '4',
        explanation: '[10, 20, 30, 50]이 가장 긴 증가하는 부분 수열입니다.',
      },
      {
        input: 'arr = [3, 1, 2]',
        output: '2',
        explanation: '[1, 2]가 가장 긴 증가하는 부분 수열입니다.',
      },
    ],
    hints: [
      'dp[i] = arr[i]를 마지막 원소로 하는 LIS의 길이로 정의하세요.',
      'dp[i] = max(dp[j] + 1) for j < i and arr[j] < arr[i]',
      '최종 답은 dp 배열의 최댓값입니다.',
    ],
    solution: `def solution(arr):
    n = len(arr)
    dp = [1] * n

    for i in range(1, n):
        for j in range(i):
            if arr[j] < arr[i]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)`,
    explanation:
      'LIS의 O(n^2) DP 풀이입니다. dp[i]는 arr[i]를 마지막 원소로 하는 최장 증가 부분 수열의 길이를 저장합니다. 각 원소 i에 대해 i보다 앞에 있고 arr[j] < arr[i]인 j를 찾아 dp[i]를 갱신합니다. 최종적으로 dp 배열의 최댓값이 답입니다. O(n log n) 풀이는 이진 탐색을 활용합니다.',
    tags: ['dp', 'lis', 'subsequence'],
    acceptRate: 45,
    solveCount: 20000,
    createdAt: '2024-01-04',
  },
  {
    id: 'prob_0025',
    title: '배낭 문제',
    level: 3,
    category: 'DynamicProgramming',
    description:
      '무게 제한이 W인 배낭이 있습니다. n개의 물건이 있으며 각 물건은 무게 weights[i]와 가치 values[i]를 가집니다. 각 물건은 한 번씩만 담을 수 있을 때, 배낭에 담을 수 있는 물건들의 최대 가치를 반환하세요.',
    inputDescription:
      '배낭 무게 한도 W, 물건 수 n, 무게 배열 weights, 가치 배열 values가 주어집니다. (1 ≤ n ≤ 100, 1 ≤ W ≤ 100,000)',
    outputDescription: '배낭에 담을 수 있는 최대 가치를 반환합니다.',
    constraints: [
      '1 ≤ n ≤ 100',
      '1 ≤ W ≤ 100,000',
      '1 ≤ weights[i] ≤ W',
      '1 ≤ values[i] ≤ 1,000',
    ],
    examples: [
      {
        input: 'W = 5, n = 4, weights = [2, 3, 4, 5], values = [3, 4, 5, 6]',
        output: '7',
        explanation: '무게 2(가치 3) + 무게 3(가치 4) = 총 무게 5, 총 가치 7이 최적입니다.',
      },
      {
        input: 'W = 7, n = 3, weights = [3, 4, 5], values = [4, 5, 6]',
        output: '9',
        explanation: '무게 3(가치 4) + 무게 4(가치 5) = 총 무게 7, 총 가치 9가 최적입니다.',
      },
    ],
    hints: [
      'dp[w] = 무게 w 이하로 담을 때 최대 가치로 정의하세요.',
      '각 물건을 넣는 경우와 넣지 않는 경우 중 최댓값을 선택합니다.',
      '무게를 역순으로 순회하여 같은 물건을 중복 선택하지 않도록 합니다.',
    ],
    solution: `def solution(W, n, weights, values):
    dp = [0] * (W + 1)

    for i in range(n):
        for w in range(W, weights[i] - 1, -1):
            dp[w] = max(dp[w], dp[w - weights[i]] + values[i])

    return dp[W]`,
    explanation:
      '0/1 배낭 문제의 최적 DP 풀이입니다. 1차원 dp 배열을 사용해 공간을 O(W)로 줄입니다. 핵심은 무게를 역순(W에서 weights[i]까지)으로 순회하는 것으로, 같은 물건을 중복 선택하지 않기 위함입니다. 각 상태에서 현재 물건을 넣는 경우와 넣지 않는 경우를 비교해 최댓값으로 갱신합니다.',
    tags: ['dp', 'knapsack', 'optimization'],
    acceptRate: 40,
    solveCount: 17000,
    createdAt: '2024-01-04',
  },
  {
    id: 'prob_0026',
    title: '여행경로',
    level: 3,
    category: 'DFS',
    description:
      '주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다. 항공권 정보가 담긴 2차원 배열 tickets가 주어질 때, 방문하는 공항 경로를 배열에 담아 반환하세요. 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 반환합니다.',
    inputDescription:
      '[출발, 도착] 쌍의 항공권 배열 tickets가 주어집니다. (1 ≤ tickets의 길이 ≤ 10,000)',
    outputDescription: '방문하는 공항 경로 배열을 반환합니다.',
    constraints: [
      '1 ≤ tickets의 길이 ≤ 10,000',
      '모든 공항 코드는 대문자 알파벳 3글자입니다.',
      '주어진 항공권은 모두 사용해야 합니다.',
      '항상 ICN에서 출발합니다.',
    ],
    examples: [
      {
        input: 'tickets = [["ICN","JFK"],["HND","IAD"],["JFK","HND"]]',
        output: '["ICN","JFK","HND","IAD"]',
        explanation: 'ICN -> JFK -> HND -> IAD 경로로 모든 항공권을 사용합니다.',
      },
      {
        input: 'tickets = [["ICN","SFO"],["ICN","ATL"],["SFO","ATL"],["ATL","ICN"],["ATL","SFO"]]',
        output: '["ICN","ATL","ICN","SFO","ATL","SFO"]',
        explanation: '알파벳 순서상 ATL이 SFO보다 앞서므로 해당 경로를 선택합니다.',
      },
    ],
    hints: [
      'DFS로 모든 항공권을 사용하는 경로를 탐색하세요.',
      '알파벳 순서를 보장하기 위해 도착지를 정렬한 후 탐색하세요.',
      '히어홀처 알고리즘: DFS 중 더 이상 이동할 공항이 없으면 경로에 추가 후 역순으로 출력합니다.',
    ],
    solution: `from collections import defaultdict

def solution(tickets):
    graph = defaultdict(list)
    for src, dst in sorted(tickets):
        graph[src].append(dst)

    route = []

    def dfs(airport):
        while graph[airport]:
            next_airport = graph[airport].pop(0)
            dfs(next_airport)
        route.append(airport)

    dfs("ICN")
    return route[::-1]`,
    explanation:
      '히어홀처(Hierholzer) 알고리즘과 유사한 DFS 방식을 활용합니다. 티켓을 정렬하여 그래프에 추가하면 알파벳 순서가 자연스럽게 보장됩니다. DFS 중 더 이상 이동할 공항이 없으면 현재 공항을 route에 추가합니다. 마지막에 route를 뒤집으면 올바른 여행 경로가 됩니다.',
    tags: ['dfs', 'graph', 'euler-path'],
    acceptRate: 37,
    solveCount: 15000,
    createdAt: '2024-01-04',
  },

  // ─────────────────────────────────────────────────────────────
  // Level 4 — 매우 어려움 (prob_0027 ~ prob_0029)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'prob_0027',
    title: '플로이드-워셜',
    level: 4,
    category: 'Graph',
    description:
      'n개의 노드와 m개의 간선으로 이루어진 방향 가중 그래프가 있습니다. 플로이드-워셜 알고리즘을 구현하여 모든 노드 쌍 (i, j) 간의 최단 거리를 구하세요. 경로가 없으면 float("inf")를 유지합니다.',
    inputDescription:
      '노드 수 n, 간선 수 m, 간선 정보 배열 edges가 주어집니다. edges[k] = [u, v, w]는 u -> v 방향의 가중치 w인 간선을 의미합니다. (1 ≤ n ≤ 100, 1 ≤ m ≤ n*(n-1), 1 ≤ w ≤ 10,000)',
    outputDescription: 'n x n 크기의 최단 거리 행렬을 반환합니다.',
    constraints: [
      '1 ≤ n ≤ 100',
      '1 ≤ m ≤ n*(n-1)',
      '1 ≤ w ≤ 10,000',
      '음수 간선은 없습니다.',
    ],
    examples: [
      {
        input: 'n = 4, edges = [[1,2,3],[1,3,8],[2,3,2],[2,4,5],[3,4,1],[4,1,4]]',
        output: '[[0,3,5,6],[INF,0,2,3],[INF,INF,0,1],[4,7,9,0]] (INF는 float("inf"))',
        explanation: '모든 쌍 간의 최단 거리를 구한 결과입니다.',
      },
    ],
    hints: [
      '3중 for 루프로 구현합니다: for k -> for i -> for j.',
      'dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])가 핵심 점화식입니다.',
      '초기화: 자기 자신은 0, 직접 연결된 간선은 가중치, 나머지는 INF.',
    ],
    solution: `def solution(n, edges):
    INF = float('inf')
    dist = [[INF] * (n + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        dist[i][i] = 0

    for u, v, w in edges:
        dist[u][v] = min(dist[u][v], w)

    for k in range(1, n + 1):
        for i in range(1, n + 1):
            for j in range(1, n + 1):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]

    return dist`,
    explanation:
      '플로이드-워셜 알고리즘은 O(n^3)의 시간 복잡도로 모든 쌍의 최단 경로를 구합니다. 중간 경유 노드 k를 1부터 n까지 순서대로 고려하며, i에서 j로 가는 거리를 k를 경유하는 거리와 비교해 최솟값으로 갱신합니다. 음수 사이클이 없는 경우에 올바르게 동작합니다. n이 최대 100이므로 100^3 = 1,000,000번 연산으로 충분합니다.',
    tags: ['graph', 'floyd-warshall', 'all-pairs-shortest-path'],
    acceptRate: 32,
    solveCount: 8500,
    createdAt: '2024-01-05',
  },
  {
    id: 'prob_0028',
    title: '다익스트라 최단경로',
    level: 4,
    category: 'Graph',
    description:
      'n개의 노드와 m개의 간선으로 이루어진 방향 가중 그래프에서 출발 노드 start에서 모든 노드까지의 최단 거리를 구하세요. 도달할 수 없는 노드는 -1로 표시합니다.',
    inputDescription:
      '노드 수 n, 간선 수 m, 간선 배열 edges, 시작 노드 start가 주어집니다. edges[i] = [u, v, w]. (1 ≤ n ≤ 20,000, 1 ≤ m ≤ 300,000, 1 ≤ w ≤ 10,000)',
    outputDescription:
      '각 노드까지의 최단 거리 배열을 반환합니다. 도달 불가는 -1.',
    constraints: [
      '1 ≤ n ≤ 20,000',
      '1 ≤ m ≤ 300,000',
      '1 ≤ w ≤ 10,000',
      '음수 간선은 없습니다.',
    ],
    examples: [
      {
        input: 'n = 5, edges = [[1,2,2],[1,3,3],[2,3,1],[2,4,5],[3,4,1],[3,5,4],[4,5,2]], start = 1',
        output: '[0, 2, 3, 4, 6]',
        explanation: '1번 노드에서 각 노드까지의 최단 거리: 1->1=0, 1->2=2, 1->3=3, 1->4=4, 1->5=6',
      },
    ],
    hints: [
      '최소 힙(priority queue)을 사용하면 O((V+E) log V)로 구현 가능합니다.',
      'heapq.heappush(heap, (dist, node))로 힙을 활용하세요.',
      '이미 처리된 노드는 건너뛰어 중복 처리를 방지합니다.',
    ],
    solution: `import heapq

def solution(n, edges, start):
    INF = float('inf')
    graph = [[] for _ in range(n + 1)]
    for u, v, w in edges:
        graph[u].append((v, w))

    dist = [INF] * (n + 1)
    dist[start] = 0
    heap = [(0, start)]

    while heap:
        cost, node = heapq.heappop(heap)
        if cost > dist[node]:
            continue
        for neighbor, weight in graph[node]:
            new_cost = cost + weight
            if new_cost < dist[neighbor]:
                dist[neighbor] = new_cost
                heapq.heappush(heap, (new_cost, neighbor))

    return [d if d != INF else -1 for d in dist[1:]]`,
    explanation:
      '다익스트라 알고리즘은 우선순위 큐(최소 힙)를 사용해 현재까지 가장 짧은 거리의 노드를 먼저 처리합니다. 이미 최적 거리로 처리된 노드(cost > dist[node])는 건너뜁니다. 인접 노드로의 새 경로가 기존 경로보다 짧으면 갱신하고 힙에 추가합니다. 음수 간선이 없어야 올바르게 동작합니다.',
    tags: ['graph', 'dijkstra', 'shortest-path', 'heap'],
    acceptRate: 28,
    solveCount: 6200,
    createdAt: '2024-01-05',
  },
  {
    id: 'prob_0029',
    title: '위상 정렬',
    level: 4,
    category: 'Graph',
    description:
      'n개의 강의와 선수 강의 관계가 주어집니다. 선수 강의를 모두 완료한 후에만 다음 강의를 들을 수 있을 때, 모든 강의를 수강 가능한 순서대로 반환하세요. 불가능한 경우(순환이 있는 경우) 빈 배열을 반환합니다.',
    inputDescription:
      '강의 수 n, 선수 관계 배열 prerequisites가 주어집니다. prerequisites[i] = [a, b]는 a를 먼저 들어야 b를 들을 수 있음을 의미합니다. (1 ≤ n ≤ 2,000)',
    outputDescription: '위상 정렬 결과 배열을 반환합니다. 불가능하면 빈 배열.',
    constraints: [
      '1 ≤ n ≤ 2,000',
      '0 ≤ prerequisites의 길이 ≤ n*(n-1)',
      'prerequisites[i] = [a, b]는 a -> b를 의미합니다.',
    ],
    examples: [
      {
        input: 'n = 4, prerequisites = [[1,2],[1,3],[2,4],[3,4]]',
        output: '[1, 2, 3, 4] 또는 [1, 3, 2, 4]',
        explanation: '1을 먼저, 2와 3을 다음에(순서 무관), 4를 마지막에 수강합니다.',
      },
      {
        input: 'n = 3, prerequisites = [[1,2],[2,3],[3,1]]',
        output: '[]',
        explanation: '순환이 있으므로 위상 정렬이 불가능합니다.',
      },
    ],
    hints: [
      '카흔(Kahn) 알고리즘을 사용하세요.',
      '진입 차수(in-degree)가 0인 노드부터 처리합니다.',
      '처리된 노드 수가 n보다 적으면 순환이 있는 것입니다.',
    ],
    solution: `from collections import deque

def solution(n, prerequisites):
    graph = [[] for _ in range(n + 1)]
    in_degree = [0] * (n + 1)

    for a, b in prerequisites:
        graph[a].append(b)
        in_degree[b] += 1

    queue = deque()
    for i in range(1, n + 1):
        if in_degree[i] == 0:
            queue.append(i)

    result = []
    while queue:
        node = queue.popleft()
        result.append(node)
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return result if len(result) == n else []`,
    explanation:
      '카흔 알고리즘은 진입 차수(in-degree)를 이용한 BFS 기반 위상 정렬입니다. 초기에 in-degree가 0인 노드를 큐에 추가하고, 처리 시 해당 노드의 이웃 노드의 in-degree를 감소시킵니다. in-degree가 0이 된 노드를 다시 큐에 추가합니다. 최종 결과 크기가 n과 다르면 그래프에 순환이 있다는 의미입니다.',
    tags: ['graph', 'topological-sort', 'bfs', 'in-degree'],
    acceptRate: 25,
    solveCount: 5000,
    createdAt: '2024-01-05',
  },

  // ─────────────────────────────────────────────────────────────
  // Level 5 — 전문가 (prob_0030)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'prob_0030',
    title: '최소 신장 트리',
    level: 5,
    category: 'Graph',
    description:
      'n개의 노드와 m개의 간선을 가진 무방향 가중 그래프가 있습니다. 크루스칼(Kruskal) 알고리즘을 이용하여 최소 신장 트리(MST, Minimum Spanning Tree)를 구성하고, MST의 총 간선 가중치 합을 반환하세요. 그래프가 연결되지 않은 경우 -1을 반환합니다.\n\n신장 트리는 그래프의 모든 노드를 포함하면서 사이클 없이 연결된 부분 그래프입니다.',
    inputDescription:
      '노드 수 n, 간선 수 m, 간선 정보 배열 edges가 주어집니다. edges[i] = [u, v, w]. (1 ≤ n ≤ 1,000, 1 ≤ m ≤ 100,000, 1 ≤ w ≤ 1,000,000)',
    outputDescription: 'MST의 총 간선 가중치 합을 반환합니다. 연결되지 않으면 -1.',
    constraints: [
      '1 ≤ n ≤ 1,000',
      '1 ≤ m ≤ 100,000',
      '1 ≤ w ≤ 1,000,000',
      '간선은 무방향입니다.',
      '병렬 간선이 있을 수 있습니다.',
    ],
    examples: [
      {
        input: 'n = 4, m = 5, edges = [[1,2,10],[1,3,6],[1,4,5],[2,4,15],[3,4,4]]',
        output: '19',
        explanation: 'MST 간선: (3,4)=4, (1,4)=5, (1,2)=10 -> 합계 19.',
      },
      {
        input: 'n = 4, m = 4, edges = [[1,2,3],[1,3,1],[2,3,2],[2,4,5]]',
        output: '9',
        explanation: 'MST 간선: (1,3)=1, (2,3)=2, (2,4)=5 -> 합계 8. 실제: 1+2+5=8이지만 모든 노드 연결.',
      },
    ],
    hints: [
      '크루스칼 알고리즘은 간선을 가중치 오름차순으로 정렬한 후 그리디하게 선택합니다.',
      '사이클 방지를 위해 유니온-파인드(Union-Find) 자료구조를 사용하세요.',
      'find() 함수에 경로 압축(Path Compression)을 적용하세요.',
      'MST에는 정확히 n-1개의 간선이 포함됩니다.',
    ],
    solution: `def solution(n, m, edges):
    parent = list(range(n + 1))
    rank = [0] * (n + 1)

    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]

    def union(x, y):
        rx, ry = find(x), find(y)
        if rx == ry:
            return False
        if rank[rx] < rank[ry]:
            rx, ry = ry, rx
        parent[ry] = rx
        if rank[rx] == rank[ry]:
            rank[rx] += 1
        return True

    edges.sort(key=lambda e: e[2])

    total_weight = 0
    edge_count = 0

    for u, v, w in edges:
        if union(u, v):
            total_weight += w
            edge_count += 1
            if edge_count == n - 1:
                return total_weight

    return -1 if edge_count < n - 1 else total_weight`,
    explanation:
      '크루스칼 알고리즘은 그리디 전략으로 최소 신장 트리를 구성합니다. 간선을 가중치 오름차순으로 정렬하고, 사이클을 만들지 않는 간선을 차례로 선택합니다. 사이클 감지에는 유니온-파인드 자료구조를 사용하며, 경로 압축과 랭크 기반 합치기로 매우 효율적입니다. n-1개의 간선이 선택되면 MST 완성, 그 전에 간선이 소진되면 비연결 그래프입니다. 전체 시간 복잡도는 O(m log m)입니다.',
    tags: ['graph', 'mst', 'kruskal', 'union-find', 'greedy'],
    acceptRate: 15,
    solveCount: 2800,
    createdAt: '2024-01-06',
  },
];
