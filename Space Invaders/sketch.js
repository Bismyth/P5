var ship;
var alien = [];
var bullet = [];
var score = 0;

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  //bullet = new Bullet(width / 2, height / 2);
  for (var i = 0; i < 10; i++) {
    alien[i] = new Alien(i * 50 + 70, 60);
  }
}

function draw() {
  background(51);
  ship.show();
  ship.move();
  text(score.toString(), width - 30, height - 20, width, height);
  for (var i = 0; i < bullet.length; i++) {
    bullet[i].show();
    bullet[i].move();

    for (var j = 0; j < alien.length; j++) {
      if (bullet[i].hits(alien[j])) {
        console.log("HIT");
        alien[j].destroy();
        bullet[i].destroy();
      }
    }
    if (bullet[i].y < 0) {
      bullet[i].destroy();
    }

  }
  var edge = false;
  for (var i = 0; i < alien.length; i++) {
    alien[i].show();
    alien[i].move();
    if (alien[i].x > width - alien[i].r || alien[i].x < alien[i].r) {
      edge = true;
    }
  }
  if (edge) {
    for (var i = 0; i < alien.length; i++) {
      alien[i].shiftDown();
    }
  }
  for (var i = bullet.length - 1; i >= 0; i--) {
    if (bullet[i].toDelete) {
      bullet.splice(i, 1);
    }
  }
  for (var i = alien.length - 1; i >= 0; i--) {
    if (alien[i].toDelete) {
      alien.splice(i, 1);
      score += 1;
    }
  }
}

function keyPressed() {
  if (key === ' ') {
    var bullets = new Bullet(ship.x, height - 40);
    bullet.push(bullets);
  }
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    ship.setDir(0);
  }
}
