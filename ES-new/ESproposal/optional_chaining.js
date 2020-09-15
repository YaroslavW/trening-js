const data = {
  user: {
    address: {
      street: 'Pennsylvania Avenue',
    }, 
  },
};
// or
// const data = {
//   user: {},
// };
console.log(data.user.address.street); // Uncaught TypeError: Cannot read property 'street' of undefined