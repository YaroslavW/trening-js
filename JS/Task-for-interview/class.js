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