self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('main-static-v1').then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'restaurant_info.html',
        'css/styles.css',
        'js/main.js',
        'js/restaurant_info.js',
        'js/dbhelper.js',
        'data/restaurants.JSON',
        'img/'
      ]);
    })
  );
});
