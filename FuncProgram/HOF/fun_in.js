fetch("user", { userId: 1 }).then(response => {
  persistUser(response);
});
