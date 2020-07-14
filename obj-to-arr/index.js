const info = {
  name: "Parwiz",
  lname: "Forogh",
  email: "par@gmail.com",
  age: 45,
};

// console.log(Object.entries(info));
// [
//   [ 'name', 'Parwiz' ],
//   [ 'lname', 'Forogh' ],
//   [ 'email', 'par@gmail.com' ]
// ]

// function objToArr(obj) {
//   let arr = [Object.entries(obj)];
//   return console.log(arr.flat(2));
// }

const objToArr = (obj) => {
  return console.log([Object.entries(obj)].flat(2));
};

objToArr(info);
// [ 'name', 'Parwiz', 'lname', 'Forogh', 'email', 'par@gmail.com' ]

console.log(info);

// const obj_1 = Object.fromEntries(info);
// console.log(obj_1);
