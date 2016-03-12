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

// Setting game type
  if (gameType === "addition"){
    var firstNum = ADDITION.num1[Math.floor(Math.random() * ADDITION.num1.length)];
    var secondNum = ADDITION.num2[Math.floor(Math.random() * ADDITION.num2.length)];
    var totalNum = firstNum + secondNum;
    this.boxfill = firstNum + " + " + secondNum;
    this.boxAnswer = totalNum;
  }

  if (gameType === "elements"){
    var sampleSize = Object.keys(ELEMENTS).length;
    this.boxfill =
      Object.keys(ELEMENTS)[Math.floor(Math.random() * sampleSize)];
    this.boxAnswer = ELEMENTS[this.boxfill];
  }

  this.borderWidth = boxBorderWidth;

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
  this.ctx.fillStyle = "black";
  this.ctx.font = "26px Arial";
  ctx.textAlign = "center";

  var boxfill = this.boxfill;
  this.ctx.fillText(boxfill, this.boxX+this.width/2, this.boxY+this.height/2 + 5);

//Box border
  this.ctx.beginPath();
  this.ctx.rect(this.boxX + this.borderWidth/2, this.boxY + this.borderWidth/2,
    this.width - this.borderWidth, this.height - this.borderWidth);
  this.ctx.lineWidth = this.borderWidth;
  this.ctx.strokeStyle = this.borderColor;
  this.ctx.stroke();
  this.ctx.closePath();
};

Box.prototype.clearSelf = function () {
  this.ctx.clearRect(
    this.boxX,
    this.boxY,
    this.width,
    this.height
  );
};

Box.prototype.bottomCheck = function() {
    this.pathLength = this.pathBottom - this.pathTop;

    if (this.boxY >= this.pathBottom - this.fallSpeed) {
      this.fallSpeed = 0;
      this.doneMoving = true;
      this.clearSelf();
      this.boxY = this.pathBottom;
      this.drawBox();

      if (this.pathBottom > 60)
      {
          well.dropABox();
      } else {
          clearInterval(well.killKey);
          well.boxes.push(well.fallingBox);
          gameOver();
      }
    }
};

Box.prototype.dropBox = function () {
  this.clearSelf();
  this.boxY += this.fallSpeed;
  this.drawBox();
  this.bottomCheck();
};
