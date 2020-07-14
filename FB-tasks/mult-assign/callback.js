n = 10;

const [[a, b]] = [
  [["a", "b"], () => n > 10],
  [["c", "d"], () => n === 10],
  [["e", "f"], () => true],
].find(([, test]) => test());

console.log(a);
// c
console.log(b);
// d
