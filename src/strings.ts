import { runTests, TestData } from './test-utils';
import { delimeterMsg, log, logF, logToHTML } from './utils';

function stringsQuestions() {
  logToHTML(`
    Strings questions:

    - Anagram ${anagram()}
    - Palindrome ${palindrome()}
    `);
}

function anagram() {
  type InputData = { str1: string; str2: string };
  type ExpectedData = boolean;

  function alg({ str1, str2 }: InputData) {
    if (!str1 || !str2 || str1.length !== str2.length) return false;

    const firstStr = str1.trim().toLowerCase();
    const secondStr = str1.trim().toLowerCase();

    // sum and compare the ascii codes of both strings.
    // alternative solution is to use hashMap and count all the letters
    let firstSum = 0;
    let secondSum = 0;
    for (let i = 0; i < str1.length; i++) {
      firstSum += str1.charCodeAt(i);
      secondSum += str2.charCodeAt(i);
    }

    return firstSum === secondSum;
  }

  const testData: TestData<InputData, ExpectedData> = [
    { input: { str1: 'army', str2: 'mary' }, expected: true },
    { input: { str1: 'elbow', str2: 'below' }, expected: true },
    { input: { str1: 'abcdefg', str2: 'gfdecba' }, expected: true },
  ];
  runTests(alg, testData);
}

function palindrome() {
  type InputData = { str: string };
  type ExpectedData = boolean;

  function alg({ str }: InputData) {
    if (!str) return false;

    for (let i = 0; i < str.length / 2; i++) {
      if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
        return false;
      }
    }

    return true;
  }

  const testData: TestData<InputData, ExpectedData> = [
    { input: { str: 'anna' }, expected: true },
    { input: { str: 'radar' }, expected: true },
    { input: { str: 'rotator' }, expected: true },
  ];
  runTests(alg, testData);
}

export default function strings() {
  delimeterMsg('STRINGS');
  logF(stringsQuestions);
}
