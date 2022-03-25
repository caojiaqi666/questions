var removeDuplicates = function (nums) {
  let len = nums.length;
  if (len < 2) return nums
  let slow = 1;
  let fast = 1;
  while (fast < len) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }
  return slow;
};
//定义两个指针 fast 和 slow 分别为快指针和慢指针，快指针表示遍历数组到达的下标位置，
// 慢指针表示下一个不同元素要填入的下标位置，初始时两个指针都指向下标 11。

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
