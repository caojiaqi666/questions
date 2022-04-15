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

// 深度优先bfs
// function largestValues(root) {
//   let res = [];
//   let helper = (node, level) => {
//     if (!node) return;
//     if (res[level] !== undefined) {
//       res[level] = Math.max(res[level], node.val);
//     } else {
//       res[level] = node.val;
//     }

//     helper(node.left, level + 1);
//     helper(node.right, level + 1);
//   };
//   helper(root, 0);
//   return res;
// }

// 广度优先dfs

// 解题思路：
// 定义一个队列 queue 来存放节点
// 遍历队列，挨个节点从头部取出
// 记录取出的节点数值 val 中的最大值 max，如果有左右节点再加入队列，供下一次遍历使用
// 最后队列长度为 0 即遍历结束

// function largestValues(root) {
//   let res = [];
//   let queue = [];
//   if (root) queue.push(root);
//   while (queue.length) {
//     const size = queue.length;
//     let max = queue[0].val;
//     for (let i = 0; i < size; i++) {
//       const node = queue.shift();
//       max = Math.max(max, node.val);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     res.push(max);
//   }
//   return res;
// }

function largestValues(root) {
  let res = [];
  let queue = [];
  if (root) queue.push(root);
  while (queue.length) {
    let size = queue.length;
    let max = queue[0].val;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      max = Math.max(max, node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(max);
  }
  return res;
}

var t = new TreeNode(1);
t.left = new TreeNode(3);
t.right = new TreeNode(2);
t.left.left = new TreeNode(5);
t.left.right = new TreeNode(3);
t.right.right = new TreeNode(9);

console.log(largestValues(t));
