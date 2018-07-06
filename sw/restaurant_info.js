self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('restaurant-static-v1').then(function(cache) {
      return cache.addAll([
        '/',
        'css/styles.css',
        'js/restaurant_info.js',
        'js/dbhelper.js',
        'data/restaurants.JSON',
        'img/'
      ]);
    })
  );
});
