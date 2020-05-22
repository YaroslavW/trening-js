const dog = {
  name: "Guffi",
  sayName() {
    console.log(this.name);
  },
};
const sayName = dog.sayName;

sayName();
// undefined

