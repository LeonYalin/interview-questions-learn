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

  it('Protect email', () => {
    function alg({ str }: { str: string }): string {
      if (!str) return '';
      if (str.indexOf('@') === -1) return str;
      const [first, second] = str.split('@');
      const formattedFirst =
        first.length > 3 ? `${first.substring(0, 3)}...` : first;
      return [formattedFirst, second].join('@');
    }

    const testData = [
      {
        input: { str: 'robin_singh@example.com' },
        expected: 'rob...@example.com',
      },
      { input: { str: 'tes@gmail.com' }, expected: 'tes@gmail.com' },
      { input: { str: 'lala' }, expected: 'lala' },
    ];
    testData.forEach((data) => expect(alg(data.input)).toEqual(data.expected));
  });

  it('Replace all substrings of a string', () => {
    function alg({
      str,
      subStr,
      repl,
    }: {
      str: string;
      subStr: string;
      repl: string;
    }): string {
      return str.split(new RegExp(subStr, 'i')).join(repl);
    }

    const testData = [
      {
        input: { str: 'hello lol', subStr: 'lo', repl: '11' },
        expected: 'hel11 11l',
      },
      {
        input: {
          str: 'The quick brown fox jumps over the lazy dog',
          subStr: 'the',
          repl: '___',
        },
        expected: '___ quick brown fox jumps over ___ lazy dog',
      },
    ];
    testData.forEach((data) => expect(alg(data.input)).toEqual(data.expected));
  });

  it('Find all occurencies of a substring in a string', () => {
    function alg({ str, subStr }: { str: string; subStr: string }): number[] {
      const regex = new RegExp(subStr, 'gi');
      const result = [];
      let re: RegExpExecArray;
      while ((re = regex.exec(str)) !== null) {
        result.push(re.index);
      }
      return result;
    }

    const testData = [
      {
        input: { str: 'hello lol', subStr: 'lo' },
        expected: [3, 6],
      },
    ];
    testData.forEach((data) => expect(alg(data.input)).toEqual(data.expected));
  });
});

export default function strings() {
  delimeterMsg('STRINGS');
}
