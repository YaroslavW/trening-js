function reverseString(string) {
  let res = "";
  for (let character of string) {
    res = character + res;
  }
  return res;
}
console.log(reverseString("Hello"));
// olleH
