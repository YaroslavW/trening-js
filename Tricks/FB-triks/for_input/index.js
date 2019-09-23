function print(n) {
  var str = "";
  for (var i = 1; i <= n; i++) {
    var j = i;
    str += "\n";
    while (j) {
      if (j % 2 === 0) {
        str += "  ";
      } else {
        str += " *";
      }
      j--;
    }
  }
  for (var k = n - 1; k > 0; k--) {
    var l = k;
    str += "\n";
    while (l) {
      if (l % 2 === 0) {
        str += "  ";
      } else {
        str += " *";
      }
      l--;
    }
  }
  console.log(str);
}
print(4);
