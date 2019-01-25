let sum = (x = 2, y = 3) => x + y;

console.log(sum(4, 5)); //9
console.log(sum()); //5

// ES6
var calculateArea = function(height = 50, width = 80) {  
    // write logic   
}

// ES5
var calculateArea = function(height, width) {  
    height =  height || 50;
    width = width || 80;
    // write logic 
 }


// ES5
