const cacheName = "v4";

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        '/Unit_Converter.html',
        '/Unit_Converter.css',
        '/Unit_ConverterV2.js',
        '/TA.png',
        '/TA-192x192.png'
      ]))
  );
});

self.addEventListener('message', function (event) {
    if (event.data.action === 'skipWaiting') {
      self.skipWaiting();
    }
  });

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});