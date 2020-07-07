// ======>>> Obj <<<======
function Man(name, age) {
  this.name = name;
  this.age = age;

  this.say = function () {
    console.log(`I am ${this.name}. I have ${this.age} old`);
  };
}

const Ivan = new Man("Ivan", 23);

console.log(Ivan);
// Man { name: 'Ivan', age: 23, say: [Function (anonymous)] }
Ivan.say();
// I am Ivan. I have 23 old

// ====================>>> Class <<<====================

class Car {
  constructor(mark, color, age) {
    this.mark = mark;
    this.color = color;
    this.age = age;
  }
  say() {
    console.log(
      `This ${this.mark} car ${this.age} year old, has ${this.color} color`
    );
  }
}

const Volvo = new Car("Volvo", "green", 3);
Volvo.say();
// This Volvo car 3 year old, has green color