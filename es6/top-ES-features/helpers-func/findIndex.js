let users = ['John', 'Sarah', 'Yaroslav'];
let sarhIndex = users.findIndex( x => x === 'Sarah');
console.log(sarhIndex); // 1
console.log(users.sarhIndex); //undefined
console.log(users[sarhIndex]); //Sarah
