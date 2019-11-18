// const str = "I am  the code";

// function up(str) {
//   const arr = str.split(" ");
//   var result = "";
//   for (var i = 0; i < arr.length; i++) {
//     var word = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     result += word + " ";
//   }
//   return [
//     console.log((result = result.substring(0, result.length - 1))),
//     console.log(str.length),
//     console.log(result.length)
//   ];
// }
// up(str);
// I Am The Code
// 13
// 13

// ==================>>> 2 solution <<<===============
const str = "I am the code";

function up(str) {
  const arr = str.split(" ");
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i][0].toUpperCase() + arr[i].slice(1);
    result.push(word);
  }
  return [
    console.log(result.join(" ")),
    console.log(str.length),
    console.log(result.join(" ").length)
  ];
}
up(str);
// I Am The Code
// 13
// 13