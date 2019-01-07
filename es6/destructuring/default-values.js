// let [firstName, lastName] = [];

// console.log(firstName); // undefined



// let [firstName = 'Yaroslav', lastName = 'Kolesnikov'] = [];

// console.log(firstName + ' ' + lastName); //Yaroslav Kolesnikov


function defaultLastName() {
    return Date.now() + '-visitor';
  }
  let [firstName, lastName = defaultLastName()] = ['Yaroslav'];
  console.log(firstName + ' ' + lastName);
// Yaroslav 1546860664337-visitor