for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 200);
}
// 3;
// 3;
// 3;
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 200);
}
// 0;
// 1;
// 2;
