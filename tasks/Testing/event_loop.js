const row = (num) => {
  for (let i = 0; i < num; i += 1) {
    setTimeout(() => console.log(i), 0);
  }
};

row(5);
// 0;
// 1;
// 2;
// 3;
// 4;