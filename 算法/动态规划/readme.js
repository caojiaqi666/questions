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

//   let a = 1;
//   let b = 2;
//   let temp = 0;
//   for (let i = 3; i <= n; i++) {
//     temp = a + b;
//     a = b;
//     b = temp;
//   }
//   return temp;
// }

// console.log('sum(10): ', sum(10));



// 题目二： 国王和金矿

// 有一个国家发现了5座金矿，每座金矿的黄金储量不同，需要参与
// 挖掘的工人数也不同。参与挖矿工人的总数是10人。每座金矿要么
// 全挖，要么不挖，不能派出一半人挖取一半金矿。要求用程序求解
// 出，要想得到尽可能多的黄金，应该选择挖取哪几座金矿？

