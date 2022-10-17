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
  constructor() {
    this.queueArr = [];
  }

  getUnderlyingList() {
    let result = {};
    result.value = this.queueArr[0];
    if (!this.queueArr[1]) {
      result.next = null;
      return result;
    } else {
      let resultElse = {};
      resultElse.value = this.queueArr.shift();
      resultElse.next = this.getUnderlyingList(this.queueArr);
      return resultElse;
    }
  }

  enqueue(value) {
    this.queueArr.push(value);
  }

  dequeue() {
    return this.queueArr.shift();
  }
}

module.exports = {
  Queue,
};
