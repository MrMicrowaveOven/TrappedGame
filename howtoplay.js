function HowToPlay() {
  this.canvas = canvas;
  this.ctx = ctx;

  this.textCenter = 475;

  this.profX = 60;
  this.profY = 180;
  this.profW = 200;
  this.profH = 200;

  this.backgroundColor = "rgba(70,70,70,.9)";
  this.menuBorder = 50;
}

HowToPlay.prototype.begin = function () {
  this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);

// Draw background
  this.ctx.beginPath();
  this.ctx.rect(this.menuBorder, this.menuBorder,
    this.canvas.width - this.menuBorder*2,
    this.canvas.height - this.menuBorder*2);
  this.ctx.fillStyle = this.backgroundColor;
  this.ctx.fill();
  this.ctx.closePath();

//Draw professor
  var prof = new Image();
  var self = this;
  prof.src = "professor.gif";
  prof.onload = function(){
    self.ctx.drawImage(
      prof,
      0, 0, 350, 410,
      self.profX, self.profY, self.profW, self.profH
    );
  };

//Write text
this.ctx.font = "20px Arial";
this.ctx.textAlign = "center";
this.ctx.fillStyle = "rgba(97,208,208,1)";
var text1 = "Welcome to my laboratory!";
var text2 = "My name is Professor Buttercup, and I ";
var text3 = "could use some help organizing my tiles.";
var text4 = "Click the screen to continue.";
this.ctx.fillText(text1, this.textCenter, 110);
this.ctx.fillText(text2, this.textCenter, 160);
this.ctx.fillText(text3, this.textCenter, 210);
this.ctx.fillText(text4, this.textCenter, 280);

this.canvas.addEventListener("mousedown", this.firstDiagram.bind(this), true);
};

HowToPlay.prototype.firstDiagram = function () {
  this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);

  var self = this;

  //Draw background
  this.ctx.beginPath();
  this.ctx.rect(this.menuBorder, this.menuBorder,
    this.canvas.width - this.menuBorder*2,
    this.canvas.height - this.menuBorder*2);
  this.ctx.fillStyle = this.backgroundColor;
  this.ctx.fill();
  this.ctx.closePath();

  //Draw screenshot
  var ss1 = new Image();
  ss1.src = "HTP_ScreenShot1.png";
  ss1.onload = function(){
    self.ctx.drawImage(
      ss1, 0, 0
    );
  };


  this.canvas.addEventListener("mousedown", this.firstDiagram.bind(this), true);
};
