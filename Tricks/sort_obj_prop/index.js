let test = ["c", "d", "b", "a"];

let obj = {
  name: "JS",
  arr: test.sort(),
};

console.log(...obj.arr);
// a b c d
