// Function to create a tree node
function TreeNode(val, left = null, right = null) {
  return { val, left, right };
}

// Function to build a tree from an array (level order)
function buildTree(nodes) {
  if (!nodes || nodes.length === 0) return null;

  let root = TreeNode(nodes[0]);
  let queue = [root];
  let i = 1;

  while (i < nodes.length) {
    let current = queue.shift();

    if (nodes[i] !== null) {
      current.left = TreeNode(nodes[i]);
      queue.push(current.left);
    }
    i++;

    if (i < nodes.length && nodes[i] !== null) {
      current.right = TreeNode(nodes[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

// Function to find the Maximum Path Sum in a Binary Tree
var maxPathSum = function (root) {
  let max = -Infinity;

  const findSums = (node) => {
    if (!node) return 0;

    let left = findSums(node.left);
    let right = findSums(node.right);
    let allSum = left + right + node.val;
    let leftNodeSum = left + node.val;
    let rightNodeSum = right + node.val;

    // Update max with all possible sums
    max = Math.max(max, node.val, allSum, leftNodeSum, rightNodeSum);

    // Return the maximum path sum that can be extended
    return Math.max(leftNodeSum, rightNodeSum, node.val);
  };

  findSums(root);
  return max;
};

// Sample Tree for Testing
let tree = buildTree([-10, 9, 20, null, null, 15, 7]);

console.log("Max Path Sum:", maxPathSum(tree));
