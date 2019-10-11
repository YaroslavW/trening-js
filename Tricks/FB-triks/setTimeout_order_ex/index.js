setTimeout(() => {
  console.log("setTimeout1");
}, 0);

Promise.resolve().then(() => console.log("Promise"));

setTimeout(() => {
  console.log("setTimeout2");
}, -2000);

// Promise
// setTimeout1
// setTimeout2
