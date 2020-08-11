const palindrome = (str) => {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
};

console.log(palindrome("Anna"));
console.log(palindrome("John"));
console.log(palindrome("carac"));
console.log(palindrome("car"));

// true;
// false;
// true;
// false;
