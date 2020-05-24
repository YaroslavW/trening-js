function chunk(array, size) {
  if (!array) return [];
  const firstChunk = array.slice(0, size);
  if (!firstChunk.length) {
    return array;
  }
  return [firstChunk].concat(chunk(array.slice(size, array.length), size));
}

console.log(chunk([1, 2, 3, 4, 5], 2));
//[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]