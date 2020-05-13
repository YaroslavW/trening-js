let a = 10;

setTimeout(() => {
  setTimeout(() => {
    a--;
  }, 1000);
  --a;
}, 3000);

console.log(a);
// 10
