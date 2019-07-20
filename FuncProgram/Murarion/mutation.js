function pop(arr) {
  return arr.splice(0, 1);
}

const arr = [1, 2, 3, 4];
pop(arr);
console.log(arr); // [2, 3, 4];
