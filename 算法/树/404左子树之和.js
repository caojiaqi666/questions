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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let res = 0;
  let sumFn = (node) => {
    if (!node) return;
    if (!!node.left && !node.left.left && !node.left.right) {
      res += node.left.val;
    }
    sumFn(node.left);
    sumFn(node.right);
  };
  sumFn(root);
  return res;
};


function isLeaf(node) {
  return !!node && !node.left && !node.right
}
