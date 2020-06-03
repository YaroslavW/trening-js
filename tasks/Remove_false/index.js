let arr = [0, 1, "", undefined, false, 2, undefined, null, 3, NaN];

// Boolean constructor
let res_1 = arr.filter(Boolean);
console.log(res_1);
// [1, 2, 3];

let res_2 = arr.filter((x) => !!x);
console.log(res_2);
// [1, 2, 3];