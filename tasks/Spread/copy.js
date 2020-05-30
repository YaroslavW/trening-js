const testArray = [1, 2, 3, 4, 5, 6];
const arrayTwo = [...testArray];

// console.log(testArray);
// console.log(arrayTwo);
// [1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5, 6]
testArray.pop();
arrayTwo.push(7);
console.log(testArray);
console.log(arrayTwo);
// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5, 6, 7];

const testJs = [
  "Javascript",
  "Developer",
  "jsgrip",
  "js developer",
  "hello all",
];
const extraElementJs = [...testJs, "Javascript everywhere"];
console.log(testJs);
console.log(extraElementJs);
// ["Javascript", "Developer", "jsgrip", "js developer", "hello all"]
// [
//   "Javascript",
//   "Developer",
//   "jsgrip",
//   "js developer",
//   "hello all",
//   "Javascript everywhere"
// ];