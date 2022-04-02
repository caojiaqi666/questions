// 备忘录算法
// let map = new Map();
// function sum(n) {
//   if (n < 1) {
//     return 0;
//   }
//   if (n == 1) {
//     return 1;
//   }
//   if (n == 2) {
//     return 2;
//   }
//   if (map.get(n)) {
//     return map.get(n);
//   } else {
//     let val = sum(n - 2) + sum(n - 1);
//     map.set(n, val);
//     return val;
//   }
// }
// console.log(sum(10));

// 动态规划
function sum(n) {
  if (n < 1) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }

  let a = 1;
  let b = 2;
  let temp = 0;
  for (let i = 3; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
}

console.log('sum(10): ', sum(10));