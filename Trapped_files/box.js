function Box(id, bottom) {

  this.id = id;
  if (this.id === undefined) {
    this.id = 1;
  }

  this.boxX = boxStartX;
  this.boxY = -40;
  this.height = heightOfBoxes;
  this.width = 140;
  this.fallSpeed = fallSpeed;

  this.red = boxRed;
  this.green = boxGreen;
  this.blue = boxBlue;
  this.opacity = boxOpacity;

  this.fontOpacity = 1;

  this.borderOpacity = 1;
  this.borderColor = "rgba(0,0,0," + this.borderOpacity + ")";

  this.color = "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.opacity + ")";

// Setting game type
  if (gameType === GREEK || gameType === ELEMENTS || gameType === ROMAN) {
    this.boxfill =
      Object.keys(deck)[Math.floor(Math.random() * 20)];
    this.boxAnswer = deck[this.boxfill];
  }

  if (gameType === ADDITION){
    var firstNum = ADDITION.num1[Math.floor(Math.random() * ADDITION.num1.length)];
    var secondNum = ADDITION.num2[Math.floor(Math.random() * ADDITION.num2.length)];
    var totalNum = firstNum + secondNum;
    this.boxfill = firstNum + " + " + secondNum;
    this.boxAnswer = totalNum;
  }


  this.borderWidth = boxBorderWidth;

  this.pathTop = -40;
  this.pathBottom = bottom;
  this.pathLength = this.pathBottom - this.pathTop;
  this.doneMoving = false;

  this.canvas = document.getElementById("myCanvas");
  this.ctx = this.canvas.getContext("2d");

}

Box.prototype.slideLeft = function () {
  var self = this;
  var killInterval = setInterval(
    function() {
      self.clearSelf();
      self.boxX -= 2;
      self.opacity -= 0.02;
      self.borderOpacity -= 0.02;
      self.fontOpacity -= 0.02;
      self.color = "rgba(" + self.red + "," + self.green + "," + self.blue + "," + self.opacity + ")";
      self.borderColor = "rgba(0,0,0," + self.borderOpacity + ")";
      if (well.boxes.length > 0) {
        well.boxes[0].drawBox();
      }
      // console.log(self.opacity);
      self.drawBox();
    }, 5
  );
  setTimeout(function() {
    clearInterval(killInterval);
    if (self.boxX + self.width > boxStartX) {
      self.boxX = boxStartX - self.width;
    }
    self.clearSelf();
  }, 320);
  // this.clearSelf();
};

Box.prototype.drawBox = function() {
//Box fill
  this.ctx.beginPath();
  this.ctx.rect(this.boxX, this.boxY, this.width, this.height);
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
  this.ctx.closePath();

// Set font
  this.ctx.fillStyle = "rgba(0,0,0," + this.fontOpacity + ")";
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
