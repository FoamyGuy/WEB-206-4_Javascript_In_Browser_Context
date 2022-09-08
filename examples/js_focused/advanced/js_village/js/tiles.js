TILES = {
  "grass": {
    "image": "img/tile_grass.png"
  },
  "woods_dense": {
    "image": "img/woods_dense_1.png"
  },
  "mountain_xl": {
    "image": "img/mountain_xl.png"
  },
  "mountain_l": {
    "image": "img/mountain_l.png"
  },
  "mill_crane": {
    "image": "img/mill_crane.png",
    "game_tick": function (loc) {
      //console.log("inside mill crane tick");
      let adjacent_tiles = get_adjacent_tiles(loc);
      //console.log(adjacent_tiles);
      for (let i = 0; i < adjacent_tiles.length; i++) {
        let tile = adjacent_tiles[i];
        //console.log(BOARD[adjacent_tiles[i].y][adjacent_tiles[i].x]);
        try {
          if (BOARD[tile.y][tile.x] === "woods_dense") {
            INVENTORY.add_items([{"item": "raw_wood", "count": 5}]);
          }
        } catch (e) {
          //outside board
        }
      }
    },
    "cost": [
      {"item": "processed_wood", "count": "100"},
      {"item": "metal_beam", "count": "10"}
    ]
  },
  "mill_cutter": {
    "image": "img/mill_cutter.png",
    "game_tick": function (loc) {
      let adjacent_tiles = get_adjacent_tiles(loc);
      //console.log(adjacent_tiles);
      for (let i = 0; i < adjacent_tiles.length; i++) {
        //console.log(BOARD[adjacent_tiles[i].y][adjacent_tiles[i].x]);
        try {
          if (BOARD[adjacent_tiles[i].y][adjacent_tiles[i].x] === "mill_crane") {
            if (INVENTORY.can_afford([{"item": "raw_wood", "count": 10}])) {
              INVENTORY.add_items([{"item": "processed_wood", "count": 20}]);
              INVENTORY.remove_items([{"item": "raw_wood", "count": 10}])
            }
          }
        } catch (e) {
          //outside board
        }
      }
    },
    "cost": [
      {"item": "processed_wood", "count": "200"},
      {"item": "metal_beam", "count": "30"}
    ]
  },
  "mine": {
    "image": "img/mine.png",
    "game_tick": function (loc) {
      //console.log("inside mill crane tick");
      let adjacent_tiles = get_adjacent_tiles(loc);
      //console.log(adjacent_tiles);
      for (let i = 0; i < adjacent_tiles.length; i++) {
        let tile = adjacent_tiles[i];
        //console.log(BOARD[adjacent_tiles[i].y][adjacent_tiles[i].x]);
        try {
          if (BOARD[tile.y][tile.x] === "mountain_xl") {
            INVENTORY.add_items([{"item": "stone", "count": 10}]);
            if (Math.random() * 10 > 7) {
              INVENTORY.add_items([{"item": "metal_ore", "count": 10}]);
            }
          }
          if (BOARD[tile.y][tile.x] === "mountain_l") {
            INVENTORY.add_items([{"item": "stone", "count": 5}]);
            if (Math.random() * 10 > 6) {
              INVENTORY.add_items([{"item": "metal_ore", "count": 3}]);
            }
          }
        } catch (e) {
          //outsideboard
        }
      }
    },
    "cost": [
      {"item": "processed_wood", "count": "100"},
      {"item": "metal_beam", "count": "30"}
    ]
  },
  "blacksmith": {
    "image": "img/blacksmith.png",
    "game_tick": function (loc) {
      let adjacent_tiles = get_adjacent_tiles(loc);
      //console.log(adjacent_tiles);
      for (let i = 0; i < adjacent_tiles.length; i++) {
        //console.log(BOARD[adjacent_tiles[i].y][adjacent_tiles[i].x]);
        try {
          if (BOARD[adjacent_tiles[i].y][adjacent_tiles[i].x] === "mine") {
            if (INVENTORY.can_afford([{"item": "metal_ore", "count": 10}])) {
              INVENTORY.add_items([{"item": "metal_beam", "count": 20}]);
              INVENTORY.remove_items([{"item": "metal_ore", "count": 10}])
            }
          }
        } catch (e) {
          // outside board
        }
      }
    },
    "cost": [
      {"item": "processed_wood", "count": "200"},
      {"item": "metal_beam", "count": "30"}
    ]
  },
  "brick_factory": {
    "image": "img/brick_factory.png",
    "game_tick": function (loc) {
      let adjacent_tiles = get_adjacent_tiles(loc);
      //console.log(adjacent_tiles);
      for (let i = 0; i < adjacent_tiles.length; i++) {
        //console.log(BOARD[adjacent_tiles[i].y][adjacent_tiles[i].x]);
        try {
          if (BOARD[adjacent_tiles[i].y][adjacent_tiles[i].x] === "mine") {
            if (INVENTORY.can_afford([{"item": "stone", "count": 20}])) {
              INVENTORY.add_items([{"item": "brick", "count": 20}]);
              INVENTORY.remove_items([{"item": "stone", "count": 20}])
            }
          }
        } catch (e) {
          // outside board
        }
      }
    },
    "cost": [
      {"item": "processed_wood", "count": "200"},
      {"item": "stone", "count": "400"},
      {"item": "metal_beam", "count": "30"}
    ]
  }
};