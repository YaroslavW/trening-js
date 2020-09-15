const data = {
  user: {
    address: {
      street: "Pennsylvania Avenue",
    },
  },
};
// or
// const data = {
//   user: {},
// };
console.log(data.user.address.street); // Uncaught TypeError: Cannot read property 'street' of undefined

const street =
  data && data.user && data.user.address && data.user.address.street;
console.log(street); // undefined

console.log(data.user?.address?.street); // undefined


// test
import test from "ava";

const valid = {
  user: {
    address: {
      street: "main street",
    },
  },
};

function getAddress(data) {
  return data?.user?.address?.street;
}

test("Optional Chaining returns real values", (t) => {
  const result = getAddress(valid);
  t.is(result, "main street");
});

// 
test("Optional chaining returns undefined for nullish properties.", (t) => {
  t.is(getAddress(), undefined);
  t.is(getAddress(null), undefined);
  t.is(getAddress({}), undefined);
});