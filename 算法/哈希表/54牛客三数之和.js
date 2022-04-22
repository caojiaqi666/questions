// [0,0,0,0] 特殊情况

// var threeSum = function(nums) {
//   const result = []
//   nums.sort((a,b) => a-b)
//   for(let i = 0;i<nums.length;i++) {
//       // 跳过重复数字
//       if (i && nums[i] === nums[i-1]) continue
//       let left = i+1
//       let right = nums.length-1
//       while(left < right) {
//           const sum = nums[i] + nums[left] + nums[right]
//           if (sum > 0) {
//               right--
//           } else if(sum < 0) {
//               left++
//           } else {
//               result.push([nums[i], nums[left++], nums[right--]])
//               // 跳过重复数字
//               while(nums[left] === nums[left-1]) {
//                   left++
//               }
//               // 跳过重复数字
//               while(nums[right] ===  nums[right+1]) {
//                   right--
//               }
//           }
//       }
//   }
//   return result
// };

var threeSum = function (nums) {
  let len = nums.length;
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      let sum = nums[left] + nums[right] + nums[i];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([nums[i], nums[left++], nums[right--]]);
        // 这里要用while，不能if
        while (nums[left] == nums[left - 1]) {
          left++;
        }
        while (nums[right] == nums[right + 1]) {
          right--;
        }
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
