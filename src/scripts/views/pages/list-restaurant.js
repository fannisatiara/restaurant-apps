import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
        <div class="loader-container" id="loader-container">
          <div id="loader"></div>
        </div>     
        <div id="main" class="main">
            <div class="mainlist">
              <h1>Find Best Restaurants</h1>
              <div class="mainitem" id="mainitem">
                  
              </div>
            </div>
        </div>
        `;
  },

  async afterRender() {
    const restaurant = await RestaurantDbSource.restaurantList();
    const restaurantContainer = document.querySelector('#mainitem');
    // const mainContainer = document.querySelector('#jumbotron');
    restaurant.forEach((data) => {
      restaurantContainer.innerHTML += createRestaurantTemplate(data);
    });
    // mainContainer.style.display = 'block';

    const loaderContainer = document.querySelector('#loader-container');
    loaderContainer.style.display = 'none';
  },
};

export default Restaurant;
