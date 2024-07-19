async function async1() {
	console.log("2");
	await async2();
	console.log("9");
}
async function async2() {
	console.log("3");
	return new Promise((resolve, reject) => {
		resolve();
		console.log("4");
	});
}
console.log("1");
setTimeout(function () {
	console.log("10");
}, 0);
async1();
new Promise(function (resolve) {
	console.log("5");
	resolve();
})
	.then(function () {
		console.log("7");
	})
	.then(function () {
		console.log("8");
	});
console.log("6");
