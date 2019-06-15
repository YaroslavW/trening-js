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
  for (var i = 0; i < anagrammArray.length; i++) {
    for (var j = 0; j < userArray.length; j++) {
      if (anagrammArray[i] == userArray[j]) {
        // delete userArray[j];
        useArray = userArray.splice(j, 1);
        // anagrammArray = anagrammArray.splice(i, 1);
       
      }
    }
  }
  return console.log(
    "UserArra = " + userArray + " ; " + " AnagrammArray = " + anagrammArray
  );
}

// checkingAnagramm("Hello", "el o ");
// UserArra = п,р,и,в,е,т ;  AnagrammArray = h,e,l,l,o
checkingAnagramm("Говно с дымом", "С новым годом");
// UserArra =  ;  AnagrammArray = с,н,о,в,ы,м,г,о,д,о,м
