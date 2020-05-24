const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
console.log(chunk([1, 2, 3, 4, 5], 2));
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
