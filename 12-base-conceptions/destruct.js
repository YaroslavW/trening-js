const obj = {
    name: 'Joe',
    food: 'cake'
}

const { name, food } = obj;

console.log(name, food); // 'Joe' 'cake'

// ===========>>>with change name
const obj_1 = {
    name: 'Joe',
    food: 'cake'
}

const { name: myName, food: myFood } = obj_1;

console.log(myName, myFood); // 'Joe' 'cake'


// ===========>>  for React
const person = {
    name: 'Eddie',
    age: 24
}

function introduce({ name, age }) {
    console.log(`I'm ${name} and I'm ${age} years old!`);
}

console.log(introduce(person)); // "I'm Eddie and I'm 24 years old!"