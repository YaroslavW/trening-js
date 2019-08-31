const required_param = () => {
  throw new Error("Missed required param(s)");
};

function multiplay(a = required_param(), b = required_param()) {
  console.log(a * b);
}
// multiplay(); //Error("Missed required param(s)"))
// multiplay(5); //Error("Missed required param(s)"))
// multiplay(5, undefined); //Error("Missed required param(s)"))
// multiplay(undefined, 4); //Error("Missed required param(s)"))
multiplay(5, 4);
