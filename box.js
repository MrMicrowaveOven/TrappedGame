function Box(id, bottom) {

  this.id = id;
  if (this.id === undefined) {
    this.id = 1;
  }

  this.boxStartX = 490;
  this.boxStartY = -40;
  this.heightOfBox = 60;
  this.widthOfBox = 140;
  this.fallSpeed = 5;
  this.boxesQueue = [];

  this.firstNum = Math.floor(Math.random() * 10);
  this.secondNum = Math.floor(Math.random() * 10);
  this.totalNum = this.firstNum + this.secondNum;

  this.borderWidth = "2";

  this.pathTop = -40;
  this.pathBottom = bottom;
  if (bottom === undefined) {
    this.pathBottom = 260;
  }
  this.pathLength = this.pathBottom - this.pathTop;
  this.doneMoving = false;

  this.canvas = document.getElementById("myCanvas");
  this.ctx = this.canvas.getContext("2d");

}

Box.prototype.drawBox = function(tlx, tly, brx, bry, color) {
  this.ctx.beginPath();
  this.ctx.rect(tlx, tly, brx, bry);
  this.ctx.fillStyle = color;
  this.ctx.fill();
  this.ctx.closePath();

// Set font
  this.ctx.fillStyle = boxBorderColor;
  this.ctx.font = "20px Arial";
  ctx.textAlign = "center";

  var boxfill = this.firstNum + " + " + this.secondNum;
  this.ctx.fillText(boxfill, this.boxStartX+this.widthOfBox/2, this.boxStartY+this.heightOfBox/2);

  this.ctx.beginPath();
  this.ctx.rect(tlx, tly, brx, bry);
  this.ctx.lineWidth = this.borderWidth;
  this.ctx.strokeStyle = boxBorderColor;
  this.ctx.stroke();
  this.ctx.closePath();
};

Box.prototype.reduceSpeed = function(killKey) {

    // if (this.boxStartY === this.pathLength / 2) {
    //   this.fallSpeed = this.fallSpeed/2;
    // }
    // // if (this.boxStartY === 2*this.pathLength / 3) {
    // //   this.fallSpeed = this.fallSpeed/2;
    // // }
    // if (this.boxStartY === this.pathLength * 3 / 4) {
    //   this.fallSpeed = this.fallSpeed/2;
    // }
    // if (this.boxStartY === this.pathLength * 7 / 8) {
    //   this.fallSpeed = this.fallSpeed/2;
    // }
    if (this.boxStartY === this.pathLength) {
      this.fallSpeed = 0;
      this.doneMoving = true;
      if (this.pathBottom > 60)
      {
        var box2 = new Box(this.id + 1, this.pathBottom - this.heightOfBox);
        allBoxes.push(box2);
        clearInterval(killKey);
        dropOneBox(box2);
      } else {
          clearInterval(killKey);
          // alert("GAME OVER");
          // document.location.reload();
      }
    }
};

Box.prototype.dropBox = function (killKey) {
  this.ctx.clearRect(
    this.boxStartX - 1,
    this.boxStartY - 7,
    this.widthOfBox + 2,
    this.heightOfBox + 4
  );
  // this.drawBox(
  //   this.boxStartX - this.borderWidth - 1,
  //   this.boxStartY - this.borderWidth - 1,
  //   this.widthOfBox + this.borderWidth + 1,
  //   this.heightOfBox + this.borderWidth
  // );

  this.drawBox(this.boxStartX, this.boxStartY,
    this.widthOfBox, this.heightOfBox, filledTileColor);
  this.boxStartY += this.fallSpeed;
  this.reduceSpeed(killKey);
};


// window.box = Box;
