// let add_str = (str) => {
//   str += "-";
//   str.length < 26 ? add_str(str) : str;
//   console.log(str);
// };

// add_str("JavaScript Evrywhere");
// JavaScript Evrywhere------
// JavaScript Evrywhere-----
// JavaScript Evrywhere----
// JavaScript Evrywhere---
// JavaScript Evrywhere--
// JavaScript Evrywhere-

let add_str = (str) => {
  str.length < 26 ? add_str(str + "-") : console.log(str);
};
// add_str("JavaScript Evrywhere");
// JavaScript Evrywhere------

let add_str_2 = (str) => {
  str.length < 26 ? add_str_2("~" + str) : console.log(str);
};
// add_str_2("JavaScript Evrywhere");
// ~~~~~~JavaScript Evrywhere

let add_str_common = (str) => {
  add_str(str);
  add_str_2(str);
};

add_str_common("JavaScript Evrywhere");
// JavaScript Evrywhere------
// ~~~~~~JavaScript Evrywhere