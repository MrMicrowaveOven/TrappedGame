function GameMenu(){
  this.ctx = ctx;
  this.canvas = canvas;
  this.menuBorder = 50;

  this.textCenter = this.canvas.width/2;
  this.textTop = 110;
  this.textBetween = 45;


  this.HTPButtonX = 500;
  this.HTPButtonY = 80;
  this.HTPButtonWidth = 140;
  this.HTPButtonHeight = 45;


  this.playMathButtonX = 180;
  this.playMathButtonY = 280;
  this.playMathButtonWidth = 160;
  this.playMathButtonHeight = 50;
  // this.playMathButtonXCenter =

  this.playElementsButtonX = 380;
  this.playElementsButtonY = 280;
  this.playElementsButtonWidth = 160;
  this.playElementsButtonHeight = 50;


  this.playGreekButtonX = 180;
  this.playGreekButtonY = 355;
  this.playGreekButtonWidth = 160;
  this.playGreekButtonHeight = 50;


  this.playRomanButtonX = 380;
  this.playRomanButtonY = 355;
  this.playRomanButtonWidth = 160;
  this.playRomanButtonHeight = 50;


  //Colors ******************

  //Gray
  this.menuBackgroundColor = "rgba(70,70,70,.9)";

  //Purple-ish
  this.buttonColor = "rgba(97,97,208,1)";

  //Like Purple-ish, but more Blue-ish
  this.HTPbuttonColor = "rgba(155,97,255,1)";

  //DarkBlue
  this.buttonTextColor = "rgba(23,23,78,1)";

  //end of Colors


}

GameMenu.prototype.handleClick = function (clickX, clickY) {
  if (clickX > this.HTPButtonX &&
    clickX < this.HTPButtonX + this.HTPButtonWidth &&
    clickY > this.HTPButtonY &&
    clickY < this.HTPButtonY + this.HTPButtonHeight
  ){
      howtoplayState = true;
      howtoplay.begin();
  }

  if (clickX > this.playMathButtonX &&
    clickX < this.playMathButtonX + this.playMathButtonWidth &&
    clickY > this.playMathButtonY &&
    clickY < this.playMathButtonY + this.playMathButtonHeight
  ){
      gameType = ADDITION;
      play();
  }

  if (clickX > this.playElementsButtonX &&
    clickX < this.playElementsButtonX + this.playElementsButtonWidth &&
    clickY > this.playElementsButtonY &&
    clickY < this.playElementsButtonY + this.playElementsButtonHeight
  ){
      gameType = ELEMENTS;
      play();
  }

  if (clickX > this.playGreekButtonX &&
    clickX < this.playGreekButtonX + this.playGreekButtonWidth &&
    clickY > this.playGreekButtonY &&
    clickY < this.playGreekButtonY + this.playGreekButtonHeight
  ){
      gameType = GREEK;
      play();
  }

  if (clickX > this.playRomanButtonX &&
    clickX < this.playRomanButtonX + this.playRomanButtonWidth &&
    clickY > this.playRomanButtonY &&
    clickY < this.playRomanButtonY + this.playRomanButtonHeight
  ){
      gameType = ROMAN;
      play();
  }

};

GameMenu.prototype.render = function () {
  this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
  this.ctx.beginPath();
  this.ctx.rect(this.menuBorder, this.menuBorder,
    this.canvas.width - this.menuBorder*2,
    this.canvas.height - this.menuBorder*2);
  this.ctx.fillStyle = this.menuBackgroundColor;
  this.ctx.fill();
  this.ctx.closePath();

  this.ctx.font = "20px Arial";
  this.ctx.textAlign = "center";
  this.ctx.fillStyle = "rgba(97,208,208,1)";
  var title = "Welcome to Trapped!";
  var title2 = "This is a game for learning useful things.";
  var title3 = "What would you like to study?";
  var title4 = "Addition, Elements, the Greek Alphabet, or the Roman Numerals?";
  this.ctx.fillText(title, this.textCenter, this.textTop);
  this.ctx.fillText(title2, this.textCenter, this.textTop + this.textBetween);
  this.ctx.fillText(title3, this.textCenter, this.textTop + 2*this.textBetween);
  this.ctx.fillText(title4, this.textCenter, this.textTop + 3*this.textBetween);

  // How To Play Button
  this.ctx.beginPath();
  this.ctx.rect(this.HTPButtonX, this.HTPButtonY,
    this.HTPButtonWidth, this.HTPButtonHeight);
  this.ctx.fillStyle = this.HTPbuttonColor;
  this.ctx.fill();
  this.ctx.closePath();

  this.ctx.font = "20px Arial";
  this.ctx.textAlign = "center";
  this.ctx.fillStyle = this.buttonTextColor;
  title = "How to Play";
  this.ctx.fillText(title,
    this.HTPButtonX + this.HTPButtonWidth/2,
    this.HTPButtonY + this.HTPButtonHeight/2 + 5);

// Play Math Button
  this.ctx.beginPath();
  this.ctx.rect(this.playMathButtonX, this.playMathButtonY,
    this.playMathButtonWidth, this.playMathButtonHeight);
  this.ctx.fillStyle = this.buttonColor;
  this.ctx.fill();
  this.ctx.closePath();

  this.ctx.font = "20px Arial";
  this.ctx.textAlign = "center";
  this.ctx.fillStyle = this.buttonTextColor;
  title = "Play Addition";
  this.ctx.fillText(title,
    this.playMathButtonX + this.playMathButtonWidth/2,
    this.playMathButtonY + this.playMathButtonHeight/2 + 5);

// Play Elements Button
  this.ctx.beginPath();
  this.ctx.rect(this.playElementsButtonX, this.playElementsButtonY,
    this.playElementsButtonWidth, this.playElementsButtonHeight);
  this.ctx.fillStyle = this.buttonColor;
  this.ctx.fill();
  this.ctx.closePath();

  this.ctx.font = "20px Arial";
  this.ctx.textAlign = "center";
  this.ctx.fillStyle = this.buttonTextColor;
  title = "Play Elements";
  this.ctx.fillText(title,
    this.playElementsButtonX + this.playElementsButtonWidth/2,
    this.playElementsButtonY + this.playElementsButtonHeight/2 + 5);

// Play Greek Button
  this.ctx.beginPath();
  this.ctx.rect(this.playGreekButtonX, this.playGreekButtonY,
    this.playGreekButtonWidth, this.playGreekButtonHeight);
  this.ctx.fillStyle = this.buttonColor;
  this.ctx.fill();
  this.ctx.closePath();

  this.ctx.font = "20px Arial";
  this.ctx.textAlign = "center";
  this.ctx.fillStyle = this.buttonTextColor;
  var title = "Play Greek";
  this.ctx.fillText(title,
    this.playGreekButtonX + this.playGreekButtonWidth/2,
    this.playGreekButtonY + this.playGreekButtonHeight/2 + 5);

// Play Roman Button
  this.ctx.beginPath();
  this.ctx.rect(this.playRomanButtonX, this.playRomanButtonY,
    this.playRomanButtonWidth, this.playRomanButtonHeight);
  this.ctx.fillStyle = this.buttonColor;
  this.ctx.fill();
  this.ctx.closePath();

  this.ctx.font = "20px Arial";
  this.ctx.textAlign = "center";
  this.ctx.fillStyle = this.buttonTextColor;
  var title = "Play Roman";
  this.ctx.fillText(title,
    this.playRomanButtonX + this.playRomanButtonWidth/2,
    this.playRomanButtonY + this.playRomanButtonHeight/2 + 5);
};
