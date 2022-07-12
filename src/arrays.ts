import { delimeterMsg, logF, logToHTML } from './utils';
import { runTests, TestData } from './test-utils';

function arraysQuestions() {
  logToHTML(`
    Arrays questions:

    - Left rotation ${leftRotation()}
    - Find missing number ${findMissingNumber()}
    - Find pair with given sum ${findPairWithGivenSum()}
    - Find duplicates ${findDuplicates()}
    - Reverse an array ${reverseAnArray()}
    - Find second max ${findSecondMax()}
    `);
}

function leftRotation() {
  type InputData = { arr: number[]; n: number };
  type ExpectedData = number[];

  function alg({ arr, n }: InputData) {
    if (!arr || !arr.length || !n || arr.length === n) {
      return arr;
    }
    const resArr: number[] = Array(arr.length).fill(0);
    const rotateBy = Math.abs(n) % arr.length;

    for (let i = 0; i < arr.length; i++) {
      const dropIndex = i - rotateBy >= 0 ? i - rotateBy : arr.length - Math.abs(i - rotateBy);
      resArr[dropIndex] = arr[i];
    }

    return resArr;
  }

  const testData: TestData<InputData, ExpectedData> = [
    { input: { arr: [1, 2, 3, 4, 5], n: 3 }, expected: [4, 5, 1, 2, 3] },
    { input: { arr: [5, 6, 2, 3, 4], n: 8 }, expected: [3, 4, 5, 6, 2] },
  ];
  runTests(alg, testData);
}

function findMissingNumber() {
  type InputData = { arr: number[] };
  type ExpectedData = number;

  function alg({ arr }: InputData) {
    if (!arr || arr.length < 2) return 0;

    let expectedSum = 0;
    for (let i = 1; i <= arr.length; i++) {
      expectedSum += i;
    }
    const actualSum = arr.reduce((sum, curr) => sum + curr, 0);
    return expectedSum - actualSum;
  }

  const testData: TestData<InputData, ExpectedData> = [
    { input: { arr: [1, 2, 0, 4, 5] }, expected: 3 },
    { input: { arr: [8, 7, 0, 5, 4, 3, 2, 1] }, expected: 6 },
  ];
  runTests(alg, testData);
}

function findPairWithGivenSum() {
  type InputData = { arr: number[]; sum: number };
  type ExpectedData = [number, number];

  function alg({ arr, sum }: InputData) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[i] + arr[j] === sum) {
          return [i, j];
        }
      }
    }
    return [0, 0];
  }

  const testData: TestData<InputData, ExpectedData> = [
    { input: { arr: [1, 2, 0, 4, 5], sum: 9 }, expected: [3, 4] },
    { input: { arr: [8, 7, 0, 5, 4, 3, 2, 1], sum: 15 }, expected: [0, 1] },
  ];
  runTests(alg, testData);
}

function reverseAnArray() {
  type InputData = { arr: string[] };
  type ExpectedData = string[];

  function alg({ arr }: InputData) {
    if (!arr || !arr.length) return [];

    const resArr = Array(arr.length).fill(0);

    for (let i = 0; i < arr.length / 2; i++) {
      const startIndex = i;
      const endIndex = arr.length - 1 - i;
      resArr[endIndex] = arr[startIndex]; 
      resArr[startIndex] = arr[endIndex]; 
    }
    return resArr;
  }

  const testData: TestData<InputData, ExpectedData> = [
    { input: { arr: ['a', 'b', 'c', 'd'] }, expected: ['d', 'c', 'b', 'a'] },
    { input: { arr: ['kia', 'opel', 'toyota'] }, expected: ['toyota', 'opel', 'kia'] },
  ];
  runTests(alg, testData);
}

function findDuplicates() {
  type InputData = { arr: string[] };
  type ExpectedData = string[];

  function alg({ arr }: InputData) {
    if (!arr || !arr.length) return [];

    const resArr: string[] = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[i] === arr[j]) {
          if (!resArr.includes(arr[i])) {
            resArr.push(arr[i]);
          }
        }
      }
    }
    return resArr;
  }

  const testData: TestData<InputData, ExpectedData> = [
    { input: { arr: ['apple', 'banana', 'peach', 'banana'] }, expected: ['banana'] },
    { input: { arr: ['kia', 'opel', 'toyota', 'kia', 'opel'] }, expected: ['kia', 'opel'] },
  ];
  runTests(alg, testData);
}

function findSecondMax() {
  type InputData = { arr: number[] };
  type ExpectedData = number;

  function alg({ arr }: InputData) {
    if (!arr || !arr.length) return 0;

    let max = 0;
    let secondMax = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
      } else if (arr[i] > secondMax) {
        secondMax = arr[i];
      }
    }
    return secondMax;
  }

  const testData: TestData<InputData, ExpectedData> = [
    { input: { arr: [1, 3, 5, 8, 6] }, expected: 6 },
    { input: { arr: [0, 0, 1, 3, 2, 5, 4] }, expected: 4 },
    { input: { arr: [0, 0, 2, 7, 4, 5, 5] }, expected: 5 },
  ];
  runTests(alg, testData);
}

export default function arrays() {
  delimeterMsg('ARRAYS');
  logF(arraysQuestions);
}
