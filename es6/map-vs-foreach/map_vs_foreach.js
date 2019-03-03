let exampleArray = [2,3,4,5,6,7,8];
// ===> Map
let mapArrResult = exampleArray.map(num => {
    return num * 2;
});
console.log(mapArrResult); // [ 4, 6, 8, 10, 12, 14, 16 ]

// ===> forEach
forEachArrResult = exampleArray.forEach(num => {
    return num * 2;
});
console.log(forEachArrResult); // undefined

console.log(exampleArray); //[ 2, 3, 4, 5, 6, 7, 8 ]

const mewArray = [];
forEachArrResult = exampleArray.forEach(num => {
    return newArray.push(num * 2);
});
console.log(newArray);