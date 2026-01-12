const CACHE_NAME = 'imsak-vakti-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './logo.png',
  './icon-192.png',
  './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Service Worker Kurulumu
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching files...');
        return cache.addAll(urlsToCache).catch(err => {
          console.warn('Some files failed to cache:', err);
          // Hata olsa bile kurulumu tamamla
          return Promise.resolve();
        });
      })
      .then(() => {
        console.log('Service Worker: Installed');
        return self.skipWaiting();
      })
  );
});

// Eski cache'leri temizle
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch isteklerini yönet
self.addEventListener('fetch', event => {
  // Sadece GET isteklerini cache'le
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(response => {
          // API çağrılarını cache'leme
          if (event.request.url.includes('aladhan.com')) {
            return response;
          }
          // Diğer kaynakları cache'le (sadece başarılı cevaplar)
          if (event.request.url.startsWith('http') && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache).catch(err => {
                console.warn('Cache put failed:', err);
              });
            });
          }
          return response;
        }).catch(err => {
          console.warn('Fetch failed:', err);
          // Çevrimdışı iken bir şey döndür
          return new Response('Çevrimdışı - İnternet bağlantınızı kontrol edin', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        });
      })
  );
});

// Bildirim tıklandığında
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});

// Push bildirimi alma (gelecekte kullanım için)
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const options = {
    body: data.body || 'Vakit geldi!',
    icon: '/icon-512.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200],
    tag: 'prayer-time',
    requireInteraction: true
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'Ezan Vakti', options)
  );
});
