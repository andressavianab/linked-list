import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * Adds a value to the end of the list.
   * @param {any} data - The value that will be added to the list.
   * @returns {LinkedList} The list instance.
   */
  //O(1) - Caso a seja o primeiro elemento da lista.
  //O(n) - Caso a lista já tenha elementos.
  push(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.length++;
    return this;
  }

  /**
   * Returns a node that is at the specified index.
   * @param {number} index - The index where the node is stored. 
   * @returns {any|null} The node at the specified index, or null if the index is out of bounds.
   */
  //O(n)
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  /**
 * Removes a node at a specific index from the linked list.
 * @param {number} index - The index of the node to be removed.
 * @returns {LinkedList|null} The updated linked list, or null if the index is out of bounds.
 */
//O(n)
  remove(index) {
    if (index < 0 || index >= this.length) return null

    let current = this.head;
    let counter = 0;

    while(index !== counter) {
      current = current.next;
      counter++
    }

    const previousNode = this.get(counter - 1);
    const nextNode = this.get(counter + 1);

    if(!nextNode) {
      previousNode.next = null;
      this.length--;
      return this;
    }

    if(!previousNode) {
      this.head = nextNode;
      this.length--;
      return this;
    }

    previousNode.next = nextNode;
    this.length--;
    return this;
  }
}

