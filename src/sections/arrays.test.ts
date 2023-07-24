import { delimeterMsg } from './utils';

describe('Arrays questions', () => {
  it('Left rotations', () => {
    type InputData = { arr: number[]; n: number };
    type ExpectedData = number[];

    function alg({ arr, n }: InputData): ExpectedData {
      if (!arr || !arr.length || !n || arr.length === n) {
        return arr;
      }
      const resArr: number[] = Array(arr.length).fill(0);
      const rotateBy = Math.abs(n) % arr.length;

      for (let i = 0; i < arr.length; i++) {
        const dropIndex =
          i - rotateBy >= 0
            ? i - rotateBy
            : arr.length - Math.abs(i - rotateBy);
        resArr[dropIndex] = arr[i];
      }

      return resArr;
    }

    const testData = [
      { input: { arr: [1, 2, 3, 4, 5], n: 3 }, expected: [4, 5, 1, 2, 3] },
      { input: { arr: [5, 6, 2, 3, 4], n: 8 }, expected: [3, 4, 5, 6, 2] },
    ];
    testData.forEach((data) => expect(alg(data.input)).toEqual(data.expected));
  });
});

it('Find missing number', () => {
  type InputData = { arr: number[] };
  type ExpectedData = number;

  function alg({ arr }: InputData): ExpectedData {
    if (!arr || arr.length < 2) return 0;

    let expectedSum = 0;
    for (let i = 1; i <= arr.length; i++) {
      expectedSum += i;
    }
    const actualSum = arr.reduce((sum, curr) => sum + curr, 0);
    return expectedSum - actualSum;
  }

  const testData = [
    { input: { arr: [1, 2, 0, 4, 5] }, expected: 3 },
    { input: { arr: [8, 7, 0, 5, 4, 3, 2, 1] }, expected: 6 },
  ];
  testData.forEach((data) => expect(alg(data.input)).toEqual(data.expected));
});

it('Find pair with given sum', () => {
  type InputData = { arr: number[]; sum: number };
  type ExpectedData = [number, number];

  function alg({ arr, sum }: InputData): ExpectedData {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[i] + arr[j] === sum) {
          return [i, j];
        }
      }
    }
    return [0, 0];
  }

  const testData = [
    { input: { arr: [1, 2, 0, 4, 5], sum: 9 }, expected: [3, 4] },
    { input: { arr: [8, 7, 0, 5, 4, 3, 2, 1], sum: 15 }, expected: [0, 1] },
  ];
  testData.forEach((data) => expect(alg(data.input)).toEqual(data.expected));
});

it('Reverse an array', () => {
  type InputData = { arr: string[] };
  type ExpectedData = string[];

  function alg({ arr }: InputData): ExpectedData {
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

  const testData = [
    { input: { arr: ['a', 'b', 'c', 'd'] }, expected: ['d', 'c', 'b', 'a'] },
    {
      input: { arr: ['kia', 'opel', 'toyota'] },
      expected: ['toyota', 'opel', 'kia'],
    },
  ];
  testData.forEach((data) => expect(alg(data.input)).toEqual(data.expected));
});

it('Find duplicates', () => {
  type InputData = { arr: string[] };
  type ExpectedData = string[];

  function alg({ arr }: InputData): ExpectedData {
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

  const testData = [
    {
      input: { arr: ['apple', 'banana', 'peach', 'banana'] },
      expected: ['banana'],
    },
    {
      input: { arr: ['kia', 'opel', 'toyota', 'kia', 'opel'] },
      expected: ['kia', 'opel'],
    },
  ];
  testData.forEach((data) => expect(alg(data.input)).toEqual(data.expected));
});

it('Find second max', () => {
  type InputData = { arr: number[] };
  type ExpectedData = number;

  function alg({ arr }: InputData): ExpectedData {
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

  const testData = [
    { input: { arr: [1, 3, 5, 8, 6] }, expected: 6 },
    { input: { arr: [0, 0, 1, 3, 2, 5, 4] }, expected: 4 },
    { input: { arr: [0, 0, 2, 7, 4, 5, 5] }, expected: 5 },
  ];
  testData.forEach((data) => expect(alg(data.input)).toEqual(data.expected));
});

export default function arrays() {
  delimeterMsg('ARRAYS');
}
