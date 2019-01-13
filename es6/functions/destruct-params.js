'use strict';
let options = {
    title: 'Menu',
    width: 300,
    height: 200,
}

function getItems({title:t, width, height, size:s = 'Big'}){
 console.log(`Title = ${t}; Width = ${width}; height = ${height} Size = ${s}`);
}
getItems(options);
// Title = Menu; Width = 300; height = 200 Size = Big