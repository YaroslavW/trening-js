const jsTest = (arg) => {
  let nestedFunction = (arg) => {
    return arg;
  };
  return nestedFunction(arg);
};

console.log(jsTest("Hello JS"));
// Hello JS