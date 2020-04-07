var operations = require("../operations");

it("should multiply two numbers", function () {
  var expectedResult = 15;
  var result = operations.multiply(3, 5);
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});

//  npm test

// > mocha-test@1.0.0 test C:\Users\Euroset\Branch\JS\trening-js\Testing\Mocha-test
// > mocha



//   √ should multiply two numbers
//   Array
//     #indexOf()
//       √ should return -1 when the value is not present


//   2 passing (14ms)