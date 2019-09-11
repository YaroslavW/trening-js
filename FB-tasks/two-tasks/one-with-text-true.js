// Нужно написать функцию, принимающую строку в качестве аргумента и
//  возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».

const findVowels = str => {
  let count = 0;
  const vowels = ["a", "o", "i", "e", "u"];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

console.log(findVowels("Hello")); // 2
console.log(findVowels("Why")); //0
