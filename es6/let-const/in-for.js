// The var variable is one for all iterations
//  of the loop and is visible even after the loop:
for(var i=0; i<10; i++) { /* … */ }

console.log(i); // 10

// Each repetition of the cycle corresponds 
// to its own independent variable let.

function makeArmy() {

    let shooters = [];
  
    for (let i = 0; i < 10; i++) {
      shooters.push(function() {
        console.log( i ); //outputted your own number
      });
    }
  
    return shooters;
  }
  
  var army = makeArmy();
  
  army[0](); // 0
  army[5](); // 5