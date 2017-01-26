var w = 40;
var mouth = 0;
var pacman;
var cols, rows;
var cells = [];
var cellstemp = [];
var grid = true;
var points = 0;

function setup() {
  createCanvas(400, 400);
  cols = floor(width / w);
  rows = floor(height / w);
  pacman = new Player();
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      var cell = new Cell(i, j);
      cellstemp.push(cell);
    }
    cells.push(cellstemp);
    cellstemp = [];
  }
  generate();
}

function draw() {
  background(51);
  stroke(255);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      cells[i][j].show();
    }
  }
  pacman.show();
  pacman.move();
  pacman.points();
}

function Cell(i, j) {
  this.x = i * w;
  this.y = j * w;
  this.wall = false;
  this.c1 = 0;
  this.c2 = 0;
  this.c3 = 0;
  this.c4 = 0;
  this.pellet = false;
  this.show = function() {
    noFill();
    stroke(255);
    if (this.wall) {
      fill(0, 0, 255);
      noStroke();
      rect(this.x, this.y, w, w, 0, 0, 0, 0);
    } else if (this.pellet) {
      fill(255);
      ellipse(this.x + (w / 2), this.y + (w / 2), w / 4, w / 4)
    } else if (grid) {
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
