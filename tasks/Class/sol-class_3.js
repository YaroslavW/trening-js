class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} says woof`);
  }
}

const fido = new Dog("fido");
fido.bark();
// fido says woof