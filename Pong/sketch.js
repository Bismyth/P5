var player1, player2;
var ball;
var score1, score2;
var options = {};
options.slide = false;
options.randBounce = {}; // 0 - None, 1 - 50%, 2 - Always
options.randBounce.players = 2;
options.randBounce.walls = 0;
options.speed = {};
options.speed.boostMultiplier = 1;

function setup() {
    createCanvas(600, 420);
    player1 = new Player(1);
    player2 = new Player(2);
    ball = new Ball();
    score1 = 0;
    score2 = 0;
}

function draw() {
    background(51);
    stroke(255);
    for (var i = 20; i < height; i += 40)
        line(width/2, i, width/2, i + 20);
    textSize(50);
    text(score1.toString(), (width/2) - 80, 70);
    text(score2.toString(), (width/2) + 50, 70);
	for (var i = 1; i < 3; i++)
		if (eval("player" + i + ".check(ball.x, ball.y)"))
			if (!options.randBounce.players || (options.randBounce.players == 1 && round(random(0, 1))))
				ball.ang = 90 - ((ball.ang + 180) % 360 - 90 - ((i - 1) * 180)) + ((i - 1) * 180);
			else
				ball.ang = round(random(22, 158)) + (ball.ang - 180 < 0 ? 180 : 0);
    player1.show();
    player2.show();    
    player1.move();
    player2.move();
    ball.show();
    ball.move(Math.abs(Math.abs(floor(Math.abs(Math.abs((ball.ang - 90) % 180) - 90) / 30) * 2 - 1) % 3 - 2) * options.speed.boostMultiplier);
    score1 += ball.check(1);
    score2 += ball.check(2);
    
 
}

function Player (number) {
	this.y = height/2;
    this.previous = [];
    this.dir = 0;
	this.number = number;
    this.show = function() {
        fill(255);
        rect(Math.abs((width * (this.number - 1)) - 20), this.y - 30, 10, 60);
    }
    this.move = function() {
        this.y += 7 * this.dir;
        if (this.y - 30 < 0 || this.y + 30 > height)
            this.dir = 0;
        this.previous.push(this.y);
        if (this.previous.length > 2)
            this.previous.shift();
    }
	this.check = function(x, y) {
		return (this.number - 2 ? x <= 30 : x >= width - 30) && y >= this.y - 30 && y <= this.y + 30;
    }
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        player2.dir = 1;
        if (player2.y + 30 > height)
            player2.dir = 0;
    } else if(keyCode === UP_ARROW) {
        player2.dir = -1;
        if(player2.y - 30 < 0)
            player2.dir = 0;
    }
	
	if (key === 'S') {
        player1.dir = 1;
        if (player1.y + 30 > height)
            player1.dir = 0;
    } else if(key === 'W') {
        player1.dir = -1;
        if(player1.y - 30 < 0)
            player1.dir = 0;
    }
}

function keyReleased() {
	if (options.slide) { return false; }
    if (keyCode === DOWN_ARROW)
        if (player2.previous[1] > player2.previous[0])
            player2.dir = 0;
    if (keyCode === UP_ARROW)
        if (player2.previous[1] < player2.previous[0])
            player2.dir = 0;
	
    if (key === 'S')
        if (player1.previous[1] > player1.previous[0])
            player1.dir = 0;
    if (key === 'W')
        if (player1.previous[1] < player1.previous[0])
            player1.dir = 0;
}