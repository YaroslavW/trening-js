const root = document.getElementById('root');

// let output = moment().format('LTS');

// root.innerHTML = output;

function tick(){
    setTimeout(()=>{
        root.innerHTML = '';  
        // var output = moment().format('LTS'); 
        var output = moment().format('MMMM Do YYYY, h:mm:ss a'); 
        root.innerHTML = output; 
        tick();
    }, 1000);
}
tick();
