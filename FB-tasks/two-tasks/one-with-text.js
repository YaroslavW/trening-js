// Hey guys could someone help me on this using JavaScript
// Title:None,Content:Write a function that takes a string and returns an array of length 2
//  containing a new string made of all and only the vowels from the original string and the
// number of duplicates in the original string

// Write a function named fizzbuzz that takes two 2 arrays and returns Fizz if the combined
// length of the lists is divisible by 3, Buzz if it is divisible by 5, fizzbuzz if it is
// divisible by both 5 and 3
// https://www.facebook.com/groups/1517091958315927/permalink/3289799647711807/
// ======================>>> 1 <<<==========================
function separateVowels(str) {
  let counter = 0;
  let result = [];
  let result_str = [];
  let str_to_arr = str
    .replace(/\s/g, "") //remove spaces
    .toLowerCase() // to lowercase
    .split(""); // create arr
  for (let i = 0; i < str_to_arr.length; i++) {
    if (
      // finding Vowels
      str_to_arr[i] === "a" ||
      str_to_arr[i] === "e" ||
      str_to_arr[i] === "i" ||
      str_to_arr[i] === "o" ||
      str_to_arr[i] === "u"
    ) {
      // if the array already has such a letter, then increase the counter by one.
      result_str.includes(str_to_arr[i])
        ? counter++
        : result_str.push(str_to_arr[i]);
      // if there is no such letter, then add it to the array
    }
  }
  result.push(result_str.join(""));
  // Add an array of letters to the result and turn it into a string.
  result.push(counter);
  //Add a counter to the result array as an element
  return console.log(result);
}
separateVowels("Wodofonetresae helloi pice");
// [ 'oeai', 8 ]
