let arr = [0, 1, "", undefined, false, 2, undefined, null, , 3, NaN];

// =========>>> Boolean constructor <<<==========
const arr_1 = arr.filter(Boolean);
console.log(arr_1);
// [1, 2, 3]

// =========>>> !! Expression <<<==============
const arr_2 = arr.filter((x) => !!x);
console.log(arr_2);
// [1, 2, 3]

// =========>>> x => x  <<<=====================
const arr_3 = arr.filter((x) => x);
console.log(arr_3);
// [1, 2, 3]

