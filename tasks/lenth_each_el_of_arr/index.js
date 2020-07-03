const elements = [
  "JavaScript",
  "React",
  "JS",
  "Node",
  "Express",
  "MongoDB",
  "GraphQL",
  "Gatsby",
];

const lengths = elements.map(function (element) {
  return element.length;
});

console.log(lengths);
// [
//   10, 5, 2, 4,
//    7, 7, 7, 6
// ]