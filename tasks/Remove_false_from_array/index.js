let arr = [0, 1, "", undefined, false, 2, undefined, null, , 3, NaN];

// Boolean constructor
const arr_1 = arr.filter(Boolean);
console.log(arr_1);
// [1, 2, 3]
