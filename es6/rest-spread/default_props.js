const user2 = {
    id: 200,
    name: 'Vince Noir'
}

const user4 = {
    id: 400,
    name: 'Bollo',
    quotes: ["I've got a bad feeling about this..."]
}

const setDefaults = ({ quotes = [], ...object }) =>
    ({ ...object, quotes })

console.log(setDefaults(user2))
//=> { id: 200, name: 'Vince Noir', quotes: [] }

console.log(setDefaults(user4))
//=> {
//=>   id: 400,
//=>   name: 'Bollo',
//=>   quotes: ["I've got a bad feeling about this..."]
//=> }