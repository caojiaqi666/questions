// 动态规划
// 打家劫舍 - 198
// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
// 示例 1:

// 输入: [1,2,3,1]
// 输出: 4
// 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//   偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 2:

// 输入: [2,7,9,3,1]
// 输出: 12
// 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//   偷窃到的最高金额 = 2 + 9 + 1 = 12 。
// 复制代码来源：力扣（LeetCode）
// 链接：leetcode-cn.com/problems/ho…
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// const fn = (nums) => {
// 	const dp = new Array(nums.length).fill(nums[nums.length - 1]);
// 	console.log('dp: ', dp);

// 	for (let i = nums.length - 2; i >= 0; i--) {
// 		let max = Math.max(nums[i] + (dp?.[i + 2] || 0), dp[i + 1]);
// 		dp[i] = max;
// 	}
// 	return dp.sort((a, b) => b - a)[0];
// };
// fn([2, 7, 9, 3, 1]);
// 动态规划的一个很重要的过程就是找到「状态」和「状态转移方程」，在这个问题里，设 i 是当前屋子的下标，状态就是 以 i 为起点偷窃的最大价值
// 在某一个房子面前，盗贼只有两种选择：偷或者不偷。

// 偷的话，价值就是「当前房子的价值」+「下两个房子开始盗窃的最大价值」
// 不偷的话，价值就是「下一个房子开始盗窃的最大价值」

// 在这两个值中，选择最大值记录在 dp[i]中，就得到了以 i 为起点所能偷窃的最大价值。。
// 动态规划的起手式，找基础状态，在这题中，以终点为起点的最大价值一定是最好找的，因为终点不可能再继续往后偷窃了，所以设 n 为房子的总数量， dp[n - 1] 就是 nums[n - 1]，小偷只能选择偷窃这个房子，而不能跳过去选择下一个不存在的房子。

// 那么就找到了动态规划的状态转移方程：
// // 抢劫当前房子
// robNow = nums[i] + dp[i + 2] // 「当前房子的价值」 + 「i + 2 下标房子为起点的最大价值」

// // 不抢当前房子，抢下一个房子
// robNext = dp[i + 1] //「i + 1 下标房子为起点的最大价值」

// // 两者选择最大值
// dp[i] = Math.max(robNow, robNext)

/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function (nums) {
//   let len = nums.length;
//   let dp = [];
//   for (let i = len - 1; i >= 0; i--) {
//     let robNow = nums[i] + (dp[i + 2] || 0);
//     console.log(`第${4 - i}次`, "robNow: ", robNow);
//     let robNext = dp[i + 1] || 0;
//     console.log("robNext: ", robNext);
//     dp[i] = Math.max(robNow, robNext);
//   }
//   return dp[0];
// };

// var rob = function (nums) {
//   let len = nums.length;
//   let dp = []
//   for (let i = len - 1; i >= 0; i--) {
//     let robNow = nums[i] + (dp[i + 2] || 0);
//     let robNext = dp[i + 1] || 0
//     dp[i] = Math.max(robNow, robNext)
//   }
//   return dp[0]
// };
// console.log(rob([2,1,1,2]));

// 213. 打家劫舍 II
// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，
// 这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房
// 屋在同一晚上被小偷闯入，系统会自动报警 。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

// 示例 1：

// 输入：nums = [2,3,2]
// 输出：3
// 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
// 示例 2：

// 输入：nums = [1,2,3,1]
// 输出：4
// 解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
//      偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 3：

// 输入：nums = [1,2,3]
// 输出：3

// [2,2,3,2,2]
const rob2 = (nums) => {
	if (nums.length < 2) return nums[0]
	const arr1 = nums.slice(0, nums.length - 1);
	const arr2 = nums.slice(1, nums.length);
	return Math.max(help(arr1), help(arr2));
};

const help = (nums) => {
	console.log('nums: ', nums);
	const len = nums.length;
	const dp = new Array(nums.length).fill(nums[len - 1]);
	for (let i = nums.length - 2; i >= 0; i--) {
		if (i === 0) {
			dp[i] = Math.max(nums[i] + (dp[i + 2] || 0), dp[i + 1]);
		} else {
			dp[i] = Math.max(nums[i] + (dp[i + 2] || 0), dp[i + 1]);
		}
	}
	return dp.sort((a, b) => b - a)[0];
};
console.log(rob2([4,1,2]));

// console.log(rob2([2, 3, 2]));
