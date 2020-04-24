const a = ["10", "20", "30"];
const result = a.map(parseInt);
console.log(result);
// [10, NaN, NaN];

console.log(parseInt("30", 2));
// NaN
