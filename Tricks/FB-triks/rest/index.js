const fn = (a, b, ...c) => (a + b) * c.length;
const result = fn(1, 2, "JS", true, "LevelHunt");
console.log(result);
// 9
