import { delimeterMsg } from './utils';

describe('Recursion questions', () => {
  it('Fibonacci', () => {
    type InputData = { num: number };
    type ExpectedData = number;

    function alg({ num }: InputData): ExpectedData {
      if (num === 0) return 0;
      if (num === 1) return 1;

      return alg({ num: num - 1 }) + alg({ num: num - 2 });
    }

    const testData = [
      { input: { num: 9 }, expected: 34 },
      { input: { num: 8 }, expected: 21 },
      { input: { num: 12 }, expected: 144 },
    ];
    testData.forEach((data) => expect(alg(data.input)).toEqual(data.expected));
  });
});

it('Factorial', () => {
  type InputData = { num: number };
  type ExpectedData = number;

  function alg({ num }: InputData): ExpectedData {
    if (num === 1) return 1;

    return num * alg({ num: num - 1 });
  }

  const testData = [
    { input: { num: 4 }, expected: 24 },
    { input: { num: 5 }, expected: 120 },
    { input: { num: 6 }, expected: 720 },
  ];
  testData.forEach((data) => expect(alg(data.input)).toEqual(data.expected));
});

it('Permutations', () => {
  //
});

// TODO: convert to JavaScript
// function permutations() {
//
// }

// private void printPermutations(String str, int left, int right) {
//   if (str == null) return;
//   if (str.length() < 2)  {
//       System.out.println(str);
//       return;
//   }

//   if (left == right) {
//       System.out.println(str);
//   } else {
//       for(int i = left; i <= right; i++) {
//           str = swap(str, left, i);
//           printPermutations(str, left + 1, right);
//           str = swap(str, left, i);
//       }
//   }
// }

// private String swap(String str, int i, int j) {
//   char[] clone = str.toCharArray().clone();
//   char temp = clone[i];
//   clone[i] = clone[j];
//   clone[j] = temp;
//   return String.valueOf(clone);
// }
// }

export default function recursion() {
  delimeterMsg('RECURSION');
}
