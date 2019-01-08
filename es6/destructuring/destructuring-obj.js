let options = {
    title: 'menu',
    width: 100,
    height: 200,
};

// let { title, width, height } = options;

// console.log(` title = ${title}; width = ${width}; height = ${height};`);
// title = menu; width = 100; height = 200;

// Change property name at assignment

let {title: name, width: w, height: h} = options;
console.log(` name = ${name}; w = ${w}; h = ${h};`);