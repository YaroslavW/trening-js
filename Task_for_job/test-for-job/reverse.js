function arrayReverse1(arr) {
  return arr.reverse();
}

function arrayReverse2(arr) {
  let res = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }

  return res;
}

function arrayReverse3(arr) {
  // медленный метод

  let res = [];

  arr.forEach(elem => {
    res.unshift(elem);
  });

  return res;
}

console.log(arrayReverse1([1, 4, 6, 7]));

console.log(arrayReverse2([1, 4, 6, 7]));

console.log(arrayReverse3([1, 4, 6, 7]));
