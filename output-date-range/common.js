

document.querySelector('button').addEventListener('click',function(){
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    startDate = Date.parse(startDate);
    endDate = Date.parse(endDate);
    console.log(startDate, endDate);
});

// https://www.epochconverter.com/ - good site for checking convertion date

