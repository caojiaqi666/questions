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
var isValidBST = function (root) {
  return check(root.val, -Infinity, Infinity);
};
let check = (root, p, q) => {
  if (!root) return true;

  if (root.val <= p || root.val >= q) {
    return false;
  }

  return check(root.left, p, root.val) && check(root.right, root.val, q )
};
console.log(isValidBST([5, 1, 4, null, null, 3, 6]));
