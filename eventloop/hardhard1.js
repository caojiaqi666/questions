/*
 * @Author: anjiang
 * @Date: 2023-02-02
 * @LastEditors: anjiang
 * @LastEditTime: 2023-02-02
 * @Description:
 */
console.log("1");

setTimeout(() => {
	console.log("7");
}, 1 * 2000);

Promise.resolve()
	.then(function (resolve) {
		console.log("4");
	})
	.then(function () {
		console.log("6"); 
	});

async function foo() {
	await bar();
	console.log("5");
}
foo();

async function errorFunc() {
	try {
		// Tips:参考：https://zh.javascript.info/promise-error-handling：隐式 try…catch
		// Promise.reject()方法返回一个带有拒绝原因的Promise对象
		// Promise.reject('error!!!') === new Error('error!!!')
		await Promise.reject("error!!!");
	} catch (e) {
		console.log(e);
	}
	console.log("async1");
	return Promise.resolve("async1 success");
}
errorFunc().then((res) => console.log(res));

function bar() {
	console.log("2");
}

console.log("3");

// 1
// 2
// error!!!
// async1
// 4
// 5
// async1 success
// 6
// 7