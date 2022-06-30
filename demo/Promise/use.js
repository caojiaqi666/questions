// es6之前，回调函数
function request(url, success, error) {
  setTimeout(function () {
    if (url == "api/login") {
      let res = "user";
      success(res);
    } else {
      let res = "error message";
      error(res);
    }
  });
}

request(
  "api/login",
  function (res) {
    console.log("请求成功 ", res);
  },
  function (err) {
    console.log("请求失败 ", res);
  }
);

// Promise实现
function request1(url) {
  return new Promise((reslove, reject) => {
    setTimeout(function () {
      if (url == "api/login") {
        let res = "user";
        reslove(res);
      } else {
        let res = "error message";
        reject(res);
      }
    });
  });
}

request1("api/login1")
  .then(
    (res) => {
      console.log("请求成功 ", res);
    },
    (a) => {
      console.log("请求失败1 ", a);
    }
  )
  .catch((err) => {
    console.log("请求失败2 ", err);
  })
  .finally(() => {
    console.log("成功或失败都会执行");
  });

// then调用本身是有返回值的，并且它的返回值是一个Promise，所以then可以进行链式调用，
// 但是then方法调用的返回值的状态是什么呢？主要是由其返回值决定的。

const p = Promise.resolve("aaaa");
// 相当于：
/*
  const p = new Promise((resolve, reject) => {
    resolve('aaaa')
  })
*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("err message1");
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve("2222222")
    // reject("err message2");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("3333333")
    // reject("err message3");
  }, 3000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log(err);
    console.log(err.errors);
  });
