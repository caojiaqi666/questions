// 小红书
console.log(1);
let b = new Promise((resolve, reject) => {
	// resolve(); // 注意是否有resolve，有才会执行then
	console.log(2);
}).then((x) => {
	console.log(3); // 1
});
setTimeout(() => {
	console.log(4);
}, 100);
let c = async () => {
	setTimeout(() => {
		new Promise((resolve, reject) => {
			console.log(6);
		});
	}, 0);
	let x = await new Promise((resolve, reject) => {
		console.log(5);
		resolve(7);
	});
	console.log(x); // 2
	console.log(8);
};

console.log(9);
c();
console.log(10);

// 1
// 2
// 9
// 5
// 10
// 3  //这儿错了
// 7
// 8
// 6
// 4
