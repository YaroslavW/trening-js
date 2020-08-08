function geym() {
  const random = Math.random() * 10;
  console.log(random);
  if (random <= 4) {
    console.log("РИС");
  } else if (4 < random && random <= 7) {
    console.log("КАРТОШКА");
  } else {
    console.log("КУКУРУЗА");
  }
}
// geym();
// geym();
// geym();
// geym();
// geym();
// geym();
// geym();
// geym();
// geym();
// geym();
// geym();

const geim1 = () => {
  const random = Math.floor(Math.random() * Math.floor(3));
  switch (random) {
    case 0:
      console.log("РИС");
      break;
    case 1:
      console.log("КАРТОШКА");
      break;
    case 2:
      console.log("КУКУРУЗА");
      break;
    default:
      console.log("err", err);
  }
};
geim1();
geim1();
geim1();
geim1();
geim1();
geim1();
geim1();
geim1();
