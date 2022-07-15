import { runTests, TestData } from './test-utils';
import { delimeterMsg, log, logF, logToHTML } from './utils';

function recursionQuestions() {
  logToHTML(`
    Recursion questions:

    - Fibonacci ${fibonacci()}
    - Factorial ${factorial()}
    - Permutations ${permutations()}
    `);
}

function fibonacci() {
  type InputData = { num: number };
  type ExpectedData = number;

  function alg({ num }: InputData): ExpectedData {
    if (num === 0) return 0;
    if (num === 1) return 1;

    return alg({ num: num - 1 }) + alg({ num: num - 2 });
  }

  const testData: TestData<InputData, ExpectedData> = [
    { input: { num: 9 }, expected: 34 },
    { input: { num: 8 }, expected: 21 },
    { input: { num: 12 }, expected: 144 },
  ];
  runTests(alg, testData);
}

function factorial() {
  type InputData = { num: number };
  type ExpectedData = number;

  function alg({ num }: InputData): ExpectedData {
    if (num === 1) return 1;

    return num * alg({ num: num - 1 });
  }

  const testData: TestData<InputData, ExpectedData> = [
    { input: { num: 4 }, expected: 24 },
    { input: { num: 5 }, expected: 120 },
    { input: { num: 6 }, expected: 720 },
  ];
  runTests(alg, testData);
}

// TODO: convert to JavaScript
function permutations() {

}

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
  logF(recursionQuestions);
}
