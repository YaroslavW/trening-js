let arrayTest = [1, 4, 5, 3.5, "a"];

arrayTest = arrayTest.filter(function (el) {
  return el > 3;
});

console.log(arrayTest);
// [ 4, 5, 3.5 ]