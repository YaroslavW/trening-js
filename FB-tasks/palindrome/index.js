let palindrome = str => {
  str = str.toLowerCase();
  return console.log(
    str ===
      str
        .split("")
        .reverse()
        .join("")
  );
};

palindrome("racecar"); // true
palindrome("table"); //false
