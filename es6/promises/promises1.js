const prom1 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("foo");
  }, 3000);
});

prom1.then((val) => {
  console.log(val);
});
// 'foo'  - 2
console.log(prom1);
// Promise { <pending> } - 1
