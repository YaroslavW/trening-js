const list = document.getElementById('list');

list.addEventListener('click', function(e){
  // console.log(e.target);
  const el = e.target;
  const list_items = document.querySelectorAll(".list__item");
  console.log(typeof list_items); // object
 list_items.forEach(element => {
  //  console.log(element)
  element.classList.remove('active');
 });
el.classList.add('active')

})