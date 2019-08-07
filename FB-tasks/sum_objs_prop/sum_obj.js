// https://www.facebook.com/levelhunt/photos/a.1422238711243405/1666694233464517/?type=3&theater&ifg=1

const object = { "0": 1, 0: 2 };
console.log(`Obect with "" =  ${object["0"]}`);
console.log(`Obect without "" =  ${object[0]}`);
const result = object["0"] + object[0];
console.log(result);
// 4

const obj = { a: 1 };
console.log(obj);
// { a: 1 }
obj["a"] = 2;
console.log(obj);
// { a: 2 }
