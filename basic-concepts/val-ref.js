let str_1 = 'It is string';
let str_2 = str_1;

console.log(str_1); // It is string
console.log(str_2); // It is string


str_2 = 'My NEW string';

console.log(`str-1 = ${str_1}`); // str-1 = It is string
console.log(`str-2 = ${str_2}`); // str-2 = My NEW string

let obj_1 = {name: 'Yaroslav'};
let obj_2 = obj_1;

obj_2.name = 'Kolesnikov';

console.log(`obj_1 = ${obj_1.name}`);  // obj_1 = Kolesnikov;
console.log(`obj_2 = ${obj_2.name}`); // obj_2 = Kolesnikov