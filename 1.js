// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
// 示例 1：
// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

// 示例 2：
// 输入：target = 4, nums = [1,4,4]
// 输出：1
// 示例 3：
// 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
// 输出：0
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function (target, nums) {
// 	let left = 0;
// 	let right = -1;
// 	let sum = 0;
// 	let minlen = Infinity;

// 	while (left < nums.length) {
// 		if (sum < target) {
// 			right++;
// 			sum += nums[right];
// 		} else {
// 			sum -= nums[left];
// 			left++;
// 		}

// 		if (sum >= target) {
// 			minlen = Math.min(minlen, right - left + 1);
// 		}
// 	}
// 	return minlen === Infinity ? 0 : minlen;
// };
// console.log(minSubArrayLen(4, [1, 4, 4]));

// 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
// 示例:
// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7]
// 解释:
//   滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// 提示：
// 你可以假设 k 总是有效的，在输入数组 不为空 的情况下，1 ≤ k ≤ nums.length。
// 注意：本题与主站 239 题相同：https://leetcode-cn.com/problems/sliding-window-maximum/

// function get(nums, k) {
// 	let left = 0;
// 	let res = [];
// 	let n = nums?.length;
// 	while (left + k <= n) {
// 		let max = -Infinity;
// 		for (let i = 0; i < k; i++) {
// 			max = Math.max(max, nums[left + i]);
// 		}
// 		res.push(max);
// 		left++;
// 	}
// 	return res;
// }
// console.log(get([1, -1], 1));

// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
// 示例 1:
// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
//  示例 2:
// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
// 提示:
// 1 <= s.length, p.length <= 3 * 104
// s 和 p 仅包含小写字母

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// var findAnagrams = function (s, p) {
// 	let left = 0;
// 	let right = left + (p?.length - 1) || 0;
// 	let leftmap = {};
// 	let res = [];

// 	while (left < s.length) {

// 	}

// 	return res;
// };

// console.log(findAnagrams("cba", "abc"));
