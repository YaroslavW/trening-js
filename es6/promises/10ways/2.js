const prom = new Promise((res, rej) => {
  setTimeout(() => {
    res("Success");
  }, 1000);
});

const prom2 = prom.then(() => {
  throw new Error("error");
});

console.log("prom", prom);
console.log("prom2", prom2);

setTimeout(() => {
  console.log("prom", prom);
  console.log("prom2", prom2);
}, 2000);

// prom
// Promise {<pending>}
// __proto__: Promise
// [[PromiseStatus]]: "fulfilled"
// [[PromiseValue]]: "success"

// prom2
// Promise {<pending>}__proto__:
// Promise[[PromiseStatus]]: "rejected"[[PromiseValue]]:
// Error: error
//     at <anonymous>:7:9
