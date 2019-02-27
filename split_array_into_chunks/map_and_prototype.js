Object.defineProperty(Array.prototype, "chunk", {
    value: function(chunk_size){
        var that = this;
        return Array(Math.ceil(that.length / chunk_size)).fill().map(function(_,i){
            return that.slice(i * chunk_size, i * chunk_size + chunk_size)
        })
    }
});

var result = [1,2,3,4,5,6,7,8].chunk(3);
console.log(result);
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]