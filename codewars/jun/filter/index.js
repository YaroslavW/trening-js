// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
// Otherwise, you can be sure he's not...

// Ex: (Input = ["Ryan", "Kieran", "Jason", "Yous"]), (Output = ["Ryan", "Yous"]);

const arr = ["Ryan", "Kieran", "Jason", "Yous"];

const friends = arr.filter(item => item.length < 5);
console.log(friends);
// [ 'Ryan', 'Yous' ]
