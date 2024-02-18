// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 进阶：你可以设计并实现时间复杂度为 $O(\log n)$ 的算法解决此问题吗？

// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]

// let nums = [5, 7, 7, 8, 8, 10];
// let target = 8;

// function findLeftIndex() {
// 	let left = 0;
//   let right = nums.length - 1;
//   let leftBoard = -1

// 	while (left <= right) {
// 		let mid = left + ((right - left) >> 1);
// 		if (nums[mid] > target) {
// 			right = mid - 1;
//     } else {
//       left = mid + 1;
// 			leftBoard = left;
// 		}
// 	}
// 	return -1;
// }
// console.log("findIndex: ", findLeftIndex());


var searchRange = function (nums, target) {
	const getLeftBorder = (nums, target) => {
		let left = 0,
			right = nums.length - 1;
		let leftBorder = -2; // 记录一下leftBorder没有被赋值的情况
		while (left <= right) {
			let middle = left + ((right - left) >> 1);
			if (nums[middle] >= target) {
				// 寻找左边界，nums[middle] == target的时候更新right
				right = middle - 1;
				leftBorder = right;
			} else {
				left = middle + 1;
			}
		}
		return leftBorder;
	};

	const getRightBorder = (nums, target) => {
		let left = 0,
			right = nums.length - 1;
		let rightBorder = -2; // 记录一下rightBorder没有被赋值的情况
		while (left <= right) {
			let middle = left + ((right - left) >> 1);
			if (nums[middle] > target) {
				right = middle - 1;
			} else {
				// 寻找右边界，nums[middle] == target的时候更新left
				left = middle + 1;
				rightBorder = left;
			}
		}
		return rightBorder;
	};

	let leftBorder = getLeftBorder(nums, target);
	let rightBorder = getRightBorder(nums, target);
	// 情况一
	if (leftBorder === -2 || rightBorder === -2) return [-1, -1];
	// 情况三
	if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1];
	// 情况二
	return [-1, -1];
};