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

simpleArray.sort(function (val_1, val_2) {
  if (val_1.value < val_2.value) {
    return -1;
  } else {
    return 1;
  }
});

// 12 Hello
// 14 Something
// 13 World

let result = simpleArray.forEach((res) =>
  console.log(res.key + " " + res.value)
);
