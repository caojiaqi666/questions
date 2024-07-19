
async function async1() {
	console.log("2");
	await async2(); // 注意这里有await与没有的区别
	new Promise(function (resolve) {
		resolve();
	}).then(function () {
		console.log("9"); // 2
	});
	console.log("8");
}

async function async2() {
	console.log("3");
	setTimeout(function () {
		console.log("10");
	});
	return new Promise(function (resolve) {
		resolve();
	}).then(function () {
		console.log("6"); // 1
	});
}

console.log("1");

setTimeout(function () {
	console.log("11");
}, 10);

async1();

new Promise(function (resolve) {
	console.log("4");
	resolve();
}).then(function () {
	console.log("7"); // 3
});

console.log("5");

// script start
// async1 start
// async2
// async1 end
// promise3
// script end
// promise2
// promise1
// promise4
// setTimeout2
// setTimeout1
