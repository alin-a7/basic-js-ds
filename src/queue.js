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

function Queue() {
  let first = null;
  let last = null;
  this.getUnderlyingList = function () {
    return first;
  };

  this.enqueue = function (value) {
    let queueNod = new ListNode(value);
    if (last === null) {
      first = last = queueNod;
    }
    last.next = queueNod;
    last = queueNod;
  };

  this.dequeue = function () {
    if (first === null) {
      last === null;
      return;
    }
    first = first.next;
  };
}
// function Queue() {
//   let queueArr = [];

//   this.getUnderlyingList = function () {
//     return queueArr
//   };

//   this.enqueue = function (value) {
//     queueArr.push(value);
//   };

//   this.dequeue = function () {
//     queueArr.shift();
//   };
// }

module.exports = {
  Queue,
};
