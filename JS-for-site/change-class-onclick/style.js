let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    const c = document.querySelector('#cont').classList;
  c.toggle('col-md-9');
  c.toggle('col-md-12');
  document.querySelector('#side').classList.toggle('d-done');
})