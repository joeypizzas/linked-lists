// Linked list class

import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (current.next) {
        current = current.next;
      } else {
        return `Oops! The linked list isn't long enough to get to index ${index}.`;
      }
    }
    return current;
  }

  pop() {
    if (!this.head) return null;

    if (this.length === 1) {
      const value = this.head.value;
      this.head = this.head.next;
      this.tail = this.tail.next;
      this.length--;
      return value;
    }

    let current = this.head;
    let prior;

    while (current.next) {
      prior = current;
      current = current.next;
    }

    const value = current.value;
    this.tail = prior;
    this.tail.next = current.next;
    this.length--;
    return value;
  }

  contains(value) {
    if (!this.head) return false;

    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }

    return false;
  }

  find(value) {
    if (!this.head) return null;

    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      } else {
        current = current.next;
        index++;
      }
    }

    return null;
  }

  toString() {
    let string = "";
    let current = this.head;

    if (!current) {
      return null;
    }

    while (current) {
      if (!current.next) {
        string = string + `( ${current.value} ) -> ` + "null";
      } else {
        string = string + `( ${current.value} ) -> `;
      }
      current = current.next;
    }

    return string;
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    let current = this.head;
    let prior;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) this.tail = newNode;
      this.length++;
      return `${value} was added to index ${index}!`;
    }

    for (let i = 0; i <= index; i++) {
      if (!current && i != index) {
        return `The linked list isn't long enough to add ${value} at index ${index}.`;
      } else if (i === index) {
        if (this.length > 1) {
          prior.next = newNode;
        }
        newNode.next = current;
        if (index === this.length) {
          this.tail = newNode;
        }
        this.length++;
        return `${value} was added to index ${index}!`;
      }
      prior = current;
      current = current.next;
    }
  }

  removeAt(index) {
    let current = this.head;
    let prior;

    if (!current) {
      return `There's nothing to remove at index ${index}. The linked-list is already empty.`;
    }

    if (index === 0) {
      this.head = this.head.next;
      if (!this.head) this.tail = this.head;
      this.length--;
      return `The node at index ${index} was removed.`;
    }

    for (let i = 0; i <= index; i++) {
      if (!current && i != index) {
        return `The linked-list isn't long enough to remove a node at index ${index}`;
      } else if (i === index) {
        prior.next = current.next;
        current = current.next;
        if (index === this.length - 1) this.tail = prior;
        this.length--;
        return `The node at index ${index} was removed.`;
      }
      prior = current;
      current = current.next;
    }
  }
}
