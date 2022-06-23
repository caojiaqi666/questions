// console.log(1);
// let b = new Promise((resolve, reject) =>{
//   console.log(2);
// }).then((x) => {
//   console.log(8);
// })
// setTimeout(() => {
//   console.log(9)
// }, 100);
// let c = async() => {
//   setTimeout(() => {
//     new Promise((resolve, reject) => {
//       console.log(10);
//     })
//   }, 0);
//   let x =  await new Promise((resolve, reject) =>{
//     console.log(4);
//     resolve(5)
//   })
//   console.log(x);
//   console.log(6);
// }
// console.log(3);
// c()
// console.log(7)

// -----------------------------

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

// -----------------------------
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

// -----------------------------
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

// -----------------------------
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

// -----------------------------
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
