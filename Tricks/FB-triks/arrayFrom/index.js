// Fill an array with a random length (between 0 and 499)
const randomAmountOfArrayItems = Math.floor(Math.random() * 500);

// Old way
var arr_1 = [];
for (var i = 0; i < randomAmountOfArrayItems; i++) {
  arr_1.push("");
}

// ES6 way
const arr_2 = Array.from(new Array(randomAmountOfArrayItems), (i, items) => "");

//  ES6 way - less memory usage
const arr_3 = Array.from({ length: randomAmountOfArrayItems }, () => "");
