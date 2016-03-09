//Tiles fill the grid.  They're always there.
//But their value can change.
//The start with value "", but that changes if something is placed there.

function Tile(x, y, width, height) {
  this.value = "";
  this.filled = false;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = emptyTileColor;
}

Tile.prototype.changeValue = function (val) {
  this.value = val;

};

Tile.prototype.drawTile = function () {
  this.ctx.beginPath();
  this.ctx.rect(this.x, this.y, this.width, this.height);
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
  this.ctx.closePath();

  //
  this.ctx.beginPath();
  this.ctx.rect(this.x-grid.spaceBetween/2, this.y-grid.spaceBetween/2,
    this.width+grid.spaceBetween, this.height+grid.spaceBetween);
  this.ctx.lineWidth="5";
  this.ctx.strokeStyle = boxBorderColor;
  this.ctx.stroke();
  this.ctx.closePath();
};
