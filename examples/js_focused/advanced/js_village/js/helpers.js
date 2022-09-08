function get_adjacent_tiles(coords) {
  let $tile = $(`[data-col="${coords.x}"][data-row="${coords.y}"]`);
  //console.log(`shifted_str: ${$tile.data("shifted")}`);
  let shifted = $tile.data("shifted") === true;
  //console.log(`shifted: ${shifted}`);

  let adjacent_tiles = [];

  adjacent_tiles.push({x: coords.x - 1, y: coords.y});
  adjacent_tiles.push({x: coords.x + 1, y: coords.y});

  if (shifted) {
    adjacent_tiles.push({x: coords.x + 1, y: coords.y - 1});
    adjacent_tiles.push({x: coords.x, y: coords.y - 1});

    adjacent_tiles.push({x: coords.x + 1, y: coords.y + 1});
    adjacent_tiles.push({x: coords.x, y: coords.y + 1});
  } else { // not shifted
    adjacent_tiles.push({x: coords.x - 1, y: coords.y - 1});
    adjacent_tiles.push({x: coords.x, y: coords.y - 1});

    adjacent_tiles.push({x: coords.x - 1, y: coords.y + 1});
    adjacent_tiles.push({x: coords.x, y: coords.y + 1});
  }
  return adjacent_tiles;
}