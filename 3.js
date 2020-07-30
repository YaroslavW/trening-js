const prom = new Promise((res, rej) => {
  res("1");
  rej("error");
  res("2");
});

prom
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((error) => {
    console.log("catch: ", error);
  });
// res:  1
// The resolve or reject only execute once even there is a resolve call after the reject. It won't execute.
