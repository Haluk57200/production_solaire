const CACHE = 'solaire-v1';
const ASSETS = [
    './production_solaire_v5.html',
    'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(CACHE).then(function(cache) {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});
