

document.querySelector('button').addEventListener('click',function(){
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let output = document.getElementById('output');
    startDate = Date.parse(startDate);
    endDate = Date.parse(endDate);

    for( let i = startDate; i <= endDate; i = i + 24 * 60 * 60 * 1000){
        output.innerHTML += new Date(i).toISOString().substr(0,10) + '<br />';
    }
    // console.log(startDate, endDate);
});

// https://www.epochconverter.com/ - good site for checking convertion date

