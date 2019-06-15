// const str_1 = "С Новым Годом";

// const arr_1 = str_1
//   .toLocaleLowerCase() // нижний регистр
//   .replace(/\s/g, "") //убрать пробелы внутри
//   .split(""); //в массив

// console.log(arr_1);
// // [ 'с', 'н', 'о', 'в', 'ы', 'м', 'г', 'о', 'д', 'о', 'м' ]

function checkingAnagramm(userString, anagramm) {
  function toArray(valuue) {
    return valuue
      .toLocaleLowerCase()
      .replace(/\s/g, "")
      .split("");
  }
  let userArray = toArray(userString);
  let anagrammArray = toArray(anagramm);
  return console.log(
    "UserArra = " + userArray + " ; " + " AnagrammArray = " + anagrammArray
  );
}

checkingAnagramm("  П Р ивет", " Hel l o ");
// UserArra = п,р,и,в,е,т ;  AnagrammArray = h,e,l,l,o
