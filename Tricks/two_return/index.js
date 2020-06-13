function test(a, b = 10) {
  return 10;
  return a + b;
}

let some = test(20, 50);

console.log(some);
// 10
