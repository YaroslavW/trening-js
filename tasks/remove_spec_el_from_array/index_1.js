// ECMAScript 5 code
var removeValue = 6;

var fullArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

fullArray = fullArray.filter(function (item) {
  return item !== removeValue;
});

console.log(fullArray);
// [1, 2, 3, 4, 5, 7, 8, 9, 10];

// =========>>> ES6 <<<==========
var valRemove = 3;

fullArray = fullArray.filter((item) => item !== valRemove);
console.log(fullArray);
// [1, 2, 4, 5, 7, 8, 9, 10];