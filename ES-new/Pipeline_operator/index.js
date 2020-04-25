const sum = (a, b) => a + b;

const increment = (x) => x + 1;

const a = increment(sum(10, 5));
console.log(a);
// 16

const b = (12, 8) |> sum |> increment;
console.log(b);
