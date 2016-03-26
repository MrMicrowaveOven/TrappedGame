function Grid() {
  // Number of tiles on the grid: 25 (5x5)
  this.gridX = 5;
  this.gridY = 5;

  this.tiles = [];
  this.spaceBetween = 5;
  this.ctx = canvas.getContext("2d");
}


Grid.prototype.drawGrid = function(tlx, tly, width, height) {
  var widthOfEach = width/this.gridX - this.spaceBetween;
  var heightOfEach = height/this.gridY - this.spaceBetween;

  var tile;
  var thistileX = tlx;
  var thistileY = tly;
  for (var i = 0; i < this.gridX; i++) {
    for (var j = 0; j < this.gridY; j++) {
      tile = new Tile(thistileX, thistileY, widthOfEach, heightOfEach, i, j)
      tile.drawEmptyTile();
      this.tiles.push(tile);
      thistileY += heightOfEach + this.spaceBetween;
    }
    thistileX += widthOfEach + this.spaceBetween;
    thistileY = tly;
  }
};

Grid.prototype.checkForRemovals = function (centerTile) {

  var adjacentTiles = this.getAdjacentTiles(centerTile);

  var removeTheseTiles = this.tilesToRemove(centerTile, adjacentTiles);
  //Remove Tiles
  this.removeTiles(removeTheseTiles);
};

Grid.prototype.tilesToRemove = function (centerTile, adjacentTiles) {
  //Decide which tiles to remove
  var removeTheseTiles = [];
  adjacentTiles.forEach(function(tile) {
    if (tile.value === centerTile.value) {
      removeTheseTiles.push(tile);
    }
  });
  if (removeTheseTiles.length > 0) {
    removeTheseTiles.push(centerTile);
  }
  return removeTheseTiles;
};

Grid.prototype.removeTiles = function (removeTheseTiles) {
  removeTheseTiles.forEach(function(tile) {
    tile.flashRemoval();
  });
};

Grid.prototype.isFull = function () {
  var full = true;
  this.tiles.forEach(function(tile) {
      if (!tile.filled || tile.color === tileRemovalColor) {
        full = false;
      }
  });
  return full;
};

Grid.prototype.getAdjacentTiles = function (centerTile) {
  var adjacentTiles = [];
  //getAdjacentTiles
  this.tiles.forEach(function(tile){
    if (tile.row === centerTile.row) {
      if (tile.column === centerTile.column + 1 || tile.column === centerTile.column - 1) {
        adjacentTiles.push(tile);
      }
    } else if (tile.column === centerTile.column) {
      if (tile.row === centerTile.row + 1 || tile.row === centerTile.row - 1) {
        adjacentTiles.push(tile);
      }
    }
  });
  return adjacentTiles;
};
