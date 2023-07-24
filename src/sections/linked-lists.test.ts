import { LinkedList, LinkedListNode } from './structure-utils';
import { delimeterMsg } from './utils';

describe('Linked lists questions', () => {
  it('Reverse a linked list', () => {
    type InputData = { ll: LinkedList<string> };
    type ExpectedData = string;

    function alg({ ll }: InputData): ExpectedData {
      if (!ll.size()) return '';

      let head = ll.getFirst();
      let curr = head;
      let prev: LinkedListNode<string> = null;
      while (head.next) {
        head = head.next;
        curr.next = prev;
        prev = curr;
        curr = head;
      }

      head.next = prev; // for last item

      // for some reason, the head reference is cleared, we need to recreate the linked list with the final result.
      const ll2 = new LinkedList(head);
      return ll2.print();
    }

    const ll = new LinkedList<string>();
    ll.addLast('first');
    ll.addLast('second');
    ll.addLast('third');
    const testData = [{ input: { ll: ll }, expected: 'third->second->first' }];
    testData.forEach((data) => expect(alg(data.input)).toEqual(data.expected));
  });
});

export default function linkedLists() {
  delimeterMsg('LINKED LISTS');
}
