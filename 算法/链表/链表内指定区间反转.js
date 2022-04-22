function reverseBetween(head, m, n) {
  let temp = 1;
  let prev = null;
  let cur = head;

  while (cur) {
    if (temp >= m && temp <= n) {
      let next = cur.next;
      cur.next = prev;

      prev = cur;
      cur = next;
    } else {
      return head;
    }

    return prev;
  }
}
module.exports = {
  reverseBetween: reverseBetween,
};

// 示例1
// 输入：
// {1,2,3,4,5},2,4
// 返回值：
// {1,4,3,2,5}

// 示例2
// 输入：
// {5},1,1

// 返回值：
// {5}
