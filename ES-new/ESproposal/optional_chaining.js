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
