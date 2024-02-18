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

// 遇到 await 会跳出此函数，继续执行其他同步函数
async function async1() {
	console.log("2");
	await async2();
	new Promise(function (resolve) {
		resolve();
	}).then(function () {
		console.log("9");
	});
	console.log("7");
}

// 注意 await 后面的函数是否返回 Promise
async function async2() {
	console.log("3");
	setTimeout(function () {
		console.log("11");
	});
	new Promise(function (resolve) {
		resolve();
	}).then(function () {
		console.log("6");
	});
}

console.log("1");

setTimeout(function () {
	console.log("10");
}, 0);

async1();

new Promise(function (resolve) {
	console.log("4");
	resolve();
}).then(function () {
	console.log("8");
});

console.log("5");

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
