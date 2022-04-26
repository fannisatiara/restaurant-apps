import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postRestaurantReview(restaurant) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(restaurant),
      };
      const responseText = await fetch(API_ENDPOINT.POST_REVIEW, options);
      return responseText.json();
    } catch (error) {
      return { error: true, message: `${error.message}! Review not successfully added!\nPlease check your internet connection!` };
    }
  }
}

export default RestaurantDbSource;
