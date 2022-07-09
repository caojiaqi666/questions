const PENDING_STATUS = "pending";
const FULFILLED_STATUS = "fulfilled";
const REJECT_STATUS = "reject";
class MyPromise {
  constructor(executor) {
    // 初始化状态
    this.status = PENDING_STATUS;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledFns = [];
    this.onRejectedFns = [];

    const reslove = (value) => {
      if (this.status === PENDING_STATUS) {
        // 添加微任务
        queueMicrotask(() => {
          if (this.status !== PENDING_STATUS) return;
          this.status = FULFILLED_STATUS;
          this.value = value;
          // 状态变成fulfilled就去遍历调用onFulfilledFns
          this.onFulfilledFns.forEach((fn) => {
            fn(this.value);
          });
        });
      }
    };

    const reject = (reason) => {
      if (this.status === PENDING_STATUS) {
        // 添加微任务
        queueMicrotask(() => {
          if (this.status !== PENDING_STATUS) return;
          this.status = REJECT_STATUS;
          this.reason = reason;
          // 状态变成rejected就去遍历调用onRejectedFns
          this.onRejectedFns.forEach((fn) => {
            fn(this.reason);
          });
        });
      }
    };
    try {
      // executor函数需传入两个函数resolve和reject，立即执行Promise传入的executor
      executor(reslove, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = onFulfilled || ((value) => value);

    onRejected =
      onRejected ||
      ((err) => {
        throw err;
      });

    return new Promise((reslove, reject) => {
      if (this.status === FULFILLED_STATUS && onFulfilled) {
        // 一次性执行完所有的then
        // 通过try catch捕获异常，没有捕获到执行resolve，捕获到执行reject
        try {
          const value = onFulfilled(this.value);
          resolve(value);
        } catch (err) {
          reject(err);
        }
      }
      if (this.status === REJECT_STATUS && onRejected) {
        // 一次性执行完所有的catch
        // 通过try catch捕获异常，没有捕获到执行resolve，捕获到执行reject
        try {
          const reason = onRejected(this.reason);
          reject(reason);
        } catch (err) {
          reject(err);
        }
      }
      if (this.status === PENDING_STATUS) {
        // 保存成功、失败时的回调
        if (onFulfilled) {
          this.onFulfilledFns.push(() => {
            try {
              const value = onFulfilled(this.value);
              reslove(value);
            } catch (err) {
              reject(err);
            }
          });
        }
        if (onRejected) {
          this.onRejectedFns.push(() => {
            try {
              const reason = onRejected(this.reason);
              reject(reason);
            } catch (err) {
              reject(err);
            }
          });
        }
      }
    });
  }

  catch(onRejected) {
    // catch方法的功能类似于then方法中的失败回调，所以，实现catch方法只需要调用then，给then传入失败的回调即可；
    // 注意：在then后链式调用catch会有一个问题，调用catch方法的promise是then执行之后返回的新promise，
    // 而catch真正需要去调用的是当前then的失败回调，而不是当前then执行后结果promise的失败回调，
    // 所以，可以将当前then的失败回调推到下一次的promise中，而抛出异常就可以实现（因为上一个then抛出异常，
    // 可以传递到下一个then的失败回调中）
    return this.then(undefined, onRejected);
  }

  finally(onFinally) {
    this.then(onFinally, onFinally);
  }

  // 类方法加static
  static reslove(value) {
    return new MyPromise((reslove, reject) => {
      reslove(value);
    });
  }

  static reject(reason) {
    return new MyPromise((reslove, reject) => {
      reject(reason);
    });
  }

  static all(promises) {
    return new MyPromise((reslove, reject) => {
      // 创建一个数组用于存放结果
      const results = [];
      promises.forEach((promise) => {
        promise
          .then((res) => {
            results.push(res);
            // 当成功返回值的长度与传入promises的长度相等，就调用resolve
            if (results.length === promises.length) {
              reslove(results);
            }
          })
          .catch((err) => {
            // 一旦有一个promise变成了rejected状态，就调用reject
            reject(err);
          });
      });
    });
  }

  static allSettled(promises) {
    return new MyPromise((reslove, reject) => {
      const results = [];
      promises.forEach((promise) => {
        promise
          .then((res) => {
            results.push({ status: FULFILLED_STATUS, value: res });
            if (results.length === promises.length) {
              reslove(results);
            }
          })
          .catch((err) => {
            results.push({ status: REJECT_STATUS, value: err });
            if (results.length === promises.length) {
              // 不管promise的状态为什么，最终都会调用resolve；
              reslove(results);
            }
          });
      });
    });
  }

  static race(promises) {
    return new MyPromise((reslove, reject) => {
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            reslove({ status: FULFILLED_STATUS, value: res });
          },
          (err) => {
            reject({ status: REJECT_STATUS, value: err });
          }
        );
      });
    });
  }

  static all(promises) {
    return new MyPromise((reslove, reject) => {
      const reasons = [];
      promises.forEach((promise) => {
        promise
          .then((res) => {
            reslove(res);
          })
          .catch((err) => {
            reasons.push(err);
            if (promises.length === reasons.length) {
              reject(new AggregateError(reasons));
            }
          });
      });
    });
  }
}
