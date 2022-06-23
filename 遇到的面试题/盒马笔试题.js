/*
1、数字查找和排序 -  找出数组中重复最多的元素
var arr = [1, 2, 3, 1, 2, 3, 4, 3, 3, 5, 3];
a、找出数组中重复最多的数字。
b、重复最多的数字最先开始的位置。
c、重复最多的数字的数量。
// a) 3
// b) 2
// c) 5
*/

function fn1(arr) {
  let result = { a: 0, b: 0, c: 0 };
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]] += 1;
    }
  }
  let temp = 0;
  for (let key in map) {
    console.log('key: ', key);
    if (map[key] > temp) {
      result.a = Number(key);
      result.c = map[key];
      temp = map[key];
    }
  }

  result.b = arr.indexOf(Number(result.a));
  return result;
}
console.log(fn1([1, 2, 3, 1, 2, 3, 4, 3, 3, 5, 3]));

/*
2、金额格式化
1000000 => 1,000,000
1000.24 => 1,000.24
*/

function fn2(num) {
  let result = [],
    counter = 0;
  num = (num || 0).toString().split("");
  if (num.includes(".")) {
    return num.join("")
  }
  // 有问题
  for (var i = num.length - 1; i >= 0; i--) {
    counter++;
    result.unshift(num[i]);
    if (!(counter % 3) && i != 0) {
      result.unshift(",");
    }
  }
  return result.join("");
}

console.log(fn2(1000009));

// 3、CSS颜色转换
// #0000FF => rgb(0, 0, 255)
// #A37 => rgb(170, 51, 119)
// #huahs => invalid
// */
const fn3 = (str) => {
  str = str[0] === "#" ? str.slice(1) : str;
  str = str.length === 3 ? str.repeat(2) : str;
  if (str.length !== 6 || !/^[0-9a-fA-F]{3,6}$/i.test(str))
    return "Invalid data";
  let result = `rgb(${parseInt(str[0] + str[1], 16)}, ${parseInt(
    str[2] + str[3],
    16
  )}, ${parseInt(str[4] + str[5], 16)})`;
  return result;
};

console.log(fn3("#A37"));

// 4、把 list 转为 tree
// // 基础数据
// const list = [
//   { "id": 19, "parentId": 0},
//   { "id": 18, "parentId": 16},
//   { "id": 17, "parentId": 16},
//   { "id": 16, "parentId": 0}
// ];
// const result = convert(list, 'parentId', 'id', 0);
// // 输出 result
// {
//   "id": 0,
//   "children": [
//     { "id": 19, "parentId": 0 },
//     { "id": 16, "parentId": 0, 
//       "children": [
//         { "id": 18, "parentId": 16},
//         { "id": 17, "parentId": 16}
//       ]
//     }
//   ]
// }
// */
function convert(data, parentId, id, pid) {
  let treeItem = [];
  data.forEach((item) => {
    if (item[parentId] === pid) {
      if (!!convert(data, parentId, id, item[id]).length)
        item.children = convert(data, parentId, id, item[id]);
      treeItem.push(item);
    }
  });
  return treeItem;
}

const list = [
  { id: 19, parentId: 0 },
  { id: 18, parentId: 16 },
  { id: 17, parentId: 16 },
  { id: 16, parentId: 0 },
];
console.log(convert(list, "parentId", "id", 0));


/*
5、运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
实现 LRUCache 类：
LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
示例：
var lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
*/

class LRUCache {
  constructor(length) {
    this.length = length;
    this.map = new Map();
  }

  get(key) {
    let val = this.map.get(key);
    if (val) {
      this.map.delete(key);
      this.map.set(key, val);
      return val;
    }
    return -1;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    }

    this.map.set(key, value);
    let keys = this.map.keys();
    while (this.map.size > this.length) {
      this.map.delete(keys.next().value);
    }
  }
}