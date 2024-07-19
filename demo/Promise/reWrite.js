// 创建一个类，这个类可接收一个executor函数；
// executor函数需传入两个函数resolve和reject，并且executor是需要立即执行的；
// 创建三个常量用于管理Promise的三种状态；
// 一旦Promise的状态改变就不能再次被修改；
// 还需将传入resolve和reject的参数值进行保存，便于后续then的使用；
const PENDING_STATUS = "pending";
const FULFILLED_STATUS = "fulfilled";
const REJECT_STATUS = "reject";
// class MyPromsie {
//   constructor(executor) {
//     // 初始化状态
//     this.status = PENDING_STATUS;
//     this.value = undefined;
//     this.reason = undefined;

//     const reslove = (value) => {
//       if (this.status === PENDING_STATUS) {
//         this.status = FULFILLED_STATUS;
//         this.value = value;
//         console.log("此时状态为:", this.status, "值为:", this.value);
//       }
//     };

//     const reject = (reason) => {
//       if (this.status === PENDING_STATUS) {
//         this.status = REJECT_STATUS;
//         this.reason = reason;
//         console.log("此时状态为:", this.status, "错误为:", this.reason);
//       }
//     };
//     //executor函数需传入两个函数resolve和reject，立即执行Promise传入的executor
//     executor(reslove, reject);
//   }
// }

// 测试一下
// const p1 = new MyPromsie((reslove, reject) => {
//   reslove(100);
//   reject(200);
// });

// console.log(p1);

// 2.then的实现
// then方法接收两个参数：
// onFulfilled回调：当Promise状态变为fulfilled需要执行的回调；
// onRejected回调：当Promise状态变为rejected需要执行的回调

// class MyPromsie {
//   constructor(executor) {
//     // 初始化状态
//     this.status = PENDING_STATUS;
//     this.value = undefined;
//     this.reason = undefined;

//     const reslove = (value) => {
//       if (this.status === PENDING_STATUS) {
//         // 添加微任务
//         queueMicrotask(() => {
//           if (this.status !== PENDING_STATUS) return;
//           this.status = FULFILLED_STATUS;
//           this.value = value;
//           console.log("此时状态为:", this.status, "值为:", this.value);
//           // 状态变成fulfilled就去调用onFulfilled
//           console.log("调用then回调函数-成功状态");
//           this.onFulfilled(this.value);
//         });
//       }
//     };

//     const reject = (reason) => {
//       if (this.status === PENDING_STATUS) {
//         // 添加微任务
//         queueMicrotask(() => {
//           if (this.status !== PENDING_STATUS) return;
//           this.status = REJECT_STATUS;
//           this.reason = reason;
//           console.log("此时状态为:", this.status, "错误为:", this.reason);
//           // 状态变成rejected就去调用onRejected
//           console.log("调用then回调函数-失败状态");
//           this.onFulfilled(this.value);
//         });
//       }
//     };

//     // executor函数需传入两个函数resolve和reject，立即执行Promise传入的executor
//     executor(reslove, reject);
//   }
//   then(onFulfilled, onRejected) {
//     // 保存成功、失败时的回调
//     this.onFulfilled = onFulfilled;
//     this.onRejected = onRejected;
//   }
// }

// 注意：这里将onFulfilled和onRejected的调动放在了queueMicrotask，
// 在JavaScript中可以通过queueMicrotask使用微任务，而原Promise的then中回调的执行，
// 也是会被放在微任务中的，为什么要放在微任务中呢？

// 原因：如果不使用微任务，那么在executor中执行resolve或者reject时，then方法还没被调用，
// onFulfilled和onRejected就都还没被赋值，所以调用时会报错，
// 加入微任务就可以实现将onFulfilled和onRejected的调用推迟到下一次事件循环，
// 也就是等then调用后赋值了才会执行。

// 测试一下
// const p2 = new MyPromsie((reslove, reject) => {
//   setTimeout(() => {
//     reslove(1111);
//   }, 1000);
// });

// p2.then(
//   (res) => {
//     console.log("这是then的微任务", res);
//   },
//   (err) => {
//     console.log("err: ", err);
//   }
// );

// 3.then的优化一
// （1）每一次调用相互独立，互不影响，所以需要收集当Promise状态改变时，对应需要执行哪些回调，需用数组进行收集；

// class MyPromise {
//   constructor(executor) {
//     // 初始化状态
//     this.status = PENDING_STATUS;
//     this.value = undefined;
//     this.reason = undefined;
//     this.onFulfilledFns = [];
//     this.onRejectedFns = [];

