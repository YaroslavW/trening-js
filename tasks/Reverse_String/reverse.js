function reverseString(string) {
  let arr = string.split("");
  arr.reverse();
  return arr.join("");
}
console.log(reverseString("Hello"));
// olleH

// As arrow function
const revStr = string_1 =>
  string_1
    .split("")
    .reverse()
    .join("");
console.log(revStr("JavaScript"));
// tpircSavaJ
