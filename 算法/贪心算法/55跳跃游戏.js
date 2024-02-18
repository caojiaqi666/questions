// 55.给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标。

//

// 示例 1：

// 输入：nums = [2,3,1,1,4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
// 示例 2：

// 输入：nums = [3,2,1,0,4]
// 输出：false
// 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function (nums) {
//   let len = nums.length;
//   if (len === 1) return true;

//   for (let i = 0; i < len; ) {
//     i += nums[i];
//     if (nums[i] == 0) return false;
//     if (i == len - 1) {
//       return true;
//     }
//   }
//   return false;
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function (nums) {
//   let n = 1;
//   let len = nums.length;

//   for (let i = len - 2; i >= 0; i--) {
//     console.log('i: ', i);
//     console.log('n: ', n);
//     if (nums[i] >= n) {
//       n = 1;
//     } else {
//       n++;
//     }
//     if (i == 0 && n > 1) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(canJump([2, 0]));

// 贪心算法，获取可跳跃的最大距离
// const fn = (nums) => {
// 	let max = 0;
// 	for (let i = 0; i < nums.length; i++) {
// 		if (i > max) {
// 			return false;
// 		}
// 		max = Math.max(i + nums[i], max);
// 	}
// 	return true;
// };

// console.log(fn([2, 3, 1, 1, 4]));

// 45. 跳跃游戏 II

// 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。

// 每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，
// 如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:

// 0 <= j <= nums[i]
// i + j < n
// 返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。
// 示例 1:

// 输入: nums = [2,3,1,1,4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
//      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
// 示例 2:

// 输入: nums = [2,3,0,1,4]
// 输出: 2

// 方法一：反向查找出发位置
// 我们的目标是到达数组的最后一个位置，因此我们可以考虑最后一步跳跃前所在的位置，该位置通过跳跃能够到达最后一个位置。

// 如果有多个位置通过跳跃都能够到达最后一个位置，那么我们应该如何进行选择呢？直观上来看，我们可以「贪心」地选择距离最后一个位置最远的那个位置，也就是对应下标最小的那个位置。因此，我们可以从左到右遍历数组，选择第一个满足要求的位置。

// 找到最后一步跳跃前所在的位置之后，我们继续贪心地寻找倒数第二步跳跃前所在的位置，以此类推，直到找到数组的开始位置。

// const fn = (nums) => {
// 	let count = 0;
// 	let len = nums.length;
// 	let position = len - 1;
// 	while (position > 0) {
// 		for (let i = 0; i < position; i++) {
// 			if (i + nums[i] >= position) {
// 				position = i;
// 				count++;
// 				break;
// 			}
// 		}
// 	}
// 	return count;
// };
// console.log(fn([2, 3, 1, 1, 4]));

// 方法二：正向查找可到达的最大位置
// 方法一虽然直观，但是时间复杂度比较高，有没有办法降低时间复杂度呢？

// 如果我们「贪心」地进行正向查找，每次找到可到达的最远位置，就可以在线性时间内得到最少的跳跃次数。

// 例如，对于数组 [2,3,1,2,4,2,3]，初始位置是下标 0，从下标 0 出发，最远可到达下标 2。下标 0 可到达的位置中，下标 1 的值是 3，从下标 1 出发可以达到更远的位置，因此第一步到达下标 1。

// 从下标 1 出发，最远可到达下标 4。下标 1 可到达的位置中，下标 4 的值是 4 ，从下标 4 出发可以达到更远的位置，因此第二步到达下标 4。

// 在具体的实现中，我们维护当前能够到达的最大下标位置，记为边界。我们从左到右遍历数组，到达边界时，更新边界并将跳跃次数增加 1。

// 在遍历数组时，我们不访问最后一个元素，这是因为在访问最后一个元素之前，我们的边界一定大于等于最后一个位置，否则就无法跳到最后一个位置了。如果访问最后一个元素，在边界正好为最后一个位置的
// 情况下，我们会增加一次「不必要的跳跃次数」，因此我们不必访问最后一个元素。

const fn = (nums) => {
	let len = nums.length;
	let end = 0;
	let farest = 0;
	let step = 0;

	for (let i = 0; i < len - 1; i++) {
		farest = Math.max(farest, i + nums[i]);
		if (i === end) {
			end = farest;
			step++;
		}
	}
	return step;
};
console.log(fn([2, 3, 1, 1, 4, 1]));
