function incrementByOne(val) {
  let value = val;
  return function () {
    return ++value;
  };
}

let incrFrom0 = incrementByOne(0);

console.log(incrFrom0()); //1
console.log(incrFrom0()); //2
console.log(incrFrom0()); //3
