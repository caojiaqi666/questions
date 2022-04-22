const TreeNode = require("./treeNode.js");

function Print(pRoot) {
  let res = [];
  function dfs(head, level = 0, temp = true) {
    if (!head) return;
    if (!res[level]) {
      res[level] = [];
    }
    dfs(head.left, level + 1, !temp);
    dfs(head.right, level + 1, !temp);
    if (temp) {
      res[level].push(head.val);
    } else {
      res[level].unshift(head.val);
    }
  }
  dfs(pRoot);
  return res;
}

var t = new TreeNode(3);
t.left = new TreeNode(9);
t.right = new TreeNode(20);
t.right.left = new TreeNode(15);
t.right.right = new TreeNode(7);

console.log(Print(t));
