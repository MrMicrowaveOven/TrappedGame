//Tiles fill the grid.  They're always there.
//But their value can change.
//The start with value "", but that changes if something is placed there.

function Tile(x, y, width, height, row, column) {
  this.value = "";
  this.filled = false;
  this.row = row;
  this.column = column;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = emptyTileColor;
  this.ctx = ctx;
}

Tile.prototype.changeValue = function (val) {
  this.value = val;
  this.color = filledTileColor;

  this.ctx.beginPath();
  this.ctx.rect(this.x, this.y, this.width, this.height);
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
  this.ctx.closePath();

  this.ctx.beginPath();
  this.ctx.rect(this.x - grid.spaceBetween/2, this.y - grid.spaceBetween/2,
    this.width + grid.spaceBetween, this.height + grid.spaceBetween);
  this.ctx.lineWidth="5";
  this.ctx.strokeStyle = gridBorderColor;
  this.ctx.stroke();
  this.ctx.closePath();

};

Tile.prototype.drawEmptyTile = function () {
  this.value = "";
  this.color = emptyTileColor;

  this.ctx.beginPath();
  this.ctx.rect(this.x, this.y, this.width, this.height);
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
  this.ctx.closePath();

  this.ctx.beginPath();
  this.ctx.rect(this.x - grid.spaceBetween/2, this.y - grid.spaceBetween/2,
    this.width + grid.spaceBetween, this.height + grid.spaceBetween);
  this.ctx.lineWidth="5";
  this.ctx.strokeStyle = gridBorderColor;
  this.ctx.stroke();
  this.ctx.closePath();

};

Tile.prototype.drawTile = function () {
  // this.ctx.beginPath();
  // this.ctx.rect(this.x, this.y, this.width, this.height);
  // this.ctx.fillStyle = this.color;
  // this.ctx.fill();
  // this.ctx.closePath();
  //
  // //
  // this.ctx.beginPath();
  // this.ctx.rect(this.x-grid.spaceBetween/2, this.y-grid.spaceBetween/2,
  //   this.width+grid.spaceBetween, this.height+grid.spaceBetween);
  // this.ctx.lineWidth="5";
  // this.ctx.strokeStyle = boxBorderColor;
  // this.ctx.stroke();
  // this.ctx.closePath();
};
