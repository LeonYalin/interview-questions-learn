import { Stack } from './structure-utils';
import { delimeterMsg } from './utils';

describe('Stacks questions', () => {
  it('Implement a Queue using 2 stacks', () => {
    function alg() {
      class QueueWithStacks<T> {
        private stack1: Stack<T>;
        private stack2: Stack<T>;

        constructor() {
          this.stack1 = new Stack<T>();
          this.stack2 = new Stack<T>();
        }

        copyStacks<T>(from: Stack<T>, to: Stack<T>) {
          while (from.size() > 0) {
            to.push(from.pop());
          }
        }

        enqueue(item: T): void {
          this.stack1.push(item);
        }
        dequeue(): T {
          this.copyStacks(this.stack1, this.stack2);
          const el = this.stack2.pop();
          this.copyStacks(this.stack2, this.stack1);
          return el;
        }
        peek(): T {
          return this.stack1.peek();
        }
        size(): number {
          return this.stack1.size();
        }
        empty(): boolean {
          return this.stack1.empty();
        }
        clear(): void {
          this.stack1.clear();
          this.stack2.clear();
        }
      }

      return true;
    }
    expect(alg()).toEqual(true);
  });
});

export default function stacks() {
  delimeterMsg('STACKS');
}
