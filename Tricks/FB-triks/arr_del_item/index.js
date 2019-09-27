// =========================>>> Mutating Way <<<=============================
// const mutateArray = ["a", "b", "c", "d"];
// mutateArray.splice(2, 1);
// console.log(mutateArray); //[ 'a', 'b', 'd' ]

// let mutateArray_1 = ["a", "b", "c", "d"];
// rem = mutateArray_1.splice(2, 1);
// console.log(rem); //[ 'c' ]

// =======================>>> Non-Mutating Way <<<=========================
const nonMutatingArray = ["a", "b", "c", "d"];
const newArray = nonMutatingArray.filter((item, index) => !(index === 2));
console.log(newArray);
// [ 'a', 'b', 'd' ]
console.log(nonMutatingArray);
// ["a", "b", "c", "d"];

// ===========================>>> MDN <<<====================
var myFish = ["angel", "clown", "drum", "sturgeon"];
var removed = myFish.splice(2, 1, "trumpet");
console.log(myFish);
console.log(removed);
// myFish равен ["angel", "clown", "trumpet", "sturgeon"]
// removed равен ["drum"]
