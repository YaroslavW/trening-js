const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

const a = obj.hasOwnProperty("1");
const b = obj.hasOwnProperty(1);
const c = set.has("1");
const d = set.has(1);

console.log(`a = ${a} b=${b} c=${c} d=${d}`);
// a = true b=true c=false d=true