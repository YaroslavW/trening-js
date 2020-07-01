const obj = {
  name: "Yaroslav",
  age: 49,
};

const obj_in = {
  adress: "somewhere",
};

obj[obj] = "value";

console.log(obj);
// { name: 'Yaroslav', age: 49, '[object Object]': 'value' }

console.log(obj["[object Object]"]);
// value