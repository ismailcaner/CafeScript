// Önbellek adı
const CACHE_NAME = 'cache v2';
const urlsToCache = [
  '/',
  '/cafescript.css',
  '/cafescriptanimasyon.css',
  '/responsive.css',
  '/cafescript.js',
  '/sw.js'
];

// Web sayfası yüklendiğinde önbelleği açar ve ağdan en son veriyi alır
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// İstekleri işler ve önce ağdan veri almaya çalışır, daha sonra önbellekte veri varsa bu veriyi kullanır
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        // Ağ yanıtı varsa önbelleğe kaydet
        const clonedResponse = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, clonedResponse);
        });
        return response;
      })
      .catch(function() {
        // Ağ yanıtı yoksa önbellekten yanıtı al
        return caches.match(event.request)
          .then(function(response) {
            if (response) {
              return response;
            }
            throw new Error('No response found in cache.');
          });
      })
  );
});
