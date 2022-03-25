// 深度优先遍历问题
// 二叉树的所有路径-257
// 给定一个二叉树，返回所有从根节点到叶子节点的路径。
// 说明:  叶子节点是指没有子节点的节点。
// 示例:
// 输入:

//    1
//  /   \
// 2     3
//  \
//   5

// 输出: ["1->2->5", "1->3"]

// 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
// 复制代码来源：力扣（LeetCode）
// 链接：leetcode-cn.com/problems/bi…
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let res = [];

  const forE = (root, path) => {
    if (!root) return;
    path += root.val.toString();
    if (root.left == null && root.right == null) {
      res.push(path);
    } else {
      path += "->";
      forE(root.left, path);
      forE(root.right, path);
    }
  };
  forE(root, "");
  return res;
};

console.log(binaryTreePaths([1, 2, 3, null, 5]));
