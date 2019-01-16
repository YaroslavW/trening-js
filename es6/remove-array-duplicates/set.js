const array = ['cat', 1, 2, 'cat', 'cat', 3];

const uniqueSet = new Set( array );
console.log(uniqueSet);
// Set { 'cat', 1, 2, 3 }
const backToArray = [...uniqueSet];
console.log(backToArray);