function GameMenu(){
  this.ctx = ctx;
  this.canvas = canvas;
  this.menuBorder = 50;

  this.textCenter = this.canvas.width/2;

  this.playMathButtonX = 190;
  this.playMathButtonY = 230;
  this.playMathButtonWidth = 140;
  this.playMathButtonHeight = 50;
  // this.playMathButtonXCenter =

  this.playElementsButtonX = 420;
  this.playElementsButtonY = 230;
  this.playElementsButtonWidth = 160;
  this.playElementsButtonHeight = 50;


}

GameMenu.prototype.handleClick = function (clickX, clickY) {
  if (clickX > this.playMathButtonX &&
    clickX < this.playMathButtonX + this.playMathButtonWidth &&
    clickY > this.playMathButtonY &&
    clickY < this.playMathButtonY + this.playMathButtonHeight){
      gameType = "addition";
      play();
  }

  if (clickX > this.playElementsButtonX &&
    clickX < this.playElementsButtonX + this.playElementsButtonWidth &&
    clickY > this.playElementsButtonY &&
    clickY < this.playElementsButtonY + this.playElementsButtonHeight){
      gameType = "elements";
      play();
    }

};

GameMenu.prototype.render = function () {
  this.ctx.beginPath();
  this.ctx.rect(this.menuBorder, this.menuBorder,
    this.canvas.width - this.menuBorder*2,
    this.canvas.height - this.menuBorder*2);
  this.ctx.fillStyle = "rgba(70,70,70,.9)";
  this.ctx.fill();
  this.ctx.closePath();

  this.ctx.font = "20px Arial";
  this.ctx.textAlign = "center";
  this.ctx.fillStyle = "black";
  var title = "Hello!  Welcome to Trapped!";
  var title2 = "What would you like to study?  Addition or Elements?";
  this.ctx.fillText(title, this.textCenter, 150);
  this.ctx.fillText(title2, this.textCenter, 190);

// Play Math Button
  this.ctx.beginPath();
  this.ctx.rect(this.playMathButtonX, this.playMathButtonY,
    this.playMathButtonWidth, this.playMathButtonHeight);
  this.ctx.fillStyle = "red";
  this.ctx.fill();
  this.ctx.closePath();

  this.ctx.font = "20px Arial";
  this.ctx.textAlign = "center";
  this.ctx.fillStyle = "black";
  var title = "Play Addition";
  this.ctx.fillText(title,
    this.playMathButtonX + this.playMathButtonWidth/2,
    this.playMathButtonY + this.playMathButtonHeight/2 + 5);

// Play Elements Button
  this.ctx.beginPath();
  this.ctx.rect(this.playElementsButtonX, this.playElementsButtonY,
    this.playElementsButtonWidth, this.playElementsButtonHeight);
  this.ctx.fillStyle = "red";
  this.ctx.fill();
  this.ctx.closePath();

  this.ctx.font = "20px Arial";
  this.ctx.textAlign = "center";
  this.ctx.fillStyle = "black";
  var title = "Play Elements";
  this.ctx.fillText(title,
    this.playElementsButtonX + this.playElementsButtonWidth/2,
    this.playElementsButtonY + this.playElementsButtonHeight/2 + 5);
};
