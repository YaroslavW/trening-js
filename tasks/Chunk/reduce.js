function chunk(arr, size) {
  return arr.reduce(
    (acc, el, i, items) => acc.concat([items.splice(0, size)]),
    []
  );
}
console.log(chunk([1, 2, 3, 4, 5], 2));
// [ [ 1, 2 ], [ 3, 4 ] ]