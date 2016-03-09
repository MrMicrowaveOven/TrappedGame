function Grid() {
  this.gridX = 5;
  this.gridY = 5;
  this.squares = [];
  this.spaceBetween = 5;
  this.ctx = canvas.getContext("2d");

}
Grid.prototype.drawSquare = function(tlx, tly, brx, bry, color) {
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

Grid.prototype.fillSquare = function (value) {

};

Grid.prototype.drawGrid = function(tlx, tly, brx, bry) {
    var widthOfEach = (brx - tlx)/this.gridX - this.spaceBetween;
    var heightOfEach = (bry - tly)/this.gridY - this.spaceBetween;

    var thisSquareX = tlx;
    var thisSquareY = tly;
    for (var i = 0; i < this.gridX; i++) {
      for (var j = 0; j < this.gridY; j++) {
        this.drawSquare(thisSquareX, thisSquareY, widthOfEach, heightOfEach, emptyTileColor);
        this.squares.push([
          thisSquareX, thisSquareY, widthOfEach, heightOfEach, [i,j]]);
        thisSquareY += heightOfEach + this.spaceBetween;
      }
      thisSquareX += widthOfEach + this.spaceBetween;
      thisSquareY = tly;
    }
  };
