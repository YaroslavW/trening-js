Object.defineProperty(Array.prototype, "chunk", {
    value: function(chunk_size){
        let tempArr = [];

        for(let i = 0; i < this.length; i += chunk_size){
            tempArr.push(this.slice(i, i + chunk_size));
        }
        return tempArr;
    }
});

var result = [1,2,3,4,5,6,7,8].chunk(3);
console.log(result);
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]