const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // root = null

  root() {
    return this.root;
  }

  add(data) {
    this.root = addData(this.root, data);

    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data > node.data) {
        node.right = addData(node.right, data);
      } else {
        node.left = addData(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return hasData(this.root, data);

    function hasData(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data
        ? hasData(node.left, data)
        : hasData(node.right, data);
    }
  }
  find(data) {
    let currentNode = this.root;
    while (currentNode.data !== data) {
      if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      }
      if (!currentNode) {
        return null;
      }
    }
    return currentNode;
  }

  remove(data) {
    this.root = removeData(this.root, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;

        node.right = removeData(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
