const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map(sweetItem => {
    return sweetItem * 2
})

console.log(sweeterArray) // [4, 6, 8, 10, 70]

// ======>> with function 

// create a function to use
const makeSweeter = sweetItem => sweetItem * 2;

// we have an array
const sweetArray_1 = [2, 3, 4, 5, 35];

// call the function we made. more readable
const sweeterArray_1 = sweetArray.map(makeSweeter);

console.log(sweeterArray_1); // [4, 6, 8, 10, 70]