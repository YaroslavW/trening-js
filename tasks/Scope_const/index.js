function testScope() {
  if (true) {
    const a = 10;
  }
  return a;
}

console.log(testScope());
// ReferenceError: a is not defined