var wait1000 = new Promise( function(resolve, reject){
    setTimeout(resolve, 1000)
}).then(function(){
    console.log("Thanks")
});

// with arrow function

var wait2_2000 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 2000)
}).then(()=>{
    console.log("wait2_2000")
})