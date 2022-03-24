var w = 40;
var mouth = 0;
var pacman;
var cols, rows;
var cells = [];
var cellstemp = [];
var grid = false;
var points = 0;
var bg = 115;

function setup() {
  createCanvas(w * 28, w * 31);
  cols = floor(width / w);
  rows = floor(height / w);
  pacman = new Player();
  blinky = new ghost();
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      var cell = new Cell(i, j);
      cellstemp.push(cell);
    }
    cells.push(cellstemp);
    cellstemp = [];
  }
  generate();
  //frameRate(10);
}

function draw() {
  background(bg);
  stroke(255);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      cells[i][j].show();
    }
  }
  blinky.show();
  blinky.move();
  pacman.show();
  pacman.move();
  pacman.points();
}

function Cell(i, j) {
  this.x = i * w;
  this.y = j * w;
  this.loc = [i, j];
  this.wall = false;
  this.c1 = 0;
  this.c2 = 0;
  this.c3 = 0;
  this.c4 = 0;
  this.pellet = true;
  this.back = false;
  this.check = function() {
    if (this.loc[1] < rows - 1) {
      if (!cells[this.loc[0]][this.loc[1] + 1].wall) {
        if (this.loc[0] > 0) {
          if (!cells[this.loc[0] - 1][this.loc[1]].wall) {
            this.c4 = 50;
          }
        } else {
          this.c4 = 50;
        }
        if (this.loc[0] < cols - 1) {
          if (!cells[this.loc[0] + 1][this.loc[1]].wall) {
            this.c3 = 50;
          }
        } else {
          this.c3 = 50;
        }
      }
      if (this.wall || this.back) {
        this.pellet = false;
      }
    }
    if (this.loc[1] > 0) {
      if (!cells[this.loc[0]][this.loc[1] - 1].wall) {
        if (this.loc[0] > 0) {
          if (!cells[this.loc[0] - 1][this.loc[1]].wall) {
            this.c1 = 50;
          }
        } else {
          this.c1 = 50;
        }
        if (this.loc[0] < cols - 1) {
          if (!cells[this.loc[0] + 1][this.loc[1]].wall) {
            this.c2 = 50;
          }
        } else {
          this.c2 = 50;
        }
      }
    }
  }
  this.show = function() {
    noFill();
    stroke(255);
    if (this.wall) {
      fill(32, 48, 210);
      if (grid) {
        stroke(255);
      } else {
        noStroke();
      }
      rect(this.x, this.y, w, w, this.c1, this.c2, this.c3, this.c4);
    } else if (this.pellet) {
      if (grid) {
        stroke(255);
        fill(115);
        rect(this.x, this.y, w, w);
        fill(255);
        ellipse(this.x + (w / 2), this.y + (w / 2), w / 4, w / 4);
      } else {
        noStroke();
        fill(115);
        rect(this.x, this.y, w, w);
        fill(255);
        ellipse(this.x + (w / 2), this.y + (w / 2), w / 4, w / 4);
      }
    } else if (this.back) {
      fill(51);
      noStroke();
      rect(this.x, this.y, w, w);
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    pacman.to = 0;
  }
  if (keyCode === RIGHT_ARROW) {
    pacman.to = 1;
  }
  if (keyCode === DOWN_ARROW) {
    pacman.to = 2;
  }
  if (keyCode === LEFT_ARROW) {
    pacman.to = 3;
  }
}
