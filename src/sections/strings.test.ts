import { delimeterMsg } from './utils';

describe('Strings questions', () => {
  it('Anagram', () => {
    type InputData = { str1: string; str2: string };
    type ExpectedData = boolean;

    function alg({ str1, str2 }: InputData): ExpectedData {
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

    const testData = [
      { input: { str1: 'army', str2: 'mary' }, expected: true },
      { input: { str1: 'elbow', str2: 'below' }, expected: true },
      { input: { str1: 'abcdefg', str2: 'gfdecba' }, expected: true },
    ];
    testData.forEach((data) => expect(alg(data.input)).toEqual(data.expected));
  });

  it('Palindrome', () => {
    type InputData = { str: string };
    type ExpectedData = boolean;

    function alg({ str }: InputData): ExpectedData {
      if (!str) return false;

      for (let i = 0; i < str.length / 2; i++) {
        if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
          return false;
        }
      }

      return true;
    }

    const testData = [
      { input: { str: 'anna' }, expected: true },
      { input: { str: 'radar' }, expected: true },
      { input: { str: 'rotator' }, expected: true },
    ];
    testData.forEach((data) => expect(alg(data.input)).toEqual(data.expected));
  });
});

export default function strings() {
  delimeterMsg('STRINGS');
}
