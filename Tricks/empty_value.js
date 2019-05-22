// var arr = [ 0, 1 , 2, '', ' ', ' ', '0', '1'];

// arr1 = arr.filter(el => el>0 || parseInt(el)===0);
// console.log(arr1);

// =======
const arr = [ 1, 0, '1', '2', '3', '0', '', ' ' ];

arr1 = arr.filter(el => !isNaN(parseInt(el)));
console.log(arr1);

// =====
