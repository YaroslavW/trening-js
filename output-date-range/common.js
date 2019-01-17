const btn = document.querySelector('button');
const start = document.getElementById('start-date');
const end = document.getElementById('end-date');

btn.addEventListener('click',function(){
    let startDate = start.value;
    let endDate = end.value;
    console.log(startDate, endDate);
})