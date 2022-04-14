var dayOfYear = function (date) {
  let arr = date.split("-");
  let year = Number(arr[0]);
  let mouth = Number(arr[1]);
  let day = Number(arr[2]);
  let dayArr =
    year % 4 == 0 && year % 100 != 0 || year % 400 == 0
      ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let result = 0;
  for (let i = 1; i < mouth; i++) {
    result += dayArr[i - 1];
  }
  result += Number(day);
  return result;
};

console.log(dayOfYear("1900-05-02"));



