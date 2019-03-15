const part1 = { id: 100, name: "Howard Moon" };
const part2 = { id: 100, password: "Password!" };

const user1 = { ...part1, ...part2 };
//=> { id: 100, name: 'Howard Moon', password: 'Password!' }
console.log(user1);

// ===== >> Objects also be merged with this syntax:
const partial = { id: 100, name: 'Howard Moon' }
const user = { ...partial, ...{ id: 100, password: 'Password!' } }

user //=> { id: 100, name: 'Howard Moon', password: 'Password!' }
console.log(user);