//     const reslove = (value) => {
//       if (this.status === PENDING_STATUS) {
//         // 添加微任务
//         queueMicrotask(() => {
//           if (this.status !== PENDING_STATUS) return;
//           this.status = FULFILLED_STATUS;
//           this.value = value;
//           console.log("此时状态为:", this.status, "值为:", this.value);
//           // 状态变成fulfilled就去调用onFulfilled
//           console.log("调用then回调函数-成功状态");
//           // 状态变成fulfilled就去遍历调用onFulfilledFns
//           this.onFulfilledFns.forEach((fn) => {
//             fn(this.value);
//           });
//         });
//       }
//     };

//     const reject = (reason) => {
//       if (this.status === PENDING_STATUS) {
//         // 添加微任务
//         queueMicrotask(() => {
//           if (this.status !== PENDING_STATUS) return;
//           this.status = REJECT_STATUS;
//           this.reason = reason;
//           console.log("此时状态为:", this.status, "错误为:", this.reason);
//           // 状态变成rejected就去调用onRejected
//           console.log("调用then回调函数-失败状态");
//           // 状态变成rejected就去遍历调用onRejectedFns
//           this.onRejectedFns.forEach((fn) => {
//             fn(this.reason);
//           });
//         });
//       }
//     };

//     // executor函数需传入两个函数resolve和reject，立即执行Promise传入的executor
//     executor(reslove, reject);
//   }
//   then(onFulfilled, onRejected) {
//     if (this.status === FULFILLED_STATUS && onFulfilled) {
//       // 一次性执行完所有的then
//       onFulfilled(this.value);
//     }
//     if (this.status === REJECT_STATUS && onRejected) {
//       // 一次性执行完所有的catch
//       onRejected(this.reason);
//     }
//     if (this.status === PENDING_STATUS) {
//       // 保存成功、失败时的回调
//       this.onFulfilledFns.push(onFulfilled);
//       this.onRejectedFns.push(onRejected);
//     }
//     return this;
//   }
// }

// // 测试一下
// const p3 = new MyPromise((reslove, reject) => {
//   setTimeout(() => {
//     reslove(333);
//   }, 1000);
// });

// p3.then((res) => {
//   console.log("第一次then: ", res);
// }).then((res) => {
//   console.log("第二次then: ", res);
// })

// 4.then的优化二
// (1)then返回的是一个Promise;
// 在前面讲then方法时，then方法执行的返回值是一个promise对象，
// 并且返回的promise状态是由then方法中回调函数的返回值决定的，then中必定需要返回一个新的Promise；
// (2)链式调用
// (3)try catch捕获executor中的异常

// class MyPromise {
//   constructor(executor) {
//     // 初始化状态
//     this.status = PENDING_STATUS;
//     this.value = undefined;
//     this.reason = undefined;
//     this.onFulfilledFns = [];
//     this.onRejectedFns = [];

//     const reslove = (value) => {
//       if (this.status === PENDING_STATUS) {
//         // 添加微任务
//         queueMicrotask(() => {
//           if (this.status !== PENDING_STATUS) return;
//           this.status = FULFILLED_STATUS;
//           this.value = value;
//           console.log("此时状态为:", this.status, "值为:", this.value);
//           // 状态变成fulfilled就去调用onFulfilled
//           console.log("调用then回调函数-成功状态");
//           // 状态变成fulfilled就去遍历调用onFulfilledFns
//           this.onFulfilledFns.forEach((fn) => {
//             fn(this.value);
//           });
//         });
//       }
//     };

//     const reject = (reason) => {
//       if (this.status === PENDING_STATUS) {
//         // 添加微任务
//         queueMicrotask(() => {
//           if (this.status !== PENDING_STATUS) return;
//           this.status = REJECT_STATUS;
//           this.reason = reason;
//           console.log("此时状态为:", this.status, "错误为:", this.reason);
//           // 状态变成rejected就去调用onRejected
//           console.log("调用then回调函数-失败状态");
//           // 状态变成rejected就去遍历调用onRejectedFns
//           this.onRejectedFns.forEach((fn) => {
//             fn(this.reason);
//           });
//         });
//       }
//     };
//     try {
//       // executor函数需传入两个函数resolve和reject，立即执行Promise传入的executor
//       executor(reslove, reject);
//     } catch (err) {
//       reject(err);
//     }
//   }

