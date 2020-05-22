const row = (num) => {
  // for (let i = 0; i < num; i += 1) {
  //   setTimeout(() => console.log(i), 0);
  // }
  // for (var i = 0; i < num; i += 1) {
  //   setTimeout(() => console.log(i), 0);
  // }
  for (var i = 0; i < num; i++) {
    (function (i) {
      setTimeout(() => console.log(i), 0);
    })(i);
  }
};

row(5);
// with let
// 0;
// 1;
// 2;
// 3;
// 4;

// with var
// 5;
// 5;
// 5;
// 5;
// 5;

// with IIFE
// 0;
// 1;
// 2;
// 3;
// 4;
