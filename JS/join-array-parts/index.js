// please help
// let array1 = [1,3,4,6,5]
// let array2 = [3,1,7,0,2]
// i want these array to return an array containing unmatched values // new array =[4,6,5,7,0,2]

//www.facebook.com/groups/359999434098189/permalink/2910932225671551/

let array1 = [1, 3, 4, 6, 5];
let array2 = [3, 1, 7, 0, 2];

let a = array1.splice(array1.length - 3, 3);
console.log(a);
// [ 4, 6, 5 ]
let b = array2.splice(array2.length - 3, 3);

console.log(b);
// [ 7, 0, 2 ]
const array3 = [...a, ...b];
// [ 4, 6, 5, 7, 0, 2 ]
// const array3 = [
//   ...array1.splice(array1.length - 3, 3),
//   ...array2.splice(array2.length - 3, 3),
// ];
console.log(array3);
