function chunkArray(someArray, chunk_size){
    var result =[];

    while(someArray.length){
        result.push(someArray.splice(0, chunk_size))
    }
    return result;
};

var result = chunkArray([1,2,3,4,5,6,7,8], 3);
console.log(result);
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]