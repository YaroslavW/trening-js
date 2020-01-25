const myFruits = [
  "Apple",
  " Orange",
  "Mongo",
  "Banana",
  "Apple",
  "Apple",
  "Mongo"
];

// first option
// const countMyFruits = myFruits.reduce((countFruits, fruit) => {
//   countFruits[fruit] = (countFruits[fruit] || 0) + 1;
//   return countFruits;
// }, {});

// console.log(countMyFruits);
// { Apple: 3, ' Orange': 1, Mongo: 2, Banana: 1 }

// option-2

const fruitsCounter = {};

for (const fruit of myFruits) {
  fruitsCounter[fruit] = fruitsCounter[fruit] ? fruitsCounter[fruit] + 1 : 1;
}

console.log(fruitsCounter);
// { Apple: 3, ' Orange': 1, Mongo: 2, Banana: 1 }