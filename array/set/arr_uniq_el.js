const arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];

const arr_uniq_el = [...new Set(arr)];
console.log(arr_uniq_el);
// [ 1, 2, 3, 4 ]