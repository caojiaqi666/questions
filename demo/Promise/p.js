const pending = "pending";
const fulfilled = "fulfilled";
const rejected = "rejected";
class MyPromise {
	constructor(executor) {
		this.value = undefined;
		this.reason = undefined;
		this.status = pending;
		this.fulfilledQuene = [];
		this.rejectedQuene = [];

		const resolve = (val) => {
			if (this.status === pending) {
				queueMicrotask(() => {
					this.value = val;
					this.status = fulfilled;
					this.fulfilledQuene.forEach((item) => {
						item(this.value);
					});
				});
			}
		};

		const reject = (reason) => {
			if (this.status === pending) {
				queueMicrotask(() => {
					this.reason = reason;
					this.status = rejected;
					this.rejectedQuene.forEach((item) => {
						item(this.reason);
					});
				});
			}
		};

		try {
			executor(resolve, reject);
		} catch (err) {
			reject(err);
		}
	}

	then(onFulfilled, onRejected) {
		return new MyPromise((resolve, reject) => {
			if (onFulfilled && this.status === pending) {
				this.fulfilledQuene.push(() => {
					try {
						let value = onFulfilled(this.value);
						resolve(value);
					} catch (err) {
						reject(err);
					}
				});
				this.rejectedQuene.push(() => {
					try {
						let reason = onRejected(this.reason);
						resolve(reason);
					} catch (err) {
						reject(err);
					}
				});
			}

			if (this.status === fulfilled) {
				try {
					let val = onFulfilled(this.value);
					resolve(val);
				} catch (err) {
					reject(err);
				}
			}

			if (this.status === rejected) {
				try {
					let reason = onFulfilled(this.reason);
					resolve(reason);
				} catch (err) {
					reject(err);
				}
			}
		});
	}

	catch(onRejected) {
		return this.then(undefined, onRejected);
	}

	static resolve() {}

	static reject() {}
}

const p1 = new MyPromise((resolve, reject) => {
	reject(123);
});

p1.then((res) => {
	console.log("res: ", res);
}).catch((err) => {
	console.log("err:111 ", err);
});
