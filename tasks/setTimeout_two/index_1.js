let a = 10;

setTimeout(() => {
  a = 100;
  console.log(`${a} inner- a`);
  // 100 inner- a
}, 1000);

console.log(a);
// 10
