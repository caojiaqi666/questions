/*
 * @Author: anjiang
 * @Date: 2022-06-09
 * @LastEditors: anjiang
 * @LastEditTime: 2023-01-06
 * @Description: 
 */
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



public class Solution {

  public String longestPalindrome(String s) {
      int len = s.length();
      if (len < 2) {
          return s;
      }

      int maxLen = 1;
      int begin = 0;
      // dp[i][j] 表示 s[i..j] 是否是回文串
      boolean[][] dp = new boolean[len][len];
      // 初始化：所有长度为 1 的子串都是回文串
      for (int i = 0; i < len; i++) {
          dp[i][i] = true;
      }

      char[] charArray = s.toCharArray();
      // 递推开始
      // 先枚举子串长度
      for (int L = 2; L <= len; L++) {
          // 枚举左边界，左边界的上限设置可以宽松一些
          for (int i = 0; i < len; i++) {
              // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
              int j = L + i - 1;
              // 如果右边界越界，就可以退出当前循环
              if (j >= len) {
                  break;
              }

              if (charArray[i] != charArray[j]) {
                  dp[i][j] = false;
              } else {
                  if (j - i < 3) {
                      dp[i][j] = true;
                  } else {
                      dp[i][j] = dp[i + 1][j - 1];
                  }
              }

              // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
              if (dp[i][j] && j - i + 1 > maxLen) {
                  maxLen = j - i + 1;
                  begin = i;
              }
          }
      }
      return s.substring(begin, begin + maxLen);
  }
}
