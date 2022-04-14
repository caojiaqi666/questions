
// class RandomizedSet {
//   constructor() {
//     this.arr = [];
//   }
//   insert(val) {
//     if (this.arr.includes(val)) {
//       return false;
//     } else {
//       this.arr.push(val);
//       return true;
//     }
//   }
//   remove(val) {
//     if (this.arr.includes(val)) {
//       this.arr.splice(this.arr.indexOf(val), 1);
//       return true;
//     } else {
//       return false;
//     }
//   }
//   getRandom() {
//     return this.arr[Math.floor(Math.random() * this.arr.length)];
//   }
// }
// const randomizedSet = new RandomizedSet();
// // randomizedSet.insert(1); // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
// console.log('randomizedSet: ', randomizedSet.insert(1));
// // randomizedSet.remove(2); // 返回 false ，表示集合中不存在 2 。
// console.log('randomizedSet: ', randomizedSet.remove(2));
// // randomizedSet.insert(2); // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
// console.log('randomizedSet: ', randomizedSet.insert(2));
// // randomizedSet.getRandom(); // getRandom 应随机返回 1 或 2 。
// console.log('randomizedSet: ', randomizedSet.getRandom());
// // randomizedSet.remove(1); // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
// console.log('randomizedSet: ', randomizedSet.remove(1));
// // randomizedSet.insert(2); // 2 已在集合中，所以返回 false 。
// console.log('randomizedSet: ', randomizedSet.insert(2));
// // randomizedSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
// console.log('randomizedSet: ', randomizedSet.getRandom());



var RandomizedSet = function () {
  this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  console.log(this.arr,val);
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

 var obj = new RandomizedSet()
 obj.insert(1)
 console.log('obj: ', obj);