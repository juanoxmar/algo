class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    this.length += 1;
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.length -= 1;
    this.tail = newTail;
    this.tail.next = null;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const shifted = this.head;

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length -= 1;
    return shifted;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length += 1;

    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }

    let i = 0;
    let current = this.head;

    while (i < idx) {
      current = current.next;
      i++;
    }

    return current;
  }

  set(idx, val) {
    const current = this.get(idx);
    if (!current) {
      return false;
    }
    current.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx === this.length) {
      this.push(val);
      return true;
    }
    if (idx === 0) {
      this.unshift(val);
      return true;
    }

    const previous = this.get(idx - 1);
    if (!previous) {
      return false;
    }

    this.length += 1;
    const newNode = new Node(val);
    newNode.next = previous.next;
    previous.next = newNode;

    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }
    if (idx === 0) {
      return this.shift();
    }
    if (idx === this.length - 1) {
      return this.pop();
    }
    const previous = this.get(idx - 1);

    this.length -= 1;

    const removed = previous.next;
    previous.next = previous.next.next;

    return removed;
  }

  reverse() {
    let node = this.head;

    [this.head, this.tail] = [this.tail, this.head];

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

const list = new SinglyLinkedList();
list.push('Hello');
list.push('Goodbye');
list.push('!');
