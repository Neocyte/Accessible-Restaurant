// Creates a new cache and stores files into it
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

// Implements cache items after requests
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          // Returns a particular cache item if a request matches said cache item
          return response;
        } else {
          // Returns the result of a fetch if a request does not match a cache item
          return fetch(event.request);
        }
      });
  );
});
