let testArrayObject = [
  { name: "Javascript everywhere", public: "20k+", daily_visitor: 9000 },
  { name: "Jsgrip", public: "22k+", daily_visitor: 5000 },
  { name: "Javascript Developer", public: "25k+", daily_visitor: 3000 },
  { name: "jsgrip.com", public: "100k+", daily_visitor: 10000 },
  { name: "Oyy teri", public: "2k+", daily_visitor: 10 },
];

// Remove those record from array who has less then 5000 daily_visitor
testArrayObject = testArrayObject.filter(
  (record) => record.daily_visitor >= 5000
);
console.log(testArrayObject);
// [
//   { name: "Javascript everywhere", public: "20k+", daily_visitor: 9000 },
//   { name: "Jsgrip", public: "22k+", daily_visitor: 5000 },
//   { name: "jsgrip.com", public: "100k+", daily_visitor: 10000 },
// ];