var findMedianSortedArrays = function (nums1, nums2) {
    let nums = [];
    let len1 = nums1.length;
    let len2 = nums2.length;
    for (let i = 0; i < len1; i++) {
      nums[i] = nums1[i];
    }
    for (let i = 0; i < len2; i++) {
      nums[i + len1] = nums2[i];
    }
    nums.sort((a, b) => a - b);
    let len = nums.length;
    let odd = len % 2 === 0;
  
    let mid = Math.floor(len / 2) - 1;
    return odd ? (nums[mid] + nums[mid + 1]) / 2 : nums[mid + 1];
  };
console.log(findMedianSortedArrays([1, 3, 5], [2, 4, 6]));
