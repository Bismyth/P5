function Alien(x, y) {
  this.x = x;
  this.y = y;
  this.r = 15;
  this.xdir = 1;
  this.ydir = 0;
  this.toDelete = false;
  this.show = function() {
    fill(0, 255, 0);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
  this.destroy = function() {
    this.toDelete = true;
  }
  this.move = function() {
    this.x += this.xdir;
  }
  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }
}
