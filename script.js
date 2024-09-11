const games = [
    { title: "Merlin vs Alfonso", url: "https://js13kgames.com/games/merlin-vs-alfonso/index.html", image: "https://js13kgames.com/games/merlin-vs-alfonso/__big.jpg" },
    { title: "Path to Glory", url: "https://js13kgames.com/games/path-to-glory/index.html", image: "https://js13kgames.com/games/path-to-glory/__big.jpg" },
    { title: "Triangle: Back To Home", url: "https://js13kgames.com/games/triangle-back-to-home/index.html", image: "https://js13kgames.com/games/triangle-back-to-home/__big.jpg" },
    { title: "Dwarfs: There and Back Again", url: "https://js13kgames.com/games/dwarfs-there-and-back-again/index.html", image: "https://js13kgames.com/games/dwarfs-there-and-back-again/__big.jpg" },
    { title: "Bounce Back", url: "https://js13kgames.com/games/bounce-back/index.html", image: "https://js13kgames.com/games/bounce-back/__big.jpg" },
    { title: "Wander", url: "https://js13kgames.com/games/wander/index.html", image: "https://js13kgames.com/games/wander/__big.jpg" },
    { title: "Casual Crusade", url: "https://js13kgames.com/games/casual-crusade/index.html", image: "https://js13kgames.com/games/casual-crusade/__big.jpg" },
    { title: "Tiny Yurts", url: "https://js13kgames.com/games/tiny-yurts/index.html", image: "https://js13kgames.com/games/tiny-yurts/__big.jpg" },
    { title: "Upyri", url: "https://js13kgames.com/games/upyri/index.html", image: "https://js13kgames.com/games/upyri/__big.jpg" },
    { title: "Castle Escape ", url: "https://js13kgames.com/games/castle-escape-2023/index.html", image: "https://js13kgames.com/games/castle-escape-2023/__big.jpg" },
    { title: "Super Castle Game", url: "https://js13kgames.com/games/super-castle-game/index.html", image: "https://js13kgames.com/games/super-castle-game/__big.jpg" },
    { title: "FEAST NIGHT", url: "https://js13kgames.com/games/feast-night/index.html", image: "https://js13kgames.com/games/feast-night/__big.jpg" },
    { title: "Knight Dreams", url: "https://js13kgames.com/games/knight-dreams/index.html", image: "https://js13kgames.com/games/knight-dreams/__big.jpg" },
    { title: "Robin of Thirteensley", url: "https://js13kgames.com/games/robin-of-thirteensley/index.html", image: "https://js13kgames.com/games/robin-of-thirteensley/__big.jpg" },
    { title: "Offline Paradise", url: "https://js13kgames.com/games/offline-paradise/index.html", image: "https://js13kgames.com/games/offline-paradise/__big.jpg" },
    { title: "Planetfall", url: "https://js13kgames.com/games/planetfall/index.html", image: "https://js13kgames.com/games/planetfall/__big.jpg" },
    { title: "Quest of Tod", url: "https://js13kgames.com/games/quest-of-tod/index.html", image: "https://js13kgames.com/games/quest-of-tod/__big.jpg" },
    { title: "Racer", url: "https://js13kgames.com/games/racer/index.html", image: "https://js13kgames.com/games/racer/__big.jpg" },
    { title: "Everyone's Sky", url: "https://js13kgames.com/games/everyones-sky/index.html", image: "https://js13kgames.com/games/everyones-sky/__big.jpg" },
    { title: "Evil Glitch", url: "https://js13kgames.com/games/evil-glitch/index.html", image: "https://js13kgames.com/games/evil-glitch/__big.jpg" },
    { title: "Off The Line", url: "https://js13kgames.com/games/off-the-line/index.html", image: "https://js13kgames.com/games/off-the-line/__big.jpg" },
    { title: "Behind Asteroids, The Dark Side", url: "https://js13kgames.com/games/behind-asteroids-the-dark-side/index.html", image: "https://js13kgames.com/games/behind-asteroids-the-dark-side/__big.jpg" },
    { title: "Pest Control: Weasels", url: "https://js13kgames.com/games/pest-control-weasels/index.html", image: "https://js13kgames.com/games/pest-control-weasels/__big.jpg" },
    { title: "Pizza Undelivery", url: "https://js13kgames.com/games/pizza-undelivery/index.html", image: "https://js13kgames.com/games/pizza-undelivery/__big.jpg" },
    { title: "Nano-Wirebot", url: "https://js13kgames.com/games/nano-wirebot/index.html", image: "https://js13kgames.com/games/nano-wirebot/__big.jpg" },
    { title: "The Wandering Wraith", url: "https://js13kgames.com/games/the-wandering-wraith/index.html", image: "https://js13kgames.com/games/the-wandering-wraith/__big.jpg" },
    { title: "ONOFF", url: "https://js13kgames.com/games/onoff/index.html", image: "https://js13kgames.com/games/onoff/__big.jpg" },
    { title: "The Matr13k", url: "https://js13kgames.com/games/the-matr13k/index.html", image: "https://js13kgames.com/games/the-matr13k/__big.jpg" },
    { title: "Glitch Buster", url: "https://js13kgames.com/games/glitch-buster/index.html", image: "https://js13kgames.com/games/glitch-buster/__big.jpg" },
    { title: "Way Out", url: "https://js13kgames.com/games/way-out/index.html", image: "https://js13kgames.com/games/way-out/__big.jpg" },
    { title: "Play Back", url: "https://js13kgames.com/games/play-back/index.html", image: "https://js13kgames.com/games/play-back/__big.jpg" },
    { title: "Back Attacker", url: "https://js13kgames.com/games/back-attacker/index.html", image: "https://js13kgames.com/games/back-attacker/__big.jpg" },
    { title: "1024 Moves", url: "https://js13kgames.com/games/1024-moves/index.html", image: "https://js13kgames.com/games/1024-moves/__big.jpg" },
    { title: "Re-Wire", url: "https://js13kgames.com/games/re-wire/index.html", image: "https://js13kgames.com/games/re-wire/__big.jpg" },
    { title: "Envisionator", url: "https://js13kgames.com/games/envisionator/index.html", image: "https://js13kgames.com/games/envisionator/__big.jpg" },
    { title: "Planet Figadore has gone OFFLINE", url: "https://js13kgames.com/games/planet-figadore-has-gone-offline/index.html", image: "https://js13kgames.com/games/planet-figadore-has-gone-offline/__big.jpg" },
    { title: "Enmeshed", url: "https://js13kgames.com/games/enmeshed/index.html", image: "https://js13kgames.com/games/enmeshed/__big.jpg" },
    { title: "Raven", url: "https://js13kgames.com/games/raven/index.html", image: "https://js13kgames.com/games/raven/__big.jpg" },
    { title: "Lost Treasure", url: "https://js13kgames.com/games/lost-treasure/index.html", image: "https://js13kgames.com/games/lost-treasure/__big.jpg" },
    { "title": "Hit the Space", "url": "https://js13kgames.com/games/hit-the-space/index.html", "image": "https://js13kgames.com/games/hit-the-space/__big.jpg" },
    { "title": "Galaxy Raid", "url": "https://js13kgames.com/games/galaxy-raid/index.html", "image": "https://js13kgames.com/games/galaxy-raid/__big.jpg" },
    { "title": "Escape 2021", "url": "https://js13kgames.com/games/escape-2021/index.html", "image": "https://js13kgames.com/games/escape-2021/__big.jpg" },
    { "title": "Gamut Shift", "url": "https://js13kgames.com/games/gamut-shift/index.html", "image": "https://js13kgames.com/games/gamut-shift/__big.jpg" },
    { "title": "Adventure in ASCII Space", "url": "https://js13kgames.com/games/adventure-in-ascii-space/index.html", "image": "https://js13kgames.com/games/adventure-in-ascii-space/__big.jpg" },
    { "title": "Q1K3", "url": "https://js13kgames.com/games/q1k3/index.html", "image": "https://js13kgames.com/games/q1k3/__big.jpg" },
    { "title": "Celestial Lighthouse", "url": "https://js13kgames.com/games/celestial-lighthouse/index.html", "image": "https://js13kgames.com/games/celestial-lighthouse/__big.jpg" },
    { "title": "Space Jam", "url": "https://js13kgames.com/games/space-jam/index.html", "image": "https://js13kgames.com/games/space-jam/__big.jpg" },
    { "title": "First Contact", "url": "https://js13kgames.com/games/first-contact/index.html", "image": "https://js13kgames.com/games/first-contact/__big.jpg" },
    { "title": "Shuttledeck", "url": "https://js13kgames.com/games/shuttledeck/index.html", "image": "https://js13kgames.com/games/shuttledeck/__big.jpg" },
    { "title": "Lossst: A Snake in Space", "url": "https://js13kgames.com/games/lossst-a-snake-in-space/index.html", "image": "https://js13kgames.com/games/lossst-a-snake-in-space/__big.jpg" },
    { "title": "Black Hole Square", "url": "https://js13kgames.com/games/black-hole-square/index.html", "image": "https://js13kgames.com/games/black-hole-square/__big.jpg" },
    { "title": "Space Huggers", "url": "https://js13kgames.com/games/space-huggers/index.html", "image": "https://js13kgames.com/games/space-huggers/__big.jpg" },
    { "title": "The Maze of Space Goblins", "url": "https://js13kgames.com/games/the-maze-of-space-goblins/index.html", "image": "https://js13kgames.com/games/the-maze-of-space-goblins/__big.jpg" },
    { "title": "Packabunchas", "url": "https://js13kgames.com/games/packabunchas/index.html", "image": "https://js13kgames.com/games/packabunchas/__big.jpg" },
    { "title": "Welcome to Space", "url": "https://js13kgames.com/games/welcome-to-space/index.html", "image": "https://js13kgames.com/games/welcome-to-space/__big.jpg" },
    { "title": "Galaxy Rider", "url": "https://js13kgames.com/games/galaxy-rider/index.html", "image": "https://js13kgames.com/games/galaxy-rider/__big.jpg" },
    { "title": "The Adventures of Captain Callisto", "url": "https://js13kgames.com/games/the-adventures-of-captain-callisto/index.html", "image": "https://js13kgames.com/games/the-adventures-of-captain-callisto/__big.jpg" },
    { "title": "Beat Rocks", "url": "https://js13kgames.com/games/beat-rocks/index.html", "image": "https://js13kgames.com/games/beat-rocks/__big.jpg" },
    { "title": "Space Garden", "url": "https://js13kgames.com/games/space-garden/index.html", "image": "https://js13kgames.com/games/space-garden/__big.jpg" },
    { "title": "Space Invaders", "url": "https://js13kgames.com/games/space-invaders/index.html", "image": "https://js13kgames.com/games/space-invaders/__big.jpg" },
    

];




