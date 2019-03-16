const user1 = {
    id: 100,
    name: 'Howard Moon',
    password: 'Password!'
}
const removeProperty = prop => ({ [prop]: _, ...rest }) => rest
//                     ----       ------
//                          \   /
//                dynamic destructuring

const removePassword = removeProperty('password')
const removeId = removeProperty('id')

console.log(removePassword(user1)) //=> { id: 100, name: 'Howard Moon' }
console.log(removeId(user1)) //=> { name: 'Howard Moon', password: 'Password!' }