//   then(onFulfilled, onRejected) {
//     return new Promise((reslove, reject) => {
//       if (this.status === FULFILLED_STATUS && onFulfilled) {
//         // 一次性执行完所有的then
//         // 通过try catch捕获异常，没有捕获到执行resolve，捕获到执行reject
//         try {
//           const value = onFulfilled(this.value);
//           resolve(value);
//         } catch (err) {
//           reject(err);
//         }
//       }
//       if (this.status === REJECT_STATUS && onRejected) {
//         // 一次性执行完所有的catch
//         // 通过try catch捕获异常，没有捕获到执行resolve，捕获到执行reject
//         try {
//           const reason = onRejected(this.reason);
//           reject(reason);
//         } catch (err) {
//           reject(err);
//         }
//       }
//       if (this.status === PENDING_STATUS) {
//         // 保存成功、失败时的回调
//         this.onFulfilledFns.push(() => {
//           try {
//             const value = onFulfilled(this.value);
//             reslove(value);
//           } catch (err) {
//             reject(err);
//           }
//         });
//         this.onRejectedFns.push(() => {
//           try {
//             const reason = onRejected(this.reason);
//             reject(reason);
//           } catch (err) {
//             reject(err);
//           }
//         });
//       }
//     });
//   }
// }

// const p3 = new MyPromise((reslove, reject) => {
//   setTimeout(() => {
//     reslove(222);
//   }, 1000);
// });
// p3.then(
//   (res) => {
//     console.log("第一次then: ", res);
//     return 333;
//   },
//   (err) => {
//     console.log("第一次then的catch: ", err);
//   }
// )
//   .then(
//     (res) => {
//       console.log("第二次then: ", res);
//       return 444;
//     },
//     (err) => {
//       console.log("第二次then的catch: ", err);
//     }
//   )
//   .then((res) => {
//     console.log("第三次then: ", res);
//   });

// 3.catch的实现

// class MyPromise {
//   constructor(executor) {
//     // 初始化状态
//     this.status = PENDING_STATUS;
//     this.value = undefined;
//     this.reason = undefined;
//     this.onFulfilledFns = [];
//     this.onRejectedFns = [];

//     const reslove = (value) => {
//       if (this.status === PENDING_STATUS) {
//         // 添加微任务
//         queueMicrotask(() => {
//           if (this.status !== PENDING_STATUS) return;
//           this.status = FULFILLED_STATUS;
//           this.value = value;
//           console.log("此时状态为:", this.status, "值为:", this.value);
//           // 状态变成fulfilled就去调用onFulfilled
//           console.log("调用then回调函数-成功状态");
//           // 状态变成fulfilled就去遍历调用onFulfilledFns
//           this.onFulfilledFns.forEach((fn) => {
//             fn(this.value);
//           });
//         });
//       }
//     };

//     const reject = (reason) => {
//       if (this.status === PENDING_STATUS) {
//         // 添加微任务
//         queueMicrotask(() => {
//           if (this.status !== PENDING_STATUS) return;
//           this.status = REJECT_STATUS;
//           this.reason = reason;
//           console.log("此时状态为:", this.status, "错误为:", this.reason);
//           // 状态变成rejected就去调用onRejected
//           console.log("调用then回调函数-失败状态");
//           // 状态变成rejected就去遍历调用onRejectedFns
//           this.onRejectedFns.forEach((fn) => {
//             fn(this.reason);
//           });
//         });
//       }
//     };
//     try {
//       // executor函数需传入两个函数resolve和reject，立即执行Promise传入的executor
//       executor(reslove, reject);
//     } catch (err) {
//       reject(err);
//     }
//   }

//   then(onFulfilled, onRejected) {
//     onRejected =
//       onRejected ||
//       ((err) => {
//         throw err;
//       });
//     return new Promise((reslove, reject) => {
//       if (this.status === FULFILLED_STATUS && onFulfilled) {
//         // 一次性执行完所有的then
//         // 通过try catch捕获异常，没有捕获到执行resolve，捕获到执行reject
//         try {
//           const value = onFulfilled(this.value);
//           resolve(value);
//         } catch (err) {
//           reject(err);
//         }
//       }
//       if (this.status === REJECT_STATUS && onRejected) {
//         // 一次性执行完所有的catch
//         // 通过try catch捕获异常，没有捕获到执行resolve，捕获到执行reject
//         try {
//           const reason = onRejected(this.reason);
//           reject(reason);
//         } catch (err) {
//           reject(err);
//         }
//       }
//       if (this.status === PENDING_STATUS) {
//         // 保存成功、失败时的回调
//         if (onFulfilled) {
//           this.onFulfilledFns.push(() => {
//             try {
//               const value = onFulfilled(this.value);
//               reslove(value);
//             } catch (err) {
//               reject(err);
//             }
//           });
//         }
//         if (onRejected) {
//           this.onRejectedFns.push(() => {
//             try {
//               const reason = onRejected(this.reason);
//               reject(reason);
//             } catch (err) {
//               reject(err);
//             }
//           });
//         }
//       }
//     });
//   }

