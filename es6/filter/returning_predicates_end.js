// ===>>>> HTML
{/* <h2>All Restaurants</h2>
<ul id='restaurants'></ul>

<h2>Burger Joints</h2>
<ul id='burgerJoints'></ul>

<h2>Pizza Joints</h2>
<ul id='pizzaJoints'></ul>

<h2>Tex-Mex Joints</h2>
<ul id='texMexJoints'></ul>
  
<h2>Cheap Joints</h2>
<ul id='cheapJoints'></ul>
  
<h2>Moderately Priced Joints</h2>
<ul id='moderateJoints'></ul>
  
<h2>Expensive Joints</h2>
<ul id='expensiveJoints'></ul> */}



//===========  >>>   JS

// restaurants array imported from https://codepen.io/AdamGiese/pen/xJPPBV

const isKeyEqualToValue = key => value => object => object[key] === value;
const isPrice   = isKeyEqualToValue('price');
const isCuisine = isKeyEqualToValue('cuisine');

const isBurger    = isCuisine('Burger');
const isPizza     = isCuisine('Pizza');
const isTexMex    = isCuisine('Tex-Mex');

const isCheap     = isPrice('Cheap');
const isModerate  = isPrice('Moderate');
const isExpensive = isPrice('Expensive');

renderList(restaurants, 'restaurants'); 
renderList(restaurants.filter(isBurger), 'burgerJoints');
renderList(restaurants.filter(isPizza), 'pizzaJoints');
renderList(restaurants.filter(isTexMex), 'texMexJoints');

renderList(restaurants.filter(isCheap), 'cheapJoints');
renderList(restaurants.filter(isModerate), 'moderateJoints');
renderList(restaurants.filter(isExpensive), 'expensiveJoints');

// simple rendering function
function renderList (restaurantList, listId) {
  const list = document.getElementById(listId);
  
  const listItems = restaurantList.map(({name}) => {
    const item = document.createElement('li');
    item.innerText = name;
    return item;
  })
  
  listItems.forEach(listItem => {
    list.append(listItem);
  })
}