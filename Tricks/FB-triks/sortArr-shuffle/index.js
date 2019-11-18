const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const shuffle = list.sort(func);

function func(a, b) {
  return 0.5 - Math.random();
}

console.log(shuffle);
