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

const cheapBurgers = restaurants.filter(isCheap).filter(isBurger);
// Another option is to "compose" the two predicates into a single one.
const isCheapBurger = restaurant => isCheap(restaurant) && isBurger(restaurant);
const isCheapPizza = restaurant => isCheap(restaurant) && isPizza(restaurant);


const both = (predicate1, predicate2) => value =>
  predicate1(value) && predicate2(value);

const isCheapBurger = both(isCheap, isBurger);
const isCheapPizza = both(isCheap, isPizza);

const cheapBurgers = restaurants.filter(isCheapBurger);
const cheapPizza = restaurants.filter(isCheapPizza);


const either = (predicate1, predicate2) => value =>
  predicate1(value) || predicate2(value);

const isDelicious = either(isBurger, isPizza);
const deliciousFood = restaurants.filter(isDelicious);



const isDelicious = restaurant =>
  [isPizza, isBurger, isBbq].some(predicate => predicate(restaurant));

const isCheapAndDelicious = restaurant =>
  [isDelicious, isCheap].every(predicate => predicate(restaurant));



  const isEvery = predicates => value =>
  predicates.every(predicate => predicate(value));

const isAny = predicates => value =>
  predicates.some(predicate => predicate(value));

const isDelicious = isAny([isBurger, isPizza, isBbq]);
const isCheapAndDelicious = isEvery([isCheap, isDelicious]);