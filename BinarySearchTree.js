class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value > value) {
          //move left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //move right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (currentNode.value === value) {
          return currentNode;
        } else {
          if (value > currentNode.value) {
            //move right
            currentNode = currentNode.right;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
      return false;
    }
  }

  remove(value) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
//   tree.remove(170);
console.log(JSON.stringify(traverse(tree.root)));
console.log("Is 20 in the tree", tree.lookup(20));
console.log("Is 100 in the tree", tree.lookup(100));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
