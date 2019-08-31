const arr = ["String", "Name", "0", "99", "hi there"];
// wanted: ["String", "Name", 0, 99, "hi there"]

let updatedArr = arr.map(e =>
  typeof Number(e) === "number" && !isNaN(e) ? Number(e) : e
);
console.log(updatedArr);
// [ 'String', 'Name', 0, 99, 'hi there' ]