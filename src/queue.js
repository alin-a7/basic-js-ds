const { NotImplementedError, ListNode } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  first = null;
  last = null;
  
  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    let queueNod = new ListNode(value);
    if (this.last === null) {
      this.first = this.last = queueNod;
    }
    this.last.next = queueNod;
    this.last = queueNod;
  }

  dequeue() {
    if (this.first === null) {
      this.last === null;
      return;
    }
    this.first = this.first.next;
  }
}

module.exports = {
  Queue,
};
