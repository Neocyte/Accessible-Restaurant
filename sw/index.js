self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('main-static-v1').then(function(cache) {
      return cache.addAll([
        '/',
        'css/styles.css',
        'js/main.js',
        'js/dbhelper.js',
        'data/restaurants.JSON',
        'img/'
      ]);
    })
  );
});
