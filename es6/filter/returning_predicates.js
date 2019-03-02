const restaurants = [
    {
        name: "Dan's Hamburgers",
        price: 'Cheap',
        cuisine: 'Burger',
    },
    {
        name: "Austin's Pizza",
        price: 'Cheap',
        cuisine: 'Pizza',
    },
    {
        name: "Via 313",
        price: 'Moderate',
        cuisine: 'Pizza',
    },
    {
        name: "Bufalina",
        price: 'Expensive',
        cuisine: 'Pizza',
    },
    {
        name: "P. Terry's",
        price: 'Cheap',
        cuisine: 'Burger',
    },
    {
        name: "Hopdoddy",
        price: 'Expensive',
        cuisine: 'Burger',
    },
    {
        name: "Whataburger",
        price: 'Moderate',
        cuisine: 'Burger',
    },
    {
        name: "Chuy's",
        cuisine: 'Tex-Mex',
        price: 'Moderate',
    },
    {
        name: "Taquerias Arandina",
        cuisine: 'Tex-Mex',
        price: 'Cheap',
    },
    {
        name: "El Alma",
        cuisine: 'Tex-Mex',
        price: 'Expensive',
    },
    {
        name: "Maudie's",
        cuisine: 'Tex-Mex',
        price: 'Moderate',
    },
];

// const isBurger = ({cuisine}) => cuisine === 'Burger';
// const isPizza  = ({cuisine}) => cuisine === 'Pizza';

// const isCuisine = comparison => ({cuisine}) => cuisine === comparison;
// const isBurger  = isCuisine('Burger');
// const isPizza   = isCuisine('Pizza');
// console.log(isBurger);  //  [Function]
// console.log(isPizza); //  [Function]


// const isPrice = comparison => ({price}) => price === comparison;
// const isCheap = isPrice('Cheap');
// const isExpensive = isPrice('Expensive');


const isKeyEqualToValue = key => value => object => object[key] === value;

// these can be rewritten
const isCuisine = isKeyEqualToValue('cuisine');
console.log('isCuisine',isCuisine); // value => object => object[key] === value
const isPrice = isKeyEqualToValue('price');
console.log('isPrice', isPrice); // value => object => object[key] === value
// these don't need to change
const isBurger = isCuisine('Burger');
console.log('isBurger', isBurger) // object => object[key] === value
const isPizza = isCuisine('Pizza');
console.log('isPizza', isPizza) // object => object[key] === value
const isCheap = isPrice('Cheap');
console.log('isCheap ', isCheap ) // object => object[key] === value
const isExpensive = isPrice('Expensive');
console.log('isExpensive', isExpensive); // object => object[key] === value