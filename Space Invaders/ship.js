function Ship() {
  this.x = width / 2;
  this.dir = 0;
  this.show = function() {
    fill(255);
    triangle(this.x - 10, height - 20, this.x, height - 40, this.x + 10,
      height - 20);
  }
  this.move = function() {
    this.x += this.dir * 5;
  }
  this.setDir = function(dir) {
    this.dir = dir;
  }
}
