// 广度优先遍历（BFS）问题
// 在每个树行中找最大值-515
// leetcode-cn.com/problems/fi…
// 您需要在二叉树的每一行中找到最大的值。
// 输入:

//           1
//          / \
//         3   2
//        / \   \
//       5   3   9

// 输出: [1, 3, 9]

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
 * @return {number[]}
 */
const TreeNode = require("./treeNode.js");
var largestValues = function (root) {
  let res = [];
  let levelArr = [];

  let bfs = (node, level) => {
    if (!node) return;

    if (!levelArr[level]) {
      console.log('level: ', level, levelArr[level]);
      levelArr[level] = [];
    }
    if (node) {
      levelArr[level].push(node.val);
    }
    if (node.left) {
      bfs(node.left, level++);
    }
    if (node.right) {
      bfs(node.right, level++);
    }

  };

  bfs(root, 0);
  console.log(levelArr);
  return res;
};

var t = new TreeNode(1);
t.left = new TreeNode(3);
t.right = new TreeNode(2);
t.left.left = new TreeNode(5);
t.left.right = new TreeNode(3);
t.right.right = new TreeNode(9);

console.log(largestValues(t));
