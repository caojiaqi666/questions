
async function async1() {
	console.log("async1 start");
	async2(); // 注意这里有await与没有的区别
	new Promise(function (resolve) {
		resolve();
	}).then(function () {
		console.log("promise1"); // 2
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
// async1 end
// promise3
// script end
// promise2
// promise1
// promise4
// setTimeout2
// setTimeout1
