function addData() {
  const age = prompt("Type your age");
  // console.log(age);
  const elAge = document.getElementById("age");
  const elMoney = document.getElementById("money");
  elAge.innerHTML = age;
  let money = null;
  let number = Math.random() * 10 + 1;
  if (age < 10) {
    money = Math.round(age / number + 85);
  } else if (age >= 10 && age <= 50) {
    money = Math.round(age / number + 60);
  } else {
    money = Math.round(age / number + 30);
  }
  return (elMoney.innerHTML = money);
}

const check = () => {
  console.log(`age = ${window.age}`);
  console.log(`money = ${window.money}`);
  console.log(`elAge = ${window.elAge}`);
  console.log(`elMoney = ${window.elMoney}`);
};
// age = [object HTMLSpanElement]
// money = [object HTMLSpanElement]
// elAge = undefined
// elMoney = undefined
