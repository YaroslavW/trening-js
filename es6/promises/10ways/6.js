const promise = Promise.resolve().then(() => {
  return promise;
});
promise.catch(console.error);

// [TypeError: Chaining cycle detected for promise #<Promise>]
// Uncaught SyntaxError: Identifier 'promise' has already been declared
//    at <anonymous>:1:1
// (anonymous) @ VM218:1

// The value returned by .then or .catch cannot be the promise itself, otherwise, it will cause an infinite loop.
