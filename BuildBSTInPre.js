// Function to create a new TreeNode
function createNode(val) {
  return {
    val: val,
    left: null,
    right: null,
  };
}

// Function to build the BST using preorder and inorder traversals
var buildTree = function (preorder, inorder) {
  let p = 0; // Pointer for preorder array
  let i = 0; // Pointer for inorder array

  // Helper function to build the tree recursively
  function build(stop) {
    // If the current node is not null (i.e., stop is not reached)
    if (inorder[i] !== stop) {
      let root = createNode(preorder[p++]); // Create the root node from preorder
      root.left = build(root.val); // Recursively build the left subtree
      i++; // Move to the next element in inorder
      root.right = build(stop); // Recursively build the right subtree
      return root; // Return the root node of this subtree
    }
    return null; // Stop recursion when we hit the stop condition (end of a subtree)
  }

  return build(); // Start the recursion to build the entire tree
};

// Function to print the tree (for debugging purposes)
function printTree(node) {
  if (node === null) return;
  console.log(node.val); // Print the current node's value
  printTree(node.left); // Recursively print the left subtree
  printTree(node.right); // Recursively print the right subtree
}

// Example Test Case
let preorder = [3, 9, 1, 2, 20, 15, 7];
let inorder = [1, 9, 2, 3, 15, 20, 7];

// Call the buildTree function to create the BST
let tree = buildTree(preorder, inorder);

// Print the tree structure to verify the output
console.log("Printing the tree (preorder traversal):");
printTree(tree);
