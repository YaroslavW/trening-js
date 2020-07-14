n = 10;

const [a, b] = (n > 10 && ["a", "b"]) || (n === 10 && ["c", "d"]) || ["e", "f"];
console.log(a);
// c
console.log(b);
// d
