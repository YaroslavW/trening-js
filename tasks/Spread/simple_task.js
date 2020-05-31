let arrayTest = ['c', 'd', 'b', 'a'];
let object = {
  name: 'Yaroslav',
  arr: arrayTest.sort()
}
console.log(...object.arr);
// a b c d