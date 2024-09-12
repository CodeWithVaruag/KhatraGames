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


  { "title": "Necromancer Colony Sim", "image": "https://js13kgames.com/games/necromancer-colony-sim/__big.jpg", "url": "https://js13kgames.com/games/necromancer-colony-sim/index.html" },
  { "title": "Fortifia", "image": "https://js13kgames.com/games/fortifia/__big.jpg", "url": "https://js13kgames.com/games/fortifia/index.html" },
  { "title": "Thirteen Potions", "image": "https://js13kgames.com/games/thirteen-potions/__big.jpg", "url": "https://js13kgames.com/games/thirteen-potions/index.html" },
  { "title": "The Last Tower", "image": "https://js13kgames.com/games/the-last-tower/__big.jpg", "url": "https://js13kgames.com/games/the-last-tower/index.html" },
  { "title": "Anachronic", "image": "https://js13kgames.com/games/anachronic/__big.jpg", "url": "https://js13kgames.com/games/anachronic/index.html" },
  { "title": "Sails!", "image": "https://js13kgames.com/games/sails/__big.jpg", "url": "https://js13kgames.com/games/sails/index.html" },
  { "title": "Hex Crusaders", "image": "https://js13kgames.com/games/hex-crusaders/__big.jpg", "url": "https://js13kgames.com/games/hex-crusaders/index.html" },
  { "title": "Entitled", "image": "https://js13kgames.com/games/entitled/__big.jpg", "url": "https://js13kgames.com/games/entitled/index.html" },
  { "title": "The First Horde", "image": "https://js13kgames.com/games/the-first-horde/__big.jpg", "url": "https://js13kgames.com/games/the-first-horde/index.html" },
  { "title": "Feudalistic Overlap", "image": "https://js13kgames.com/games/feudalistic-overlap/__big.jpg", "url": "https://js13kgames.com/games/feudalistic-overlap/index.html" },
  { "title": "Shikken", "image": "https://js13kgames.com/games/shikken/__big.jpg", "url": "https://js13kgames.com/games/shikken/index.html" },
  { "title": "The Silk Trail", "image": "https://js13kgames.com/games/the-silk-trail/__big.jpg", "url": "https://js13kgames.com/games/the-silk-trail/index.html" },
  { "title": "Kukulkan", "image": "https://js13kgames.com/games/kukulkan/__big.jpg", "url": "https://js13kgames.com/games/kukulkan/index.html" },
  { "title": "The Mystery at Glamis Castle", "image": "https://js13kgames.com/games/the-mystery-at-glamis-castle/__big.jpg", "url": "https://js13kgames.com/games/the-mystery-at-glamis-castle/index.html" },
  { "title": "Runekeeper", "image": "https://js13kgames.com/games/runekeeper/__big.jpg", "url": "https://js13kgames.com/games/runekeeper/index.html" },
  { "title": "Rock Feud", "image": "https://js13kgames.com/games/rock-feud/__big.jpg", "url": "https://js13kgames.com/games/rock-feud/index.html" },
  { "title": "Wanted", "image": "https://js13kgames.com/games/wanted/__big.jpg", "url": "https://js13kgames.com/games/wanted/index.html" },
  { "title": "Market Street Tycoon", "image": "https://js13kgames.com/games/market-street-tycoon/__big.jpg", "url": "https://js13kgames.com/games/market-street-tycoon/index.html" },
  { "title": "FREEEDOOOM!!!!!!!", "image": "https://js13kgames.com/games/freeedooom/__big.jpg", "url": "https://js13kgames.com/games/freeedooom/index.html" },
  { "title": "Belly Flop", "image": "https://js13kgames.com/games/belly-flop/__big.jpg", "url": "https://js13kgames.com/games/belly-flop/index.html" },
  { "title": "Princess of Corinium", "image": "https://js13kgames.com/games/princess-of-corinium/__big.jpg", "url": "https://js13kgames.com/games/princess-of-corinium/index.html" },
  { "title": "Saeculum XIII agricultura", "image": "https://js13kgames.com/games/saeculum-xiii-agricultura/__big.jpg", "url": "https://js13kgames.com/games/saeculum-xiii-agricultura/index.html" },
  { "title": "Swords & Quills", "image": "https://js13kgames.com/games/swords-quills/__big.jpg", "url": "https://js13kgames.com/games/swords-quills/index.html" },
  { "title": "Keep Calm", "image": "https://js13kgames.com/games/keep-calm/__big.jpg", "url": "https://js13kgames.com/games/keep-calm/index.html" },
  { "title": "The Saga of Temujin", "image": "https://js13kgames.com/games/the-saga-of-temujin/__big.jpg", "url": "https://js13kgames.com/games/the-saga-of-temujin/index.html" },
  { "title": "Duelo", "image": "https://js13kgames.com/games/duelo/__big.jpg", "url": "https://js13kgames.com/games/duelo/index.html" },
  { "title": "Super Polo Bros.", "image": "https://js13kgames.com/games/super-polo-bros/__big.jpg", "url": "https://js13kgames.com/games/super-polo-bros/index.html" },
  { "title": "Castle Wars", "image": "https://js13kgames.com/games/castle-wars/__big.jpg", "url": "https://js13kgames.com/games/castle-wars/index.html" },
  { "title": "Medieval Matchup", "image": "https://js13kgames.com/games/medieval-matchup/__big.jpg", "url": "https://js13kgames.com/games/medieval-matchup/index.html" },
  { "title": "Musa's Quest", "image": "https://js13kgames.com/games/musas-quest/__big.jpg", "url": "https://js13kgames.com/games/musas-quest/index.html" },



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

  { "title": "Journey to the East; Silk Road Adventure", "image": "https://js13kgames.com/games/journey-to-the-east-silk-road-adventure/__big.jpg", "url": "https://js13kgames.com/games/journey-to-the-east-silk-road-adventure/index.html" },
  { "title": "13th Century Siege", "image": "https://js13kgames.com/games/13th-century-siege/__big.jpg", "url": "https://js13kgames.com/games/13th-century-siege/index.html" },
  { "title": "A Khan's Soul", "image": "https://js13kgames.com/games/a-khans-soul/__big.jpg", "url": "https://js13kgames.com/games/a-khans-soul/index.html" },
  { "title": "Upyri", "image": "https://js13kgames.com/games/upyri/__big.jpg", "url": "https://js13kgames.com/games/upyri/index.html" },
  { "title": "Holy Knight", "image": "https://js13kgames.com/games/holy-knight/__big.jpg", "url": "https://js13kgames.com/games/holy-knight/index.html" },
  { "title": "Knight", "image": "https://js13kgames.com/games/knight/__big.jpg", "url": "https://js13kgames.com/games/knight/index.html" },
  { "title": "Meandering Medieval Merchant", "image": "https://js13kgames.com/games/meandering-medieval-merchant/__big.jpg", "url": "https://js13kgames.com/games/meandering-medieval-merchant/index.html" },
  { "title": "CastleRun Maze", "image": "https://js13kgames.com/games/castlerun-maze/__big.jpg", "url": "https://js13kgames.com/games/castlerun-maze/index.html" },
  { "title": "Defense of the 13th City", "image": "https://js13kgames.com/games/defense-of-the-13th-city/__big.jpg", "url": "https://js13kgames.com/games/defense-of-the-13th-city/index.html" },
  { "title": "Run away from pied piper of Hamelin", "image": "https://js13kgames.com/games/run-away-from-pied-piper-of-hamelin/__big.jpg", "url": "https://js13kgames.com/games/run-away-from-pied-piper-of-hamelin/index.html" },
  { "title": "Khan - Westward Conquest", "image": "https://js13kgames.com/games/khan-westward-conquest/__big.jpg", "url": "https://js13kgames.com/games/khan-westward-conquest/index.html" },
  { "title": "The Treasure of the Nibelungs", "image": "https://js13kgames.com/games/the-treasure-of-the-nibelungs/__big.jpg", "url": "https://js13kgames.com/games/the-treasure-of-the-nibelungs/index.html" },
  { "title": "Alquerque", "image": "https://js13kgames.com/games/alquerque/__big.jpg", "url": "https://js13kgames.com/games/alquerque/index.html" },
  { "title": "Bewitched!", "image": "https://js13kgames.com/games/bewitched/__big.jpg", "url": "https://js13kgames.com/games/bewitched/index.html" },
  { "title": "MongoRun", "image": "https://js13kgames.com/games/mongorun/__big.jpg", "url": "https://js13kgames.com/games/mongorun/index.html" },
  { "title": "B.", "image": "https://js13kgames.com/games/b/__big.jpg", "url": "https://js13kgames.com/games/b/index.html" },
  { "title": "MediWars", "image": "https://js13kgames.com/games/mediwars/__big.jpg", "url": "https://js13kgames.com/games/mediwars/index.html" },
  { "title": "Portolani", "image": "https://js13kgames.com/games/portolani/__big.jpg", "url": "https://js13kgames.com/games/portolani/index.html" },
  { "title": "Super Castle Game", "image": "https://js13kgames.com/games/super-castle-game/__big.jpg", "url": "https://js13kgames.com/games/super-castle-game/index.html" },
  { "title": "Age of The Demigods", "image": "https://js13kgames.com/games/age-of-the-demigods/__big.jpg", "url": "https://js13kgames.com/games/age-of-the-demigods/index.html" },
  { "title": "Guardian Village", "image": "https://js13kgames.com/games/guardian-village/__big.jpg", "url": "https://js13kgames.com/games/guardian-village/index.html" },
  { "title": "Dynasty United", "image": "https://js13kgames.com/games/dynasty-united/__big.jpg", "url": "https://js13kgames.com/games/dynasty-united/index.html" },
  { "title": "The 13th King's Odyssey", "image": "https://js13kgames.com/games/the-13th-kings-odyssey/__big.jpg", "url": "https://js13kgames.com/games/the-13th-kings-odyssey/index.html" },
  { "title": "13th Century 2048", "image": "https://js13kgames.com/games/13th-century-2048/__big.jpg", "url": "https://js13kgames.com/games/13th-century-2048/index.html" },
  { "title": "Tavernity", "image": "https://js13kgames.com/games/tavernity/__big.jpg", "url": "https://js13kgames.com/games/tavernity/index.html" },
  { "title": "The Terror of Mongolia", "image": "https://js13kgames.com/games/the-terror-of-mongolia/__big.jpg", "url": "https://js13kgames.com/games/the-terror-of-mongolia/index.html" },
  { "title": "Dragoom", "image": "https://js13kgames.com/games/dragoom/__big.jpg", "url": "https://js13kgames.com/games/dragoom/index.html" },
  { "title": "Dragon Simulator", "image": "https://js13kgames.com/games/dragon-simulator/__big.jpg", "url": "https://js13kgames.com/games/dragon-simulator/index.html" },
  { "title": "Mini Merchant", "image": "https://js13kgames.com/games/mini-merchant/__big.jpg", "url": "https://js13kgames.com/games/mini-merchant/index.html" },
  { "title": "Cathedral Master Builder", "image": "https://js13kgames.com/games/cathedral-master-builder/__big.jpg", "url": "https://js13kgames.com/games/cathedral-master-builder/index.html" }
  ,


  { "title": "Back to Life", "url": "https://js13kgames.com/games/back-to-life/index.html", "image": "https://js13kgames.com/games/back-to-life/__big.jpg" },
  { "title": "Captain Reverso", "url": "https://js13kgames.com/games/captain-reverso/index.html", "image": "https://js13kgames.com/games/captain-reverso/__big.jpg" },
  { "title": "Compact Conflict", "url": "https://js13kgames.com/games/compact-conflict/index.html", "image": "https://js13kgames.com/games/compact-conflict/__big.jpg" },
  { "title": "Blackout", "url": "https://js13kgames.com/games/blackout/index.html", "image": "https://js13kgames.com/games/blackout/__big.jpg" },

  { "title": "Space Kitty", "url": "https://js13kgames.com/games/space-kitty/index.html", "image": "https://js13kgames.com/games/space-kitty/__big.jpg" },
  { "title": "Ninja vs EVILCORP", "url": "https://js13kgames.com/games/ninja-vs-evilcorp/index.html", "image": "https://js13kgames.com/games/ninja-vs-evilcorp/__big.jpg" },
  { "title": "Space Huggers", "url": "https://js13kgames.com/games/space-huggers/index.html", "image": "https://js13kgames.com/games/space-huggers/__big.jpg" },
  { "title": "Retrohaunt", "url": "https://js13kgames.com/games/retrohaunt/index.html", "image": "https://js13kgames.com/games/retrohaunt/__big.jpg" },
  { "title": "Evil Glitch", "url": "https://js13kgames.com/games/evil-glitch/index.html", "image": "https://js13kgames.com/games/evil-glitch/__big.jpg" },
  { "title": "Raven", "url": "https://js13kgames.com/games/raven/index.html", "image": "https://js13kgames.com/games/raven/__big.jpg" },



  //////////////////////



  { "title": "Dante", "url": "https://js13kgames.com/entries/dante", "image": "https://js13kgames.com/games/dante/__big.jpg" },
  { "title": "Dying Dreams", "url": "https://js13kgames.com/entries/dying-dreams", "image": "https://js13kgames.com/games/dying-dreams/__big.jpg" },
  { "title": "Norman the Necromancer", "url": "https://js13kgames.com/entries/norman-the-necromancer", "image": "https://js13kgames.com/games/norman-the-necromancer/__big.jpg" },
  { "title": "Soul Jumper", "url": "https://js13kgames.com/entries/soul-jumper", "image": "https://js13kgames.com/games/soul-jumper/__big.jpg" },
  { "title": "The Neatness", "url": "https://js13kgames.com/entries/the-neatness", "image": "https://js13kgames.com/games/the-neatness/__big.jpg" },
  { "title": "Charon Jr.", "url": "https://js13kgames.com/entries/charon-jr", "image": "https://js13kgames.com/games/charon-jr/__big.jpg" },
  { "title": "13", "url": "https://js13kgames.com/entries/13", "image": "https://js13kgames.com/games/13/__big.jpg" },
  { "title": "Soul Surf", "url": "https://js13kgames.com/entries/soul-surf", "image": "https://js13kgames.com/games/soul-surf/__big.jpg" },
  { "title": "Infernal Throne", "url": "https://js13kgames.com/entries/infernal-throne", "image": "https://js13kgames.com/games/infernal-throne/__big.jpg" },
  { "title": "DEAD AGAIN", "url": "https://js13kgames.com/entries/dead-again", "image": "https://js13kgames.com/games/dead-again/__big.jpg" },

  /////////////////////////////

  { "title": "Robin Hood", "url": "https://js13kgames.com/entries/robin-hood", "image": "https://js13kgames.com/games/robin-hood/__big.jpg" },
  { "title": "Moai Alley", "url": "https://js13kgames.com/entries/moai-alley", "image": "https://js13kgames.com/games/moai-alley/__big.jpg" },
  { "title": "Century Spikes", "url": "https://js13kgames.com/entries/century-spikes", "image": "https://js13kgames.com/games/century-spikes/__big.jpg" },
  { "title": "Harold is Heavy", "url": "https://js13kgames.com/entries/harold-is-heavy", "image": "https://js13kgames.com/games/harold-is-heavy/__big.jpg" },
  { "title": "Last Viking", "url": "https://js13kgames.com/entries/last-viking", "image": "https://js13kgames.com/games/last-viking/__big.jpg" },
  { "title": "Angry Temujin", "url": "https://js13kgames.com/entries/angry-temujin", "image": "https://js13kgames.com/games/angry-temujin/__big.jpg" },
  { "title": "The Fall of The Last Tower", "url": "https://js13kgames.com/entries/the-fall-of-the-last-tower", "image": "https://js13kgames.com/games/the-fall-of-the-last-tower/__big.jpg" },
  { "title": "Simple Sailing Simulator", "url": "https://js13kgames.com/entries/simple-sailing-simulator", "image": "https://js13kgames.com/games/simple-sailing-simulator/__big.jpg" },
  { "title": "13th Barber's Guild", "url": "https://js13kgames.com/entries/13th-barbers-guild", "image": "https://js13kgames.com/games/13th-barbers-guild/__big.jpg" },
  { "title": "13 Drums", "url": "https://js13kgames.com/entries/13-drums", "image": "https://js13kgames.com/games/13-drums/__big.jpg" },
  { "title": "Trado Polo Explores", "url": "https://js13kgames.com/entries/trado-polo-explores", "image": "https://js13kgames.com/games/trado-polo-explores/__big.jpg" },
  { "title": "Only One", "url": "https://js13kgames.com/entries/only-one", "image": "https://js13kgames.com/games/only-one/__big.jpg" },
  { "title": "Jurassic Nursery", "url": "https://js13kgames.com/entries/jurassic-nursery", "image": "https://js13kgames.com/games/jurassic-nursery/__big.jpg" },
  { "title": "The Baltic League", "url": "https://js13kgames.com/entries/the-baltic-league", "image": "https://js13kgames.com/games/the-baltic-league/__big.jpg" },
  { "title": "1257 Samalas", "url": "https://js13kgames.com/entries/1257-samalas", "image": "https://js13kgames.com/games/1257-samalas/__big.jpg" },
  { "title": "Puzzle Tower", "url": "https://js13kgames.com/entries/puzzle-tower", "image": "https://js13kgames.com/games/puzzle-tower/__big.jpg" },
  { "title": "Crusaders and their Journeys", "url": "https://js13kgames.com/entries/crusaders-and-their-journeys", "image": "https://js13kgames.com/games/crusaders-and-their-journeys/__big.jpg" },
  { "title": "XIII Feet Underground", "url": "https://js13kgames.com/entries/xiii-feet-underground", "image": "https://js13kgames.com/games/xiii-feet-underground/__big.jpg" },
  { "title": "Divine Wind", "url": "https://js13kgames.com/entries/divine-wind", "image": "https://js13kgames.com/games/divine-wind/__big.jpg" },
  { "title": "Predecessors", "url": "https://js13kgames.com/entries/predecessors", "image": "https://js13kgames.com/games/predecessors/__big.jpg" },
  { "title": "Rice or Die", "url": "https://js13kgames.com/entries/rice-or-die", "image": "https://js13kgames.com/games/rice-or-die/__big.jpg" },
  { "title": "When Your Neighbors Are Mongols", "url": "https://js13kgames.com/entries/when-your-neighbors-are-mongols", "image": "https://js13kgames.com/games/when-your-neighbors-are-mongols/__big.jpg" },
  { "title": "Pied Pipe Revolution", "url": "https://js13kgames.com/entries/pied-pipe-revolution", "image": "https://js13kgames.com/games/pied-pipe-revolution/__big.jpg" },


  /////


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

  
