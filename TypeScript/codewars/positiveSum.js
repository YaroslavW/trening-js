var positiveSum = function (arr) { return arr.filter(function (num) { return num > 0; }).reduce(function (acc, cur) { return acc + cur; }); };
console.log(positiveSum([1, -2, 3, 4, 5]));
// 13
console.log(positiveSum([-1, 3, 7]));
// 10
console.log(positiveSum([1, -2, -3, -4, 5]));
// 6