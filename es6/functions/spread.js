// function showName(firstName, lastName, ...rest){
//     console.log(`First Name = ${firstName}; Last Name = ${lastName}; Rest = ${rest}`)
// };

// showName('Yaroslav', 'Kolesnikov','studying', 'java', 'script');
// // First Name = Yaroslav; Last Name = Kolesnikov; Rest = studying,java,script

let arrayNumbers = [3, 9, 1, 35];
let maxNumber = Math.max(...arrayNumbers);
console.log(maxNumber); //35

// these two calls do the same thing:
Math.max(...numbers);
Math.max.apply(Math, numbers);