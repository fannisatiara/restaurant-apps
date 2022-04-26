import ListRestaurant from '../views/pages/list-restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': ListRestaurant, // default page
  '/home': ListRestaurant,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
