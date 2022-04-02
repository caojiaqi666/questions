/**
 * @param {number[]} prices
 * @return {number}
//  */
// var maxProfit = function (prices) {
//   let max = 0;
//   let len = prices.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (prices[j] - prices[i] > max) {
//         max = prices[j] - prices[i];
//       }
//     }
//   }
//   return max;
// };

// 贪心算法
// var maxProfit = function (prices) {
//   let res = -Infinity;
//   let min = Infinity;
//   for (let i = 0; i < prices.length; i++) {
//     min = Math.min(prices[i], min);
//     res = Math.max(prices[i] - min, res);
//   }
//   return res;
// };

//动态规划
// var maxProfit = function (prices) {
//   let res = -Infinity;
//   let min = Infinity;
//   for (let i = 0; i < prices.length; i++) {
//     min = Math.min(prices[i], min);
//     res = Math.max(prices[i] - min, res);
//   }
//   return res;
// };
// console.log(maxProfit([2, 5, 1, 3]));
