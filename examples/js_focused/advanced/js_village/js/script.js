BOARD = [];
let $board = $(".board");
let cat_loc = {x: 5, y: 5};
let prev_direction;
let danger_tiles = [];

let selected_build_tile = "mill_crane";

function place_random_tiles(tile_type, count=1){
  for (let i = 0; i < count; i++) {
    let chosen_coords;
    do {
      chosen_coords = {
        x: parseInt(Math.random() * 11),
        y: parseInt(Math.random() * 11)
      }
    } while (BOARD[chosen_coords.y][chosen_coords.x] !== "grass");

    let $chosen_tile = $(`[data-col="${chosen_coords.x}"][data-row="${chosen_coords.y}"]`)
    $chosen_tile.data("tile", tile_type);
    $chosen_tile.children().attr("src", TILES[tile_type]["image"]);
    BOARD[chosen_coords.y][chosen_coords.x] = tile_type;
  }
}

function init_game() {
  INVENTORY.add_items([{"item": "processed_wood", "count": 500}]);
  INVENTORY.add_items([{"item": "metal_beam", "count": 200}]);
  INVENTORY.refresh_ui();


  for (let rows = 0; rows < 11; rows++) {
    let row = [];
    let $new_row = $('<div class="row">');
    let shifted;
    if (rows % 2 === 0) {
      shifted = false;
    } else {
      shifted = true;
    }

    for (let cols = 0; cols < 11; cols++) {

      let $new_tile = $(`<div class="tile" data-tile="grass" data-row="${rows}" data-col="${cols}" data-shifted="${shifted}">`);
      let $new_img = $(`<img src="${TILES["grass"]["image"]}">`);
      $new_tile.append($new_img);

      $new_tile.click(tile_click);
      $new_row.append($new_tile);
      row.push("grass");
    }
    BOARD.push(row);
    $board.append($new_row);
  }

  /*for (let i = 0; i < 10; i++) {
    let chosen_coords;
    do {
      chosen_coords = {
        x: parseInt(Math.random() * 11),
        y: parseInt(Math.random() * 11)
      }
    } while (BOARD[chosen_coords.y][chosen_coords.x] !== "grass");

    let $chosen_tile = $(`[data-col="${chosen_coords.x}"][data-row="${chosen_coords.y}"]`)
    $chosen_tile.data("tile", "woods_dense");
    $chosen_tile.children().attr("src", TILES["woods_dense"]["image"]);
    BOARD[chosen_coords.y][chosen_coords.x] = "woods_dense";
  }*/

  place_random_tiles("woods_dense", 10);
  place_random_tiles("mountain_xl", 2);
  place_random_tiles("mountain_l", 4);


}


function tile_click() {
  let $clicked_tile = $(this);
  let clicked_img = $clicked_tile.children().attr("src");
  let clicked_coords = {x: $clicked_tile.data("col"), y: $clicked_tile.data("row")};
  console.log(clicked_coords);
  if ($clicked_tile.data("tile") === "grass") {
    console.log("tile is grass");
    console.log(TILES["mill_crane"]["cost"]);
    if (INVENTORY.can_afford(TILES[selected_build_tile]["cost"])) {
      INVENTORY.remove_items(TILES[selected_build_tile]["cost"]);
      console.log(INVENTORY);
      $clicked_tile.data("tile", selected_build_tile);
      $clicked_tile.children().attr("src", TILES[selected_build_tile]["image"]);
      BOARD[clicked_coords.y][clicked_coords.x] = selected_build_tile
    } else {
      console.log("can't afford");
    }
  }
  //console.log(clicked_img);
  /*if (clicked_img !== "img/tile_wall.png" && clicked_img !== "img/tile_cat.png") {
    $clicked_tile.children().attr("src", "img/tile_wall.png");
    BOARD[clicked_coords.y][clicked_coords.x] = 1;
    cat_move();
  } else {
    console.log("invalid move");
  }*/

  //$(this).prepend($('<div style="position: relative"><div class="cat-holder"><img class="cat" src="img/LionessSmall.png"></div></div>'));
  //$(this).prepend($('<img class="cat" src="img/LionessSmall.png">'));
}


function game_tick() {
  //console.log("game tick");
  for (let y = 0; y < BOARD.length; y++) {
    for (let x = 0; x < BOARD[0].length; x++) {
      let tile_type = BOARD[y][x];
      if (TILES[tile_type].hasOwnProperty("game_tick")){
        TILES[tile_type].game_tick({x: x, y: y});
      }
    }
  }
}

$(".build-menu-item").click(function(){
  let tile_type = $(this).data("tile");
  console.log(tile_type);
  selected_build_tile = tile_type;
});

init_game();

setInterval(game_tick, 1000);