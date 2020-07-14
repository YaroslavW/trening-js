let info = ["name", "Parwiz", "lname", "Forogh", "email", "par@gmail.com"];

// let info2 = info.map((val, index) => [val]);
// console.log(info2);
function m(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i += 2) {
    res.push(arr.slice(i, i + 2));
  }
  return console.log(res);
}
m(info);
// [
//   ["name", "Parwiz"],
//   ["lname", "Forogh"],
//   ["email", "par@gmail.com"],
// ];
