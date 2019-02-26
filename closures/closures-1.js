// without closures
let a = 0;

function counter(){
    a++;
    console.log(a);
}

counter();
counter();
counter();
a = 'Some string';
counter();
counter();
// 1
// 2
// 3
// NaN
// NaN

// with closures
function countClosures(){
    let a = 0;
    return function(){
        a++;
        console.log(a)
    }
}

let close = countClosures();
close();
close();
close();
a = 'Other string';
close();
close();