//   catch(onRejected) {
//     // catch方法的功能类似于then方法中的失败回调，所以，实现catch方法只需要调用then，给then传入失败的回调即可；
//     return this.then(undefined, onRejected);
//     // 注意：在then后链式调用catch会有一个问题，调用catch方法的promise是then执行之后返回的新promise，
//     // 而catch真正需要去调用的是当前then的失败回调，而不是当前then执行后结果promise的失败回调，
//     // 所以，可以将当前then的失败回调推到下一次的promise中，而抛出异常就可以实现（因为上一个then抛出异常，
//     // 可以传递到下一个then的失败回调中）
//   }
// }

// const p4 = new MyPromise((reslove, reject) => {
//   setTimeout(() => {
//     reject("报错了");
//   }, 1000);
// })
//   .then((res) => {
//     console.log("res: ", res);
//   })
//   .catch((err) => {
//     console.log("err: ", err);
//   });

// 4. finally的实现
// finally方法不管是Promise状态变成fulfilled还是rejected都会被执行；
// 这里可以巧妙的借助then方法，不管then是执行成功的回调还是失败的回调，都去执行finally中的回调即可；
// 注意：如果在finally之前使用了catch，因为catch的实现也是去调用then，并且给then的成功回调传递的是undefined，
// 那么执行到catch可能出现断层的现象，导致不会执行到finally，也可以通过在then中添加判断解决；

// class MyPromise {
//   constructor(executor) {
//     // 初始化状态
//     this.status = PENDING_STATUS;
//     this.value = undefined;
//     this.reason = undefined;
//     this.onFulfilledFns = [];
//     this.onRejectedFns = [];

//     const reslove = (value) => {
//       if (this.status === PENDING_STATUS) {
//         // 添加微任务
//         queueMicrotask(() => {
//           if (this.status !== PENDING_STATUS) return;
//           this.status = FULFILLED_STATUS;
//           this.value = value;
//           console.log("此时状态为:", this.status, "值为:", this.value);
//           // 状态变成fulfilled就去调用onFulfilled
//           console.log("调用then回调函数-成功状态");
//           // 状态变成fulfilled就去遍历调用onFulfilledFns
//           this.onFulfilledFns.forEach((fn) => {
//             fn(this.value);
//           });
//         });
//       }
//     };

//     const reject = (reason) => {
//       if (this.status === PENDING_STATUS) {
//         // 添加微任务
//         queueMicrotask(() => {
//           if (this.status !== PENDING_STATUS) return;
//           this.status = REJECT_STATUS;
//           this.reason = reason;
//           console.log("此时状态为:", this.status, "错误为:", this.reason);
//           // 状态变成rejected就去调用onRejected
//           console.log("调用then回调函数-失败状态");
//           // 状态变成rejected就去遍历调用onRejectedFns
//           this.onRejectedFns.forEach((fn) => {
//             fn(this.reason);
//           });
//         });
//       }
//     };
//     try {
//       // executor函数需传入两个函数resolve和reject，立即执行Promise传入的executor
//       executor(reslove, reject);
//     } catch (err) {
//       reject(err);
//     }
//   }

//   then(onFulfilled, onRejected) {
//     onFulfilled = onFulfilled || ((value) => value);

//     onRejected =
//       onRejected ||
//       ((err) => {
//         throw err;
//       });

//     return new Promise((reslove, reject) => {
//       if (this.status === FULFILLED_STATUS && onFulfilled) {
//         // 一次性执行完所有的then
//         // 通过try catch捕获异常，没有捕获到执行resolve，捕获到执行reject
//         try {
//           const value = onFulfilled(this.value);
//           resolve(value);
//         } catch (err) {
//           reject(err);
//         }
//       }
//       if (this.status === REJECT_STATUS && onRejected) {
//         // 一次性执行完所有的catch
//         // 通过try catch捕获异常，没有捕获到执行resolve，捕获到执行reject
//         try {
//           const reason = onRejected(this.reason);
//           reject(reason);
//         } catch (err) {
//           reject(err);
//         }
//       }
//       if (this.status === PENDING_STATUS) {
//         // 保存成功、失败时的回调
//         if (onFulfilled) {
//           this.onFulfilledFns.push(() => {
//             try {
//               const value = onFulfilled(this.value);
//               reslove(value);
//             } catch (err) {
//               reject(err);
//             }
//           });
//         }
//         if (onRejected) {
//           this.onRejectedFns.push(() => {
//             try {
//               const reason = onRejected(this.reason);
//               reject(reason);
//             } catch (err) {
//               reject(err);
//             }
//           });
//         }
//       }
//     });
//   }

