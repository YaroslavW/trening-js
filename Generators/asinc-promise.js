//==========>>> Asinc / Await

async function asyncAwait(){
    let a=await(task1);
    console.log(a);
    let b=await(task2);
    console.log(b);
    let c=await(task3);
    console.log(c);
    }

// =========>>> Promise
function * generatorPromise()
{
let a=yield Promise1();
console.log(a);
let b=yield Promise1();
console.log(b);
let c=yield Promise1();
console.log(c);
}    