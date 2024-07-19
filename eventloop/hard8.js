let fn1 = new Promise((resolve) => {
	let fn3 = Promise.resolve();
	resolve(fn3);
	// 提示：resolve(fn3) 等同于：
	// Promise.resolve().then(() => fn3.then(resolve));
});

fn1.then(() => {
	console.log("resolvePromise resolved");
});

let fn2 = Promise.resolve().then((res) => {
	console.log("promise1");
});

fn2
	.then(() => {
		console.log("promise2");
	})
	.then(() => {
		console.log("promise3");
	});
