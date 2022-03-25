// const flatArr = (arr) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] instanceof Array) {
//       // console.log("....",arr[i].splice(i));
//       // flatArr(arr[i].concat(arr.splice(i)))
//       result.concat(arr[i]);
//     } else {
//       result.push(arr[i]);
//       arr.splice(i, 1)
//     }
//   }

//   // arr.reduce((pre, cur) => {
//   //   console.log('pre, cur: ', pre, cur);
//   //   if (pre instanceof Array) {
//   //     flatArr()
//   //   } else {
//   //     result.push(pre)
//   //   }
//   // })
//   return result;

// }

// const arr = [1, [2,3], [[4,5], [6, 7]]];
// // console.log(flatArr(arr));
// // let u = arr.reduce((acc, val) => acc.concat(val), []);
// // console.log(u);

// Array.prototype.myFlat = function(n){
//   let newArr = [];
//   this.forEach(item=>{
//     if(Array.isArray(item) && n > 0){
//       newArr = newArr.concat(item.myFlat(n-1))
//     }else{
//       newArr.push(item)
//     }
//   })
//   return newArr;
// }

// const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];
// // concat + 递归
// function flat(arr) {
//   let arrResult = [];
//   arr.forEach(item => {
//     if (Array.isArray(item)) {
//       // arrResult = arrResult.concat(arguments.callee(item));   // 递归
//       // 或者用扩展运算符
//       // arrResult.concat.apply([], arr);
//     } else {
//       arrResult.push(item);
//     }
//   });

//   return arrResult;
// }
// // flat(arr)
// console.log('flat(arr): ', flat(arr));

// const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]

// // 首先使用 reduce 展开一层
// arr.reduce((pre, cur) => pre.concat(cur), []);
// // [1, 2, 3, 4, 1, 2, 3, [1, 2, 3, [1, 2, 3]], 5, "string", { name: "弹铁蛋同学" }];

// // 用 reduce 展开一层 + 递归
// const flat = arr => {
//   return arr.reduce((pre, cur) => {
//     return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
//   }, []);
// };
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];

// console.log("1");

// setTimeout(function () {
//   console.log("2");
//   process.nextTick(function () {
//     console.log("3");
//   });
//   new Promise(function (resolve) {
//     console.log("4");
//     resolve();
//   }).then(function () {
//     console.log("5");
//   });
// });
// process.nextTick(function () {
//   console.log("6");
// });
// new Promise(function (resolve) {
//   console.log("7");
//   resolve();
// }).then(function () {
//   console.log("8");
// });

// setTimeout(function () {
//   console.log("9");
//   process.nextTick(function () {
//     console.log("10");
//   });
//   new Promise(function (resolve) {
//     console.log("11");
//     resolve();
//   }).then(function () {
//     console.log("12");
//   });
// });

// ----------------------------------------------------------------console.log('script start')

// console.log('script start')
// async function async1() {
//   await async2();
//   console.log("async1 end");
// }
// async function async2() {
//   console.log("async2 end");
// }
// async1();

// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);

// new Promise((resolve) => {
//   console.log("Promise");
//   resolve();
// })
//   .then(function () {
//     console.log("promise1");
//   })
//   .then(function () {
//     console.log("promise2");
//   });

// console.log("script end");

// var length = 10;
// function fn() {
//   console.log("this", this);
//   return this.length + 1;
// }
// var obj = {
//   length: 5,
//   test1: function () {
//     return fn();
//   },
// };
// obj.test2 = fn;
// //下面代码输出是什么
// console.log(obj.test1());
// console.log(fn() === obj.test2());
// console.log("obj.test2(): ", obj.test2());
// console.log("fn(): ", fn());

// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }

// async function async2() {
//   console.log("async2 start");
//   // return new Promise((resolve, reject) => {
//   //   resolve();
//   //   console.log("async2 promise");
//   // })
// }
// console.log("script start");
// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);
// async1();
// new Promise(function (resolve) {
//   console.log("promise1");
//   resolve();
// })
//   .then(function () {
//     console.log("promise2");
//   })
//   .then(function () {
//     console.log("promise3");
//   });
// console.log("script end");

// function countOff(num, m) {
//   let players = [];
//   for (let i = 1; i <= num; i++) {
//     players.push(i);
//   }
//   let flag = 0;
//   while (players.length > 1) {
//     // 剩下一人，结束条件
//     let outPlayerNum = 0,
//     len = players.length;

//     for (let i = 0; i < len; i++) {
//       flag++;
//       if (flag === m) {
//         flag = 0;
//         console.log(".........",outPlayerNum);
//         console.log("出局：" + players[i - outPlayerNum]);
//         players.splice(i - outPlayerNum, 1);
//         outPlayerNum++;
//       }
//     }
//   }
//   // return players[0];
//   console.log("剩下：" + players[0]);
// }
// // console.log("剩下："+find(100,5))
// countOff(100, 5);

// let str = "asfhufohifhwqpdjqwdnkjscnnkjcnholicnsaknclsahfounjdljsan";

