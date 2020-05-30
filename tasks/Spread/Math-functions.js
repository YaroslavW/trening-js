const restTest = { name: "javascript everywhere", like: 110000 };
const restPage = { name: "javascript everywhere", follower: 200000 };

const obj = { ...restTest };
console.log(obj);
// { name: 'javascript everywhere', like: 110000 }

const mergeObj = { ...restPage, ...restTest };
console.log(mergeObj);
// { name: 'javascript everywhere', follower: 200000, like: 110000 }

console.log(Math.max(...[1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10])); //10
console.log(Math.min(...[1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10])); //1
