let fruit = prompt("How fruit?", "apple");

let bag = {
  [fruit]: 10,
  plump: 4
};
function show_key(bag){
  for ( key in bag) {
    alert(`Key = ${key}; Value = ${bag[key]}`);
  }
}