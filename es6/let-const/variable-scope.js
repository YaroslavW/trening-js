// var apples = 5;

// if (true) {
//   var apples = 10;

//   console.log(apples); 
//   // 10 (внутри блока)
// }

// console.log(apples); 
// // 10 (снаружи блока то же самое)

let apples = 5; // (*)

if (true) {
  let apples = 10;

  console.log(apples); // 10 (внутри блока)
}

console.log(apples); // 5 (снаружи блока значение не изменилось)