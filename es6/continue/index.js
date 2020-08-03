const x = 10;

for (let i = 0; i < x; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9