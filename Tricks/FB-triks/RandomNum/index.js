// Returns a random number between min (inclusive) and max (exclusive)

const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

console.log(getRandomNumber(8, 12));
// 8.01052365964663


// Returns a random number between min (inclusive) and max (inclusive)

const getRandomNumberInc = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(getRandomNumberInc(8, 12));
// 8