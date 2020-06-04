let arr_1 = [1, 5, 7];
arr_2 = [2, 5, 8];

let res = arr_1.filter((num) => arr_2.includes(num));
console.log(res);
// [ 5 ]
