// function twoSum(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] == target) {
//         return [i + 1, j + 1];
//       }
//     }
//   }
//   return -1;
// }

// function twoSum(numbers, target) {
//   let map = {};
//   for (let i = 0; i < numbers.length; i++) {
//     let gap = target - numbers[i];
//     if (map[String(numbers[i])]) {
//       return [map[String(numbers[i])], i + 1];
//     }
//     if (!map[gap]) {
//       map[gap] = i + 1;
//     }
//   }
//   return -1;
// }


function twoSum(numbers, target) {
  let map = {}
  for (let i = 0; i < numbers.length; i++) {
    let gap = target - numbers[i];
    if (map[String(numbers[i])] !== undefined) {
      return [map[String(numbers[i])], i]
    }
    if (!map[gap]) {
      map[gap] = i;
    } 
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
