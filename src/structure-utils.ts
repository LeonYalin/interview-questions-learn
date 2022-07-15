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
export class LinkedListNode<T> {
  data: T;
  next: LinkedListNode<T>;
  constructor(data: T = null) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList<T> implements Collection<T> {
  private length = 0;
  private node: LinkedListNode<T>;
  constructor(node: LinkedListNode<T> = null) {
    this.node = node;
  }

  addFirst(data: T) {
    if (!this.node) {
      this.node = new LinkedListNode(data);
    } else {
      const node = new LinkedListNode(data);
      node.next = this.node;
      this.node = node;
    }
    this.length++;
  }
  addLast(data: T) {
    if (!this.node) {
      this.node = new LinkedListNode(data);
    } else {
      let curr = this.node;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = new LinkedListNode(data);
    }
    this.length++;
  }
  removeFirst(): LinkedListNode<T> {
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
  removeLast(): LinkedListNode<T> {
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
  getFirst(): LinkedListNode<T> {
    return this.node;
  }
  getLast(): LinkedListNode<T> {
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
    this.node = new LinkedListNode();
  }
}

export class BinaryTreeNode<T> {
  data: T;
  left: BinaryTreeNode<T>;
  right: BinaryTreeNode<T>;
  constructor(data: T = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree<T> implements Collection<T> {
  private depth = 0;
  private node: BinaryTreeNode<T>;
  constructor(node: BinaryTreeNode<T> = null) {
    this.node = node;
  }

  add(data: T) {
    // if (!this.node) {
    //   this.node = new BinaryTreeNode(data);
    // } else {
    //   const node = new BinaryTreeNode(data);
    //   node.next = this.node;
    //   this.node = node;
    // }
    // this.length++;
  }
  contains(data: T): boolean {
    // if (!this.node) {
    //   this.node = new BinaryTreeNode(data);
    // } else {
    //   let curr = this.node;
    //   while (curr.next) {
    //     curr = curr.next;
    //   }
    //   curr.next = new BinaryTreeNode(data);
    // }
    // this.length++;
    return false;
  }
  delete(): BinaryTreeNode<T> {
    // if (!this.node) {
    //   return null;
    // } else {
    //   const firstNode = this.node;
    //   const nextNode = this.node.next;
    //   this.node = nextNode;
    //   this.length--;
    //   return firstNode;
    // }
    return null;
  }
  findSmallestValue(): T {
    // if (!this.node) {
    //   return null;
    // } else {
    //   let curr = this.node;
    //   let prev = null;
    //   while (curr.next) {
    //     prev = curr;
    //     curr = curr.next;
    //   }
    //   prev.next = null;
    //   this.length--;
    //   return curr;
    return null;
  }
  print() {
    // let msg = '';
    // let curr = this.node;
    // msg += `${curr.data}`;
    // while (curr.next) {
    //   curr = curr.next;
    //   msg += `->${curr.data}`;
    // }
    // return msg;
  }
  size(): number {
    return this.depth;
  }
  empty(): boolean {
    return !!this.node;
  }
  clear(): void {
    this.node = new BinaryTreeNode();
  }
}
