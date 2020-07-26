const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Hello");
  }, 3000);
});

myFirstPromise.then((msg) => {
  console.log("Hooray " + msg);
});
// Hooray Hello
