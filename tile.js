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
  this.filled = true;
  this.value = val;
  this.color = filledTileColor;

  //Tile
  this.ctx.beginPath();
  this.ctx.rect(this.x, this.y, this.width, this.height);
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
  this.ctx.closePath();

  //Text Inside Tile
  this.ctx.font = "30px Arial";
  this.ctx.textAlign = "center";
  this.ctx.fillStyle = "black";
  this.ctx.fillText(this.value, this.x+this.width/2, this.y+this.height/2 + 5);
};

Tile.prototype.flashRemoval = function () {
  this.color = tileRemovalColor;

  //Tile
  this.ctx.beginPath();
  this.ctx.rect(this.x, this.y, this.width, this.height);
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
  this.ctx.closePath();

  //Text Inside Tile
  this.ctx.font = "30px Arial";
  this.ctx.textAlign = "center";
  this.ctx.fillStyle = tileRemovalText;
  this.ctx.fillText(this.value, this.x+this.width/2, this.y+this.height/2 + 5);

  // this.drawEmptyTile();
  var self = this;
  setTimeout(function(){
      self.drawEmptyTile();
      userScore += 1;
      showScore();
    }
    , 500);

};

Tile.prototype.drawEmptyTile = function () {
  this.filled = false;
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
