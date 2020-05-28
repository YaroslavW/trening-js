// Дан код:

function Dog (name) {
 this.name = name;
}
Dog.bark = function () {
 console.log(this.name + ' says woof');
}
const fido = new Dog('fido');
fido.bark();
// Почему собака по кличке fido не лает?