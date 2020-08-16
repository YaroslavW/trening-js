const findName = async () => {
  let res = await fetch("https://randomuser.me/api/");
  res = await res.json();
  console.log(res);
};

findName();
