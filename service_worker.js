// Creates a new cache and stores files into it
const staticCache = 'main-static-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCache).then(function(cache) {
      return cache.addAll([
        './',
        'index.html',
        'restaurant.html',
        'css/styles.css',
        'js/main.js',
        'js/restaurant_info.js',
        'js/dbhelper.js',
        'data/restaurants.json',
        'img/'
      ]);
    })
  );
});

// Deletes old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('main-') &&
                 cacheName != staticCache;
        }).map(function(cacheName) {
          console.log('Deleting old caches...');
          return cache.delete(cacheName);
        })
      )
    }))
  })
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
      }));
});
