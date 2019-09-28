// Напишите функцию, которая будет проходить через массив целых чисел
//  и выводить индекс каждого элемента с задержкой в 3 секунды.

// НЕПРАВИЛЬНО
// prettier-ignore
// const arr = [10, 15, 20, 22, 5];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log("The index of this number is: " + i);
//   }, 3000);
// }
// через три сек выведет все разом
// The index of this number is: 5
// The index of this number is: 5
// The index of this number is: 5
// The index of this number is: 5
// The index of this number is: 5

// const arr = [10, 15, 20, 22, 5];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(
//     function(t_loc) {
//       console.log("The index of this number is: " + t_loc);

//       // prettier-ignore
//     },
//     3000,
//     i
//   );
// }

// The index of this number is: 0
// The index of this number is: 1
// The index of this number is: 2
// The index of this number is: 3
// Напишите функцию, которая будет проходить через массив целых чисел
//  и выводить индекс каждого элемента с задержкой в 3 секунды.

// НЕПРАВИЛЬНО
// prettier-ignore
// const arr = [10, 15, 20, 22, 5];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log("The index of this number is: " + i);
//   }, 3000);
// }
// через три сек выведет все разом
// The index of this number is: 5
// The index of this number is: 5
// The index of this number is: 5
// The index of this number is: 5
// The index of this number is: 5

// const arr = [10, 15, 20, 22, 5];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(
//     function(t_loc) {
//       console.log("The index of this number is: " + t_loc);

//       // prettier-ignore
//     },
//     3000,
//     i
//   );
// }

// The index of this number is: 0
// The index of this number is: 1
// The index of this number is: 2
// The index of this number is: 3
// The index of this number is: 4

for (var i = 0; i < 6; i++ ) {
setTimeout(function(number){
console.log(number)
}, 10, i);
}

// 0
// 1
// 2
// 3
// 4
// 5

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function
  // has access to the correct index
  setTimeout(
    (function(i_local) {
      return function() {
        console.log("The index of this number is: " + i_local);
      };
    })(arr[i]),
    3000
  );
}
// The index of this number is: 10
//  The index of this number is: 12
//  The index of this number is: 15
//  The index of this number is: 21
