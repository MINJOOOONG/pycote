import { Concept } from '../types/concept';

export const CONCEPTS: Concept[] = [
  {
    id: 'concept_01',
    title: 'Python 기초',
    category: 'Python Basics',
    summary:
      'Python은 인터프리터 방식으로 실행되며 들여쓰기(indentation)로 코드 블록을 구분합니다. 코딩 테스트에서 Python은 간결한 문법과 풍부한 내장 함수 덕분에 많이 사용됩니다.',
    codeExamples: [
      {
        description: '기본 입출력과 주석',
        code: `# 한 줄 주석
"""
여러 줄 주석(독스트링)
"""

# 표준 입력
n = int(input())           # 정수 입력
s = input()                # 문자열 입력
a, b = map(int, input().split())  # 공백으로 구분된 정수 두 개

# 표준 출력
print("Hello, Python!")
print(a + b)
print(f"a={a}, b={b}")    # f-string 출력`,
        output: `(입력: 3 5)
Hello, Python!
8
a=3, b=5`,
      },
      {
        description: '들여쓰기와 코드 블록',
        code: `# Python은 {}가 아닌 들여쓰기로 블록을 구분합니다
x = 10
if x > 5:
    print("x는 5보다 큽니다")  # 들여쓰기 4칸
    if x > 8:
        print("x는 8보다도 큽니다")  # 들여쓰기 8칸
print("항상 출력됩니다")`,
        output: `x는 5보다 큽니다
x는 8보다도 큽니다
항상 출력됩니다`,
      },
      {
        description: '여러 줄 입력 받기',
        code: `import sys
input = sys.stdin.readline  # 빠른 입력 (대용량 입력 시 사용)

n = int(input())
arr = list(map(int, input().split()))
print(arr)`,
        output: `(입력: 5 / 1 2 3 4 5)
[1, 2, 3, 4, 5]`,
      },
    ],
    patterns: [
      'sys.stdin.readline으로 빠른 입력 처리',
      'map(int, input().split())으로 정수 배열 입력',
      'f-string으로 포맷팅 출력',
      '들여쓰기 일관성 유지 (4칸 권장)',
    ],
    tips: [
      '대용량 입력이 있을 때는 input() 대신 sys.stdin.readline을 사용하면 시간 초과를 방지할 수 있습니다.',
      'print()는 기본적으로 줄바꿈을 포함합니다. 줄바꿈 없이 출력하려면 end="" 매개변수를 사용하세요.',
      '코딩 테스트에서는 파일 상단에 import sys / input = sys.stdin.readline을 습관적으로 작성하는 것이 좋습니다.',
      'Python의 int는 임의 정밀도를 지원하므로 오버플로우 걱정이 없습니다.',
    ],
    relatedProblemIds: ['prob_0001', 'prob_0002'],
    order: 1,
  },
  {
    id: 'concept_02',
    title: '변수와 할당',
    category: 'Variables',
    summary:
      'Python은 동적 타입 언어로 변수 선언 없이 바로 값을 할당할 수 있습니다. 변수는 객체에 대한 참조이며 다중 할당, 교환 등 편리한 문법을 지원합니다.',
    codeExamples: [
      {
        description: '기본 변수 할당과 다중 할당',
        code: `# 기본 할당
x = 10
name = "Python"
is_valid = True

# 다중 할당 (언패킹)
a, b, c = 1, 2, 3
print(a, b, c)

# 두 변수 교환 (Python만의 특권!)
a, b = b, a
print(a, b)

# 같은 값 다중 할당
x = y = z = 0
print(x, y, z)`,
        output: `1 2 3
2 1
0 0 0`,
      },
      {
        description: '변수 네이밍 규칙',
        code: `# 올바른 변수명
count = 0
my_list = []
MAX_SIZE = 1000      # 상수는 대문자 관행
_private = "내부용"
camelCase = "비권장" # Python은 snake_case 권장

# 예약어는 변수명으로 사용 불가
# for = 1  # SyntaxError!
# list = []  # 내장 함수 덮어쓰기 (주의!)

# 변수 삭제
temp = 42
del temp
# print(temp)  # NameError`,
        output: '',
      },
      {
        description: '변수의 타입 확인과 변환',
        code: `x = 42
print(type(x))        # <class 'int'>

y = float(x)
print(y, type(y))     # 42.0 <class 'float'>

s = str(x)
print(s, type(s))     # "42" <class 'str'>

b = bool(x)
print(b)              # True (0이 아닌 값은 True)
print(bool(0))        # False`,
        output: `<class 'int'>
42.0 <class 'float'>
42 <class 'str'>
True
False`,
      },
    ],
    patterns: [
      'a, b = b, a 로 두 변수를 O(1)에 교환',
      'a, *rest = arr 로 첫 원소와 나머지를 분리',
      'snake_case 네이밍 컨벤션 사용',
      'isinstance()로 타입 체크',
    ],
    tips: [
      '변수 교환 시 temp 변수 없이 a, b = b, a 한 줄로 처리하면 더 파이썬스럽습니다.',
      'list, dict, set 등 내장 타입명을 변수명으로 사용하면 해당 기능이 가려지므로 주의하세요.',
      '코딩 테스트에서 INF = float("inf") 또는 INF = 10**9 형태로 무한대를 표현합니다.',
      'global 변수 사용이 필요하면 함수 내부에서 global 키워드를 선언해야 합니다.',
    ],
    relatedProblemIds: ['prob_0001', 'prob_0002', 'prob_0012'],
    order: 2,
  },
  {
    id: 'concept_03',
    title: '자료형',
    category: 'Data Types',
    summary:
      'Python의 주요 자료형은 int, float, str, bool이 있습니다. 각 자료형의 특성과 형 변환 방법을 이해하면 코딩 테스트에서 실수를 줄일 수 있습니다.',
    codeExamples: [
      {
        description: '수치형 자료형',
        code: `# 정수 (임의 정밀도)
a = 10
b = -5
big = 10 ** 18       # 매우 큰 수도 처리 가능

# 실수
pi = 3.14159
e = 2.718

# 정수 연산
print(7 // 3)        # 나눗셈 몫: 2
print(7 % 3)         # 나머지: 1
print(7 ** 2)        # 거듭제곱: 49
print(7 / 3)         # 실수 나눗셈: 2.333...

# 절댓값, 최댓값, 최솟값
print(abs(-5))       # 5
print(max(3, 7, 1))  # 7
print(min(3, 7, 1))  # 1`,
        output: `2
1
49
2.3333333333333335
5
7
1`,
      },
      {
        description: '불리언과 비교 연산',
        code: `# 불리언
t = True
f = False

# 비교 연산 결과는 불리언
print(5 > 3)         # True
print(5 == 5)        # True
print(5 != 3)        # True

# 논리 연산
print(True and False)   # False
print(True or False)    # True
print(not True)         # False

# Falsy 값들
falsy_values = [0, 0.0, "", [], {}, set(), None, False]
for v in falsy_values:
    print(bool(v), end=" ")`,
        output: `True
True
True
False
True
False
False False False False False False False False`,
      },
      {
        description: '형 변환',
        code: `# 문자열 -> 숫자
n = int("123")
f = float("3.14")

# 숫자 -> 문자열
s = str(42)

# 진수 변환
print(bin(10))      # 2진수: 0b1010
print(oct(10))      # 8진수: 0o12
print(hex(255))     # 16진수: 0xff

# 문자 <-> ASCII
print(ord('A'))     # 65
print(chr(65))      # 'A'
print(ord('a') - ord('A'))  # 32`,
        output: `0b1010
0o12
0xff
65
A
32`,
      },
    ],
    patterns: [
      'int()로 문자열을 정수로 변환',
      'str()로 숫자를 문자열로 변환',
      'ord()/chr()로 문자-ASCII 변환',
      '// 연산자로 정수 나눗셈',
    ],
    tips: [
      '실수 비교 시 == 대신 abs(a - b) < 1e-9 형식을 사용하면 부동소수점 오차를 피할 수 있습니다.',
      '정수 나눗셈에서 음수 처리: Python의 //는 바닥 나눗셈이므로 -7 // 2 = -4 (수학적 정의와 동일)입니다.',
      'int("1_000_000")처럼 밑줄이 포함된 숫자 문자열도 변환 가능합니다.',
      '코딩 테스트에서 무한대는 float("inf")를 주로 사용합니다.',
    ],
    relatedProblemIds: ['prob_0001', 'prob_0007', 'prob_0012'],
    order: 3,
  },
  {
    id: 'concept_04',
    title: '문자열 처리',
    category: 'String',
    summary:
      'Python의 문자열은 불변(immutable) 시퀀스입니다. 슬라이싱, 다양한 메서드, f-string 등을 활용하면 코딩 테스트의 문자열 문제를 효율적으로 풀 수 있습니다.',
    codeExamples: [
      {
        description: '문자열 슬라이싱과 인덱싱',
        code: `s = "Hello, Python!"

# 인덱싱 (0부터 시작, 음수는 뒤에서)
print(s[0])          # H
print(s[-1])         # !
print(s[7])          # P

# 슬라이싱 [start:stop:step]
print(s[0:5])        # Hello
print(s[7:])         # Python!
print(s[:5])         # Hello
print(s[::-1])       # !nohtyP ,olleH (역순)
print(s[::2])        # Hlo yhn`,
        output: `H
!
P
Hello
Python!
Hello
!nohtyP ,olleH
Hlo yhn`,
      },
      {
        description: '주요 문자열 메서드',
        code: `s = "  Hello, World!  "

print(s.strip())           # "Hello, World!" (앞뒤 공백 제거)
print(s.lower())           # "  hello, world!  "
print(s.upper())           # "  HELLO, WORLD!  "
print(s.replace("World", "Python"))

words = "apple,banana,cherry"
print(words.split(","))    # ['apple', 'banana', 'cherry']
print("-".join(["a", "b", "c"]))  # "a-b-c"

text = "hello world"
print(text.count("l"))     # 3
print(text.find("world"))  # 6
print(text.startswith("hello"))  # True
print(text.endswith("world"))    # True`,
        output: `Hello, World!
  hello, world!  
  HELLO, WORLD!  
  Hello, Python!  
['apple', 'banana', 'cherry']
a-b-c
3
6
True
True`,
      },
      {
        description: 'f-string과 문자열 포맷팅',
        code: `name = "Alice"
score = 95.5

# f-string (Python 3.6+, 가장 권장)
print(f"이름: {name}, 점수: {score:.1f}")

# 정렬과 패딩
print(f"{'왼쪽':<10}|")   # 왼쪽 정렬, 10칸
print(f"{'오른쪽':>10}|") # 오른쪽 정렬, 10칸
print(f"{'숫자':^10}|")   # 가운데 정렬, 10칸

# 숫자 포맷
big_num = 1000000
print(f"{big_num:,}")      # 1,000,000 (천 단위 콤마)
print(f"{0.1234:.2f}")     # 0.12 (소수점 2자리)`,
        output: `이름: Alice, 점수: 95.5
왼쪽        |
    오른쪽|
   숫자   |
1,000,000
0.12`,
      },
    ],
    patterns: [
      's[::-1]로 문자열 역순',
      'split()과 join() 쌍으로 문자열 분해/조합',
      'strip()으로 입력 공백 제거',
      'ord()와 chr()로 문자 변환',
    ],
    tips: [
      '문자열은 불변이므로 반복적으로 문자열을 연결할 때는 리스트에 담아 join()하는 것이 O(n) vs O(n^2)으로 훨씬 효율적입니다.',
      '알파벳 판별: s.isalpha(), 숫자 판별: s.isdigit(), 알파벳+숫자: s.isalnum()을 활용하세요.',
      '문자열을 list로 변환하면 변경 가능한 배열처럼 쓸 수 있고, 다시 "".join(lst)로 합칩니다.',
      '코딩 테스트에서 입력받은 문자열에 공백이 있을 수 있으니 strip()을 습관적으로 사용하세요.',
    ],
    relatedProblemIds: ['prob_0004', 'prob_0006', 'prob_0009', 'prob_0011'],
    order: 4,
  },
  {
    id: 'concept_05',
    title: '리스트',
    category: 'List',
    summary:
      'Python 리스트는 가변 길이의 순서 있는 컬렉션으로, 코딩 테스트에서 가장 많이 사용되는 자료구조입니다. 리스트 컴프리헨션과 다양한 내장 메서드를 숙지하면 간결한 코드 작성이 가능합니다.',
    codeExamples: [
      {
        description: '리스트 기본 조작',
        code: `# 생성
arr = [1, 2, 3, 4, 5]
empty = []
zeros = [0] * 5        # [0, 0, 0, 0, 0]
matrix = [[0]*3 for _ in range(3)]  # 2D 배열

# 접근 및 수정
print(arr[0])          # 1
arr[0] = 10
print(arr)             # [10, 2, 3, 4, 5]

# 추가/삭제
arr.append(6)          # 끝에 추가
arr.insert(1, 99)      # 인덱스 1에 삽입
arr.pop()              # 마지막 원소 제거 (반환)
arr.pop(0)             # 인덱스 0 제거
arr.remove(3)          # 값 3 제거 (첫 번째 발견)

print(len(arr))        # 길이`,
        output: `1
[10, 2, 3, 4, 5]
4`,
      },
      {
        description: '리스트 컴프리헨션',
        code: `# 기본 컴프리헨션
squares = [x**2 for x in range(1, 6)]
print(squares)         # [1, 4, 9, 16, 25]

# 조건 포함
evens = [x for x in range(10) if x % 2 == 0]
print(evens)           # [0, 2, 4, 6, 8]

# 중첩 컴프리헨션 (2D 배열 평탄화)
matrix = [[1,2,3],[4,5,6],[7,8,9]]
flat = [x for row in matrix for x in row]
print(flat)            # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# 조건부 표현식
result = ["짝수" if x % 2 == 0 else "홀수" for x in range(5)]
print(result)`,
        output: `[1, 4, 9, 16, 25]
[0, 2, 4, 6, 8]
[1, 2, 3, 4, 5, 6, 7, 8, 9]
['짝수', '홀수', '짝수', '홀수', '짝수']`,
      },
      {
        description: '리스트 유용한 함수',
        code: `arr = [3, 1, 4, 1, 5, 9, 2, 6]

# 정렬
print(sorted(arr))          # 새 배열 반환
arr.sort()                  # 제자리 정렬
arr.sort(reverse=True)      # 내림차순
print(arr)

# 통계
print(sum(arr))             # 합
print(max(arr))             # 최댓값
print(min(arr))             # 최솟값

# 검색
print(arr.index(5))         # 값 5의 인덱스
print(arr.count(1))         # 값 1의 개수
print(5 in arr)             # 포함 여부

# 역순
arr.reverse()
print(arr[::-1])            # 슬라이싱으로 역순 (원본 유지)`,
        output: `[1, 1, 2, 3, 4, 5, 6, 9]
[9, 6, 5, 4, 3, 2, 1, 1]
31
9
1
3
2
True`,
      },
    ],
    patterns: [
      '[0] * n 으로 초기화된 배열 생성',
      '[[0]*m for _ in range(n)] 으로 2D 배열 생성',
      '리스트 컴프리헨션으로 변환/필터링',
      'sorted(key=lambda x: ...)로 커스텀 정렬',
    ],
    tips: [
      '2D 배열을 [[0]*m]*n 으로 생성하면 모든 행이 같은 객체를 참조하는 버그가 생깁니다. 반드시 [[0]*m for _ in range(n)] 을 사용하세요.',
      'pop(0)은 O(n) 연산이므로 큐처럼 앞에서 꺼내야 한다면 collections.deque를 사용하세요.',
      'in 연산자는 리스트에서 O(n)이지만 set에서는 O(1)입니다. 빈번한 탐색이 필요하면 set으로 변환하세요.',
      'enumerate(arr)로 인덱스와 값을 동시에 순회할 수 있어 코딩 테스트에서 자주 활용됩니다.',
    ],
    relatedProblemIds: ['prob_0003', 'prob_0005', 'prob_0010'],
    order: 5,
  },
  {
    id: 'concept_06',
    title: '튜플',
    category: 'Tuple',
    summary:
      '튜플은 불변(immutable)한 순서 있는 컬렉션입니다. 변경되지 않아야 하는 데이터나 딕셔너리 키, 다중 반환값에 활용됩니다. 리스트보다 메모리 효율이 높습니다.',
    codeExamples: [
      {
        description: '튜플 기본 사용',
        code: `# 생성
t = (1, 2, 3)
single = (42,)         # 원소 1개 튜플은 콤마 필수
no_paren = 1, 2, 3     # 괄호 생략 가능

# 인덱싱과 슬라이싱 (리스트와 동일)
print(t[0])            # 1
print(t[-1])           # 3
print(t[1:])           # (2, 3)

# 불변성 확인
# t[0] = 10  # TypeError!

# 길이, 합, 최댓값
print(len(t))          # 3
print(sum(t))          # 6
print(max(t))          # 3`,
        output: `1
3
(2, 3)
3
6
3`,
      },
      {
        description: '튜플 언패킹',
        code: `# 기본 언패킹
point = (3, 4)
x, y = point
print(f"x={x}, y={y}")

# 함수에서 다중 반환
def min_max(arr):
    return min(arr), max(arr)

lo, hi = min_max([3, 1, 4, 1, 5, 9])
print(f"min={lo}, max={hi}")

# * 를 이용한 언패킹
first, *rest = (1, 2, 3, 4, 5)
print(first, rest)

*init, last = (1, 2, 3, 4, 5)
print(init, last)`,
        output: `x=3, y=4
min=1, max=9
1 [2, 3, 4, 5]
[1, 2, 3, 4] 5`,
      },
      {
        description: '튜플을 딕셔너리 키와 정렬 기준으로 활용',
        code: `# 딕셔너리 키로 사용 (불변이므로 해시 가능)
d = {}
d[(0, 0)] = "origin"
d[(1, 2)] = "point"
print(d[(0, 0)])

# 정렬 시 튜플 키 활용
students = [("Alice", 90), ("Bob", 85), ("Charlie", 90)]
# 점수 내림차순, 같으면 이름 오름차순
students.sort(key=lambda x: (-x[1], x[0]))
print(students)`,
        output: `origin
[('Alice', 90), ('Charlie', 90), ('Bob', 85)]`,
      },
    ],
    patterns: [
      '함수에서 다중 값 반환 시 튜플 사용',
      '(x, y) 좌표 쌍을 튜플로 표현',
      'sorted()의 key로 튜플을 사용해 다중 기준 정렬',
      '딕셔너리의 키로 튜플 활용 (불변이므로 hashable)',
    ],
    tips: [
      '튜플은 리스트보다 생성이 빠르고 메모리를 덜 씁니다. 변경이 필요 없는 데이터는 튜플을 사용하세요.',
      'namedtuple을 활용하면 인덱스 대신 이름으로 접근할 수 있어 가독성이 높아집니다.',
      '정렬 기준으로 튜플을 사용할 때 (-값)을 쓰면 내림차순을 쉽게 구현할 수 있습니다.',
      '튜플의 원소가 가변 객체(리스트 등)이면 그 내용은 변경 가능합니다.',
    ],
    relatedProblemIds: ['prob_0015', 'prob_0019'],
    order: 6,
  },
  {
    id: 'concept_07',
    title: '집합',
    category: 'Set',
    summary:
      '집합(set)은 중복을 허용하지 않는 해시 기반 컬렉션입니다. 원소 존재 여부 확인이 O(1)이며, 합집합, 교집합, 차집합 등 집합 연산을 지원합니다.',
    codeExamples: [
      {
        description: '집합 생성과 기본 연산',
        code: `# 생성
s = {1, 2, 3, 4, 5}
from_list = set([1, 2, 2, 3, 3, 3])  # 중복 제거
empty_set = set()      # {}는 딕셔너리이므로 set() 사용

print(from_list)       # {1, 2, 3}

# 추가/삭제
s.add(6)
s.remove(1)            # 없으면 KeyError
s.discard(100)         # 없어도 에러 없음

# 포함 여부 확인 (O(1))
print(3 in s)          # True
print(10 in s)         # False`,
        output: `{1, 2, 3}
True
False`,
      },
      {
        description: '집합 연산',
        code: `a = {1, 2, 3, 4, 5}
b = {3, 4, 5, 6, 7}

# 합집합
print(a | b)           # {1, 2, 3, 4, 5, 6, 7}
print(a.union(b))

# 교집합
print(a & b)           # {3, 4, 5}
print(a.intersection(b))

# 차집합
print(a - b)           # {1, 2}
print(a.difference(b))

# 대칭 차집합 (합집합 - 교집합)
print(a ^ b)           # {1, 2, 6, 7}

# 부분집합 확인
print({3, 4} <= a)     # True (부분집합)
print({3, 4} < a)      # True (진부분집합)`,
        output: `{1, 2, 3, 4, 5, 6, 7}
{1, 2, 3, 4, 5, 6, 7}
{3, 4, 5}
{3, 4, 5}
{1, 2}
{1, 2}
{1, 2, 6, 7}
True
True`,
      },
      {
        description: '집합 활용 패턴',
        code: `# 중복 제거
arr = [1, 2, 2, 3, 3, 3, 4]
unique = list(set(arr))
print(sorted(unique))     # [1, 2, 3, 4]

# 빠른 조회를 위한 set 변환
targets = [3, 7, 11]
target_set = set(targets)
for i in range(15):
    if i in target_set:   # O(1)
        print(i, end=" ")`,
        output: `[1, 2, 3, 4]
3 7 11`,
      },
    ],
    patterns: [
      'set(list)로 중복 제거',
      '& 연산자로 두 컬렉션의 교집합',
      '| 연산자로 합집합',
      '빈번한 in 검색이 필요할 때 list -> set 변환',
    ],
    tips: [
      '집합은 순서가 없으므로 인덱스로 접근할 수 없습니다. 순서가 필요하면 sorted(set(arr))를 사용하세요.',
      '집합의 원소는 해시 가능한 값이어야 합니다. 리스트는 집합의 원소가 될 수 없습니다.',
      '코딩 테스트에서 "방문 여부 확인"에 집합을 활용하면 O(1) 조회로 성능을 높일 수 있습니다.',
      'frozenset은 불변 집합으로 딕셔너리 키나 다른 집합의 원소로 사용할 수 있습니다.',
    ],
    relatedProblemIds: ['prob_0013', 'prob_0022'],
    order: 7,
  },
  {
    id: 'concept_08',
    title: '딕셔너리',
    category: 'Dictionary',
    summary:
      '딕셔너리는 키-값 쌍의 해시 테이블입니다. 키로 값을 O(1)에 조회할 수 있어 빈도 카운팅, 그래프 표현, 메모이제이션 등 다양한 코딩 테스트 문제에 활용됩니다.',
    codeExamples: [
      {
        description: '딕셔너리 기본 조작',
        code: `# 생성
d = {"name": "Alice", "age": 25, "score": 90}
empty = {}

# 접근
print(d["name"])           # Alice
print(d.get("name"))       # Alice
print(d.get("phone", "N/A"))  # 없으면 기본값

# 추가/수정/삭제
d["email"] = "alice@example.com"
d["age"] = 26
del d["score"]
removed = d.pop("age", None)   # 없어도 에러 없음

# 순회
for key in d:
    print(key, d[key])

for key, value in d.items():
    print(f"{key}: {value}")`,
        output: `Alice
Alice
N/A
name Alice
email alice@example.com
name: Alice
email: alice@example.com`,
      },
      {
        description: 'defaultdict와 Counter',
        code: `from collections import defaultdict, Counter

# defaultdict: 없는 키 접근 시 기본값 제공
dd = defaultdict(int)       # 기본값 0
for ch in "hello world":
    if ch != ' ':
        dd[ch] += 1
print(dict(dd))

# list 기본값 딕셔너리 (그래프 표현)
graph = defaultdict(list)
edges = [(1,2), (1,3), (2,4)]
for u, v in edges:
    graph[u].append(v)
print(dict(graph))

# Counter: 빈도 카운팅
c = Counter("abracadabra")
print(c)
print(c.most_common(3))    # 상위 3개`,
        output: `{'h': 1, 'e': 1, 'l': 3, 'o': 2, 'w': 1, 'r': 1, 'd': 1}
{1: [2, 3], 2: [4]}
Counter({'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1})
[('a', 5), ('b', 2), ('r', 2)]`,
      },
      {
        description: '딕셔너리 컴프리헨션',
        code: `# 딕셔너리 컴프리헨션
squares = {x: x**2 for x in range(1, 6)}
print(squares)

# 필터링 포함
even_sq = {x: x**2 for x in range(1, 11) if x % 2 == 0}
print(even_sq)

# 리스트에서 딕셔너리 생성
keys = ["a", "b", "c"]
values = [1, 2, 3]
d = dict(zip(keys, values))
print(d)

# 키 정렬
sorted_d = dict(sorted(d.items()))
print(sorted_d)`,
        output: `{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
{2: 4, 4: 16, 6: 36, 8: 64, 10: 100}
{'a': 1, 'b': 2, 'c': 3}
{'a': 1, 'b': 2, 'c': 3}`,
      },
    ],
    patterns: [
      'defaultdict(int)로 빈도 카운팅',
      'defaultdict(list)로 그래프 인접 리스트',
      'Counter로 최빈값 추출',
      'd.get(key, default)로 안전한 접근',
    ],
    tips: [
      'Python 3.7+부터 딕셔너리는 삽입 순서를 유지합니다. 순서가 중요한 경우 활용할 수 있습니다.',
      'Counter끼리 +, - 연산이 가능합니다. 두 문자열의 아나그램 비교에 Counter(s1) == Counter(s2)를 활용하세요.',
      '딕셔너리 키 조회는 O(1)이지만 최악의 경우 O(n)이 될 수 있습니다 (해시 충돌). 실제 문제에서는 거의 O(1)으로 처리됩니다.',
      'defaultdict 대신 setdefault() 메서드를 사용할 수도 있습니다: d.setdefault(key, []).append(val)',
    ],
    relatedProblemIds: ['prob_0013', 'prob_0018', 'prob_0026'],
    order: 8,
  },
  {
    id: 'concept_09',
    title: '함수',
    category: 'Function',
    summary:
      'Python 함수는 def 키워드로 정의하며 일급 객체입니다. *args, **kwargs, lambda, map/filter 등 고급 함수 기능은 코딩 테스트에서 코드를 간결하게 만드는 데 유용합니다.',
    codeExamples: [
      {
        description: '함수 정의와 매개변수',
        code: `# 기본 함수
def greet(name, greeting="안녕하세요"):
    return f"{greeting}, {name}!"

print(greet("Alice"))
print(greet("Bob", "반갑습니다"))

# *args: 가변 위치 인수
def my_sum(*args):
    return sum(args)

print(my_sum(1, 2, 3))        # 6
print(my_sum(1, 2, 3, 4, 5))  # 15

# **kwargs: 가변 키워드 인수
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="Seoul")`,
        output: `안녕하세요, Alice!
반갑습니다, Bob!
6
15
name: Alice
age: 25
city: Seoul`,
      },
      {
        description: '람다, map, filter',
        code: `# lambda: 익명 함수
square = lambda x: x ** 2
print(square(5))        # 25

# 정렬 key로 활용
pairs = [(1, 'b'), (3, 'a'), (2, 'c')]
pairs.sort(key=lambda x: x[1])
print(pairs)

# map: 모든 원소에 함수 적용
nums = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, nums))
print(squared)

# 실제 코딩 테스트에서 자주 쓰는 map 패턴
line = "1 2 3 4 5"
arr = list(map(int, line.split()))
print(arr)

# filter: 조건에 맞는 원소만 선택
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens)`,
        output: `25
[(3, 'a'), (1, 'b'), (2, 'c')]
[1, 4, 9, 16, 25]
[1, 2, 3, 4, 5]
[2, 4]`,
      },
      {
        description: '클로저와 nonlocal',
        code: `# 클로저 (내부 함수가 외부 변수 참조)
def make_counter():
    count = 0
    def counter():
        nonlocal count  # 외부 변수 수정 허용
        count += 1
        return count
    return counter

c = make_counter()
print(c())   # 1
print(c())   # 2
print(c())   # 3

# DFS/BFS에서 nonlocal 활용
def solve(n):
    result = 0
    def dfs(x):
        nonlocal result
        if x == 0:
            result += 1
            return
        dfs(x - 1)
        dfs(x - 1)
    dfs(n)
    return result

print(solve(3))   # 8 (2^3)`,
        output: `1
2
3
8`,
      },
    ],
    patterns: [
      'lambda x: x[1] 로 정렬 키 지정',
      'map(int, input().split()) 으로 정수 배열 입력',
      'nonlocal로 중첩 함수에서 외부 변수 수정',
      '재귀 함수의 결과를 nonlocal 변수에 누적',
    ],
    tips: [
      '코딩 테스트에서 재귀 깊이 제한을 늘리려면 sys.setrecursionlimit(100000)을 사용하세요.',
      'lambda는 간단한 표현식만 가능합니다. 복잡한 로직은 def로 별도 함수를 정의하세요.',
      'map()과 filter()는 이터레이터를 반환합니다. 리스트가 필요하면 list()로 감싸세요.',
      '함수 내에서 외부 변수를 수정할 때는 nonlocal(지역 스코프)이나 global(전역 스코프) 키워드를 사용하세요.',
    ],
    relatedProblemIds: ['prob_0005', 'prob_0018', 'prob_0022'],
    order: 9,
  },
  {
    id: 'concept_10',
    title: '재귀',
    category: 'Recursion',
    summary:
      '재귀는 함수가 자기 자신을 호출하는 기법으로, DFS, 트리 탐색, 분할 정복 등 다양한 알고리즘에 사용됩니다. 기저 조건(base case)을 반드시 정의해야 무한 재귀를 방지할 수 있습니다.',
    codeExamples: [
      {
        description: '기본 재귀: 팩토리얼과 피보나치',
        code: `import sys
sys.setrecursionlimit(10000)

# 팩토리얼
def factorial(n):
    if n <= 1:          # 기저 조건
        return 1
    return n * factorial(n - 1)

print(factorial(5))    # 120
print(factorial(10))   # 3628800

# 피보나치 (단순 재귀 - 비효율)
def fib(n):
    if n <= 1:          # 기저 조건
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(10))         # 55`,
        output: `120
3628800
55`,
      },
      {
        description: '메모이제이션으로 재귀 최적화',
        code: `from functools import lru_cache
import sys
sys.setrecursionlimit(10000)

# lru_cache로 간단히 메모이제이션
@lru_cache(maxsize=None)
def fib_memo(n):
    if n <= 1:
        return n
    return fib_memo(n - 1) + fib_memo(n - 2)

print(fib_memo(50))    # 12586269025 (즉시 반환)

# 수동 메모이제이션
memo = {}
def fib_dict(n):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_dict(n - 1) + fib_dict(n - 2)
    return memo[n]

print(fib_dict(100))`,
        output: `12586269025
354224848179261915075`,
      },
      {
        description: '재귀로 순열/조합 생성',
        code: `# 순열 생성
def permutations(arr, r):
    result = []
    def backtrack(current, remaining):
        if len(current) == r:
            result.append(current[:])
            return
        for i, num in enumerate(remaining):
            current.append(num)
            backtrack(current, remaining[:i] + remaining[i+1:])
            current.pop()
    backtrack([], arr)
    return result

print(permutations([1,2,3], 2))

# Python 내장 itertools 활용
from itertools import permutations, combinations
print(list(permutations([1,2,3], 2)))
print(list(combinations([1,2,3], 2)))`,
        output: `[[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]
[(1, 2), (1, 3), (2, 1), (2, 3), (3, 1), (3, 2)]
[(1, 2), (1, 3), (2, 3)]`,
      },
    ],
    patterns: [
      'if n <= 1: return n 형태의 기저 조건',
      '@lru_cache로 재귀 메모이제이션',
      'backtracking: 선택 -> 재귀 -> 선택 취소',
      'sys.setrecursionlimit으로 재귀 한도 설정',
    ],
    tips: [
      'Python의 기본 재귀 한도는 1000입니다. 깊은 재귀가 필요하면 sys.setrecursionlimit(10**6)을 설정하세요.',
      '재귀를 스택으로 변환하면 재귀 깊이 제한을 피할 수 있습니다. 특히 DFS에서 유용합니다.',
      '@lru_cache(maxsize=None)는 @cache(Python 3.9+)와 동일하며, 재귀 메모이제이션을 한 줄로 적용할 수 있습니다.',
      '재귀의 시간 복잡도는 재귀 트리의 노드 수, 공간 복잡도는 재귀 깊이에 비례합니다.',
    ],
    relatedProblemIds: ['prob_0007', 'prob_0018', 'prob_0022'],
    order: 10,
  },
  {
    id: 'concept_11',
    title: '스택',
    category: 'Stack',
    summary:
      '스택은 후입선출(LIFO, Last In First Out) 구조입니다. Python에서는 리스트를 스택으로 사용하며 append()와 pop()이 O(1)입니다. 괄호 검증, 뒤로 가기, 수식 계산 등에 활용됩니다.',
    codeExamples: [
      {
        description: '스택 기본 구현',
        code: `# Python 리스트를 스택으로 활용
stack = []

# push
stack.append(1)
stack.append(2)
stack.append(3)
print(stack)           # [1, 2, 3]

# peek (top 확인, 제거 없음)
print(stack[-1])       # 3

# pop
print(stack.pop())     # 3
print(stack.pop())     # 2
print(stack)           # [1]

# 비어있는지 확인
print(len(stack) == 0) # False
print(not stack)       # False`,
        output: `[1, 2, 3]
3
3
2
[1]
False
False`,
      },
      {
        description: '괄호 유효성 검사',
        code: `def is_valid(s):
    stack = []
    matching = {')': '(', ']': '[', '}': '{'}

    for ch in s:
        if ch in '([{':
            stack.append(ch)
        elif ch in ')]}':
            if not stack or stack[-1] != matching[ch]:
                return False
            stack.pop()

    return len(stack) == 0

print(is_valid("()[]{}"))    # True
print(is_valid("([{}])"))    # True
print(is_valid("([)]"))      # False
print(is_valid("{[]"))       # False`,
        output: `True
True
False
False`,
      },
      {
        description: '단조 스택 (Monotonic Stack)',
        code: `# 다음으로 큰 원소 찾기 (Next Greater Element)
def next_greater(arr):
    n = len(arr)
    result = [-1] * n
    stack = []  # 인덱스를 저장하는 단조 감소 스택

    for i in range(n):
        while stack and arr[stack[-1]] < arr[i]:
            idx = stack.pop()
            result[idx] = arr[i]
        stack.append(i)

    return result

print(next_greater([4, 5, 2, 25]))
# [5, 25, 25, -1]
print(next_greater([13, 7, 6, 12]))
# [−1, 12, 12, −1]`,
        output: `[5, 25, 25, -1]
[-1, 12, 12, -1]`,
      },
    ],
    patterns: [
      'append()/pop()으로 스택 구현',
      'stack[-1]로 top 확인',
      '짝 맞추기(괄호, 태그) 문제에 스택 활용',
      '단조 스택으로 다음 큰/작은 원소 찾기',
    ],
    tips: [
      'Python 리스트의 append()와 pop()은 모두 O(1)이므로 스택으로 사용하기에 최적입니다.',
      '스택이 비어있을 때 pop()이나 [-1] 인덱싱을 하면 에러가 납니다. "if stack:" 체크를 항상 하세요.',
      '연속된 중복 제거, 히스토그램 최대 직사각형, 괄호 관련 문제는 스택으로 푸는 경우가 많습니다.',
      '재귀를 스택으로 변환하면 재귀 깊이 제한을 피할 수 있습니다.',
    ],
    relatedProblemIds: ['prob_0010', 'prob_0014'],
    order: 11,
  },
  {
    id: 'concept_12',
    title: '큐',
    category: 'Queue',
    summary:
      '큐는 선입선출(FIFO, First In First Out) 구조입니다. Python에서는 collections.deque를 사용하면 양쪽 끝에서 O(1) 삽입/삭제가 가능합니다. BFS, 시뮬레이션 문제에 필수적입니다.',
    codeExamples: [
      {
        description: 'deque를 이용한 큐 구현',
        code: `from collections import deque

# 큐 생성
queue = deque()

# enqueue (뒤에 삽입)
queue.append(1)
queue.append(2)
queue.append(3)
print(queue)           # deque([1, 2, 3])

# dequeue (앞에서 제거)
print(queue.popleft()) # 1
print(queue.popleft()) # 2
print(queue)           # deque([3])

# 초기화
q = deque([1, 2, 3, 4, 5])
print(q[0])            # 맨 앞: 1
print(q[-1])           # 맨 뒤: 5

# appendleft, pop도 O(1)
q.appendleft(0)
print(q)`,
        output: `deque([1, 2, 3])
1
2
deque([3])
1
5
deque([0, 1, 2, 3, 4, 5])`,
      },
      {
        description: 'BFS에서 큐 활용',
        code: `from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    order = []

    while queue:
        node = queue.popleft()
        order.append(node)

        for neighbor in sorted(graph[node]):  # 오름차순 방문
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

    return order

graph = {
    1: [2, 3],
    2: [1, 4, 5],
    3: [1, 6],
    4: [2],
    5: [2],
    6: [3],
}

print(bfs(graph, 1))`,
        output: `[1, 2, 3, 4, 5, 6]`,
      },
      {
        description: '슬라이딩 윈도우에서 deque 활용',
        code: `from collections import deque

# 크기 k인 윈도우의 최댓값
def max_sliding_window(nums, k):
    result = []
    dq = deque()  # 인덱스 저장 (단조 감소)

    for i, num in enumerate(nums):
        # 윈도우 범위를 벗어난 인덱스 제거
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        # 현재보다 작은 값의 인덱스 제거
        while dq and nums[dq[-1]] < num:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])

    return result

print(max_sliding_window([1,3,-1,-3,5,3,6,7], 3))`,
        output: `[3, 3, 5, 5, 6, 7]`,
      },
    ],
    patterns: [
      'deque()로 큐 생성, append()와 popleft()로 FIFO',
      'BFS 탐색에 deque 사용',
      'deque로 슬라이딩 윈도우 최댓값',
      '양방향 덱(deque)으로 앞뒤 O(1) 삽입/삭제',
    ],
    tips: [
      '리스트의 pop(0)은 O(n)이지만 deque의 popleft()는 O(1)입니다. BFS에서는 반드시 deque를 사용하세요.',
      'deque(maxlen=n)으로 최대 크기를 제한할 수 있어 슬라이딩 윈도우 구현에 유용합니다.',
      'queue 모듈의 Queue 클래스는 멀티스레딩용이므로 코딩 테스트에서는 deque를 사용하세요.',
      'BFS에서 방문 체크를 큐에 넣을 때 하지 않으면 중복 방문이 발생해 시간 초과가 날 수 있습니다.',
    ],
    relatedProblemIds: ['prob_0015', 'prob_0016', 'prob_0019'],
    order: 12,
  },
  {
    id: 'concept_13',
    title: '힙',
    category: 'Heap',
    summary:
      '힙은 완전 이진 트리 기반의 우선순위 큐입니다. Python의 heapq 모듈은 최소 힙(min-heap)을 제공하며, 삽입/삭제 모두 O(log n)입니다. 최솟값/최댓값을 반복적으로 빠르게 구해야 할 때 사용합니다.',
    codeExamples: [
      {
        description: 'heapq 기본 사용법',
        code: `import heapq

# 최소 힙
heap = []
heapq.heappush(heap, 5)
heapq.heappush(heap, 1)
heapq.heappush(heap, 3)
heapq.heappush(heap, 7)
heapq.heappush(heap, 2)

print(heap)              # [1, 2, 3, 7, 5] (힙 내부)
print(heap[0])           # 1 (최솟값 조회, O(1))

print(heapq.heappop(heap))   # 1
print(heapq.heappop(heap))   # 2
print(heapq.heappop(heap))   # 3

# 리스트를 힙으로 변환 (O(n))
arr = [5, 1, 3, 7, 2]
heapq.heapify(arr)
print(arr)               # [1, 2, 3, 7, 5]`,
        output: `[1, 2, 3, 7, 5]
1
1
2
3
[1, 2, 3, 7, 5]`,
      },
      {
        description: '최대 힙 구현 (음수 활용)',
        code: `import heapq

# Python heapq는 min-heap만 지원
# 값에 음수를 취해 max-heap처럼 사용
max_heap = []

def heappush_max(heap, val):
    heapq.heappush(heap, -val)

def heappop_max(heap):
    return -heapq.heappop(heap)

heappush_max(max_heap, 5)
heappush_max(max_heap, 1)
heappush_max(max_heap, 3)
heappush_max(max_heap, 7)

print(heappop_max(max_heap))   # 7
print(heappop_max(max_heap))   # 5

# nlargest, nsmallest
arr = [5, 1, 3, 7, 2, 9, 4]
print(heapq.nlargest(3, arr))   # [9, 7, 5]
print(heapq.nsmallest(3, arr))  # [1, 2, 3]`,
        output: `7
5
[9, 7, 5]
[1, 2, 3]`,
      },
      {
        description: '우선순위 큐 활용 (튜플 사용)',
        code: `import heapq

# 우선순위 큐: (우선순위, 데이터) 튜플 사용
pq = []
heapq.heappush(pq, (3, "task C"))
heapq.heappush(pq, (1, "task A"))
heapq.heappush(pq, (2, "task B"))

while pq:
    priority, task = heapq.heappop(pq)
    print(f"우선순위 {priority}: {task}")`,
        output: `우선순위 1: task A
우선순위 2: task B
우선순위 3: task C`,
      },
    ],
    patterns: [
      'heapq.heappush()/heappop()으로 O(log n) 삽입/삭제',
      '음수를 저장해 max-heap 구현',
      '(우선순위, 값) 튜플로 우선순위 큐',
      'heapq.heapify()로 O(n) 힙 변환',
    ],
    tips: [
      'Python의 heapq는 최소 힙입니다. 최대 힙이 필요하면 값을 음수로 넣었다가 꺼낼 때 다시 음수를 취하세요.',
      'heappush와 heappop은 O(log n)이고 heap[0] 조회는 O(1)입니다. 단순 최솟값 조회는 O(1)임을 활용하세요.',
      '같은 우선순위의 원소가 있을 때 튜플 비교는 두 번째 원소까지 비교합니다. 데이터가 비교 불가능한 경우 (priority, count, data) 형태로 count를 중간에 넣으세요.',
      '힙 정렬은 O(n log n)이지만 코딩 테스트에서는 sorted()가 일반적으로 더 빠릅니다.',
    ],
    relatedProblemIds: ['prob_0020', 'prob_0028'],
    order: 13,
  },
  {
    id: 'concept_14',
    title: 'DFS (깊이 우선 탐색)',
    category: 'DFS',
    summary:
      'DFS는 그래프나 트리를 깊이 우선으로 탐색하는 알고리즘입니다. 재귀 또는 스택으로 구현하며, 경로 찾기, 연결 컴포넌트, 백트래킹 문제에 활용됩니다.',
    codeExamples: [
      {
        description: '재귀적 DFS 구현',
        code: `def dfs_recursive(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start, end=" ")

    for neighbor in sorted(graph[start]):
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited)

graph = {
    1: [2, 3],
    2: [1, 4, 5],
    3: [1, 6],
    4: [2],
    5: [2],
    6: [3],
}

dfs_recursive(graph, 1)`,
        output: `1 2 4 5 3 6`,
      },
      {
        description: '스택 기반 반복적 DFS (재귀 제한 우회)',
        code: `def dfs_iterative(graph, start):
    visited = set()
    stack = [start]
    order = []

    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            order.append(node)
            for neighbor in sorted(graph[node], reverse=True):
                if neighbor not in visited:
                    stack.append(neighbor)

    return order

graph = {
    1: [2, 3],
    2: [1, 4, 5],
    3: [1, 6],
    4: [2],
    5: [2],
    6: [3],
}

print(dfs_iterative(graph, 1))`,
        output: `[1, 2, 4, 5, 3, 6]`,
      },
      {
        description: '2D 그리드에서 DFS (섬 개수 세기)',
        code: `def count_islands(grid):
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    count = 0

    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols:
            return
        if grid[r][c] != '1':
            return
        grid[r][c] = '0'  # 방문 처리
        dfs(r+1, c)
        dfs(r-1, c)
        dfs(r, c+1)
        dfs(r, c-1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                dfs(r, c)
                count += 1

    return count

grid = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1'],
]
print(count_islands(grid))   # 3`,
        output: `3`,
      },
    ],
    patterns: [
      'visited 집합으로 방문 노드 추적',
      '재귀 DFS: 방문 표시 후 이웃 재귀 호출',
      '스택 DFS: 스택에서 꺼내며 이웃 스택에 추가',
      '그리드 DFS: 상하좌우 4방향 탐색',
    ],
    tips: [
      'DFS는 최단 경로를 보장하지 않습니다. 최단 경로가 필요하면 BFS를 사용하세요.',
      '재귀 DFS는 깊이가 깊어질수록 스택 오버플로우 위험이 있습니다. sys.setrecursionlimit()을 설정하거나 스택 기반으로 구현하세요.',
      '방문 처리 시점이 중요합니다. 재귀 DFS는 방문 후 바로 처리하지만, 스택 DFS는 꺼낼 때 체크해야 합니다.',
      'DFS로 모든 경우를 탐색할 때(백트래킹) 방문 처리 취소(backtrack)를 잊지 마세요.',
    ],
    relatedProblemIds: ['prob_0018', 'prob_0022', 'prob_0026'],
    order: 14,
  },
  {
    id: 'concept_15',
    title: 'BFS (너비 우선 탐색)',
    category: 'BFS',
    summary:
      'BFS는 그래프를 레벨 단위로 탐색하는 알고리즘입니다. deque를 사용하며 O(V+E) 시간에 동작합니다. 최단 경로, 최소 횟수 문제에서 BFS가 최적 해를 보장합니다.',
    codeExamples: [
      {
        description: 'BFS 기본 구현',
        code: `from collections import deque

def bfs(graph, start):
    visited = set([start])
    queue = deque([start])
    order = []

    while queue:
        node = queue.popleft()
        order.append(node)

        for neighbor in sorted(graph[node]):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

    return order

graph = {
    1: [2, 3, 4],
    2: [1, 5],
    3: [1, 6, 7],
    4: [1],
    5: [2],
    6: [3],
    7: [3],
}

print(bfs(graph, 1))`,
        output: `[1, 2, 3, 4, 5, 6, 7]`,
      },
      {
        description: '최단 거리 BFS',
        code: `from collections import deque

def shortest_path(graph, start, end):
    if start == end:
        return 0
    visited = set([start])
    queue = deque([(start, 0)])

    while queue:
        node, dist = queue.popleft()
        for neighbor in graph[node]:
            if neighbor == end:
                return dist + 1
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, dist + 1))

    return -1  # 도달 불가

graph = {
    1: [2, 3],
    2: [1, 4, 5],
    3: [1, 5],
    4: [2, 6],
    5: [2, 3, 6],
    6: [4, 5],
}

print(shortest_path(graph, 1, 6))   # 3`,
        output: `3`,
      },
      {
        description: '레벨별 BFS 처리',
        code: `from collections import deque

def bfs_levels(graph, start):
    visited = set([start])
    queue = deque([start])
    level = 0

    while queue:
        level_size = len(queue)
        print(f"레벨 {level}:", end=" ")
        for _ in range(level_size):
            node = queue.popleft()
            print(node, end=" ")
            for neighbor in sorted(graph[node]):
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
        print()
        level += 1

graph = {1:[2,3], 2:[4,5], 3:[6], 4:[], 5:[], 6:[]}
bfs_levels(graph, 1)`,
        output: `레벨 0: 1 
레벨 1: 2 3 
레벨 2: 4 5 6 `,
      },
    ],
    patterns: [
      'deque + visited set으로 BFS 구현',
      '(node, dist) 튜플로 거리 추적',
      '큐에 넣을 때 방문 처리 (중복 방지)',
      '레벨별 처리: len(queue)만큼 반복',
    ],
    tips: [
      'BFS에서 방문 처리는 큐에 넣는 시점에 해야 합니다. 꺼낼 때 처리하면 같은 노드가 여러 번 큐에 들어가 시간 초과가 발생합니다.',
      'deque의 popleft()가 O(1)이므로 list의 pop(0) 대신 반드시 deque를 사용하세요.',
      '가중치 없는 그래프의 최단 경로는 BFS로 구하고, 가중치가 있으면 다익스트라를 사용하세요.',
      '그리드 BFS에서 방향 배열 dx, dy = [-1,1,0,0], [0,0,-1,1] 패턴을 암기해 두세요.',
    ],
    relatedProblemIds: ['prob_0019', 'prob_0023', 'prob_0029'],
    order: 15,
  },
  {
    id: 'concept_16',
    title: '이진 탐색',
    category: 'Binary Search',
    summary:
      '이진 탐색은 정렬된 배열에서 O(log n)으로 원소를 찾는 알고리즘입니다. bisect 모듈을 활용하거나 직접 구현할 수 있으며, "정답에 대한 이진 탐색(Parametric Search)"도 중요한 패턴입니다.',
    codeExamples: [
      {
        description: '이진 탐색 직접 구현',
        code: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1

arr = [1, 3, 5, 7, 9, 11, 13, 15]
print(binary_search(arr, 7))    # 3
print(binary_search(arr, 6))    # -1

# 하한(lower bound): target 이상의 첫 인덱스
def lower_bound(arr, target):
    left, right = 0, len(arr)
    while left < right:
        mid = (left + right) // 2
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid
    return left

print(lower_bound([1,2,2,3,4], 2))  # 1`,
        output: `3
-1
1`,
      },
      {
        description: 'bisect 모듈 활용',
        code: `import bisect

arr = [1, 2, 2, 3, 4, 5]

# bisect_left: target 이상의 첫 위치
print(bisect.bisect_left(arr, 2))   # 1
print(bisect.bisect_left(arr, 6))   # 6 (삽입 위치)

# bisect_right: target 초과의 첫 위치
print(bisect.bisect_right(arr, 2))  # 3
print(bisect.bisect_right(arr, 6))  # 6

# 범위 내 원소 개수 (target 이상, end 미만)
def count_range(arr, lo, hi):
    return bisect.bisect_left(arr, hi) - bisect.bisect_left(arr, lo)

print(count_range(arr, 2, 4))   # 2 이상 4 미만: [2, 2, 3] -> 3개`,
        output: `1
6
3
6
3`,
      },
      {
        description: '정답에 대한 이진 탐색 (Parametric Search)',
        code: `# 나무 자르기: 높이 H로 잘랐을 때 M미터 이상 얻을 수 있는 최댓값 H
def max_cutting_height(trees, M):
    left, right = 0, max(trees)

    while left <= right:
        mid = (left + right) // 2
        total = sum(max(t - mid, 0) for t in trees)
        if total >= M:
            left = mid + 1   # 더 높여도 됨
        else:
            right = mid - 1  # 낮춰야 함

    return right  # 최대 H

trees = [20, 15, 10, 17]
M = 7
print(max_cutting_height(trees, M))  # 15`,
        output: `15`,
      },
    ],
    patterns: [
      'left, right, mid 세 포인터로 탐색 범위 관리',
      'bisect_left/bisect_right로 삽입 위치 탐색',
      '정답 범위를 이진 탐색 (Parametric Search)',
      '조건 함수 is_possible(mid)를 기준으로 범위 절반씩 제거',
    ],
    tips: [
      'mid = (left + right) // 2는 Python에서 오버플로우가 없습니다. C++에서는 (left + right) >> 1 또는 left + (right - left) // 2를 사용합니다.',
      '이진 탐색의 종료 조건과 경계 조건(left <= right vs left < right)을 문제 유형에 따라 정확히 설정하세요.',
      '"최대화/최소화 + 단조 증가/감소 조건" 형태의 문제는 정답에 대한 이진 탐색으로 풀 수 있는 경우가 많습니다.',
      'bisect 모듈의 bisect_left(arr, x)는 arr이 정렬되어 있다는 가정 하에 O(log n)으로 동작합니다.',
    ],
    relatedProblemIds: ['prob_0017'],
    order: 16,
  },
  {
    id: 'concept_17',
    title: '동적 프로그래밍',
    category: 'Dynamic Programming',
    summary:
      '동적 프로그래밍(DP)은 큰 문제를 작은 부분 문제로 나누어 중복 계산을 피하는 알고리즘 기법입니다. 메모이제이션(하향식)과 테뷸레이션(상향식) 두 가지 방식으로 구현합니다.',
    codeExamples: [
      {
        description: '피보나치로 보는 DP 두 방식',
        code: `import sys
sys.setrecursionlimit(10000)

# 1. 하향식(Top-down) - 메모이제이션
memo = {}
def fib_td(n):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_td(n-1) + fib_td(n-2)
    return memo[n]

# 2. 상향식(Bottom-up) - 테뷸레이션
def fib_bu(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

print(fib_td(30))   # 832040
print(fib_bu(30))   # 832040`,
        output: `832040
832040`,
      },
      {
        description: '1D DP: 동전 거스름돈',
        code: `# 동전 거스름돈: coins로 amount를 만드는 최소 동전 수
def coin_change(coins, amount):
    INF = float('inf')
    dp = [INF] * (amount + 1)
    dp[0] = 0

    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i and dp[i - coin] + 1 < dp[i]:
                dp[i] = dp[i - coin] + 1

    return dp[amount] if dp[amount] != INF else -1

print(coin_change([1, 5, 11], 15))  # 15 = 11+4*1 -> 5? 아니면 3*5=15 -> 3
print(coin_change([2], 3))           # -1`,
        output: `3
-1`,
      },
      {
        description: '2D DP: 최장 공통 부분 수열(LCS)',
        code: `# LCS (Longest Common Subsequence)
def lcs(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    return dp[m][n]

print(lcs("ABCBDAB", "BDCAB"))   # 4 (BCAB 또는 BDAB)
print(lcs("AGGTAB", "GXTXAYB"))  # 4 (GTAB)`,
        output: `4
4`,
      },
    ],
    patterns: [
      'dp 배열 정의 -> 초기화 -> 점화식 -> 정답 반환',
      '메모이제이션: @lru_cache 또는 딕셔너리 활용',
      '1D DP: 선형 문제 (계단, 동전, LIS)',
      '2D DP: 두 시퀀스 비교 (LCS, 편집 거리)',
    ],
    tips: [
      'DP 문제의 핵심은 점화식 도출입니다. "dp[i]의 의미"를 명확히 정의하고 이전 상태와의 관계를 찾으세요.',
      '테뷸레이션(상향식)이 메모이제이션(하향식)보다 재귀 오버헤드가 없어 일반적으로 더 빠릅니다.',
      '공간 최적화: 현재 행이 이전 행만 참조할 때 2D 배열을 1D로 줄일 수 있습니다.',
      'DP 풀이가 맞는지 확인하려면 작은 예시로 dp 배열을 손으로 채워 보세요.',
    ],
    relatedProblemIds: ['prob_0021', 'prob_0024', 'prob_0025'],
    order: 17,
  },
  {
    id: 'concept_18',
    title: '그리디',
    category: 'Greedy',
    summary:
      '그리디 알고리즘은 매 순간 지역적으로 최선인 선택을 하여 전체 최적해를 찾는 기법입니다. 그리디가 올바른 해를 보장하려면 "탐욕 선택 속성"과 "최적 부분 구조"가 성립해야 합니다.',
    codeExamples: [
      {
        description: '동전 거스름돈 (그리디가 최적인 경우)',
        code: `def greedy_coin(coins, amount):
    """
    동전 종류가 배수 관계일 때만 그리디가 최적
    예: [500, 100, 50, 10] 원화 동전
    """
    coins.sort(reverse=True)
    count = 0
    for coin in coins:
        count += amount // coin
        amount %= coin
    return count if amount == 0 else -1

# 원화 동전은 배수 관계 -> 그리디 최적
print(greedy_coin([500, 100, 50, 10], 1260))  # 6 (500*2+100*2+50+10)`,
        output: `6`,
      },
      {
        description: '활동 선택 문제 (구간 스케줄링)',
        code: `def activity_selection(activities):
    """
    겹치지 않게 최대한 많은 활동 선택
    종료 시간 기준 정렬 후 그리디
    """
    # (시작, 종료) 형태로 정렬: 종료 시간 오름차순
    activities.sort(key=lambda x: x[1])

    count = 0
    last_end = 0

    for start, end in activities:
        if start >= last_end:
            count += 1
            last_end = end

    return count

acts = [(1,4), (3,5), (0,6), (5,7), (3,9), (5,9), (6,10), (8,11), (8,12), (2,14), (12,16)]
print(activity_selection(acts))   # 4`,
        output: `4`,
      },
      {
        description: '회의실 배정 문제',
        code: `def meeting_room(meetings):
    """
    한 회의실에서 진행할 수 있는 최대 회의 수
    끝나는 시간이 빠른 순서로 그리디 선택
    """
    meetings.sort(key=lambda x: (x[1], x[0]))
    count = 0
    current_end = 0

    for start, end in meetings:
        if start >= current_end:
            count += 1
            current_end = end

    return count

meetings = [(1,4),(3,5),(0,6),(5,7),(3,9),(5,9),(6,10),(8,11),(8,12),(2,14),(12,16)]
print(meeting_room(meetings))   # 4`,
        output: `4`,
      },
    ],
    patterns: [
      '정렬 후 그리디 선택 (활동 선택, 회의실)',
      '교환 논증(Exchange Argument)으로 그리디 증명',
      '우선순위 큐와 그리디 조합',
      '단위당 가치로 정렬 (분수 배낭)',
    ],
    tips: [
      '그리디가 적용 가능한지 확인: "이 선택이 미래의 선택에 영향을 주지 않는가?"를 먼저 검토하세요.',
      '0/1 배낭 문제는 그리디로 풀 수 없습니다. 동적 프로그래밍이 필요합니다.',
      '정렬 기준이 그리디의 핵심입니다. 어떤 기준으로 정렬할지 신중하게 선택하세요.',
      '그리디 알고리즘의 정확성은 반례를 찾거나 교환 논증으로 증명합니다.',
    ],
    relatedProblemIds: ['prob_0020', 'prob_0030'],
    order: 18,
  },
  {
    id: 'concept_19',
    title: '그래프',
    category: 'Graph',
    summary:
      '그래프는 정점(Vertex)과 간선(Edge)으로 이루어진 자료구조입니다. 인접 리스트와 인접 행렬로 표현하며, 방향/무방향, 가중치 유무에 따라 다양한 알고리즘이 적용됩니다.',
    codeExamples: [
      {
        description: '그래프 표현 방법',
        code: `from collections import defaultdict

# 1. 인접 리스트 (일반적으로 권장)
graph_list = defaultdict(list)
edges = [(1,2), (1,3), (2,4), (3,4), (4,5)]
for u, v in edges:
    graph_list[u].append(v)
    graph_list[v].append(u)  # 무방향 그래프

print(dict(graph_list))

# 2. 인접 행렬 (노드 수가 적을 때)
n = 5
graph_matrix = [[0]*(n+1) for _ in range(n+1)]
for u, v in edges:
    graph_matrix[u][v] = 1
    graph_matrix[v][u] = 1

# 노드 1의 인접 노드
print([i for i in range(1, n+1) if graph_matrix[1][i]])

# 3. 가중치 그래프
weighted = defaultdict(list)
weighted_edges = [(1,2,5),(1,3,3),(2,4,2),(3,4,7)]
for u, v, w in weighted_edges:
    weighted[u].append((v, w))
    weighted[v].append((u, w))`,
        output: `{1: [2, 3], 2: [1, 4], 3: [1, 4], 4: [2, 3, 5], 5: [4]}
[2, 3]`,
      },
      {
        description: '유니온-파인드 (Union-Find)',
        code: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n + 1))
        self.rank = [0] * (n + 1)
        self.size = [1] * (n + 1)

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry:
            return False
        if self.rank[rx] < self.rank[ry]:
            rx, ry = ry, rx
        self.parent[ry] = rx
        self.size[rx] += self.size[ry]
        if self.rank[rx] == self.rank[ry]:
            self.rank[rx] += 1
        return True

    def connected(self, x, y):
        return self.find(x) == self.find(y)

uf = UnionFind(5)
uf.union(1, 2)
uf.union(3, 4)
print(uf.connected(1, 2))  # True
print(uf.connected(1, 3))  # False
uf.union(2, 3)
print(uf.connected(1, 4))  # True`,
        output: `True
False
True`,
      },
      {
        description: '사이클 감지 (방향/무방향 그래프)',
        code: `# 무방향 그래프 사이클 감지 (Union-Find)
def has_cycle_undirected(n, edges):
    parent = list(range(n + 1))

    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]

    for u, v in edges:
        pu, pv = find(u), find(v)
        if pu == pv:
            return True
        parent[pu] = pv
    return False

print(has_cycle_undirected(4, [(1,2),(2,3),(3,4),(4,1)]))  # True
print(has_cycle_undirected(3, [(1,2),(2,3)]))               # False`,
        output: `True
False`,
      },
    ],
    patterns: [
      'defaultdict(list)로 인접 리스트 구현',
      '노드 수가 적으면 인접 행렬 사용',
      'Union-Find로 연결성과 사이클 감지',
      '가중치 그래프: (인접노드, 가중치) 튜플 리스트',
    ],
    tips: [
      '노드 수가 많고 간선이 적은 희소 그래프는 인접 리스트, 노드 수가 적은 밀집 그래프는 인접 행렬이 효율적입니다.',
      '유니온-파인드에서 경로 압축(Path Compression)과 랭크 기반 합치기를 함께 쓰면 사실상 O(1) 연산이 됩니다.',
      '그래프 문제는 노드/간선의 의미를 잘 모델링하는 것이 핵심입니다. 상태를 노드로, 전이를 간선으로 표현하세요.',
      '입력이 인접 행렬로 주어지면 인접 리스트로 변환하거나 그대로 활용할 수 있습니다.',
    ],
    relatedProblemIds: ['prob_0022', 'prob_0027', 'prob_0028', 'prob_0030'],
    order: 19,
  },
  {
    id: 'concept_20',
    title: '정렬',
    category: 'Sorting',
    summary:
      'Python의 정렬 함수 sort()와 sorted()는 Tim sort 알고리즘을 사용하여 O(n log n)에 동작합니다. key 매개변수로 다양한 기준으로 정렬할 수 있으며, 안정 정렬(Stable Sort)을 보장합니다.',
    codeExamples: [
      {
        description: 'sort()와 sorted() 차이',
        code: `arr = [3, 1, 4, 1, 5, 9, 2, 6]

# sorted(): 새 리스트 반환 (원본 유지)
sorted_arr = sorted(arr)
print(sorted_arr)    # [1, 1, 2, 3, 4, 5, 6, 9]
print(arr)           # [3, 1, 4, 1, 5, 9, 2, 6] (변경 없음)

# sort(): 제자리 정렬 (원본 변경)
arr.sort()
print(arr)           # [1, 1, 2, 3, 4, 5, 6, 9]

# 내림차순
arr.sort(reverse=True)
print(arr)           # [9, 6, 5, 4, 3, 2, 1, 1]

# 문자열도 정렬 가능
words = ["banana", "apple", "cherry", "date"]
print(sorted(words))  # 알파벳 순`,
        output: `[1, 1, 2, 3, 4, 5, 6, 9]
[3, 1, 4, 1, 5, 9, 2, 6]
[1, 1, 2, 3, 4, 5, 6, 9]
[9, 6, 5, 4, 3, 2, 1, 1]
['apple', 'banana', 'cherry', 'date']`,
      },
      {
        description: 'key 매개변수 활용',
        code: `# 문자열 길이로 정렬
words = ["banana", "apple", "cherry", "kiwi"]
print(sorted(words, key=len))
print(sorted(words, key=lambda x: (-len(x), x)))  # 길이 내림차순, 같으면 알파벳

# 튜플 리스트 정렬
students = [("Alice", 85), ("Bob", 92), ("Charlie", 85), ("Dave", 78)]
# 점수 내림차순, 같으면 이름 오름차순
students.sort(key=lambda x: (-x[1], x[0]))
print(students)

# 절댓값으로 정렬
nums = [-3, 1, -2, 4, -5]
print(sorted(nums, key=abs))`,
        output: `['kiwi', 'apple', 'banana', 'cherry']
['banana', 'cherry', 'apple', 'kiwi']
[('Bob', 92), ('Alice', 85), ('Charlie', 85), ('Dave', 78)]
[1, -2, -3, 4, -5]`,
      },
      {
        description: '계수 정렬과 커스텀 정렬',
        code: `# 계수 정렬 (Counting Sort) - O(n+k)
def counting_sort(arr, max_val):
    count = [0] * (max_val + 1)
    for x in arr:
        count[x] += 1
    result = []
    for i, c in enumerate(count):
        result.extend([i] * c)
    return result

arr = [4, 2, 2, 8, 3, 3, 1]
print(counting_sort(arr, 8))

# functools.cmp_to_key: 비교 함수 -> 키 함수 변환
from functools import cmp_to_key

def compare(a, b):
    # 큰 수가 앞에 오도록 (문자열 연결 기준)
    if a + b > b + a:
        return -1
    elif a + b < b + a:
        return 1
    return 0

nums = ["3", "30", "34", "5", "9"]
nums.sort(key=cmp_to_key(compare))
print("".join(nums))  # 가장 큰 수 만들기`,
        output: `[1, 2, 2, 3, 3, 4, 8]
9534330`,
      },
    ],
    patterns: [
      'sort(key=lambda x: ...)로 커스텀 정렬',
      '(-값)으로 내림차순 정렬 (튜플 활용)',
      'cmp_to_key로 비교 함수 기반 정렬',
      '계수 정렬로 O(n) 정렬 (범위가 작을 때)',
    ],
    tips: [
      'Python의 sort는 안정 정렬이므로 같은 키를 가진 원소들은 원래 순서를 유지합니다. 다단계 정렬에 활용할 수 있습니다.',
      'sorted()는 이터러블에 모두 사용 가능하지만 sort()는 리스트에만 적용됩니다.',
      '내림차순 정렬에서 key에 (-값)을 쓰는 것과 reverse=True를 쓰는 것은 동일하지만, 다중 기준에서는 (-값) 방식이 더 유연합니다.',
      'cmp_to_key는 "가장 큰 수 만들기" 같이 원소 간 상대적 비교가 필요한 정렬 문제에 유용합니다.',
    ],
    relatedProblemIds: ['prob_0005', 'prob_0013'],
    order: 20,
  },
];
