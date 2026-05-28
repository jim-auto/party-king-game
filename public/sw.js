const CACHE_NAME = 'party-king-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/ai/neon-party-bg.webp',
  './assets/ai/party-king-host.webp',
  './assets/ai/command-card-sheet.webp',
  './assets/ai/reward-vibe-clear.webp',
  './assets/ai/reward-dokidoki-route.webp',
  './assets/ai/reward-chaos-finale.webp',
  './assets/ai/reward-friendship-afterglow.webp',
  './assets/ai/reward-midnight-ending.webp',
  './assets/ai/reward-king-spotlight.webp',
  './assets/ai/effects-sticker-sheet.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))),
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
