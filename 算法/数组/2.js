// 双指针问题
// 最接近的三数之和-16
// 给定一个包括  n 个整数的数组  nums  和 一个目标值  target。找出  nums  中的三个整数，使得它们的和与  target  最接近。返回这三个数的和。假定每组输入只存在唯一答案。
// 示例：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
// 复制代码提示：
// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4
// 来源：力扣（LeetCode）
// 链接：leetcode-cn.com/problems/3s…
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function (nums, target) {
  let len = nums.length;
  if (len === 3) return nums.reduce((a, b) => a + b);

  let sortNums = nums.sort(function (a, b) {
    return a - b;
  });
  console.log("sortNums: ", sortNums);

  let res;
  let min = Infinity;
  for (let i = 0; i < len; i++) {
    let left = i + 1;
    let right = len - 1;

    let sum;

    while (left < right) {
      sum = sortNums[left] + sortNums[right] + sortNums[i];
      let diff = Math.abs(sum - target);
      if (diff < min) {
        min = diff;
        res = sum;
      }
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }
    }
    console.log(i, left, right);
  }
  return res;
};

let res = threeSumClosest([1, 1, 1, 0], -100);
console.log("res: ", res);
