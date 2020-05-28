function Dog(name) {
  this.name = name;
}
Dog.bark = function () {
  console.log(this.name + " says woof");
};
const fido = new Dog("fido");
const bindFido = Dog.bark.bind(fido);
bindFido();
// fido says woof
// fido.bark — не функция, но у нас есть функция Dog.bark.
//  Поэтому в примере выше решаем задачу с помощью function.prototype.bind()
