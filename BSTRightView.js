// Binary tree represented by [1, 2, 3, 4, null, null, null, 5]
let tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

// Add node 5 as the right child of node 4
tree.left.left.right = { val: 5, left: null, right: null };

// Right side view function with debug statements
var rightSideView = function (root) {
  if (!root) {
    console.log("Root is null, returning empty array.");
    return [];
  }
  let result = [];
  function sideViewer(root, level) {
    // Debugging: Show current node and level
    console.log(`At level ${level}, current node value: ${root.val}`);

    if (level > result.length) {
      console.log(`Adding node value ${root.val} to result at level ${level}`);
      result.push(root.val);
    }

    // First, try to visit the right side
    if (root.right) {
      console.log(`Going right to node with value ${root.right.val}`);
      sideViewer(root.right, level + 1);
    }

    // Then, try to visit the left side
    if (root.left) {
      console.log(`Going left to node with value ${root.left.val}`);
      sideViewer(root.left, level + 1);
    }
  }
  sideViewer(root, 1);
  return result;
};

// Call the function and see the output
let result = rightSideView(tree);
console.log("Right side view of the tree:", result);
