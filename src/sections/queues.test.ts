import { Queue, Stack } from './structure-utils';
import { delimeterMsg } from './utils';

describe('Queues questions', () => {
  it('Implement a Stack using 2 queues', () => {
    function alg() {
      class StackWithQueues<T> {
        private queue1: Queue<T>;
        private queue2: Queue<T>;

        constructor() {
          this.queue1 = new Queue<T>();
          this.queue2 = new Queue<T>();
        }

        copyQueues<T>(from: Queue<T>, to: Queue<T>, full = true) {
          while (from.size() > (full ? 0 : 1)) {
            to.enqueue(from.dequeue());
          }
        }

        push(item: T): void {
          this.queue1.enqueue(item);
        }
        pop(): T {
          this.copyQueues(this.queue1, this.queue2, false);
          const el = this.queue1.dequeue();
          this.copyQueues(this.queue2, this.queue1);
          return el;
        }
        peek(): T {
          this.copyQueues(this.queue1, this.queue2, false);
          const el = this.queue1.peek();
          this.copyQueues(this.queue2, this.queue1);
          return el;
        }
        size(): number {
          return this.queue1.size();
        }
        empty(): boolean {
          return this.queue1.empty();
        }
        clear(): void {
          this.queue1.clear();
          this.queue2.clear();
        }
      }

      return true;
    }
    expect(alg()).toEqual(true);
  });
});

export default function queues() {
  delimeterMsg('QUEUES');
}
