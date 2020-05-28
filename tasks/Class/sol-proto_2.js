function Dog(name) {
  this.name = name;
}
Dog.prototype.bark = function () {
  console.log(this.name + " says woof");
};
const fido = new Dog("fido");
fido.bark();
// fido says woof

//  удобно определить bark() в прототипе Dog:
