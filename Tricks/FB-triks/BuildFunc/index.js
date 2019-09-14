function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }
  return arr;
}

var fs = buildFunctions();
fs[0](); // 3
fs[1](); // 3
fs[2](); // 3
// ===================================>>> With let <<<=======================
function buildFunctions_1() {
  var arr_1 = [];
  for (let i = 0; i < 3; i++) {
    arr_1.push(function() {
      console.log(i);
    });
  }
  return arr_1;
}

var fs = buildFunctions_1();
fs[0](); // 0
fs[1](); // 1
fs[2](); // 2
