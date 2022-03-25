// 没做出来
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function (nums, target) {
  let len = nums.length;
  let left = 0;
  let right = len - 1;
  let ans = 0;
  while (left <= right) {
    console.log('left: ', left);
    let mid = Math.floor((right - left) / 2) + left;
    let num = nums[mid];
    if (num == target || target > nums[mid - 1] && target < nums[mid + 1]) {
      return mid;
    } else if (num < target) {
      console.log("--");
      left++;
    } else {
      right--;
    }
    return Math.floor((right - left) / 2) + left
  }

};
console.log(searchInsert([1, 3, 5, 6], 7));
