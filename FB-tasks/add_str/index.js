function add_str(str) {
  if (str.length < 25) {
    var res = str;
    while (res.length < 26) {
      res += "-";
    }

    var res_1 = "~";
    while (str.length + res_1.length < 26) {
      res_1 += "~";
    }
  }
  console.log(res);
  console.log(res_1 + str);
}

add_str("JavaScript Evrywhere");
// JavaScript Evrywhere------
// ~~~~~~JavaScript Evrywhere

add_str("New");
// New-----------------------
// ~~~~~~~~~~~~~~~~~~~~~~~New
