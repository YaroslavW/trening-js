let myList = [1, 2, 5, "Jack", 45, "Jill", 98];

let numb = [];
let strgs = [];
let unknown = [];

for (let index = 0; index < myList.length; index++) {
  if (typeof myList[index] === "string") {
    strgs.push(myList[index]);
  } else if (typeof myList[index] === "number") {
    numb.push(myList[index]);
  } else {
    unknown.push(myList[index]);
  }
}

console.log(strgs);
console.log(numb);
