// 查找表问题
// 两个数组的交集 II-350
// 给定两个数组，编写一个函数来计算它们的交集。
// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]
// 示例 2:

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [4,9]
// 复制代码来源：力扣（LeetCode）
// 链接：leetcode-cn.com/problems/in…
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 为两个数组分别建立 map，用来存储 num -> count 的键值对，统计每个数字出现的数量。
// 然后对其中一个 map 进行遍历，查看这个数字在两个数组中分别出现的数量，取出现的最小的那个数量（比如数组 1 中出现了 1 次，数组 2 中出现了 2 次，那么交集应该取 1 次），push 到结果数组中即可。
// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// let intersect = function (nums1, nums2) {
//   let map1 = makeCountMap(nums1)
//   let map2 = makeCountMap(nums2)
//   let res = []
//   for (let num of map1.keys()) {
//     const count1 = map1.get(num)
//     const count2 = map2.get(num)

//     if (count2) {
//       const pushCount = Math.min(count1, count2)
//       for (let i = 0; i < pushCount; i++) {
//         res.push(num)
//       }
//     }
//   }
//   return res
// }

// function makeCountMap(nums) {
//   let map = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i]
//     let count = map.get(num)
//     if (count) {
//       map.set(num, count + 1)
//     } else {
//       map.set(num, 1)
//     }
//   }
//   return map
// }

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect = function (nums1, nums2) {
  let map1 = makeCountMap(nums1);
  let map2 = makeCountMap(nums2);
  let res = [];
  console.log(map1.keys());
  for (let num of map1.keys()) {
    const count1 = map1.get(num);
    const count2 = map2.get(num);

    if (count2) {
      let pushCount = Math.min(count1, count2);
      for (let i = 0; i < pushCount; i++) {
        res.push(num);
      }
    }
  }

  return res;
};

function makeCountMap(nums) {
  let map = new Map();
  let len = nums.length;
  let i = 0;
  while (i < len) {
    if (map.get(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
    i++;
  }
  return map;
}

let u = intersect([1, 2, 2, 4], [2, 2, 4, 4, 5]);
console.log("u: ", u);
