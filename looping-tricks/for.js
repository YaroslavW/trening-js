// ==>Looping through an Array
var numbers = [10, 20, 30, 40, 50];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// 10
// 20
// 30
// 40
// 50

// ==>Looping through DOM elements
var elements = document.querySelectorAll("a");
for (var i= 0; i < elements.length; i++) {
    elements[i].style.color = "red";
}