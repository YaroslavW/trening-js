'use strict';
// Inside the shooter functions, this is the same as the outside.
// let group = {
//     title: 'Our course',
//     students: ['John','Sarah','Bill'],

//     showList: function() {
//         this.students.forEach(
//             student => console.log(this.title + ' : ' + student)
//         )
//     }
// }
// group.showList();
// Our course : John
// Our course : Sarah
// Our course : Bill

let group = {
    title: 'Our course',
    students: ['John','Sarah','Bill'],

    showList: function() {
        this.students.forEach(function(student) {
          console.log(this.title + ': ' + student); // будет ошибка
        })
      }
}
group.showList();
// Errror
// this внутри forEach будет undefined.
// TypeError: Cannot read property 'title' of undefined