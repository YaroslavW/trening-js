// input => numberIncrease(5)
// output => 5, 9, 13, 17, 21

// input => numberIncrease(9)
// output => 5, 9, 13, 17, 21. 25, 29, 33, 37

function numberIncrease(n) {
  for (i = 5; i <= 4 * n + 1; i += 4) {
    console.log(i);
  }
}

// numberIncrease(5);
// 5;
// 9;
// 13;
// 17;
// 21;
// numberIncrease(9);
// 5;
// 9;
// 13;
// 17;
// 21;
// 25;
// 29;
// 33;
// 37;
numberIncrease(2);
