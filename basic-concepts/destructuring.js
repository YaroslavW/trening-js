const obj = {
    name: 'Joe',
    food: 'cake'
}

const { name, food } = obj;

console.log(name, food); // 'Joe' 'cake'

// ====>>> With other var.

const obj_1 = {
    name: 'Bob',
    food: 'Bread'
}

const { name: myName, food: myFood } = obj_1;

console.log(myName, myFood); // 'Joe' 'cake'