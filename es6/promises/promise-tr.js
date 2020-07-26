// const common = (suc, fail) => {
//   Math.random > 0.5 ? suc("Good") : fail("Bad");
// };

const suc = (res) => {
  console.log("Hura " + res);
};

const fail = (err) => {
  console.log("Ups..." + err);
};

// common(suc, fail);
// Ups...Bad

const doPromise = () => {
  return new Promise((res, rej) => {
    Math.random() > 0.5 ? res("Hurraaa ") : fail("...Not good...");
  });
};

const promise1 = doPromise();
promise1.then(suc, fail);
