function someVal(a, b, ...args) {
  a = a + 5;
  b++;
  return a + b + args.reduce((a, b) => a + b, 0);
}

console.log(someVal(2, 7, 10, 5, 2));
// 32