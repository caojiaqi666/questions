const TreeNode = require("./treeNode.js");

function levelOrder(root) {
  let res = [];
  // 深度优先
  function dfs(head, level) {
    if (!head) return;
    if (!res[level]) {
      res[level] = [];
    }

    dfs(head.left, level + 1);
    dfs(head.right, level + 1);
    res[level].push(head.val);
    console.log("<<<",res);
  }
  dfs(root, 0);
  return res;
}

var t = new TreeNode(3);
t.left = new TreeNode(9);
t.right = new TreeNode(20);
t.right.left = new TreeNode(15);
t.right.right = new TreeNode(7);

console.log(levelOrder(t));
