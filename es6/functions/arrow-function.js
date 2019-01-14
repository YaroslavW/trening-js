// one arg
let inc = x => x + 1;

console.log(inc(10)); //11
// more one arg
let sum = (a, b) => a + b;

console.log( sum( 5, 3 )); // 8

// without arg
// let getTime = () => new Date().getHours() + ' : ' + new Date().getMinutes();
// console.log(getTime()); // current time


// many str in func
let getTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    return hour + ' : ' + min;
}
console.log(getTime()); // current time