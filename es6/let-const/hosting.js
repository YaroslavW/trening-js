console.log(a);//undefined
var a = 5;

// console.log(b); //error
let b = 4;

console.log(`hello var a = ${a} and let b = ${b}`);

//in FOR
// каждый цикл имеет свою переменную i
for(let i = 0; i<10; i++) { /* … */ }
for(let i = 0; i<10; i++) { /* … */ }

console.log( i ); // ошибка: глобальной i нет