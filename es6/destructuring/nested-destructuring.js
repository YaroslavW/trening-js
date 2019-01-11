'use strict';
let options = {
    size: {
        width: 100,
        height: 200,
    },
    items: ['goods', 'services'],
}

let { title="Menu", size:{width, height}, items:[item1, item2]} = options

console.log(title);
console.log(width);
console.log(height);
console.log(item1);
console.log(item2);