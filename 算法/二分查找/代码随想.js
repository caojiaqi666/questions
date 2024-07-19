// 输入: nums = [-1,0,3,5,9,12], target = 2
// 输出: -1
// 解释: 2 不存在 nums 中因此返回 -1

let nums = [-20, -1, 0, 1, 2, 3, 5, 9];
let target = 2;

function getIndex(nums, target) {
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		// let mid = left + Math.floor((right - left) / 2);
		let mid = left + (right - left) >> 1;
		if (nums[mid] < target) {
			left = mid + 1;
		} else if (nums[mid] > target) {
			right = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}

console.log(getIndex(nums, target));

// https://programmercarl.com/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html#%E6%80%9D%E8%B7%AF


// 在计算机编程中，(right - left) >> 1 是一种常见的位操作表达式，用于快速计算 right 和 left 之差的一半，即它们的平均值。这个表达式通常在二分查找算法或是需要找到两个数中间值的场景中使用。

// 具体来说：

// (right - left) 是计算 right 和 left 两个数之间的差值。
// >> 是右移位操作符，它会将左边操作数的所有位向右移动指定的位数。
// 1 指的是移动的位数。
// 当你对一个数进行 >> 1 操作时，实际上是将这个数除以2。在大多数编程语言中，整数除法是向下取整的，所以使用 >> 1 来代替除以2可以保证得到的是一个整数结果。

// 示例： 假设 right 是10，left 是2，那么对 (right - left) >> 1 的计算过程如下：

// (right - left) 计算出差值：10 - 2 = 8
// 8 >> 1 将8向右移动1位，得到 4（8除以2的结果）