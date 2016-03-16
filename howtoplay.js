function HowToPlay() {
  this.canvas = canvas;
  this.ctx = ctx;

  this.textCenter = 470;
  this.textTop = 130;

  this.profX = 60;
  this.profY = 180;
  this.profW = 200;
  this.profH = 200;

  this.ss1 = new Image();
  this.ss1.src = "Images/falling.jpg";
  this.ss2 = new Image();
  this.ss2.src = "Images/placing.jpg";
  this.ss3 = new Image();
  this.ss3.src = "Images/clearing.jpg";
  this.ss4 = new Image();
  this.ss4.src = "Images/losing.jpg";


  this.htpPage = 0;

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
  prof.src = "images/professor.gif";
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
  var text4 = "Click the screen to move";
  var text5 = "through the instructions.";
  this.ctx.fillText(text1, this.textCenter, this.textTop);
  this.ctx.fillText(text2, this.textCenter, this.textTop + 50);
  this.ctx.fillText(text3, this.textCenter, this.textTop + 100);
  this.ctx.fillText(text4, this.textCenter, this.textTop + 170);
  this.ctx.fillText(text5, this.textCenter, this.textTop + 210);

  this.canvas.addEventListener("mousedown", this.firstDiagram.bind(this), true);
};

HowToPlay.prototype.firstDiagram = function () {
  this.canvas.removeEventListener("mousedown", this.firstDiagram.bind(this), true);
  this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
  var self = this;

  self.ctx.drawImage(
    this.ss1, 0, 0
  );

  this.canvas.addEventListener("mousedown", self.secondDiagram.bind(this), true);
};

HowToPlay.prototype.secondDiagram = function () {
  this.canvas.removeEventListener("mousedown", this.secondDiagram.bind(this), true);
  this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
  var self = this;

  self.ctx.drawImage(
    this.ss2, 0, 0
  );

  this.canvas.addEventListener("mousedown", this.thirdDiagram.bind(this), true);
};

HowToPlay.prototype.thirdDiagram = function () {
  this.canvas.removeEventListener("mousedown", this.thirdDiagram.bind(this), true);
  this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
  var self = this;

  self.ctx.drawImage(
    this.ss3, 0, 0
  );

  this.canvas.addEventListener("mousedown", this.fourthDiagram.bind(this), true);
};

HowToPlay.prototype.fourthDiagram = function () {
  this.canvas.removeEventListener("mousedown", this.fourthDiagram.bind(this), true);
  this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
  var self = this;

  self.ctx.drawImage(
    this.ss4, 0, 0
  );

  this.canvas.addEventListener("mousedown", self.backToMenu, true);
};

HowToPlay.prototype.backToMenu = function () {
  document.location.reload();
  // howtoplayState = false;
  // gamemenu.render();
  // this.canvas.removeEventListener("mousedown",self.backToMenu, true);
};
