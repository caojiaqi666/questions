/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const TreeNode = require("./treeNode.js");
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  res.push(root);
  let dfs = (root, height = 0) => {
    if (!root) return;
    if (!res[height]) {
      res[height] = [];
    }
    dfs(root.left, height + 1);
    dfs(root.right, height + 1);

    console.log("res[height]: ", height, res[height]);
    res[height].push(root.val);
  };
  dfs(root);
  return res;
};

var levelOrder = function (root) {
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
  return res;
};

var t = new TreeNode(3);
t.left = new TreeNode(9);
t.right = new TreeNode(20);
t.right.left = new TreeNode(15);
t.right.right = new TreeNode(7);

console.log(levelOrder(t));
