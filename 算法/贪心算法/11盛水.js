// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 说明：你不能倾斜容器。

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
// 示例 2：

// 输入：height = [1,1]
// 输出：1

const fn = (nums) => {
	let len = nums.length;
	let max = 0;
	let left = 0;
	let right = len - 1;
	while (left < right) {
		max = Math.max(max, (right - left) * Math.min(nums[left], nums[right]));
		if (nums[left] < nums[right]) {
			left++;
		} else {
			right--;
		}
	}
	return max;
};

// 暴力枚举 超时
// const fn = (nums) => {
// 	let len = nums.length;
// 	let max = 0;
// 	for (let i = 0; i < len; i++) {
// 		for (let j = len - 1; j >= i; j--) {
// 			let min = Math.min(nums[i], nums[j]);
// 			max = Math.max(max, (j - i) * min);
// 		}
// 	}
// 	return max;
// };

console.log(fn([1, 8, 6, 2, 5, 4, 8, 3, 7]));
