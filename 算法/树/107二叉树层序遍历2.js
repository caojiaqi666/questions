/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let res = [];

  let bfs = (node, level = 0) => {
    if (!node) return;
    if (!res[level]) {
      res[level] = [];
    }
    bfs(node.left, level + 1);
    bfs(node.right, level + 1);
    res[level].push(node.val);
  };
  bfs(root);
  return res.reverse();
};

var t = new TreeNode(3, 9, new TreeNode(20, 15, 7));
// t.left = new TreeNode(9);
// t.right = new TreeNode(20);
// t.right.left = new TreeNode(15);
// t.right.right = new TreeNode(7);

console.log(levelOrderBottom(t));
