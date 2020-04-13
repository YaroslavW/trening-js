var simpleArray = [
  {
    key: 12,
    value: "Hello",
  },
  {
    key: 13,
    value: "World",
  },
  {
    key: 14,
    value: "Something",
  },
];

// simpleArray.sort(function (val_1, val_2) {
//   if (val_1.key < val_2.key) {
//     return -1;
//   } else {
//     return 1;
//   }
// });
// 12 Hello
// 13 World
// 14 Something
simpleArray.sort(function (val_1, val_2) {
  if (val_1.key > val_2.key) {
    return -1;
  } else {
    return 1;
  }
});

let result = simpleArray.forEach((res) =>
  console.log(res.key + " " + res.value)
);
// 14 Something
// 13 World
// 12 Hello