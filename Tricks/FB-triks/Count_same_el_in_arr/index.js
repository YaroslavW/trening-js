let arr = ["apple", "mango", "apple", "grapes", "apple", "mango"];
let count = arr.reduce((c, v) => {
  c[v] = (c[v] || 0) + 1;
  return c;
}, {});

console.log(count);
// { apple: 3, mango: 2, grapes: 1 }
