const renamed = ({ ID, ...object }) => ({ id: ID, ...object })

const user = {
    ID: 500,
    name: "Bob Fossil"
}

console.log(renamed(user)) //=> { id: 500, name: 'Bob Fossil' }