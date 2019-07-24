function sum(a, b, c) {
  return a + b + c;
}
const curriedSum = lodash.curry(sum);

curriedSum(1, 2, 3); // 6

const addFive = curriedSum(2, 3);
addFive(7); // 12
addFive(8); // 13

const addOne = curriedSum(1);
addOne(2, 3); // 6
const addThree = addOne(2);
addThree(3); // 6;
addThree(4); // 7;
