function checkingAnagramm(userString, anagramm) {
  function toArray(valuue) {
    return valuue
      .toLocaleLowerCase()
      .replace(/\s/g, "")
      .split("");
  }
  let userArray = toArray(userString);
  let anagrammArray = toArray(anagramm);
  if (userArray.length == anagrammArray.length) {
   
      for (var i = 0; i < anagrammArray.length; i++) {
        for (var j = 0; j < userArray.length; j++) {
          if (anagrammArray[i] == userArray[j]) {
            // delete userArray[j];
            useArray = userArray.splice(j, 1);
            // anagrammArray = anagrammArray.splice(i, 1);
          }
        }
      }
    
  } else {
    return console.log("NOT");
  }

  return console.log(
    "UserArra = " + userArray + " ; " + " AnagrammArray = " + anagrammArray
  );
}
