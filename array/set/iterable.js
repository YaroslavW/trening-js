const set = new Set([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]);

console.log(set);
// Set(4) { 1, 2, 3, 4 }

const dubble = set.map((num) => num * num);
console.log(dubble);
// TypeError: set.map is not a function