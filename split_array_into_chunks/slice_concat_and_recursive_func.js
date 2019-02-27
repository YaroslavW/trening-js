/**
 * Define the chunk method in the prototype of an array
 * that returns an array with arrays of the given size (with a recursive function).
 *
 * @param chunk_size {Integer} Size of every group
 */
Array.prototype.chunk = function (chunk_size) {
    if ( !this.length ) {
        return [];
    }

    return [ this.slice( 0, chunk_size ) ].concat(this.slice(chunk_size).chunk(chunk_size));
};