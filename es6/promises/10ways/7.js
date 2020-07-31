Promise.resolve()
  .then(() => {
    return new Error("error");
  })
  .then((res) => {
    console.log("then: ", res);
  })
  .catch((err) => {
    console.log("catch: ", err);
  });

// then: Error: error!
// at Promise.resolve.then (...)
// at ...

// Returning an error object in .then or .catch does not throw an error, so it will not be caught by subsequent .catch, you need to change to one of them:
// return Promise.reject(new Error('error')) throw new Error('error')
// Because returning any non-promise value will be wrapped into a promise object, that is, return new Error (‘error’) is equivalent to return Promise.resolve (new Error (‘error’)).
