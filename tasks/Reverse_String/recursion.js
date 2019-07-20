function reverse(string) {
  if (string === "") {
    return string;
  } else {
    return reverse(string.substring(1)) + string[0];
  }
}
console.log(reverse("hello"));
// olleh

function revStr(str) {
  return str ? revStr(str.substring(1)) + str[0] : str;
}
console.log(revStr("JavaScript"));
// tpircSavaJ
