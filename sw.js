var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/Unit_Converter.html',
  '/Unit_Converter.css',
  '/Unit_ConverterV2.js',
  '/TA.png',
  '/TA-192x192.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {

        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
     
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
self.addEventListener('activate', function(event) {

    var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];
  
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  self.addEventListener('install', function(event) {
    // The promise that skipWaiting() returns can be safely ignored.
    self.skipWaiting();
  
    // Perform any other actions required for your
    // service worker to install, potentially inside
    // of event.waitUntil();
  });