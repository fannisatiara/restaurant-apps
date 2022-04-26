import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import ReviewInitiator from '../../utils/review-initiator';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Detail = {
  async render() {
    return `
      <div class="loader-container" id="loader-container">
        <div id="loader"></div>
      </div> 
      <div id="main" class="main">
        <div class="mainlist">
          <div class="restaurant" id="restaurant"></div>
          <div id="customerReviewFormContainer" class="restaurant"></div>
          <div id="likeButtonContainer"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    // const mainContainer = document.querySelector('#jumbotron');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    // mainContainer.style.display = 'none';

    const loaderContainer = document.querySelector('#loader-container');
    loaderContainer.style.display = 'none';

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant,
    });

    ReviewInitiator.init({
      customerReviewContainer: document.querySelector('.detailRestaurant-review'),
      customerReviewFormContainer: document.querySelector('#customerReviewFormContainer'),
    });
  },
};

export default Detail;
