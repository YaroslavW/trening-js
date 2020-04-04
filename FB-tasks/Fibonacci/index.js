// Fibonacci
function fib(num) {
  let a = 1,
    b = 0,
    // arr = [],
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
    // arr.push(b);
  }
  // return arr;
  return b;
}

console.log(fib(6));
// [1, 1, 2, 3, 5, 8, 13];
// 13
