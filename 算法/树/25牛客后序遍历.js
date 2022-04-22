function preorderTraversal(root) {
  let res = [];
  function helper(head) {
    if (!head) return;
    helper(head.left);
    helper(head.right);
    res.push(head.val);
  }
  helper(root);
  return res;
}
