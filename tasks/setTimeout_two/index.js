let a = 10;

setTimeout(() => {
  setTimeout(() => {
    a--;
    console.log(`${a} = inner Timeout`);
    // 9 = second Timeout
  }, 1000);
  --a;
  console.log(`${a} = second Timeout`);
  // 8 = inner Timeout
}, 3000);

console.log(a);
// 10
