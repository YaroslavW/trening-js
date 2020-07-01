const sO = {
  name: "Yaroslav",
  age: 49,
  obj: {
    a: "a-value",
    b: "b-value",
  },
};

console.log(sO);
// { name: 'Yaroslav', age: 49, obj: { a: 'a-value', b: 'b-value' } }

// for (var key in sO) {
//   console.log(key);
// }
// name;
// age;
// obj;
sO[5] = "five";
sO[""] = null;
for (var key in sO) {
  console.log(typeof key);
}
// string;
// string;
// string;
// string;
// string;

// посчитать кол-во свойств в объекте
const sumVal = (obj) => {
  let counter = 0;
  for (let key in obj) {
    counter++;
  }
  return counter;
};

console.log(sumVal(sO));
// 5
console.log(sO);
// {
//   '5': 'five',
//   name: 'Yaroslav',
//   age: 49,
//   obj: { a: 'a-value', b: 'b-value' },
//   '': null
// }