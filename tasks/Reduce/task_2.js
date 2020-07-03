function addItems(...args) {
  return args.reduce((sum, val) => sum + val);
}

console.log(addItems(1, 2));
// 3
console.log(addItems(1, 2, 4));
// 7