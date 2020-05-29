const one = "###".padStart(10);
console.log(one);
//        ###

const two = "###".padStart(10, "-");
console.log(two);
// -------###

const three = "###".padStart(6, "abcdefg");
console.log(three);
// abc###

// ====================>>> padEnd <<<===================

const four = "###".padEnd(10);
console.log(four);
// ###
const five = "###".padEnd(10, "-");
console.log(five);
// ###-------
const six = "###".padEnd(6, "abcdefg");
console.log(six);
// ###abc
