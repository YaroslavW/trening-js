const user3 = {
  password: 'Password!',
  name: 'Naboo',
  id: 300
}

const organize = ({ password, ...object }) =>
  ({ ...object, password })
//              --------
//             /
// move password to last property

const organizeUser = organize(user3);
//=> { name: 'Naboo', id: 300, password: 'Password!' }
console.log(organizeUser);