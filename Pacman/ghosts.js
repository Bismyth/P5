function ghost() {
  this.x = w;
  this.y = w;
  this.feet = ((w * 3 / 4) / (5 / 3)) / 2;
  this.dir = -1;
  this.tt = 0;
  this.mvs = 2.5;
  this.path = [];
  this.back = false;
  this.check = cols - 1;
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
      this.tt = [floor((pacman.x + (pacman.mvs / 2) - (w / 2)) / w),
        floor((pacman.y + ((pacman.mvs / 2) * -2) - (w / 2)) / w + 1)
      ];
    }
    if (pacman.dir == 1) {
      this.tt = [floor((pacman.x + (pacman.mvs / 2) - (w / 2)) / w),
        floor((pacman.y + (pacman.mvs / 2) - (w / 2)) / w)
      ];
    }
    if (pacman.dir == 2) {
      this.tt = [floor((pacman.x + (this.mvs / 2) - (w / 2)) / w),
        floor((pacman.y + (pacman.mvs / 2) - (w / 2)) / w)
      ];
    }
    if (pacman.dir == 3) {
      this.tt = [floor((pacman.x + ((pacman.mvs / 2) * -2) - (w / 2)) / w + 1),
        floor((pacman.y + (pacman.mvs / 2) - (w / 2)) / w)
      ];
    }
    this.cell = [floor(this.x / w), floor(this.y / w)];
    if (this.cell[0] < this.tt[0]) {
      if (Math.abs(this.tt[0] - this.cell[0]) > Math.abs(this.tt[1] - this.cell[1])) {
        if (this.cell[1] < this.tt[1] && this.cell[1] != 14) {
          this.back = true;
          for (var i = this.cell[0]; i < cols; i++) {
            if (cells[i][this.cell[1]].wall) {
              if (this.check > i) {
                this.check = i;
              }
            }
          }
          for (var i = this.cell[0]; i < this.check; i++) {
            if (!cells[i][this.cell[1] + 1].wall) {
              this.back = false;
            }
          }
          this.check = cols - 1;
        } else if (this.cell[1] > this.tt[1] && this.cell[1] != 14) {
          this.back = true;
          for (var i = this.cell[0]; i < cols; i++) {
            if (cells[i][this.cell[1]].wall) {
              if (this.check > i) {
                this.check = i;
              }
            }
          }
          for (var i = this.cell[0]; i < this.check; i++) {
            if (!cells[i][this.cell[1] - 1].wall) {
              this.back = false;
            }
          }
          this.check = cols - 1;
        } else if (this.cell[1] == this.tt[1] && cells[this.cell[0] + 1][this.cell[1]].wall) {
          this.y += w;
        }
        if (this.back) {
          this.x -= w;
        } else if (!cells[this.cell[0] + 1][this.cell[1]].wall) {
          this.x += w;
        }
      } else if (cells[this.cell[0]][this.cell[1] + 1].wall && !cells[this.cell[0] + 1][this.cell[
          1]].wall) {
        this.x += w;
      } else if (Math.abs(this.tt[0] - this.cell[0]) == Math.abs(this.tt[1] - this.cell[1]) &&
        !cells[this.cell[0] + 1][this.cell[1]].wall) {
        this.x += w;
      }
    }
    if (this.cell[1] < this.tt[1]) {
      if (Math.abs(this.tt[0] - this.cell[0]) < Math.abs(this.tt[1] - this.cell[1])) {
        this.back = true;
        for (var i = this.cell[1]; i < rows; i++) {
          if (cells[this.cell[0]][i].wall) {
            if (this.check > i) {
              this.check = i;
            }
          }
        }
        for (var i = this.cell[1]; i < this.check; i++) {
          if (!cells[this.cell[0] + 1][i].wall) {
            this.back = false;
          }
        }
        this.check = cols - 1;
        for (var i = this.cell[1]; i < rows; i++) {
          if (cells[this.cell[0]][i].wall) {
            if (this.check > i) {
              this.check = i;
            }
          }
        }
        for (var i = this.cell[1]; i < this.check; i++) {
          if (!cells[this.cell[0] - 1][i].wall) {
            this.back = false;
          }
        }
        this.check = cols - 1;

        if (this.back) {
          this.y -= w;
        } else if (!cells[this.cell[0]][this.cell[1] + 1].wall) {
          this.y += w;
        }
      } else if (cells[this.cell[0] + 1][this.cell[1]].wall &&
        !cells[this.cell[0]][this.cell[1] + 1].wall) {
        this.y += w;
      }
    }
    if (this.cell[0] > this.tt[0]) {
      if (Math.abs(this.tt[0] - this.cell[0]) > Math.abs(this.tt[1] - this.cell[1])) {
        if (this.cell[1] < this.tt[1] && this.cell[1] != 14) {
          this.back = true;
          for (var i = this.cell[0]; i > 0; i--) {
            if (cells[i][this.cell[1]].wall) {
              if (this.check < i) {
                this.check = i;
              }
            }
          }
          for (var i = this.cell[0]; i > this.check; i--) {
            if (!cells[i][this.cell[1] + 1].wall) {
              this.back = false;
            }
          }
          this.check = cols - 1;
        } else if (this.cell[1] > this.tt[1] && this.cell[1] != 14) {
          this.back = true;
          for (var i = this.cell[0]; i > 0; i--) {
            if (cells[i][this.cell[1]].wall) {
              if (this.check < i) {
                this.check = i;
              }
            }
          }
          for (var i = this.cell[0]; i > this.check; i--) {
            if (!cells[i][this.cell[1] - 1].wall) {
              this.back = false;
            }
          }
          this.check = cols - 1;
        }
        if (this.back) {
          this.x += w;
        } else if (!cells[this.cell[0] - 1][this.cell[1]].wall) {
          this.x -= w;
        }
      } else if (cells[this.cell[0]][this.cell[1] + 1].wall && !cells[this.cell[0] - 1][this.cell[
          1]].wall) {
        this.x -= w;
      } else if (cells[this.cell[0]][this.cell[1] + 1].wall && !cells[this.cell[0] + 1][this.cell[
          1]].wall) {
        this.x += w;
      } else if (Math.abs(this.tt[0] - this.cell[0]) == Math.abs(this.tt[1] - this.cell[1]) &&
        !cells[this.cell[0] - 1][this.cell[1]].wall) {
        this.x -= w;
      }
    }
    if (this.cell[1] > this.tt[1]) {
      if (Math.abs(this.tt[0] - this.cell[0]) < Math.abs(this.tt[1] - this.cell[1])) {
        if (this.cell[0] < this.tt[0]) {
          this.back = true;
          this.check = 0;
          for (var i = this.cell[1]; i > 0; i--) {
            if (cells[this.cell[0]][i].wall) {
              if (this.check < i) {
                this.check = i;
              }
            }
          }
          for (var i = this.cell[1]; i > this.check; i--) {
            if (!cells[this.cell[0] - 1][i].wall) {
              this.back = false;
            }
          }
          this.check = cols - 1;
        } else if (this.cell[0] > this.tt[0]) {
          this.back = true;
          for (var i = this.cell[1]; i > 0; i--) {
            if (cells[this.cell[0]][i].wall) {
              if (this.check < i) {
                this.check = i;
              }
            }
          }
          for (var i = this.cell[1]; i > this.check; i--) {
            if (!cells[this.cell[0] - 1][i].wall) {
              this.back = false;
            }
          }
          this.check = cols - 1;
        }
        if (this.back) {
          this.y += w;
        } else if (!cells[this.cell[0]][this.cell[1] - 1].wall) {
          this.y -= w;
        }
      } else if (cells[this.cell[0] + 1][this.cell[1]].wall &&
        !cells[this.cell[0]][this.cell[1] + 1].wall) {
        this.y += w;
      }
    }
  }
}
