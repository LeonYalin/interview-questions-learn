import { expect } from 'chai';

export interface TestDataItem<T, P> {
  input: T;
  expected: P;
}

export interface TestData<T, P> extends Array<TestDataItem<T, P>> {}

export function runTests<T, P>(alg: (input: T) => P, testData: TestData<T, P>) {
  return testData.forEach(item => expect(alg(item.input)).to.deep.equal(item.expected));
}
