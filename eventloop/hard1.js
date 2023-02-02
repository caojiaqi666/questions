/*
 * @Author: anjiang
 * @Date: 2023-02-02
 * @LastEditors: anjiang
 * @LastEditTime: 2023-02-02
 * @Description:
 */
// 携程运行原理：协程在函数内部可以让出（yield），转而执行另一个函数，
// 但是此时该协程并未真正结束，只是暂时让出 CPU 执行权，在适当的时候
// 返回来可以接着恢复执行（resume），这种执行的转换不是函数调用，而是类似于 CPU 的中断
async function async1() {
	console.log("async1 start");
	await async2();
	new Promise(function (resolve) {
		// 2
		resolve();
	}).then(function () {
		console.log("promise1"); // 4
	});
	console.log("async1 end");
}

async function async2() {
	console.log("async2");
	setTimeout(function () {
		console.log("setTimeout1");
	});
	new Promise(function (resolve) {
		resolve();
	}).then(function () {
		console.log("promise2"); // 1
	});
}

console.log("script start");

setTimeout(function () {
	console.log("setTimeout2");
}, 0);

async1();

new Promise(function (resolve) {
	console.log("promise3");
	resolve();
}).then(function () {
	console.log("promise4"); // 3
});

console.log("script end");

// script start
// async1 start
// async2
// promise3
// script end
// promise2
// async1 end
// promise4
// promise1
// setTimeout2
// setTimeout1
