'use strict';

let propName = 'name';

let user = {
    [propName]: 'Yaroslav',
};

console.log(user.name); //Yaroslav

let a = 'my ';
let b = 'new ';
let c = 'car ';

let myCar = {
    [(a + b + c).toUpperCase()] : 'BMW'
}
console.log(JSON.stringify(myCar)); //{"MY NEW CAR ":"BMW"}

console.log(myCar["MY NEW CAR "]); //BMW