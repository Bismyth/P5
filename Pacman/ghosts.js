function ghost() {
  this.x = 0;
  this.y = w;
  this.feet = ((w * 3 / 4) / (5 / 3)) / 2;
  this.dir = -1;
  this.tt = 0;
  this.mvs = 5;
  this.show = function() {
    noStroke();
    fill(255, 0, 0);
    rect(this.x + w / 8, this.y + w / 8, w * 3 / 4, w * 3 / 4, 20, 20, 0, 0);
    fill(bg);
    triangle(this.x + w / 8 + w / 10, this.y + w / 8 + w * 3 / 4,
      this.x + w / 8 + w / 10 + this.feet / 2, this.y + w / 8 + w * 3 / 4 - w / 8,
      this.x + w / 8 + w / 10 + this.feet, this.y + w / 8 + w * 3 / 4);
    triangle(this.x + w / 8 + w / 5 + this.feet, this.y + w / 8 + w * 3 / 4,
      this.x + w / 8 + w / 5 + this.feet * 1.5, this.y + w / 8 + w * 3 / 4 - w / 8,
      this.x + w / 8 + w / 5 + this.feet * 2, this.y + w / 8 + w * 3 / 4);
    fill(255);
    ellipse(this.x + w / 8 + w / 8 + this.feet / 2,
      this.y + w / 8 + w / 6 + this.feet / 2,
      this.feet, this.feet);
    ellipse(this.x + w * 3 / 4 + w / 8 - w / 8 - this.feet / 2,
      this.y + w / 8 + w / 6 + this.feet / 2,
      this.feet, this.feet);
    if (this.dir == -1) {
      fill(0, 0, 255);
      ellipse(this.x + w / 8 + w / 8 + this.feet / 2,
        this.y + w / 8 + w / 6 + this.feet / 2 - this.feet / 4,
        this.feet / 2, this.feet / 2);
      ellipse(this.x + w * 3 / 4 + w / 8 - w / 8 - this.feet / 2,
        this.y + w / 8 + w / 6 + this.feet / 2 - this.feet / 4,
        this.feet / 2, this.feet / 2);
    }
    if (this.dir == 0) {
      fill(0, 0, 255);
      ellipse(this.x + w / 8 + w / 8 + this.feet / 2,
        this.y + w / 8 + w / 6 + this.feet / 2 - this.feet / 4,
        this.feet / 2, this.feet / 2);
      ellipse(this.x + w * 3 / 4 + w / 8 - w / 8 - this.feet / 2,
        this.y + w / 8 + w / 6 + this.feet / 2 - this.feet / 4,
        this.feet / 2, this.feet / 2);
    }
    if (this.dir == 1) {
      fill(0, 0, 255);
      ellipse(this.x + w / 8 + w / 8 + this.feet / 2 + this.feet / 4,
        this.y + w / 8 + w / 6 + this.feet / 2,
        this.feet / 2, this.feet / 2);
      ellipse(this.x + w * 3 / 4 + w / 8 - w / 8 - this.feet / 2 + this.feet / 4,
        this.y + w / 8 + w / 6 + this.feet / 2,
        this.feet / 2, this.feet / 2);
    }
    if (this.dir == 2) {
      fill(0, 0, 255);
      ellipse(this.x + w / 8 + w / 8 + this.feet / 2,
        this.y + w / 8 + w / 6 + this.feet / 2 + this.feet / 4,
        this.feet / 2, this.feet / 2);
      ellipse(this.x + w * 3 / 4 + w / 8 - w / 8 - this.feet / 2,
        this.y + w / 8 + w / 6 + this.feet / 2 + this.feet / 4,
        this.feet / 2, this.feet / 2);
    }
    if (this.dir == 3) {
      fill(0, 0, 255);
      ellipse(this.x + w / 8 + w / 8 + this.feet / 2 - this.feet / 4,
        this.y + w / 8 + w / 6 + this.feet / 2,
        this.feet / 2, this.feet / 2);
      ellipse(this.x + w * 3 / 4 + w / 8 - w / 8 - this.feet / 2 - this.feet / 4,
        this.y + w / 8 + w / 6 + this.feet / 2,
        this.feet / 2, this.feet / 2);
    }
  }
  this.move = function() {
    if (pacman.dir == -1) {
      this.tt = [(pacman.x - (w / 2)) / w, (pacman.y - (w / 2)) / w];
    }
    if (pacman.dir == 0) {

    }

    this.cell = [floor(this.x / w), floor(this.y / w)];
    if (this.tt[1] < this.cell[1] && !cells[this.cell[0]][this.cell[1] - 1].wall) {
      this.dir = 0;
    }
    if (this.tt[0] > this.cell[0] && !cells[this.cell[0] + 1][this.cell[1]].wall) {
      this.dir = 1;
    }
    if (this.tt[1] > this.cell[1] && !cells[this.cell[0]][this.cell[1] + 1].wall) {
      this.dir = 2;
    }
    if (this.tt[0] < this.cell[0] && !cells[this.cell[0] - 1][this.cell[1]].wall) {
      this.dir = 3;
    }
    if (this.dir == 0) {
      this.x += 0;
      this.y -= this.mvs;
    }
    if (this.dir == 1) {
      this.x += this.mvs;
      this.y += 0;
    }
    if (this.dir == 2) {
      this.x += 0;
      this.y += this.mvs;
    }
    if (this.dir == 3) {
      this.x -= this.mvs;
      this.y += 0;
    }
  }
}
