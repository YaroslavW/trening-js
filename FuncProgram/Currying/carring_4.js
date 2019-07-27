function mul(a, b) {
  return console.log(a * b);
}
// double умножает только на два
var double = mul.bind(null, 2); // контекст фиксируем null, он не используется

console.log(double(3)); // = mul(2, 3) = 6
console.log(double(4)); // = mul(2, 4) = 8
console.log(double(5)); // = mul(2, 5) = 10
