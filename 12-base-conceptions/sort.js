let arr = [1, 2, 10, 21];
arr.sort(); // [1, 10, 2, 21]

let arr_1 = [1, 7, 3, -1, 5, 7, 2];
const sorter = (firstEl, secondEl) => firstEl - secondEl;
let sorted = arr_1.sort(sorter);
console.log(sorted); //  [ -1, 1, 2, 3, 5, 7, 7 ]



let john = { name: "John", age: 23 };
let jane = { name: "Jane", age: 18 };
let jerry = { name: "Jerry", age: 34 };

let people = [john, jane, jerry];
let sorter_1 = (a, b) => a.age - b.age;

let sortedPeople = people.sort(sorter_1);
console.log(sortedPeople);
// [   { name: 'Jane', age: 18 },
//     { name: 'John', age: 23 },
//    { name: 'Jerry', age: 34 }   ]