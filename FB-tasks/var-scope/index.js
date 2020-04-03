a = 21;

var b = function() {
  console.log(a);
  var a = 20;
};

b();
// undefined;
// because it is hosting JS
