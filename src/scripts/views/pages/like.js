import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <div class="loader-container" id="loader-container">
          <div id="loader"></div>
        </div> 
        <div id="main" class="main">
          <div class="mainlist">
            <div class="notfound">

            </div>
            <div class="mainitem" id="mainitem">

            </div>
          </div>
        </div>
        `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    // console.log(restaurant);

    const restaurantContainer = document.querySelector('#mainitem');
    // const mainContainer = document.querySelector('#jumbotron');

    if (restaurant.length === 0) {
      document.querySelector('.notfound').innerHTML = `
        <h2>Belum ada restaurant yang menjadi favorit Anda</h2>
      `;
    } else {
      restaurant.forEach((data) => {
        restaurantContainer.innerHTML += createRestaurantTemplate(data);
      });
    }

    // mainContainer.style.display = 'block';
    const loaderContainer = document.querySelector('#loader-container');
    loaderContainer.style.display = 'none';
  },
};

export default Like;
