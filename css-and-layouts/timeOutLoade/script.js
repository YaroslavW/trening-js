

window.onload = function(){
  setTimeout(changeStyles, 5000)
}

function changeStyles(){
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "style2.css";

  document.body.appendChild(style);
}