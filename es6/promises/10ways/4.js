Promise.resolve(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  });
// 1
// 2
// Promises can be chained. When referring to chained calls, we usually think of returning this, but Promises do not. Each time a promise calls .then or .catch, a new promise will be returned, thus implementing chained calls.
