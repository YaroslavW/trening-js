const names = ['John', 'Yaroslav', 'Sarah', 'Sam'];
// Yaroslav.apply(null, names);
function Yaroslav(a, b, c, d) {
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
}

// Yaroslav(names);
Yaroslav(...names);
// console.log(Yaroslav(names)); //undefined

// Yaroslav.apply(null, names);
// console.log(Yaroslav(names));