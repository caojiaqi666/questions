function maxDepth(root) {
  // write code here
  let deep = 0;
  function dfs(head, level = 1) {
    if (!head) return;
    dfs(head.left, level + 1);
    dfs(head.right, level + 1);
    deep = Math.max(deep, level);
  }
  dfs(root);
  return deep;
}

const TreeNode = require("./treeNode.js");

var t = new TreeNode(3);
t.left = new TreeNode(9);
t.right = new TreeNode(20);
t.right.left = new TreeNode(15);
t.right.right = new TreeNode(7);

console.log(maxDepth(t));
