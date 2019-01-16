const array = ['dog', 1, 1, 2, 'dog', 3];

// array.filter( (item, index) => {
//     console.log(
//         item,
//         index,
//         array.indexOf(item),
//         array.indexOf(item) === index
//     );
//     return array.indexOf(item) === index;
// });
// dog 0 0 true
// 1 1 1 true
// 1 2 1 false
// 2 3 3 true
// dog 4 0 false
// 3 5 5 true

// return NOT unique
const notUnique  = array.filter( (item, index) => array.indexOf(item) !== index);
console.log(notUnique);