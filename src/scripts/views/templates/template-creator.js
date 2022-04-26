/* eslint-disable import/no-cycle */
import CONFIG from '../../globals/config';
import DetailHelper from '../../utils/detail-helper';

const createRestaurantDetailTemplate = (data) => `
    <div class="item">
        <img class="lazyload itemimage skeleton-loader" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + data.pictureId}" alt="${data.name}" tabindex="0">
        <div class="itemcity">${data.city}</div>
        <div class="itemcontent skeleton-loader" style="text-align:left;">
            <p class="itemrating"><i class="far fa-star"></i>
                Rating: <a>${data.rating}</a>
            </p>
            <h2>${data.name}</h2>
            <p class="address">${data.address}</p>
            <br>
            <h3>Kategori</h3>
            <div style="margin-bottom:20px">${data.categories.map((category) => `${category.name}`).join(' - ')}</div>
            <div class="descdetail">${data.description}</div>
            <br>
            <div class="restaurantmenu">
                <ul><h3>Menu Makanan</h3><br>${data.menus.foods.map((menu) => `<li><p><i class="fas fa-pizza-slice"></i>${menu.name}</p></li>`).join('')}</ul>
                <ul><h3>Menu Minuman</h3><br>${data.menus.drinks.map((menu) => `<li><p><i class="fas fa-cocktail"></i>${menu.name}</p></li>`).join('')}</ul>
            </div>
        </div>
        <h2 class="review-title">Ulasan</h2>
        ${DetailHelper.eachCustomersReview(data)}
    </div> 
`;

const createRestaurantTemplate = (data) => `
    <div class="item">
        <img class="lazyload itempict skeleton-loader" width="100%" height="350px" src="./images/placeholder.png" alt="${data.name}" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + data.pictureId}" title="${data.name}" tabindex="0">
        <div class="itemcity skeleton-loader">${data.city}</div>
        <div class="itemcontent skeleton-loader">
            <p class="itemrating">
                Rating: <a class="ratingvalue">${data.rating}</a>
            </p>
            <h1 class="itemtitle"><a href="${`/#/detail/${data.id}`}">${data.name}</a></h1>
            <div class="itemdesc">${data.description.slice(0, 150)}...</div>         
        </div>
    </div>
`;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="far fa-heart" aria-hidden="true"></i>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fas fa-heart" aria-hidden="true"></i>
    </button>
`;

const createCustomerReviewTemplate = (customerReview) => `
<div class="detailRestaurant-review">
            <div class="restaurant-review" id="restaurant-review">
                <div class="review-header">
                    <p class="review-name"><i class="far fa-user"></i> ${customerReview.name}</p>
                    <p class="review-date">${customerReview.date}</p>
                </div>
                <div class="review-comment">
                    <p><i class="far fa-comment"></i> ${customerReview.review}</p>
                </div>
            </div>
`;

const createCustomerReviewFormTemplate = () => `
        <form class="form-review" id="form-review">
        <h2>Berikan Ulasan Anda</h2>
        <div class="form-group">
            <label for="inputName">Name</label>
            <input id="inputName" type="text" class="form-control" placeholder="Your Name...">
        </div>
        <div class="form-group">
            <label for="inputReview">Review</label>
            <input id="inputReview" type="text" class="form-control" placeholder="Your Review...">
        </div>
        <div class="form-group">
            <button id="submitReview" type="submit" class="submitReview">Kirim Ulasan</button>
        </div>
        </form>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createCustomerReviewTemplate,
  createCustomerReviewFormTemplate,
};
