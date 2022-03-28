/**
 * @param {number} n
 * @return {number[][]}
 */
// var generateMatrix = function (n) {
//   let p = 0;
//   let q = 0;
//   let result = new Array(n).fill([]);
//   console.log("result: ", result);

//   for (let i = 0; i < n ** 2; i++) {
//     if (p <= n && q <= n) {
//       result[q][p] = i;
//       p++;
//     } else if (q <= n && p == n) {
//       q++;
//     }
//     console.log(i);
//   }

//   return result;
// };

// console.log(generateMatrix(3));
