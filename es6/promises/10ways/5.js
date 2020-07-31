const promise = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("first");
    res("second");
  }, 1000);
});

const start = Date.now();

promise.then((res) => {
  console.log(res, Date.now() - start, "third");
});

promise.then((res) => {
  console.log(res, Date.now() - start, "fourth");
});
// first
// second 948 third
// second 1002 fourth

// A promise .then or .catch can be called multiple times, but here the Promise constructor is executed only once. In other words, once the internal state of a promise changes and a value is obtained, each subsequent call to .then or .catch will directly get the value.
