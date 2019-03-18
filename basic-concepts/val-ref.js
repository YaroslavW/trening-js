let str_1 = 'It is string';
let str_2 = str_1;

console.log(str_1); // It is string
console.log(str_2); // It is string


str_2 = 'My NEW string';

console.log(`str-1 = ${str_1}`); // It is string
console.log(`str-2 = ${str_2}`); // My NEW string