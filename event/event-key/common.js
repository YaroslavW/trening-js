let flag = false;
const y = document.getElementById("Y");
document.onkeydown = function(event) {
  // console.log(event);
  if (event.code == "AltLeft") flag = true;
  if (event.code == "KeyY" && flag) {
    flag = false;
    console.log("work");
    y.style.visibility = "visible";
  }
};
