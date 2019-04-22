// Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.


// wrong

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log('The index of this number is: ' + i);
  }, 3000);
}
// undefined

// Right - 1


const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  setTimeout(function (i_local) {
    return function () {
      console.log('The index of this number is: ' + i_local);
    }
  }(i), 3000);
}

//  Right - 2
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  // using the ES6 let syntax, it creates a new binding
  // every single time the function is called
  // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
  setTimeout(function () {
    console.log('The index of this number is: ' + i);
  }, 3000);
}