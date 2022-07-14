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
export class Node<T> {
  data: T;
  next: Node<T>;
  constructor(data: T = null) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList<T> implements Collection<T> {
  private length = 0;
  private node: Node<T>;
  constructor(node: Node<T> = null) {
    this.node = node;
  }

  addFirst(data: T) {
    if (!this.node) {
      this.node = new Node(data);
    } else {
      const node = new Node(data);
      node.next = this.node;
      this.node = node;
    }
    this.length++;
  }
  addLast(data: T) {
    if (!this.node) {
      this.node = new Node(data);
    } else {
      let curr = this.node;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = new Node(data);
    }
    this.length++;
  }
  removeFirst(): Node<T> {
    if (!this.node) {
      return null;
    } else {
      const firstNode = this.node;
      const nextNode = this.node.next;
      this.node = nextNode;
      this.length--;
      return firstNode;
    }
  }
  removeLast(): Node<T> {
    if (!this.node) {
      return null;
    } else {
      let curr = this.node;
      let prev = null;
      while (curr.next) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = null;
      this.length--;
      return curr;
    }
  }
  getFirst(): Node<T> {
    return this.node;
  }
  getLast(): Node<T> {
    let curr = this.node;
    while (curr.next) {
      curr = curr.next;
    }
    return curr;
  }
  print() {
    let msg = '';
    let curr = this.node;
    msg += `${curr.data}`;
    while (curr.next) {
      curr = curr.next;
      msg += `->${curr.data}`;
    }
    return msg;
  }
  size(): number {
    return this.length;
  }
  empty(): boolean {
    return this.length === 0;
  }
  clear(): void {
    this.node = new Node();
  }
}
