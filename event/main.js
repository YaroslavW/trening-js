btn.onclick=()=>{alert('BTN')}

function Hello(){
	alert("I say Hello");
}

// button.onclick= Hello(); Immediately upon page loading
button.onclick= Hello; //on click

// with_this.onclick = function(){
// 	alert(this.innerHTML);
// } 
//This

with_this.onclick= () => {alert(this.innerHTML)} //undefined

const Hello2 = () => alert('Hello-2');

eL.addEventListener("click", Hello)
eL.addEventListener("click", Hello2)

function Trans(){
	alert("TRANS")
}



trans.ontransitioned = () => alert('TRANS'); //not working


 trans.addEventListener("transitionend", function() {
    alert( "addEventListener" ); // will work on the end of the animation
  });