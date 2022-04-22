// 描述
// 请实现无重复数字的升序数组的二分查找

// 给定一个 元素升序的、无重复数字的整型数组 nums 和一个目标值 target ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标（下标从 0 开始），否则返回 -1

// 数据范围：0 \le len(nums) \le 2\times10^50≤len(nums)≤2×10
// 5
//   ， 数组中任意值满足 |val| \le 10^9∣val∣≤10
// 9

// 进阶：时间复杂度 O(\log n)O(logn) ，空间复杂度 O(1)O(1)

// 示例1
// 输入：
// [-1,0,3,4,6,10,13,14],13
// 复制
// 返回值：
// 6
// 复制
// 说明：
// 13 出现在nums中并且下标为 6

function search(nums, target) {
  let len = nums.length;
  let left = 0;
  let right = len - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
module.exports = {
  search: search,
};

console.log(search([9], 8));
