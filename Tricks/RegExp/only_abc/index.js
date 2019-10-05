function replNumbers(str) {
  return str.replace(/\d+/g, "digital");
}

console.log(replNumbers("Alina cabaeva .65743bbb902"));
// Alina cabaeva .digitalbbbdigital;
