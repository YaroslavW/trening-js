let options = {
    title: 'menu',
    width: 100,
    height: 200,
};

// let { title, width, height } = options;

// console.log(` title = ${title}; width = ${width}; height = ${height};`);
// title = menu; width = 100; height = 200;

// Change property name at assignment

// let {title: name, width: w, height: h} = options;
// console.log(` name = ${name}; w = ${w}; h = ${h};`);

// destructuring object and default property values

// let { title, width: w, color:c ='red'} = options;
// console.log(` title = ${title}; w = ${w}; c = ${c};`);
// title = menu; w = 100; color = red;


// New standart
let { title, ...size } = options;

console.log(` title = ${title}; size = ${size}; `);
// title = menu; size = [object Object]; 