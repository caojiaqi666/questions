const PENDING_STATUS = 'pending'
const FULFILLED_STATUS = 'fulfilled'
const REJECTED_STATUS = 'rejected'
class MyPromise {
	constructor(executor) {
		this.value = undefined;
		this.reason = undefined;
		this.status = PENDING_STATUS;
		this.fulfilledQuene = [];
		this.rejectedQuene = [];
    // 初始化Promise的状态为pending
    this.promiseStatus = PENDING_STATUS
    // 初始化变量，用于保存resolve和reject传入的参数值
    this.value = undefined
    this.reason = undefined
    // 初始化两个数组，分别用于保存then中对应需要执行的回调
    this.onFulfilledFns = []
    this.onRejectedFns = []

		const resolve = (val) => {
			if (this.status === PENDING_STATUS) {
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
			if (this.status === PENDING_STATUS) {
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
			if (onFulfilled && this.status === PENDING_STATUS) {
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

			if (this.status === FULFILLED_STATUS) {
				try {
					let val = onFulfilled(this.value);
					resolve(val);
				} catch (err) {
					reject(err);
				}
			}

			if (this.status === REJECTED_STATUS) {
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
