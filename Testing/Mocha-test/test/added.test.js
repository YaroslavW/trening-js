var added = require("../added");

it("should return the subtraction difference", function () {
  var expectResult = 2;
  var result = added.substract(8, 6);
  if (result !== expectResult) {
    throw new Error(`Expected ${expectResult}, but got = ${result}`);
  }
});
