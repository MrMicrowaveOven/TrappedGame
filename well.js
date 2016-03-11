function Well(){
  //this.boxes is ONLY the boxes stuck at the bottom.  NOT the one falling.
  this.boxes = [];
  this.fallingBox = "";
  this.ctx = ctx;
  this.boxCount = 0;
  this.killKey = "";
}


Well.prototype.dropABox = function () {
  if (this.fallingBox !== "") {this.boxes.push(this.fallingBox);}

  if (this.killKey !=="") {clearInterval(this.killKey);}

  var bottom = 400 - this.boxes.length * heightOfBoxes;
  this.boxCount += 1;
  if (this.boxCount % 20 === 0) {fallSpeed = fallSpeed+1};

  this.fallingBox = new Box(this.boxCount, bottom);
  this.killKey = setInterval(this.dropping.bind(this), 10);
};

Well.prototype.dropping = function () {
  this.fallingBox.dropBox();
};

Well.prototype.removeABox = function () {
  if (this.boxes.length > 0) {
    //Clear previous boxes
    this.boxes.forEach(function(box) {
      ctx.clearRect(
        box.boxX - 1,
        box.boxY - 7,
        box.width + 2,
        box.height+ 8
      );
    });
    //Remove the one box from the queue
    var placed = this.boxes.shift();

    //Make the falling box fall further this time.
    this.fallingBox.pathBottom += this.fallingBox.height;

    //Restack boxes
    this.boxes.forEach(function(box) {
      box.boxY += box.height;
      box.drawBox();
    });
    // debugger;
    return placed.boxAnswer;
  } else {
    //If a falling box was placed
    clearInterval(this.killKey);
    this.fallingBox.clearSelf();
    var fallValue = this.fallingBox.boxAnswer;
    this.fallingBox = "";
    this.dropABox();
    // debugger;
    return fallValue;
  }
};
