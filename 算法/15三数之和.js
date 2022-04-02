/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//   let result = [];
//   let sort = nums.sort(function (a, b) {
//     return a - b;
//   });
//   let map = {}
//   let len = nums.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       for (let k = len - 1; k > j; k--) {
//         console.log(map1,map2,map3);
//         if (map1 == sort[i] && map2 == sort[j] && map3 == sort[k]) {
//           console.log(999);
//           break;
//         } else {
//           map1 = sort[i];
//           map2 = sort[j];
//           map3 = sort[k];
//           if (sort[i] + sort[j] + sort[k] == 0) {
//             let item = [sort[i], sort[j], sort[k]];
//             result.push(item);
//           }
//         }
//       }
//     }
//   }
//   return result;
// };
// const removeRepeat = (arr) => {
//   const obj = {};
//   return arr.filter((item) => {
//     if (!obj[item.toString()]) {
//       obj[item.toString()] = item.toString();
//       return item;
//     }
//   });
// };

// // 输入：nums = [-1,0,1,2,-1,-4]
// // 输出：[[-1,-1,2],[-1,0,1]]
// let nums = [-1, 0, 1, 2, -1, -4];
// console.log(threeSum(nums));

var multiply = function (num1, num2) {
  let result = 0;
  for (let i = 0; i <= num2.length; i++) {
    console.log(09);
    cur = num2 % (10 * (i + 1));
    num2 = num2 - cur;
    console.log(cur, num2);
    result += num1 * num2 * Math.pow(10, i - 1);
  }
  return result;
};

console.log(multiply("123", "456"));
