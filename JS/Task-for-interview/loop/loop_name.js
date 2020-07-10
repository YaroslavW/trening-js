// Используя цикл, рассмотреть массив имен и выдать в консоль (или на экран) «Привет, name!» или «Пока, name!» в зависимости от того, с какой буквы начинается имя. Если имя начинается с буквы «и» или «И», то выводить «Пока, name!», в остальных случаях — «Привет, name!».

const names = [
  "Иван",
  "алексе",
  "Лёха",
  "игорь",
  "Саша",
  "Петро",
  "дмитро",
  "Степан",
  "изяслав",
  "Ярослав",
  "Костя",
];

function sayHello(arr) {
  for (let i = 0; i <= arr.length; i++) {
    // console.log(String(arr[i]).charAt(0));
    // String(arr[i]).charAt(0) == "и" || String(arr[i]).charAt(0) == "И"
    //   ? console.log(`Пока, ${arr[i]}`)
    //   : console.log(`Привет, ${arr[i]}`);
    if (String(arr[i]).charAt(0) === "И" || String(arr[i]).charAt(0) == "и") {
      console.log(`Пока, ${arr[i]}`);
    } else {
      console.log(`Привет, ${arr[i]}`);
    }
  }
}

sayHello(names);
