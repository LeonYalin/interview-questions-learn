interface Collection<T> {
  size(): number;
  empty(): boolean;
  clear(): void;
}

export class Stack<T> implements Collection<T> {
  private items: T[];
  constructor() {
    this.items = [];
  }

  push(item: T): void {
    this.items.push(item);
  }
  pop(): T {
    return this.items.pop();
  }
  peek(): T {
    return this.items[this.items.length - 1];
  }
  size(): number {
    return this.items.length;
  }
  empty(): boolean {
    return this.items.length === 0;
  }
  clear(): void {
    this.items = [];
  }
}

export class Queue<T> implements Collection<T> {
  private items: T[];
  constructor() {
    this.items = [];
  }

  enqueue(item: T): void {
    this.items.push(item);
  }
  dequeue(): T {
    return this.items.shift();
  }
  peek(): T {
    return this.items[this.items.length - 1];
  }
  size(): number {
    return this.items.length;
  }
  empty(): boolean {
    return this.items.length === 0;
  }
  clear(): void {
    this.items = [];
  }
}
type Node<T> = { data: T; next: Node<T> };

export class LinkedList<T> implements Collection<T> {
  private items: T[];
  private node: Node<T>;
  constructor() {
    this.node = this.createNode();
  }

  createNode<T>(data: T = null): Node<T> {
    return { data, next: null };
  }

  hasNext(node: Node<T>) {
    return !!node.next;
  }

  addFirst(data: T) {
    this.node = this.createNode(data);
  }
  addLast(data: T) {
    let curr = this.node;
    while (this.hasNext(curr)) {
      curr = curr.next;
    }
    curr.next = this.createNode(data);
  }
  // removeFirst(): T {
  //   // return this.items.shift();
  // }
  // removeLast(): T {
  //   // return this.items[this.items.length - 1];
  // }
  // getFirst(): T {
  //   // return this.items.shift();
  // }
  // getLast(): T {
  //   // return this.items[this.items.length - 1];
  // }
  size(): number {
    return this.items.length;
  }
  empty(): boolean {
    return this.items.length === 0;
  }
  clear(): void {
    this.items = [];
  }
}
