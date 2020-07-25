let watchList = [
  {
    title: "Header-1",
    year: "2019",
  },
  {
    title: "Something",
    year: "2020",
  },
];

let mappedList = watchList.map((item) => {
  return { title: item.title };
});
console.log(mappedList);
// [ { title: 'Header-1' }, { title: 'Something' } ]
let newMapped = watchList.map((item) => {
  title: item.title,
});
console.log(newMapped);
// [ undefined, undefined ]

// let newMapped = watchList.map((item) => item.title);
// [ 'Header-1', 'Something' ]

let newMapped = watchList.map((item) => ({
  title: item.title,
}));
// [ { title: 'Header-1' }, { title: 'Something' } ]