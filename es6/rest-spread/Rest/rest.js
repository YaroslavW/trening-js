const myObj = {
  a: 1,
  b: 2,
  c: 5,
  d: 4
};

const { a, b, ...restProps } = myObj;
console.log(restProps); //{ c: 5, d: 4 }
