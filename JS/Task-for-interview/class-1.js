function User(name, age) {
  this.name = name;
  this.age = age;

  this.seyHello = function () {
    console.log(`Hello! I am ${this.name}`);
  };
}

let Ivanov = new User("Nemo", 44);
console.log(Ivanov.name);
console.log(Ivanov.age);
Ivanov.seyHello();
// Nemo
// 44
// Hello! I am Nemo