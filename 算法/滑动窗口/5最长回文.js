// 滑动窗口问题
// 无重复字符的最长子串-3
// 给定一个字符串，请你找出其中不含有重复字符的   最长子串   的长度。
// 示例  1:
// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 复制代码示例 2:
// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 复制代码示例 3:
// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
// 复制代码来源：力扣（LeetCode）
// 链接：leetcode-cn.com/problems/lo…
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {number}
 */
// let lengthOfLongestSubstring = function (str) {
//   let len = str.length;
//   let max = 0;
//   let left = 0;
//   let right = -1;
//   let codeMap = {};
//   while (left < len) {
//     let nextCode = str[right + 1];
//     if (!codeMap[nextCode] && nextCode !== undefined) {
//       right++;
//       codeMap[nextCode] = 1;
//     } else {
//       codeMap[str[left]] = 0;
//       left++;
//     }
//     max = Math.max(max, right - left + 1)
//   }
//   return max;
// };

let longestPalindrome = function (str) {
  let len = str.length;
  let codeMap = {};
  let left = 0;
  let right = -1;
  let max = 0;
  while (left < len) {
    let nextCode = str[right + 1];
    if (!codeMap[nextCode] && nextCode !== undefined) {
      codeMap[nextCode] = 1;
      right++;
    } else {
      codeMap[str[left]] = 0;
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};

let res = longestPalindrome("pwwkew");
console.log('res: ', res);
