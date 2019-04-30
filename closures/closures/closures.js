function Counter(){
  let counter=0;
  return function(){
    counter++;
    return counter;
  }
}

let MyCounter = Counter();
console.log('MyConter = ' + MyCounter());
console.log('MyConter = ' + MyCounter());
console.log('MyConter = ' + MyCounter());

let OtherCounter = Counter();
console.log('OtherCounte = ' + OtherCounter());
console.log('OtherCounte = ' + OtherCounter());
console.log('OtherCounte = ' + OtherCounter());