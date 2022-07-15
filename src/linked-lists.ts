import { LinkedList, LinkedListNode } from './structure-utils';
import { runTests, TestData } from './test-utils';
import { delimeterMsg, log, logF, logToHTML } from './utils';

function linkedListsQuestions() {
  logToHTML(`
    Linked lists questions:

    - Reverse a linked list ${reverseLinkedList()}
    `);
}

function reverseLinkedList() {
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
  const testData: TestData<InputData, ExpectedData> = [
    { input: { ll: ll }, expected: 'third->second->first' },
  ];
  runTests(alg, testData);
}

export default function linkedLists() {
  delimeterMsg('LINKED LISTS');
  logF(linkedListsQuestions);
}
