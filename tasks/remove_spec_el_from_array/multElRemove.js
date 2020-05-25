var fullArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var multEl = [2, 6, 9];

fullArray = fullArray.filter((item) => !multEl.includes(item));

console.log(fullArray);
// [1, 3, 4, 5, 7, 8, 10];