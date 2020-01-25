const recursion = str => {
  if (str.length > 1) {
    return recursion(str.slice(1));
  }
  return str;
};

console.log(recursion("We Love JS"));
// S
