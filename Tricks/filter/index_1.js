let arrayTest = [1, 4, 5, 3.5, "a"];

arrayTest = arrayTest.filter((el)=> {
  return el > 3;
});

console.log(arrayTest);
