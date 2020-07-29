class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value <= node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  traversal(action = (value) => console.log(value)) {
    console.log("Begin Traversal");
    if (action) {
    }
    this.traverseNode(this.root, action);
  }

  traverseNode(node, action) {
    if (node != null) {
      if (node.left != null) {
        this.traverseNode(node.left, action);
      }
      action(node.value);
      if (node.right != null) {
        this.traverseNode(node.right, action);
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default BinaryTree;