const container = document.getElementById('game-list');
const gameFrame = document.getElementById('game-frame');
const gameContainer = document.getElementById('game-container');

// Dynamically generate game cards
games.forEach(game => {
    const card = `
      <div class="game-card">
        <a href="#" onclick="openGame('${game.url}'); return false;">
          <img src="${game.image}" alt="${game.title}">
          <h3>${game.title}</h3>
        </a>
      </div>
    `;
    container.innerHTML += card;
});

// Function to open the game in the iframe
function openGame(url) {
    gameFrame.src = url;
    gameContainer.style.display = 'flex'; // Show the game container
    if (gameContainer.requestFullscreen) {
        gameContainer.requestFullscreen(); // Enter fullscreen mode
    } else if (gameContainer.mozRequestFullScreen) { // Firefox
        gameContainer.mozRequestFullScreen();
    } else if (gameContainer.webkitRequestFullscreen) { // Chrome, Safari and Opera
        gameContainer.webkitRequestFullscreen();
    } else if (gameContainer.msRequestFullscreen) { // IE/Edge
        gameContainer.msRequestFullscreen();
    }
}

// Function to close the game and hide the iframe
function closeGame() {
    gameFrame.src = ''; // Clear the iframe src to stop the game
    gameContainer.style.display = 'none'; // Hide the game container
    if (document.exitFullscreen) {
        document.exitFullscreen(); // Exit fullscreen mode
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service Worker Registered'))
      .catch(err => console.log('Service Worker Registration Failed:', err));
  }


  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload();
    });
  }

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  document.getElementById('download-app').addEventListener('click', () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
    }
  });
});

  