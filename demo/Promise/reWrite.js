const PENDING_STATUS = "pending";
const FULFILLED_STATUS = "fulfilled";
const REJECT_STATUS = "reject";
class MyPromsie {
  constructor(exector) {
    this.status = PENDING_STATUS;
    this.value = undefined;
    this.reason = undefined;

    const reslove = (value) => {
      if (this.status === PENDING_STATUS) {
        this.status = FULFILLED_STATUS;
        this.value = value;
        console.log("此时状态为:", this.status, "值为:", this.value);
      }
    };

    const reject = (reason) => {
      if (this.status === PENDING_STATUS) {
        this.status = REJECT_STATUS;
        this.reason = reason;
        console.log("此时状态为:", this.status, "错误为:", this.reason);
      }
    };

    exector(reslove, reject);
  }
}

const p1 = new MyPromsie((reslove, reject) => {
  setTimeout(() => {
    reslove(100);
  }, 1000);
});

console.log(p1)
