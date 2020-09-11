"use strict";
exports.__esModule = true;
exports.sumNumbers = void 0;
function sumNumbers(arr) {
  var reducer = function (acc, cur) {
    return acc + cur;
  };
  return arr.reduce(reducer, 0);
}
exports.sumNumbers = sumNumbers;
console.log(sumNumbers([1, -2, 3, 4, 5]));
console.log(sumNumbers([]));
console.log(sumNumbers([-1, -2, -3, -4, -5]));
