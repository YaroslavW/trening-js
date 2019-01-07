// let [firstName, lastName] = ["Yaroslav", "Kolesnikov"];

// console.log(firstName);
// // Yaroslav
// console.log(lastName);
// // Kolesnikov

// let [ ,, language] = "Brendan Eich  is creator of the JavaScript programming language.".split(" ");

// console.log(language);

// ================SPREAD==================

let [lastName, firstName, ...rest] = "Brendan Eich  is creator of the JavaScript programming language.".split(" ");

console.log(firstName);
console.log(lastName);
console.log(rest);

// Eich
// Brendan
// [ '',
//   'is',
//   'creator',
//   'of',
//   'the',
//   'JavaScript',
//   'programming',
//   'language.' ]