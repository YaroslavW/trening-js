function Cat(catName) {
  var name = catName;

  this.getName = function() {
    console.log(name);
  };
}

function Lynx(catName) {
  Cat.call(this, catName);
  this.weight = 20;
  this.color = "white";
}

var Lynx = new Lynx("Lynx");

Lynx.getName();
// Lynx
console.log(Lynx.color);
// white
