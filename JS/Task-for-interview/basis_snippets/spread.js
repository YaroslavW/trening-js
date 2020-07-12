let data = [1, 2, 3, 4, 5];
console.log(...data);
// --> 1 2 3 4 5
let data2 = [6, 7, 8, 9, 10];
let combined = [...data, ...data2];
console.log(...combined);
// --> 1 2 3 4 5 6 7 8 9 10
console.log(Math.max(...combined));
// --> 10
