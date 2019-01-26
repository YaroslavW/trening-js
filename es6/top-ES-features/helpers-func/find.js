// with array
let numbers = [1, 4, 3, 15, 21, 2, 5];
let firstNumberBiggerThenFife = numbers.find(x => x > 5);

console.log(firstNumberBiggerThenFife); //15

// with object in array
let user = [
    {
        name: 'John',
        status: 'user',
    },
    {
        name: 'Sarah',
        status: 'user',
    },
    {
        name: 'Yaroslav',
        status: 'admin',
    },
];

let result = user.find(customer => customer.name === 'Sarah');
console.log(result); //{ name: 'Sarah', status: 'user' }