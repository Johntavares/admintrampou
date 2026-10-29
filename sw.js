const CACHE_NAME = 'trampou-admin-v2.0.0';
const STATIC_ASSETS = [
  './',
  './index.html',
  './admin.css',
  './admin.js',
  './favicon.png',
  './admin_logo.png',
  './trampou_app_icon.png',
  './manifest.json'
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Interceptação de requisições (Network-First para evitar CSS/JS desatualizados)
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Não intercepta chamadas externas do Supabase (para sempre buscar dados em tempo real)
  if (url.origin.includes('supabase.co')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => caches.match(event.request))
  );
});
