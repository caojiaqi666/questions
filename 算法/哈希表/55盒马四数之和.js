// 1分 2分 3分 5分凑成一块钱 有多少种可能

function main() {
  let res = [];
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 50; j++) {
      for (let k = 0; k < 34; k++) {
        for (let l = 0; l < 20; l++) {
          if (i + 2 * j + 3 * k + 5 * l == 100) {
            res.push([i, j, k, l]);
          }
        }
      }
    }
  }
  return res;
}

console.log(main());
