// Стандарт ES2019 принёс изменения в то, как работает метод функций toString.
//  Ранее он немного искажал оформление выводимого кода:
function greeting() {
  const name = "CSS Tricks";
  console.log(`hello from ${name}`);
}

greeting.toString();
//'function greeting() {\nconst name = \'CSS Tricks\'\nconsole.log(`hello from ${name} //`)\n}
