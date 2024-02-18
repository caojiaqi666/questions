function Fibonacci(n) {
	if (n == 1) {
		return 1;
	}
	if (n == 2) {
		return 1;
	}

	let a = 1,
		b = 1;
	let temp = 0;

	for (let i = 2; i < n; i++) {
		temp = a + b;
		a = b;
		b = temp;
	}
	return temp;
}

console.log(Fibonacci(4));

// 1 1 2 3 5 8 13

const fb = (n) => {
	if (n === 1) {
		return 1;
	}

	if (n === 2) {
		return 1;
	}
	let a = 1,
		b = 1,
		r = 0;
	for (let i = 2; i <= n; i++) {
		r = a + b;
		a = b;
		b = r;
	}
	return r;
};

console.log(fb(6));

// 1 1 2 3 5 8

const fn = (n) => {
	if (n === 0 || n === 1) {
		return 1;
	}
	let a = 1;
	let b = 1;
	let temp = 0;

	for (let i = 2; i < n; i++) {
		temp = b;
		b = a + b;
		a = temp;
	}
	return b;
};

console.log(fn(44));