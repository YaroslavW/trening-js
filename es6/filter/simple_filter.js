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

// const isBurger = ({ cuisine }) => cuisine === 'Burger';
// const burgerJoints = restaurants.filter(isBurger);
// console.log( burgerJoints );

// [ { name: 'Dan\'s Hamburgers', price: 'Cheap', cuisine: 'Burger' },
//   { name: 'P. Terry\'s', price: 'Cheap', cuisine: 'Burger' },
//   { name: 'Hopdoddy', price: 'Expensive', cuisine: 'Burger' },
//   { name: 'Whataburger', price: 'Moderate', cuisine: 'Burger' } ]


// ====> Negating Predicates
// Its not DRY code
// const isNotBurger = ({cuisine}) => cuisine !== 'Burger';
// const burgerNotJoints = restaurants.filter(isNotBurger);
// console.log( burgerNotJoints );


// [ { name: 'Austin\'s Pizza', price: 'Cheap', cuisine: 'Pizza' },
//   { name: 'Via 313', price: 'Moderate', cuisine: 'Pizza' },
//   { name: 'Bufalina', price: 'Expensive', cuisine: 'Pizza' },
//   { name: 'Chuy\'s', cuisine: 'Tex-Mex', price: 'Moderate' },
//   { name: 'Taquerias Arandina',
//     cuisine: 'Tex-Mex',
//     price: 'Cheap' },
//   { name: 'El Alma', cuisine: 'Tex-Mex', price: 'Expensive' },
//   { name: 'Maudie\'s', cuisine: 'Tex-Mex', price: 'Moderate' } ]

// const isBurger = ({cuisine}) => cuisine === 'Burger';
// const isNotBurger = restaurant => !isBurger(restaurant);
// console.log(isNotBurger); //[Function: isNotBurger]

// const burgerNotJoints = restaurants.filter(isNotBurger);
// console.log( burgerNotJoints );
// [ { name: 'Austin\'s Pizza', price: 'Cheap', cuisine: 'Pizza' },
//   { name: 'Via 313', price: 'Moderate', cuisine: 'Pizza' },
//   { name: 'Bufalina', price: 'Expensive', cuisine: 'Pizza' },
//   { name: 'Chuy\'s', cuisine: 'Tex-Mex', price: 'Moderate' },
//   { name: 'Taquerias Arandina',
//     cuisine: 'Tex-Mex',
//     price: 'Cheap' },
//   { name: 'El Alma', cuisine: 'Tex-Mex', price: 'Expensive' },
//   { name: 'Maudie\'s', cuisine: 'Tex-Mex', price: 'Moderate' } ]

//===<<Right method negative predicate
const negate = predicate => function() {
    return !predicate.apply(null, arguments);
  }
  
  const isBurger = ({cuisine}) => cuisine === 'Burger';
  const isNotBurger = negate(isBurger);
  
  const isPizza = ({cuisine}) => cuisine === 'Pizza';
  const isNotPizza = negate(isPizza);
  console.log(isNotPizza); //[Function]
  const burgerNotJoints = restaurants.filter(isNotPizza);
console.log( burgerNotJoints );
// [ { name: 'Dan\'s Hamburgers', price: 'Cheap', cuisine: 'Burger' },
//   { name: 'P. Terry\'s', price: 'Cheap', cuisine: 'Burger' },
//   { name: 'Hopdoddy', price: 'Expensive', cuisine: 'Burger' },
//   { name: 'Whataburger', price: 'Moderate', cuisine: 'Burger' },
//   { name: 'Chuy\'s', cuisine: 'Tex-Mex', price: 'Moderate' },
//   { name: 'Taquerias Arandina',
//     cuisine: 'Tex-Mex',
//     price: 'Cheap' },
//   { name: 'El Alma', cuisine: 'Tex-Mex', price: 'Expensive' },
//   { name: 'Maudie\'s', cuisine: 'Tex-Mex', price: 'Moderate' } ]