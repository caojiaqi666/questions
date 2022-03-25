// 链表问题
// 两两交换链表中的节点-24
// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
// 示例:
// 给定 1->2->3->4, 你应该返回 2->1->4->3.
// 复制代码来源：力扣（LeetCode）
// 链接：leetcode-cn.com/problems/sw…
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
let nums = [1, 2, 3, 4];
console.log("ListNode(item, ): ", ListNode(nums));

let swapPairs = function (head) {
  if (!head) return null;
  let helper = function (node) {
    let tempNext = node.next;
    if (tempNext) {
      let tempNextNext = node.next.next;
      node.next.next = node;
      if (tempNextNext) {
        node.next = helper(tempNextNext);
      } else {
        node.next = null;
      }
    }
    return tempNext || node;
  };

  let res = helper(head);

  return res || head;
};

console.log("swapPairs([1,2,3,4]): ", swapPairs([1, 2, 3, 4]));
