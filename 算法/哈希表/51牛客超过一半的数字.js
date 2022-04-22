function MoreThanHalfNum_Solution(nums) {
  let map = new Map();
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (map.get(nums[i]) === undefined) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  for (const item of map) {
    if (item[1] * 2 > len) {
      return item[0];
    }
  }
  return -1;
}

console.log(MoreThanHalfNum_Solution([1, 2, 3, 2, 2, 2, 5, 4, 2]));
