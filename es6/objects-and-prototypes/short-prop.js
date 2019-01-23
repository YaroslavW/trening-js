'use strict';

let firstName = 'Yaroslav';
let lastName = 'Kolesnikov';

let user = {
    firstName,
    lastName,
};

console.log(JSON.stringify(user));
// {"firstName":"Yaroslav","lastName":"Kolesnikov"}