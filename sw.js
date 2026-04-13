const CACHE_NAME = 'englishpath-pwa-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  'https://raw.githubusercontent.com/felixdevim-prog/englishpath/main/english.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
