// constructor for create obj
function Customer(name, phone) {
  this.name = name;
  this.phone = phone;
}

const Ivanov = new Customer("Ivan", "+380055123-45-24");

console.log(Ivanov);
// Customer { name: 'Ivan', phone: '+380055123-45-24' }

for (let a in Ivanov) {
  console.log(`This customer has : ${a} = ${Ivanov[a]}`);
}
// This customer has : name = Ivan
// This customer has : phone = +380055123-45-24

// ======>>> class <<<=============

class Programmer {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
  seyHello() {
    console.log(`Hello! I am ${this.name}`);
  }
}

let Kolesnikov = new Programmer("Yaroslav", "+380055-123-44-55");

console.log(
  `New programmer name is - ${Kolesnikov.name}, phone = ${Kolesnikov.phone}`
);
Kolesnikov.seyHello();
// New programmer name is - Yaroslav, phone = +380055-123-44-55
// Hello! I am Yaroslav