//   catch(onRejected) {
//     // catch方法的功能类似于then方法中的失败回调，所以，实现catch方法只需要调用then，给then传入失败的回调即可；
//     // 注意：在then后链式调用catch会有一个问题，调用catch方法的promise是then执行之后返回的新promise，
//     // 而catch真正需要去调用的是当前then的失败回调，而不是当前then执行后结果promise的失败回调，
//     // 所以，可以将当前then的失败回调推到下一次的promise中，而抛出异常就可以实现（因为上一个then抛出异常，
//     // 可以传递到下一个then的失败回调中）
//     return this.then(undefined, onRejected);
//   }

//   finally(onFinally) {
//     this.then(onFinally, onFinally);
//   }
// }

// const p4 = new MyPromise((reslove, reject) => {
//   setTimeout(() => {
//     reject("报错了");
//   }, 1000);
// })
//   .then((res) => {
//     console.log("res: ", res);
//   })
//   .catch((err) => {
//     console.log("err: ", err);
//   })
//   .finally(() => {
//     console.log("我一定会被执行！");
//   });

// 5. reslove,reject方法的实现
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
					console.log("此时状态为:", this.status, "值为:", this.value);
					// 状态变成fulfilled就去调用onFulfilled
					console.log("调用then回调函数-成功状态");
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
					console.log("此时状态为:", this.status, "错误为:", this.reason);
					// 状态变成rejected就去调用onRejected
					console.log("调用then回调函数-失败状态");
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

		return new MyPromise((reslove, reject) => {
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

	static any(promises) {
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

// const p4 = new MyPromise((reslove, reject) => {
//   setTimeout(() => {
//     reject("报错了");
//   }, 1000);
// })
//   .then((res) => {
//     console.log("res: ", res);
//   })
//   .catch((err) => {
//     console.log("err: ", err);
//   })
//   .finally(() => {
//     console.log("我一定会被执行！");
//   });

// 6. all的实现
// all方法可接收一个promise数组，当所有promise状态都变为fulfilled，就返回所有promise成功的回调值
// (一个数组），当其中有一个promise状态变为了rejected，就返回该promise的状态；
// all实现的关键：当所有promise状态变为fulfilled就去调用resolve，当有一个promise状态变为rejected就
// 去调用reject；

// const p5 = new MyPromise((reslove, reject) => {
//   setTimeout(() => {
//     // reslove("p5");
//     reject("p5");
//   }, 1000);
// });
// const p6 = new MyPromise((reslove, reject) => {
//   setTimeout(() => {
//     // reslove("p6");
//     reject("p5");
//   }, 2000);
// });
// const p7 = new MyPromise((reslove, reject) => {
//   setTimeout(() => {
//     reject("p7报错了");
//   }, 3000);
// });

// const arr = [p5, p6, p7];
// MyPromise.all(arr).then((res) => {
//   console.log("promise.all的res: ", res);
// });

// MyPromise.allSettled(arr).then((res) => {
//   console.log("promise.allSettled的res: ", res);
// });

// MyPromise.race(arr).then((res) => {
//   console.log("promise.race的res: ", res);
// });

// MyPromise.all(arr).then((res) => {
//   console.log("promise.all的res: ", res);
// });

// 7.allSettled方法的实现
// allSettled方法会返回所有promise的结果数组，数组中包含每一个promise的状态和值；
// 不管promise的状态为什么，最终都会调用resolve；

// 8.race的实现
// race方法是获取最先改变状态的Promise，并以该Promise的状态作为自己的状态；

// 9.any方法的实现
// any方法会等到有一个Promise的状态变成fulfilled，最终就是fulfilled状态；
// 如果传入的所有Promise都为rejected状态，会返回一个AggregateError，并且
// 可以在AggregateError中的errors属性中获取所有错误信息；

const pp1 = new Promise((reslove, reject) => {
	setTimeout(() => {
		reslove(123123);
	}, 1000);
});
pp1
	.then((res) => {
		console.log("res: ", res);
		return res;
	})
	.then((rs1) => {
		console.log("rs1: ", rs1);
	});

  const p2 = MyPromise.reslove(123);
  console.log("p2: ", p2);
  const p3 = MyPromise.reject(456);
  console.log("p3: ", p3);
  