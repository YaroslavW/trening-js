// https://www.facebook.com/groups/1517091958315927/permalink/3156150707743369/

// function mult() {
//   var res = "";
//   var count = 0;
//   while (count < 10) {
//     var count_inner = 0;
//     while (count_inner < 10) {
//       console.log("[" + count_inner + "]");
//       count_inner++;
//     }
//     console.log("[" + count + "]");
//     count++;
//   }
// }
// mult();

function mult() {
  var res = "";
  for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
      var item = "" + i * j;
      if (item.length == 1) {
        res += `[ ${i * j} ]`;
      }
      if (item.length == 2) {
        res += `[ ${i * j}]`;
      }
      if (item.length == 3) {
        res += `[${i * j}]`;
      }

      if (j === 10) {
        res += "\n";
      }
    }
  }
  console.log(res);
}
mult();
