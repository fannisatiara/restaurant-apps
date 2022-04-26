const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
    I.seeElement('#mainitem');
    I.see('Belum ada restaurant yang menjadi favorit Anda', '.notfound');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Belum ada restaurant yang menjadi favorit Anda', '.notfound');
  
  I.amOnPage('/');

  I.seeElement('.itemtitle a');
  const firstRestaurant = locate('.itemtitle a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.item');

  const likedRestaurantName = await I.grabTextFrom('.itemtitle');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Belum ada restaurant yang menjadi favorit Anda', '.notfound');

  I.amOnPage('/');

  I.seeElement('.itemtitle a');
  const firstRestaurant = locate('.itemtitle a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.item');

  const firstRestaurantLike = locate('.itemtitle').first();
  const firstRestaurantNameLike = await I.grabTextFrom(firstRestaurantLike);
  I.click(firstRestaurantLike);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.see('Belum ada restaurant yang menjadi favorit Anda', '.notfound');

  assert.strictEqual(firstRestaurantName, firstRestaurantNameLike);
});