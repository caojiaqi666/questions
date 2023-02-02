
// 我们可以分2种情况来理解：

// 1.如果await 后面直接跟的为一个变量，比如：await 1；这种情况的话相当于直接把await后面的代码注册为一个微任务，
// 可以简单理解为promise.then(await下面的代码)。然后跳出async1函数，执行其他代码，当遇到promise函数的时候，
// 会注册promise.then()函数到微任务队列，注意此时微任务队列里面已经存在await后面的微任务。所以这种情况会先执行
// await后面的代码（async1 end），再执行async1函数后面注册的微任务代码(promise1,promise2)。

console.log("script start");

async function async1() {
	await async2();
	console.log("async1 end"); // 1
}
async function async2() {
	console.log("async2 end");
}
async1();

setTimeout(function () {
	console.log("setTimeout");
}, 0);

new Promise((resolve) => {
	console.log("Promise");
	resolve();
})
	.then(function () {
		console.log("promise1");
	})
	.then(function () {
		console.log("promise2");
	});

console.log("script end");


// script start
// async2 end
// Promise
// script end
// async1 end
// promise1
// promise2
// setTimeout



// 2.如果await后面跟的是一个异步函数的调用，此时执行完awit并不先把await后面的代码注册到微任务队列中去，而是执行完await之后，
// 直接跳出async1函数，执行其他代码。然后遇到promise的时候，把promise.then注册为微任务。其他代码执行完毕后，
// 需要回到async1函数去执行剩下的代码，然后把await后面的代码注册到微任务队列当中，注意此时微任务队列中是有之前注册的微任务的。
// 所以这种情况会先执行async1函数之外的微任务(promise1,promise2)，然后才执行async1内注册的微任务(async1 end).

////// 可以理解为，这种情况下，await 后面的代码会在本轮循环的最后被执行.


console.log("script start");

async function async1() {
	await async2();
	console.log("async1 end");
}
async function async2() {
	console.log("async2 end");
  return new Promise((resolve, reject) => {
    console.log("1111")
  })
}
async1();

setTimeout(function () {
	console.log("setTimeout");
}, 0);

new Promise((resolve) => {
	console.log("Promise");
	resolve();
})
	.then(function () {
		console.log("promise1");
	})
	.then(function () {
		console.log("promise2");
	});

console.log("script end");


// script start
// async2 end
// 1111
// Promise
// script end
// promise1
// promise2
// async1 end
// setTimeout