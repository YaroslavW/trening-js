const arr = ["name", "age", "job", 45];
const obj = {};

// =================================================>>> AMATEUR <=========
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== undefined) {
    obj[i] = arr[i];
  }
}
console.log(obj);
// { '0': 'name', '1': 'age', '2': 'job', '3': 45 }

// ==============================================>>> PRO <<<=============
const arr_1 = ["name", "age", "job", 45];
const obj_1 = { ...arr };

console.log(obj_1)
// { '0': 'name', '1': 'age', '2': 'job', '3': 45 }