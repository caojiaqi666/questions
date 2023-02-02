function func(num) {
	return function () {
		console.log(num);
	};
}
setTimeout(func(1));
async function async3() {
	await async4();
	console.log(8); // 1
}
async function async4() {
	console.log(5);
}
async3();

function func2() {
	console.log(2);
	async function async1() {
		await async2();
		console.log(9); // 1
	}
	async function async2() {
		console.log(5);
	}
	async1();
	setTimeout(func(4));
}
setTimeout(func2);
setTimeout(func(3));
new Promise((resolve) => {
	console.log("Promise");
	resolve();
})
	.then(() => console.log(6))  // 2
	.then(() => console.log(7)); // 3
console.log(0);

// 5
// Promise
// 0
// 8
// 6
// 7
// 1
// 2
// 5
// 9
// 3
// 4