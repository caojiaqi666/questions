console.log("1");
setTimeout(() => {
	console.log("3");
	Promise.resolve().then(() => {
		console.log("4");
	});
}, 0);

new Promise(function (resolve, reject) {
	console.log("2");
	setTimeout(function () {
		console.log("5");
		resolve("7");
	}, 0);
}).then((res) => {
	console.log("6");
	setTimeout(() => {
		console.log("7");
	}, 0);
});
