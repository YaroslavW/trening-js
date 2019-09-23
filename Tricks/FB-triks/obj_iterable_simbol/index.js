Object.prototype[Symbol.iterator] = function*() {
  // prettier-ignore
  yield* Object.values(this);
};

const person = {
  firstName: "John", //John
  lastName: "Doe", // doe
  age: 30, // 30
  eyeColor: "blue" // blue
};

for (let prop of person) {
  console.log(prop);
}
