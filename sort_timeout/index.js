const arr = [20, 5, 100, 1, 4, 22, 34, 987, 58, 43, 12];

const sort = (array) => {
  for (let i of array) {
    setTimeout(() => console.log(i), i);
  }
};

sort(arr);

// 1;
// 4;
// 5;
// 12;
// 20;
// 22;
// 34;
// 43;
// 58;
// 100;
// 987;
