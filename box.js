function Box(id, bottom) {

  this.id = id;
  if (this.id === undefined) {
    this.id = 1;
  }

  this.boxX = 490;
  this.boxY = -40;
  this.height = heightOfBoxes;
  this.width = 140;
  this.fallSpeed = fallSpeed;
  this.color = boxColor;
  this.borderColor = boxBorderColor;

  this.firstNum = Math.floor(Math.random() * 10);
  this.secondNum = Math.floor(Math.random() * 10);
  this.totalNum = this.firstNum + this.secondNum;

  this.borderWidth = "2";

  this.pathTop = -40;
  this.pathBottom = bottom;
  this.pathLength = this.pathBottom - this.pathTop;
  this.doneMoving = false;

  this.canvas = document.getElementById("myCanvas");
  this.ctx = this.canvas.getContext("2d");

}

Box.prototype.drawBox = function() {
//Box fill
  this.ctx.beginPath();
  this.ctx.rect(this.boxX, this.boxY, this.width, this.height);
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
  this.ctx.closePath();

// Set font
  this.ctx.fillStyle = this.borderColor;
  this.ctx.font = "20px Arial";
  ctx.textAlign = "center";

  var boxfill = this.firstNum + " + " + this.secondNum;
  this.ctx.fillText(boxfill, this.boxX+this.width/2, this.boxY+this.height/2);

//Box border
  this.ctx.beginPath();
  this.ctx.rect(this.boxX, this.boxY, this.width, this.height);
  this.ctx.lineWidth = this.borderWidth;
  this.ctx.strokeStyle = this.borderColor;
  this.ctx.stroke();
  this.ctx.closePath();
};

Box.prototype.clearSelf = function () {
  this.ctx.clearRect(
    this.boxX - 1,
    this.boxY - 5,
    this.width + 2,
    this.height + 4
  );
};

Box.prototype.reduceSpeed = function() {
    this.pathLength = this.pathBottom - this.pathTop;
    if (this.boxY === this.pathBottom / 2) {
      this.fallSpeed = this.fallSpeed/2;
    }
    // // if (this.boxStartY === 2*this.pathLength / 3) {
    // //   this.fallSpeed = this.fallSpeed/2;
    // // }
    // if (this.boxStartY === this.pathLength * 3 / 4) {
    //   this.fallSpeed = this.fallSpeed/2;
    // }
    // if (this.boxStartY === this.pathLength * 7 / 8) {
    //   this.fallSpeed = this.fallSpeed/2;
    // }
    if (this.boxY === this.pathBottom) {
      this.fallSpeed = 0;
      this.doneMoving = true;
      if (this.pathBottom > 60)
      {
        // clearInterval(killKey);

        well.dropABox();
      } else {
          clearInterval(well.killKey);
          well.boxes.push(well.fallingBox);
          // alert("GAME OVER");
          // document.location.reload();
      }
    }
};

Box.prototype.dropBox = function () {
  this.ctx.clearRect(
    this.boxX - 1,
    this.boxY - 7,
    this.width + 2,
    this.height + 4
  );
  // this.drawBox(
  //   this.boxStartX - this.borderWidth - 1,
  //   this.boxStartY - this.borderWidth - 1,
  //   this.widthOfBox + this.borderWidth + 1,
  //   this.heightOfBox + this.borderWidth
  // );

  this.drawBox();
  this.boxY += this.fallSpeed;
  this.reduceSpeed();
};


// window.box = Box;
