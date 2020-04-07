var assert = require("assert");
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

//  npm test

// > mocha-test@1.0.0 test C:\Users\Path\to\Testing\Mocha-test
// > mocha

//   Array
//     #indexOf()
//       √ should return -1 when the value is not present

//   1 passing (39ms)
// ===========>>> Git Bash <<<========
// from git-bash
// Euroset@Home MINGW64 ~/Branch/JS/trening-js/Testing/Mocha-test (master)
// $ node_modules/mocha/bin/mocha


//   Array
//     #indexOf()
//       √ should return -1 when the value is not present


//   1 passing (10ms)
