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

<<<<<<< HEAD
console.log(myName, myFood); // 'Bob' 'Bread'
=======
console.log(myName, myFood); // 'Joe' 'cake'
>>>>>>> 6ba9127aca13c62277457a56fa7796ace0a0b6ff
