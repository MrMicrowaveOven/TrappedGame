function Well(){
  //this.boxes is ONLY the boxes stuck at the bottom.  NOT the one falling.
  this.boxes = [];
  this.fallingBox = "";
  this.ctx = ctx;
  this.boxCount = 0;
  this.killKey = "";
  this.initialAccFactor = 1.0;
  this.dying = 0;
  this.grid = grid;
  // this.gametype = gameType;
}

Well.prototype.gridFullCheck = function () {
  if (this.grid.isFull()) {
    this.dying += 1;
    if (this.dying > 2) {
      clearInterval(this.killKey);
      // new Box(this.boxCount, 0)
      gameOver();
    }
  }
};

Well.prototype.dropABox = function () {
  // this.gridFullCheck();
  if (this.fallingBox !== "") {this.boxes.push(this.fallingBox);}

  if (this.killKey !=="") {clearInterval(this.killKey);}

  var bottom = (gridY + gridHeight - heightOfBoxes - 5) - this.boxes.length * (heightOfBoxes);
  this.boxCount += 1;

  if (this.boxCount % 20 === 0) {
    this.initialAccFactor += 0.25;
    acceleration += 1;
    fallSpeed = Math.log(acceleration);
    console.log("Your fall speed is now " + fallSpeed + ".");
  };

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
      box.clearSelf();
    });

    //Remove the one box from the queue
    var placed = this.boxes.shift();
    placed.slideLeft();

    //Make the falling box fall further this time.
    this.fallingBox.pathBottom += this.fallingBox.height;

    //Restack boxes
    this.boxes.forEach(function(box) {
      box.boxY += box.height;
      box.drawBox();
    });
    return placed.boxAnswer;
  } else {
    //If a falling box was placed
    clearInterval(this.killKey);
    this.fallingBox.slideLeft();
    var fallValue = this.fallingBox.boxAnswer;
    this.fallingBox = "";
    this.dropABox();
    return fallValue;
  }
};
