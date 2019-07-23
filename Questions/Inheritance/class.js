class Cat {
  constructor(catName) {
    this.name = catName;
  }
  getName() {
    console.log(this.name);
  }
}

class Lynx extends Cat {
  constructor(catName) {
    super(catName);
    this.weight = 80;
    this.length = 120;
  }
}

var Bob = new Lynx("Bob");
Bob.getName();
// Bob
console.log(Bob.length);
// 120
