function Grid() {
  this.gridX = 5;
  this.gridY = 5;
  this.tiles = [];
  this.spaceBetween = 5;
  this.ctx = canvas.getContext("2d");

}
Grid.prototype.drawtile = function(tlx, tly, brx, bry, color) {
    this.ctx.beginPath();
    this.ctx.rect(tlx, tly, brx, bry);
    this.ctx.fillStyle = color;
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.rect(tlx-this.spaceBetween/2, tly-this.spaceBetween/2,
      brx+this.spaceBetween, bry+this.spaceBetween);
    this.ctx.lineWidth="5";
    this.ctx.strokeStyle = gridBorderColor;
    this.ctx.stroke();
    this.ctx.closePath();
  };

Grid.prototype.filltile = function (value) {

};

Grid.prototype.drawGrid = function(tlx, tly, brx, bry) {
    var widthOfEach = (brx - tlx)/this.gridX - this.spaceBetween;
    var heightOfEach = (bry - tly)/this.gridY - this.spaceBetween;

    var thistileX = tlx;
    var thistileY = tly;
    for (var i = 0; i < this.gridX; i++) {
      for (var j = 0; j < this.gridY; j++) {
        this.drawtile(thistileX, thistileY, widthOfEach, heightOfEach, emptyTileColor);
        this.tiles.push([
          thistileX, thistileY, widthOfEach, heightOfEach, [i,j]]);
        thistileY += heightOfEach + this.spaceBetween;
      }
      thistileX += widthOfEach + this.spaceBetween;
      thistileY = tly;
    }
  };
