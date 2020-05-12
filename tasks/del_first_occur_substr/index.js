// Напишите функцию delete_first_occurrence(str, subst), которая удаляет из строки str первое вхождение подстроки substr.

var str = "вишня, груша, слива, груша";

function delete_first_occurrence(str, subst) {
  return str.replace(subst + ", ", "");
}

console.log(delete_first_occurrence(str, "груша")); // 'вишня, слива, груша'
