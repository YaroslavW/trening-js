function testF(...arg1) {
  return arg1.map(function (a) {
    return a + 2;
  });
}
console.log(testF(1, 2, 3, 4, 5));
// [ 3, 4, 5, 6, 7 ]

// ===================================>>> As Arrow <<<======================

const testFA = (...arg1) => {
  return arg1.map((a) => {
    return a + 2;
  });
};

console.log(testFA(1, 2, 3, 4, 5));
// [ 3, 4, 5, 6, 7 ]