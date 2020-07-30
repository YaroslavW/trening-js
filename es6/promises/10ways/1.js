const prom = new Promise((res, rej) => {
  console.log("first");
  res();
  console.log("second");
});

prom.then(() => {
  console.log("third");
});
console.log("fourth");
