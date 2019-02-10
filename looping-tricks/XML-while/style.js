var xhttp = new XMLHttpRequest (); 
xhttp.onreadystatechange = function () { 
    if (this.readyState == 4 && this.status == 200) { 
        myFunction (this); 
    } 
}; 
xhttp.open ("GET", "XMLFile1.xml", true); 
xhttp.send ();
function myFunction (xml) { 
    var xmlDoc = xml.responseXML; 
    var cityNames = Array.from (xmlDoc.getElementsByTagName ("city")); 
    var i = 0;  
    
    do { 
        console.log (cityNames [i] .innerHTML); 
        я ++; 
    } 
    while (i <cityNames.length); 
}