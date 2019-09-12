console.log(2 ** 3); // Result: 8

// This shouldn’t be confused with the ^ symbol, commonly used to represent exponents, but which in JavaScript is the bitwise XOR operator.

// Before ES7, shorthand existed only for powers with base 2,
// using the bitwise left shift operator << :

// The following expressions are equivalent:
// Math.pow(2, n);
// 2 << (n - 1);
// 2**n;
// For example, 2 << 3 = 16 is equivalent to 2 ** 4 = 16 .
