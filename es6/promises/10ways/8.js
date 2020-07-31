Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);

// 1

// The argument of .then or .catch is expected to be a function, and passing in a non-function will result in the result of value to be ignored such as .then(2) or .then(Promise.resolve(3).
