// If you want to convert a float to an integer,
// you can use Math.floor() , Math.ceil() or Math.round() .
// But there is also a faster way to truncate a float to an integer using |,
// the bitwise OR operator.

console.log(23.9 | 0); // Result: 23
console.log(-23.9 | 0); // Result: -23

//==================>>> Remove Final Digits <<<=====================

// The bitwise OR operator can also be used to remove any amount
// of digits from the end of an integer.
//  This means we don’t have to use code like this to convert between types:

let str = "1553";
Number(str.substring(0, str.length - 1));
// Instead, the bitwise OR operator allows us to write:

console.log((1553 / 10) | 0); // Result: 155
console.log((1553 / 100) | 0); // Result: 15
console.log((1553 / 1000) | 0); // Result: 1
