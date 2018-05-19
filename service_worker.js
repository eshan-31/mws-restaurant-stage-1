self.addEventListener('install', function (event) {
  // Perform install steps
}); var CACHE_NAME = 'resto-cache';

//elements to be cached
var toCache = [
  '/',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './data/restaurants.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
];

//service worker code referenced from stack overflow

self.addEventListener('install', function (event) {
  // install service worker
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(toCache);
      })
  );
});
//activate service worker
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

//fetch files from the cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
    .catch(err => console.log(err, event.request))
  );
});
