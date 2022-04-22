function FindNumsAppearOnce(array) {
  let map = new Map();
  let len = array.length;
  for (let i = 0; i < len; i++) {
    if (map.get(array[i]) === undefined) {
      map.set(array[i], 1);
    } else {
      map.set(array[i], map.get(array[i]) + 1);
    }
  }
  let res = [];
  for (const item of map) {
    if (item[1] === 1) {
      res.push(item[0]);
    }
  }
  return res.sort((a, b) => a - b);
}

console.log(FindNumsAppearOnce([1, 4, 1, 6]));
