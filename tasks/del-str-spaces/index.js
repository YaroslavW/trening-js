var str = "I Love Java Script";

function delsp(str) {
  return str.replace(/\s/g, "");
}

console.log(delsp(str));
