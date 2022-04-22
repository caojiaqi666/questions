function preorderTraversal(root) {
  let res = [];
  function helper(head) {
    if (!head) return;
    res.push(head.val);
    helper(head.left);
    helper(head.right);
  }
  helper(root);
  return res;
}
