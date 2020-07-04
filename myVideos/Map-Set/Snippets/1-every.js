const all = (arr, fn = Boolean) => arr.every(fn);

const one = all([10, 20, 30], (x) => x >= 10);
console.log(one);
// true
const two = all([1, -1, 2, 15, 85], (x) => x > 0);
console.log(two);
// false
const three = all(["", 1, 5, "javascript"]);
console.log(three);
// false
