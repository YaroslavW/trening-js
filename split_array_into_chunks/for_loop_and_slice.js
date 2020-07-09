function chunkArray (someArray, chunk_number){
    let arrayLength = someArray.length;
    let index = 0;
    let tempArr = [];

    for(index = 0; index < arrayLength; index += chunk_number){
        chunk = someArray.slice(index, index + chunk_number);
        tempArr.push(chunk)
    }
    return tempArr;
}

let result = chunkArray([1,2,3,4,5,6,7,8], 3);
console.log(result);

// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]
