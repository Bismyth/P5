function Player() {
  this.x = (width - w) + (w / 2);
  this.y = (height - w) + (w / 2);
  this.cellx0 = 0;
  this.celly0 = 0;
  this.cellx1 = 0;
  this.celly1 = 0;
  this.cellx2 = 0;
  this.celly2 = 0;
  this.cellx3 = 0;
  this.celly3 = 0;
  this.mouth = 4;
  this.mvs = 4;
  this.dir = -1;
  this.to = -1;
  this.show = function() {
    if (pacman.mouth > w / 2) {
      pacman.mouth = 1;
    }
    noStroke();
    fill(255, 238, 0);
    ellipse(this.x, this.y, w, w);
    fill(bg);
    if (this.dir == 3) {
      triangle(this.x, this.y, this.x - w / 2, this.y + (w / 4) - this.mouth, this.x - w / 2,
        this.y - (w / 4) + this.mouth);
    } else if (this.dir == 2) {
      triangle(this.x, this.y, this.x + (w / 4) - this.mouth, this.y + (w / 2), this.x - (w / 4) +
        this.mouth, this.y + (w / 2));
    } else if (this.dir == 0) {
      triangle(this.x, this.y, this.x + (w / 4) - this.mouth, this.y - (w / 2), this.x - (w / 4) +
        this.mouth, this.y - (w / 2));
    } else if (this.dir == 1) {
      triangle(this.x, this.y, this.x + (w / 2), this.y + (w / 4) - this.mouth, this.x + (w / 2),
        this.y - (w / 4) + this.mouth);
    }
    this.mouth += w / 50;
  }
  this.move = function() {
    this.cellx0 = floor((this.x + (this.mvs / 2) - (w / 2)) / w);
    this.celly0 = floor((this.y + ((this.mvs / 2) * -2) - (w / 2)) / w + 1);
    this.cellx1 = floor((this.x + (this.mvs / 2) - (w / 2)) / w);
    this.celly1 = floor((this.y + (this.mvs / 2) - (w / 2)) / w);
    this.cellx2 = floor((this.x + (this.mvs / 2) - (w / 2)) / w);
    this.celly2 = floor((this.y + (this.mvs / 2) - (w / 2)) / w);
    this.cellx3 = floor((this.x + ((this.mvs / 2) * -2) - (w / 2)) / w + 1);
    this.celly3 = floor((this.y + (this.mvs / 2) - (w / 2)) / w);
    if (this.x < -w) {
      this.x = width + w;
    }
    if (this.x > width + w) {
      this.x = -w;
    }
    if ((this.x - (w / 2)) % w == 0 && (this.y - (w / 2)) % w == 0 && this.to == 0) {
      if (!cells[this.cellx0][this.celly0 - 1].wall) {
        this.x += 0;
        this.y += -this.mvs;
        this.to = -1;
        this.dir = 0;
      } else {
        this.to = -1;
      }
    }
    if ((this.x - (w / 2)) % w == 0 && (this.y - (w / 2)) % w == 0 && this.to == 1) {
      if (!cells[this.cellx1 + 1][this.celly1].wall) {
        this.x += this.mvs;
        this.y += 0;
        this.to = -1;
        this.dir = 1;
      } else {
        this.to = -1;
      }
    }
    if ((this.x - (w / 2)) % w == 0 && (this.y - (w / 2)) % w == 0 && this.to == 2) {
      if (!cells[this.cellx2][this.celly2 + 1].wall) {
        this.x += 0;
        this.y += this.mvs;
        this.to = -1;
        this.dir = 2;
      } else {
        this.to = -1;
      }
    }
    if ((this.x - (w / 2)) % w == 0 && (this.y - (w / 2)) % w == 0 && this.to == 3) {
      if (!cells[this.cellx3 - 1][this.celly3].wall) {
        this.x += -this.mvs;
        this.y += 0;
        this.to = -1;
        this.dir = 3;
      } else {
        this.to = -1;
      }
    }
    if (this.dir == 0) {
      if (!cells[this.cellx0][(this.celly0 - 1)].wall) {
        this.x += 0;
        this.y += -this.mvs;
      }
    }
    if (this.dir == 1) {
      if (!cells[(this.cellx1 + 1)][this.celly1].wall) {
        this.x += this.mvs;
        this.y += 0;
      }
    }
    if (this.dir == 2) {
      if (!cells[this.cellx2][(this.celly2 + 1)].wall) {
        this.x += 0;
        this.y += this.mvs;
      }
    }
    if (this.dir == 3) {
      if (!cells[(this.cellx3 - 1)][this.celly3].wall) {
        this.x += -this.mvs;
        this.y += 0;
      }
    }
  }
  this.points = function() {
    if (this.dir == 0) {
      if (cells[this.cellx0][this.celly0].pellet) {
        cells[this.cellx0][this.celly0].pellet = false;
        points += 1;
      }
    }
    if (this.dir == 1) {
      if (cells[this.cellx1][this.celly1].pellet) {
        cells[this.cellx1][this.celly1].pellet = false;
        points += 1;
      }
    }
    if (this.dir == 2) {
      if (cells[this.cellx2][this.celly2].pellet) {
        cells[this.cellx2][this.celly2].pellet = false;
        points += 1;
      }
    }
    if (this.dir == 3) {
      if (cells[this.cellx3][this.celly3].pellet) {
        cells[this.cellx3][this.celly3].pellet = false;
        points += 1;
      }
    }
  }
}
