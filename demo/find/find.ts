interface IData {
  name?: string | RegExp;
  age?: number | RegExp;
  pin?: string | RegExp;
  sex?: string | RegExp;
}

class FindFn {
  filterData: IData[];
  queue: Array<() => Promise<any>> = [];

  constructor(value: IData[]) {
    this.filterData = value || [];
  }

  where(condition: IData): FindFn {
    this.queue.push(
      () =>
        new Promise((resolve) => {
          Object.keys(condition).forEach((key) => {
            this.filterData = this.filterData.filter((item) => {
              return condition[key].test(item[key]);
            });
          });
          resolve(this.filterData);
        })
    );
    return this;
  }
  orderBy(key: string, desc: boolean): FindFn {
    this.queue.push(
      () =>
        new Promise((resolve) => {
          this.filterData.sort((a, b) => {
            return desc ? b[key] - a[key] : a[key] - b[key];
          });
          resolve(this.filterData);
        })
    );
    return this;
  }
  groupBy(key: string): FindFn {
    this.queue.push(
      () =>
        new Promise((resolve) => {
          let obj: IData = {};
          let arr: IData[] = [];
          this.filterData.forEach((item) => {
            if (obj[item[key]]) {
              obj[item[key]] = [...obj[item[key]], item];
            } else {
              obj[item[key]] = [item];
            }
          });
          for (let k in obj) {
            arr.push(obj[k]);
            this.filterData = arr;
          }
          resolve(this.filterData);
        })
    );
    return this;
  }
  async execute() {
    let res;
    for (const fn of this.queue) {
      res = await fn();
    }
    return res;
  }
}

const userData: IData[] = [
  { name: "愿意", pin: "ayuanyi", age: 19, sex: "男" },
  { name: "安姜", pin: "anjiang", age: 8, sex: "男" },
  { name: "钟黎", pin: "azhongli", age: 20, sex: "女" },
  { name: "夏茂", pin: "xiamao", age: 1299, sex: "女" },
  { name: "扶嗨", pin: "afuhai", age: -77, sex: "男" },
  { name: "如意", pin: "ruyi", age: 88, sex: "女" },
];

new FindFn(userData)
  .where({
    age: /\d$/,
    // age: /^\\d+$/,
  })
  .orderBy("age", false)
  .groupBy("sex")
  .execute()
  .then((res) => {
    console.log(res);
  });
