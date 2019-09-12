// If you want to convert a float to an integer,
// you can use Math.floor() , Math.ceil() or Math.round() .
// But there is also a faster way to truncate a float to an integer using |,
// the bitwise OR operator.

console.log(23.9 | 0); // Result: 23
console.log(-23.9 | 0); // Result: -23
