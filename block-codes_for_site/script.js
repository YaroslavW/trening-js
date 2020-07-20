// progressbar has tp reach 100% in 3000ms
// width = 500 height=30px

// 3000/100 = 30ms

const container = document.querySelector(".container");
const inner = document.createElement("div");
container.appendChild(inner);

inner.style.width = "0px";
inner.style.height = "inherit";
inner.style.background = "blue";

// debugger;
let width = 0;
setInterval(() => {
  width++;
  console.log(width);
}, 30);
