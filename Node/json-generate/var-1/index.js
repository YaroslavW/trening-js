// Output in beautiful view on the page index.html

var data = {};
data.table = [];
for (i = 0; i < 26; i++) {
  var obj = {
    id: i,
    square: i * i,
  };
  data.table.push(obj);
}

document.getElementById("json").innerHTML = JSON.stringify(data, undefined, 2);