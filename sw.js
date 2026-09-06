// Service worker di BreakBuddy.
// Bump CACHE_VERSION ogni volta che pubblichi una nuova versione dell'app:
// è così che i dispositivi che l'hanno già installata scaricano gli aggiornamenti.
const CACHE_VERSION = 'v12';
const CACHE_NAME = 'break-buddy-' + CACHE_VERSION;

const PRECACHE_URLS = [
  './',
  './index.html',
  './buddy.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/blockly/9.3.3/blockly_compressed.js',
  'https://cdnjs.cloudflare.com/ajax/libs/blockly/9.3.3/blocks_compressed.js',
  'https://cdnjs.cloudflare.com/ajax/libs/blockly/9.3.3/javascript_compressed.js',
  'https://cdnjs.cloudflare.com/ajax/libs/blockly/9.3.3/msg/it.js',
  'https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,700&display=swap'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return Promise.all(
        PRECACHE_URLS.map(function (url) {
          return cache.add(url).catch(function (err) {
            // Un asset esterno può fallire (es. offline durante l'installazione):
            // non blocchiamo l'intera cache per questo.
            console.warn('[sw] impossibile precaricare', url, err);
          });
        })
      );
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE_NAME; })
            .map(function (k) { return caches.delete(k); })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

// Strategia "stale-while-revalidate": risponde subito dalla cache se disponibile
// (anche da offline) e in parallelo aggiorna la cache dalla rete per la prossima volta.
self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.match(event.request).then(function (cached) {
        var networkFetch = fetch(event.request).then(function (response) {
          if (response && (response.ok || response.type === 'opaque')) {
            cache.put(event.request, response.clone());
          }
          return response;
        }).catch(function () { return cached; });

        return cached || networkFetch;
      });
    })
  );
});