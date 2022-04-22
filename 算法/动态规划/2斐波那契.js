function Fibonacci(n) {
  if ((n == 1)) {
    return 1;
  }
  if ((n == 2)) {
    return 1;
  }

  let a = 1,
    b = 1;
  let temp = 0;

  for (let i = 2; i < n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
}

console.log(Fibonacci(4));
