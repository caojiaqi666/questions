/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const TreeNode = require("./treeNode.js")
var isBalanced = function (root) {
  if (root === null) {
    return true;
  } else {
    console.log(height(root.left), height(root.right));
    return (
      Math.abs(height(root.left) - height(root.right)) <= 1 &&
      isBalanced(root.left) &&
      isBalanced(root.right)
    );
  }
  function height(root) {
    if (root == null) {
      return 0;
    } else {
      return Math.max(height(root.left), height(root.right)) + 1;
    }
  }
};

// let root = [3, 9, 20, null, null, 15, 7];

var t = new TreeNode(3)
t.left = new TreeNode(9)
t.right = new TreeNode(20)
t.right.left = new TreeNode(15)
t.right.right = new TreeNode(7)

console.log(isBalanced(t));
