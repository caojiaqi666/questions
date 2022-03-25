/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let result = [];
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      count1++;
    }
    if (nums[i] == 1) {
      count2++;
    }
    if (nums[i] == 2) {
      count3++;
    }
  }
  console.log(count1, count2, count3);
  while (count1 > 0) {
    result.push(0);
    count1--;
  }
  while (count2 > 0) {
    result.push(1);
    count2--;
  }
  while (count3 > 0) {
    result.push(2);
    count3--;
  }
  return result;
};
console.log("000", sortColors([2, 0, 2, 1, 1, 0]));
