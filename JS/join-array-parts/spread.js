let array1 = [1, 3, 4, 6, 5];
let array2 = [3, 1, 7, 0, 2];

let unitArray = [...array1, ...array2];
console.log(unitArray);
// [1, 3, 4, 6, 5, 3, 1, 7, 0, 2];

let res = [...new Set(unitArray)];
console.log(res);
// [1, 3, 4, 6, 5, 7, 0, 2];

// In this case, we did not delete the elements that are present in both arrays, but only delete the rotating elements. We have stored unique elements in the array.
