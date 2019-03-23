const arr = [1, 2, 3, 4, 5, 6];

// ======>>> map
const mapped = arr.map(el => el + 20);
console.log(mapped); // [21, 22, 23, 24, 25, 26]


// =====>>> filter
const filtered = arr.filter(el => el === 2 || el === 4);
console.log(filtered); // [2, 4]



// ====>>> reduce
const reduced = arr.reduce((total, current) => total + current);
console.log(reduced); // 21