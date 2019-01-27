let str = 'Hello';
let arr = Array.from(str);
console.log(arr); //[ 'H', 'e', 'l', 'l', 'o' ]
console.log(arr[1]); // e

let arrNum = Array.from([1, 2, 3]); 

console.log(arrNum);  // [1, 2, 3]

let namesSet = new Set(['jamie', 'jack']);
let arrStr = Array.from(namesSet); 

console.log(arrStr); // ['jamie', 'jack']

let arrNumMult = Array.from([1, 2, 3], x => x * x);
console.log(arrNumMult) // [1, 4, 9]

let arrKey = Array.from({ length: 4 }, (val, key) => key);
console.log(arrKey); // [0, 1, 2, 3]

let dublItem = Array.from({ length: 2 }, () => 'jack'); 
console.log(dublItem); // ['jack', 'jack']