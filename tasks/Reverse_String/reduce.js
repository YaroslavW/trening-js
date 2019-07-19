function reverseString(string) {
  const arr = string.split("");
  const reversedString = arr.reduce((reversed, character) => {
    return character + reversed;
  }, "");
  return reversedString;
}
console.log(reverseString("Hello"));
// olleH

const reverString = string => {
  return string.split("").reduce((rever, chart) => chart + rever, "");
};
console.log(reverString("JavaScript"));
// tpircSavaJ

const revString = string =>
  string.split("").reduce((rev, char) => char + rev, "");
console.log(revString("React"));
// tcaeR
