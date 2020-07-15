const myPurchases = {};
const myStore = {
  bread: 100,
  eggs: 10000,
  orange: 20,
  avocado: 1,
  plums: 50,
  apples: 25,
};

const purchases = (store, buy) => {
  store.hasOwnProperty("avocado") ? (buy.milk = 6) : (buy.milk = 2);
  return console.log(buy);
};
const newPurchases = purchases(myStore, myPurchases);
// { milk: 6 }
console.log(myStore);
// {
//   bread: 100,
//   eggs: 10000,
//   orange: 20,
//   avocado: 1,
//   plums: 50,
//   apples: 25
// }
console.log(myPurchases);
{
  milk: 6;
}