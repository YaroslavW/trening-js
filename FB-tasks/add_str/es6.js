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
  str.length < 26 ? add_str(str + '-') : console.log(str);
};
add_str("JavaScript Evrywhere");
// JavaScript Evrywhere------

