let a = "";

for (let i = 0; i < 6; i++) {
  a += "Ya";
}
console.log(a); //YaYaYaYaYaYa
console.log(typeof a); //string

let b = Array(6).join("Ay");
console.log(b); //AyAyAyAyAy
console.log(typeof b); //string

let c = "Wo".repeat(6);
console.log(c); //WoWoWoWoWoWo
console.log(typeof c); //string
