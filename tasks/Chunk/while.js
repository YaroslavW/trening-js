function chunk(arr, size) {
  var chunks = [],
    i = 0,
    n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, (i += size)));
  }

  return chunks;
}
console.log(chunk([1, 2, 3, 4, 5], 2));
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]