// let arr = str.split("");
// let sumcount = arr.reduce((pre, cur) => {
//   pre[cur] = (pre[cur] || 0) + 1;
//   return pre;
// }, {});

// console.log("sumCount(str): ", sumcount);

// console.log('1')
// setTimeout(function() {
//     console.log('2')
//     process.nextTick(function() {
//         console.log('3')
//     })
//     new Promise(function(resolve) {
//         console.log('4')
//         resolve()
//     }).then(function() {
//         console.log('5')
//     })
// })

// process.nextTick(function() {
//     console.log('6')
// })

// new Promise(function(resolve) {
//     console.log('7')
//     resolve()
// }).then(function() {
//     console.log('8')
// })

// setTimeout(function() {
//     console.log('9')
//     process.nextTick(function() {
//         console.log('10')
//     })
//     new Promise(function(resolve) {
//         console.log('11')
//         resolve()
//     }).then(function() {
//         console.log('12')
//     })
// })

// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }
// async function async2() {
//   console.log("async2 start");
//   return new Promise((resolve, reject) => {
//     resolve();
//     console.log("async2 promise");
//   });
// }
// console.log("script start");
// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);
// async1();
// new Promise(function (resolve) {
//   console.log("promise1");
//   resolve();
// })
//   .then(function () {
//     console.log("promise2");
//   })
//   .then(function () {
//     console.log("promise3");
//   });
// console.log("script end");

// Array.prototype.myreduce = function (callback, initValue) {
//   let context = this;
//   console.log("this: ", context);
//   let o = Object(this);
//   let len = o.length;
//   let result;
//   let key = 0;
//   if (initValue) {
//     result = initValue;
//   } else {
//     result = o[0];
//   }
//   console.log(result);
//   while (key < len) {
//     result = callback(result, o[key]);
//     key++;
//   }
//   return result;
// };
// [1, 2, 3, 4].myreduce((pre, cur) => (pre += cur));

// 防抖

// function debounce(fn, time) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     let args = arguments;
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, time);
//   };
// }

// 节流
// function throttle(fn, delay) {
//   let lastTime = new Date()
//   return function () {
//     let nowTime = new Date()
//     if (nowTime - lastTime > delay) {
//       fn.apply(this, arguments)
//       lastTime = nowTime
//     }
//   }
// }

// 深拷贝
// function clone(target) {
//   if (typeof target === 'object') {
//     let cloneTarget = Array.isArray(target) ? [] : {}
//     for (let key in target) {
//       cloneTarget[key] = clone(target[key])
//     }
//     return cloneTarget
//   } else {
//     return target
//   }
// };

// let obj1 = { a: 1, b: { c: 3 } };
// let obj2 = clone(obj1);
// obj1.b.c = 4
// console.log(obj2);

// 考虑循环引用
// function clone(target, map = new WeakMap()) {
//   if (typeof target === 'object') {
//     let cloneTarget = Array.isArray(target) ? [] : {}
//     if (map.get(target)) {
//       return map.get(target)
//     }
//     map.set(target, cloneTarget)
//     for (let key in target) {
//       cloneTarget[key] = clone(target[key], map)
//     }
//     return cloneTarget
//   } else {
//     return target
//   }
// };

// const target = {
//   field1: 1,
//   field2: undefined,
//   field3: {
//       child: 'child'
//   },
//   field4: [2, 4, 8]
// };
// target.target = target;

// let obj5 = clone(target)
// console.log('obj5: ', obj5);

// process.nextTick(() => {
//   console.log('nextTick')
// })
// Promise.resolve()
//   .then(() => {
//     console.log('then')
//   })
// setImmediate(() => {
//   console.log('setImmediate')
// })
// console.log('end')

// 假设有n个人，标号为1-n。 从第一个人开始计数，
// 到第k个人则出列，随后从第k+1个人重新计数，到第k再出列。
//  直至剩下最后一个人。问最后剩下的人的编号

// function feb(n) {
//   let nums = [];
//   for (let i = 1; i <= n; i++) {
//     nums[i - 1] = i;
//   }
//   console.log(nums);
// }

// feb(10)

/**
 * @param {number} n
 * @return {number}
 */
// var trailingZeroes = function (n) {
//   let result = 1;
//   let count = 0
//   for (let i = n; i > 0; i--) {
//     result *= i;
//   }
//   console.log('result: ', result);

//   while (Number(result) % 10 === 0) {
//     result /= 10;
//     count++;
//   }
//   return count;
// };

// let res = trailingZeroes(10);
// console.log('res: ', res);

// 对称二叉树
// var isSymmetric = function (root) {
//   return check(root, root);
// };

// function check(left, right) {
//   if (left == null && right == null) {
//     return true;
//   } else if (left == null || right == null) {
//     return false;
//   } else if (left !== right) {
//     return false;
//   }
//   return (
//     left == right &&
//     check(left.left, right.right) &&
//     check(left.right, right.left)
//   );
// }

// 
