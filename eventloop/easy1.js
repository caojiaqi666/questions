console.log("1");
setTimeout(function () {
	console.log("5");
	process.nextTick(function () {
		console.log("7"); // 1
	});
	new Promise(function (resolve) {
		console.log("6");
		resolve();
	}).then(function () {
		console.log("8");
	});
});

process.nextTick(function () {
	console.log("2"); 
});

new Promise(function (resolve) {
	console.log("3");
	resolve();
}).then(function () {
	console.log("4"); 
});

setTimeout(function () {
	console.log("9");
	process.nextTick(function () {
		console.log("11");
	});
	new Promise(function (resolve) {
		console.log("10");
		resolve();
	}).then(function () {
		console.log("12");
	});
});
