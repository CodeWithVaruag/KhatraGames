const CACHE_NAME = 'game-hub-cache-v1';

// List core files to cache
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/game-frame.html',
    // Assuming you have a specific HTML file for the iframe
  // Add other core files here
];

// List of game URLs to cache
const GAMES = [
  "https://js13kgames.com/games/merlin-vs-alfonso/index.html",
  "https://js13kgames.com/games/path-to-glory/index.html",
  "https://js13kgames.com/games/triangle-back-to-home/index.html",
  "https://js13kgames.com/games/dwarfs-there-and-back-again/index.html",
  "https://js13kgames.com/games/bounce-back/index.html",
  "https://js13kgames.com/games/wander/index.html",
  "https://js13kgames.com/games/casual-crusade/index.html",
  "https://js13kgames.com/games/tiny-yurts/index.html",
  "https://js13kgames.com/games/upyri/index.html",
  "https://js13kgames.com/games/castle-escape-2023/index.html",
  "https://js13kgames.com/games/super-castle-game/index.html",
  "https://js13kgames.com/games/feast-night/index.html",
  "https://js13kgames.com/games/knight-dreams/index.html",
  "https://js13kgames.com/games/robin-of-thirteensley/index.html",
  "https://js13kgames.com/games/offline-paradise/index.html",
  "https://js13kgames.com/games/planetfall/index.html",
  "https://js13kgames.com/games/quest-of-tod/index.html",
  "https://js13kgames.com/games/racer/index.html",
  "https://js13kgames.com/games/everyones-sky/index.html",
  "https://js13kgames.com/games/evil-glitch/index.html",
  "https://js13kgames.com/games/off-the-line/index.html",
  "https://js13kgames.com/games/behind-asteroids-the-dark-side/index.html",
  "https://js13kgames.com/games/pest-control-weasels/index.html",
  "https://js13kgames.com/games/pizza-undelivery/index.html",
  "https://js13kgames.com/games/nano-wirebot/index.html",
  "https://js13kgames.com/games/the-wandering-wraith/index.html",
  "https://js13kgames.com/games/onoff/index.html",
  "https://js13kgames.com/games/the-matr13k/index.html",
  "https://js13kgames.com/games/glitch-buster/index.html",
  "https://js13kgames.com/games/way-out/index.html",
  "https://js13kgames.com/games/play-back/index.html",
  "https://js13kgames.com/games/back-attacker/index.html",
  "https://js13kgames.com/games/1024-moves/index.html",
  "https://js13kgames.com/games/re-wire/index.html",
  "https://js13kgames.com/games/envisionator/index.html",
  "https://js13kgames.com/games/planet-figadore-has-gone-offline/index.html",
  "https://js13kgames.com/games/enmeshed/index.html",
  "https://js13kgames.com/games/raven/index.html",
  "https://js13kgames.com/games/lost-treasure/index.html",
  "https://js13kgames.com/games/hit-the-space/index.html",
  "https://js13kgames.com/games/galaxy-raid/index.html",
  "https://js13kgames.com/games/escape-2021/index.html",
  "https://js13kgames.com/games/gamut-shift/index.html",
  "https://js13kgames.com/games/adventure-in-ascii-space/index.html",
  "https://js13kgames.com/games/q1k3/index.html",
  "https://js13kgames.com/games/celestial-lighthouse/index.html",
  "https://js13kgames.com/games/space-jam/index.html",
  "https://js13kgames.com/games/first-contact/index.html",
  "https://js13kgames.com/games/shuttledeck/index.html",
  "https://js13kgames.com/games/lossst-a-snake-in-space/index.html",
  "https://js13kgames.com/games/black-hole-square/index.html",
  "https://js13kgames.com/games/space-huggers/index.html",
  "https://js13kgames.com/games/the-maze-of-space-goblins/index.html",
  "https://js13kgames.com/games/packabunchas/index.html",
  "https://js13kgames.com/games/welcome-to-space/index.html",
  "https://js13kgames.com/games/galaxy-rider/index.html",
  "https://js13kgames.com/games/the-adventures-of-captain-callisto/index.html",
  "https://js13kgames.com/games/beat-rocks/index.html",
  "https://js13kgames.com/games/space-garden/index.html",
  "https://js13kgames.com/games/space-invaders/index.html",
];

self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        return cache.addAll([...CORE_ASSETS, ...GAMES]).catch(err => {
          console.error('Failed to cache assets:', err);
        });
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    if (event.request.url.startsWith('https://js13kgames.com')) {
      event.respondWith(
        caches.match(event.request).then(response => {
          return response || fetch(event.request).then(networkResponse => {
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          });
        })
      );
    } else {
      event.respondWith(
        caches.match(event.request).then(response => {
          return response || fetch(event.request);
        })
      );
    }
  });
  
  self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  
 
  