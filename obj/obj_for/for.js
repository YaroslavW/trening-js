// Try to for loop this by order 😎
// Monitor, Mice, Memory, Printer
// https://www.facebook.com/groups/1517091958315927/permalink/2924510144240761/

const items = {
22222: {
"name": "Monitor",
"price": "1500,00"
},
11111: {
"name": "Mice",
"price": "650,00"
},
44444: {
"name": "Memory",
"price": "1000,00"
},
33333: {
"name": "Printer",
"price": "3000,00"
}
}

function getName(obj) {
Object.keys(obj).map((key) => {
  let newKey = '+' + key;
  return { [newKey] : obj[key] }
})
  console.log(obj);
}
getName(items);
// { '11111': { name: 'Mice', price: '650,00' },
//   '22222': { name: 'Monitor', price: '1500,00' },
//   '33333': { name: 'Printer', price: '3000,00' },
//   '44444': { name: 'Memory', price: '1000,00' } }


// function getName(obj){
//   let res = ' ';
// for(var key in obj){
//   key = +key;
//   let name = obj[key]['name'];
//   // console.log(name)
//   res += name + ' ';
// }
//  console.log(res);
// }
// getName(items);







// function getName(obj) {
//  var arr = [];
//  var res=" "
//  for (var index in obj) {
//    arr.push(obj[index]);
//  }
//  for(var i = 0; i < arr.length; i++){
//    res += arr[i]['name'] + ' ';
//  }
// console.log('res = '+ res);
// // res =  Mice Monitor Printer Memory 
//   console.log(arr);
// }
// getName(items);

// [ { name: 'Mice', price: '650,00' },
  // { name: 'Monitor', price: '1500,00' },
  // { name: 'Printer', price: '3000,00' },
  // { name: 'Memory', price: '1000,00' } ]

// function getName(obj){
//   let res = ' ';
// for(var key in obj){
//   // key+=key+'';
//   let name = obj[key]['name'];
//   // console.log(name)
//   res += name + ' ';
// }
//  console.log(res);
// }
// getName(items); 
// Mice Monitor Printer Memory 
// function getName(obj) {
//   let res = [];
//   for (var key in obj) {
//     let name = obj[key]["name"];
//     res.push(name);
//   }
//   res.sort();
//   console.log(res); [ 'Memory', 'Mice', 'Monitor', 'Printer' ]
// }
// getName(items);

// console.log(items['33333']['name'])  Printer