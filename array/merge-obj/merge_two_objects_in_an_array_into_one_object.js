// merge two objects in an array into one object
let arr = [ { "email": "email" }, { "password": "password" } ];


newArr = arr.reduce((acc,cur) => {
    return {...acc,...cur};
    });
    console.log(newArr); 
// { email: 'email', password: 'password' }


newArr_2 = [ { "email": "email" }, { "password": "password" } ].reduce((acc, curr) => {
    return Object.assign(acc, curr)
    }, {}) //a more generic approach
    console.log(newArr_2);
    // { email: 'email', password: 'password' }