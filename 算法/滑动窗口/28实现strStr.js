// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function (haystack, needle) {
//   if (needle == "") return 0;
//   let len = needle.length

//   let first = needle[0]
//   let arr = []
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] == first) {
//       arr.push(i)
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < len; j++) {

//       if (hasstack[arr[i] + j] == needle[j]) {

//       }
//     }
//   }
// };

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle == "") return 0;
  let len1 = haystack.length;
  let len2 = needle.length;

  for (let i = 0; i + len2 <= len1; i++) {
    let flag = true;
    for (let j = 0; j < len2; j++) {
      if (haystack[i + j] != needle[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return i;
    }
  }
  return -1;
};
var strStr1 = function (haystack, needle) {
  const n = haystack.length,
    m = needle.length;
  for (let i = 0; i + m <= n; i++) {
    let flag = true;
    for (let j = 0; j < m; j++) {
      if (haystack[i + j] != needle[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return i;
    }
  }
  return -1;
};

console.log(strStr("hello", "ll"));
