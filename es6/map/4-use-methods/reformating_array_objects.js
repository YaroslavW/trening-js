const myUsers = [
    { name: 'chuloo', likes: 'grilled chicken' },
    { name: 'chris', likes: 'cold beer' },
    { name: 'sam', likes: 'fish biscuits' }
]

const usersByFood = myUsers.map(item => {
    const container = {};

    container[item.name] = item.likes;
    container.age = item.name.length * 10;

    return container;
})

console.log(usersByFood);
// [{chuloo: "grilled chicken", age: 60}, 
// {chris: "cold beer", age: 50}, 
// {sam: "fish biscuits", age: 30}]