const one = "###".padStart(10);
console.log(one);
//        ###

const two = "###".padStart(10, "-");
console.log(two);
// -------###

const three = "###".padStart(6, "abcdefg");
console.log(three);
// abc###