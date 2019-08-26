// get rid of duplicates
const unique_arr = arr => [...new Set(arr)];
const arr_1 = [1, 1, 2, 3, 2, 4, 2, 4, 3, 5, 3, 1, 3];

const arr1 = unique_arr(arr_1);
console.log(arr1);
