function HowToPlay() {
  this.canvas = canvas;
  this.ctx = ctx;

  this.backgroundColor = "rgba(70,70,70,.9)";
  this.menuBorder = 50;
}

HowToPlay.prototype.begin = function () {
  this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);

// Draw border
  this.ctx.beginPath();
  this.ctx.rect(this.menuBorder, this.menuBorder,
    this.canvas.width - this.menuBorder*2,
    this.canvas.height - this.menuBorder*2);
  this.ctx.fillStyle = this.backgroundColor;
  this.ctx.fill();
  this.ctx.closePath();

//Draw professor
  var prof = new Image(100,100);
  prof.src = 'professor.jpg';
  this.ctx.drawImage(prof,100,100);
};
