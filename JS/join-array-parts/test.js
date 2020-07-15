let arr_1 = [1, 2, 5, 7, 0];
let arr_2 = [2, 5, 9, 4, 3];

let res = arr_1
  .filter((i) => arr_2.includes(i))
  .concat(arr_2.filter((i) => arr_1.includes(i)));

console.log(res);
// [ 1, 7, 0, 9, 4, 3 ]
// [ 2, 5, 2, 5 ]
let res_1 = [...new Set(res)];
console.log(res_1);
// [2, 5]