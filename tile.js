//Tiles fill the grid.  They're always there.
//But their value can change.
//The start with value "", but that changes if something is placed there.

function Tile(x, y) {
  this.value = "";
  this.x = x;
  this.y = y;
}

Tile.prototype.changeValue = function (val) {
  this.value = val;
};
