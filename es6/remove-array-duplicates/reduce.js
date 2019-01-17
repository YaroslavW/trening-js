const array = ['dog', 1, 1, 2, 'dog', 3];

const uniq = array.reduce( (unique, item) => {
    // console.log(
    //     item,
    //     unique,
    //     unique.includes(item),
    //     unique.includes(item) ? unique : [ ...unique, item ]
    // );
    return  unique.includes(item) ? unique : [ ...unique, item ]
},[]);
// dog [] false [ 'dog' ]
// 1 [ 'dog' ] false [ 'dog', 1 ]
// 1 [ 'dog', 1 ] true [ 'dog', 1 ]
// 2 [ 'dog', 1 ] false [ 'dog', 1, 2 ]
// dog [ 'dog', 1, 2 ] true [ 'dog', 1, 2 ]
// 3 [ 'dog', 1, 2 ] false [ 'dog', 1, 2, 3 ]

console.log(uniq);
[ 'dog', 1, 2, 3 ];