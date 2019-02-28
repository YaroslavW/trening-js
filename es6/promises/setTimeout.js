setTimeout(function(){
    console.log('First')
    setTimeout(function(){
        console.log("Second")
    }, 1000)
},1000)


// ==> re-written with ES6 promises:
var wait1000 = () => new Promise((resolve, reject) => { setTimeout(resolve, 1000)})

wait1000()
    .then(function(){
        console.log("First")
        return wait1000()
    })
    .then(function(){
        console.log('Second')
    })