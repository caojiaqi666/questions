function mydebounce(fn, delay) {
	let timer = null;
	return function (...args) {
		if (timer) {
			clearTimeout();
		}

		timer = setTimeout(() => {
			fn.apply(this, args);
			timer = null;
		}, delay);
	};
}

function mythrottle(fn, delay) {
	let timer = null;
	return function (...args) {
		if (timer) return;

		timer = setTimeout(() => {
			fn.apply(this, args);
			timer = null;
		}, delay);
	};
}

mydebounce(() => {
	console.log(111);
}, 1000);
