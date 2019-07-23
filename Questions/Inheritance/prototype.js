function Cat(catName) {
  var name = catName;

  this.getName = function() {
    console.log(name);
  };
}

function Lynx() {
  this.weight = 80;
  this.color = "gray";
}
var cat = new Cat("Cat");

Lynx.prototype = cat;

var Bob = new Lynx();
Bob.getName();
// Cat
