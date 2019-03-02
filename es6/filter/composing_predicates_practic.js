// 'restaurants' const imported from https://codepen.io/AdamGiese/pen/xJPPBV

const isKeyEqualToValue = key => value => object => object[key] === value;
const isPrice   = isKeyEqualToValue('price');
const isCuisine = isKeyEqualToValue('cuisine');

const isEvery = predicates => value => predicates.every(predicate => predicate(value));
const isAny   = predicates => value => predicates.some(predicate => predicate(value));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFilter = this.toggleFilter.bind(this)
    this.state = { 
      filters: {
        cuisine: [],
        price: [],
      }
    };
  }
  
  toggleFilter(filterType, value) {
    const filters = this.state.filters;
    const hasFilter = filters[filterType].includes(value);
    const newFilterValue = hasFilter 
      ? filters[filterType].filter(valueToRemove => valueToRemove !== value)
      : [...filters[filterType], value];
    
    this.setState({
      ...this.state,
      filters: {
        ...filters,
        [filterType]: newFilterValue,
      }
    });
  }
  
  render() {
    const filters = this.state.filters;
    const priceFilters = filters.price.map(price => isPrice(price));
    const isSelectedPrice = priceFilters.length ? isAny(priceFilters) : () => true;
    
    const cuisineFilters = filters.cuisine.map(cuisine => isCuisine(cuisine));
    const isSelectedCuisine = cuisineFilters.length ? isAny(cuisineFilters) : () => true;
    
    const passesFilters = isEvery([isSelectedPrice, isSelectedCuisine]);
    
    const allRestaurants = this.props.restaurants;
    const filteredRestaurants = allRestaurants.filter(passesFilters);
    
    const toPrice = mapToValue('price');
    const priceOptions = allRestaurants.map(toPrice).filter(isUnique);
    
    const priceToggles = priceOptions.map(price => (
      <ToggleFilter
        className={filters.price.includes(price) ? 'active' : 'inactive'}
        name={price}
        callback={() => this.toggleFilter('price', price)}
      />
    ));
    
    const toCuisine = mapToValue('cuisine');
    const cuisineOptions = allRestaurants.map(toCuisine).filter(isUnique);
    const cuisineToggles = cuisineOptions.map(cuisine => (
      <ToggleFilter
        className={filters.cuisine.includes(cuisine) ? 'active' : 'inactive'}
        name={cuisine}
        callback={() => this.toggleFilter('cuisine', cuisine)}
      />
    ));
    
    const restaurantCards = filteredRestaurants.map(({name}) => <Restaurant name={name} />);
    
    return (
      <div>
        <div className='wrapper'>
          <h2>Prices</h2>
          {priceToggles}
        </div>
                                                      
        <div className='wrapper'>
          <h2>Cuisines</h2>
          {cuisineToggles}
        </div>
                                                      
        <div className='wrapper'>
          <h2>Restaurants</h2>
          {restaurantCards}
        </div>
      </div>
    );
  }
}

function ToggleFilter ({callback, name, className}) {
  return (<button onClick={callback} className={className}>{name}</button>)
}

function Restaurant ({name}) {
  return (<h3>{name}</h3>);
}

ReactDOM.render(<App restaurants={restaurants}/>, document.getElementById('app'));


/* utility functions */

function isUnique (value, index, array) {
  return array.indexOf(value) === index;
}

function mapToValue (value) {
  return function (item) {
    return item[value];
  }
}