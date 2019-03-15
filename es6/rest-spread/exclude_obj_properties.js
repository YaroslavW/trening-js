const noPassword = ({ password, ...rest }) => rest
const user = {
    id: 100,
    name: 'Howard Moon',
    password: 'Password!'
}

let twoProps = noPassword(user) //=> { id: 100, name: 'Howard moon' }
console.log(twoProps);