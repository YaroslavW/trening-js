let numbers = [1, 2, 3];
let oddNumber = numbers.find(x => x % 2 == 1);
console.log(oddNumber); // 1

let people = ['jamie', 'jack', 'isaac'];
let jackIndex = people.findIndex(x => x === 'jack');
console.log(jackIndex); // 1


let people = ['jamie', 'jack', 'isaac'];
let entries = people.entries();
console.log(entries.next().value); // [0, 'jamie']
console.log(entries.next().value); // [1, 'jack']
console.log(entries.next().value); // [2, 'isaac']


let people = ['jamie', 'jack', 'isaac'];
let entries = people.entries();
console.log([...entries]); // [[0, 'jamie'], [1, 'jack'], [2, 'isaac']]


Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']

Array.from([1, 2, 3]); // [1, 2, 3]

let namesSet = new Set(['jamie', 'jack']);
Array.from(namesSet); // ['jamie', 'jack']


Array.from([1, 2, 3], x => x * x); // [1, 4, 9]


Array.from({ length: 4 }, (val, key) => key); // [0, 1, 2, 3]


Array.from({ length: 2 }, () => 'jack'); // ['jack', 'jack']