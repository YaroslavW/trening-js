let numbers = [23, 7, 2, 4, 53];
let i = 0;
let above18 = numbers.some(myFunction);

function myFunction(value) {
  i++;
  return value > 18;
}

console.log(above18);
console.log(i);
// true;
// 1;