btn.onclick=()=>{alert('BTN')}

function Hello(){
	alert("Hello");
}

// button.onclick= Hello(); Immediately upon page loading
button.onclick= Hello; //on click

// with_this.onclick = function(){
// 	alert(this.innerHTML);
// } 
//This

with_this.onclick= () => {alert(this.innerHTML)} //undefined