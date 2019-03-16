const user3 = {
    password: 'Password!',
  name: 'Naboo',
    id: 300
}

const organize = object => ({ id: undefined, ...object })
//                            -------------
//                          /
//  move id to the first property

console.log(organize(user3));
//=> { id: 300, password: 'Password!', name: 'Naboo' }
console.log(user3);  // { password: 'Password!', name: 'Naboo', id: 300 }