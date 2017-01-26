var player1; 
var player2;
var ball;
var score1, score2;
function setup() {
    createCanvas(600, 420);
    player1 = new Player1();
    player2 = new Player2();
    ball = new Ball();
    score1 = 0;
    score2 = 0;
}

function draw() {
    background(51);
    stroke(255);
    for(var i = 20; i < height; i+=40){
        line(width/2,i,width/2,i+20);
    }
    textSize(50);
    text(score1.toString(),(width/2)-80,70);
    text(score2.toString(),(width/2)+50,70);
    ball.ang -= player1.check(ball.x,ball.y);
    ball.ang -= player2.check(ball.x,ball.y);
    player1.show();
    player2.show();    
    player1.move();
    player2.move();
    ball.show();
    ball.move();
    score1 += ball.check1();
    score2 += ball.check2();
    
 
}

function Player1() {
    this.y = height/2;
    this.previous = [];
    this.dir=0;
    this.show = function() {
        fill(255);
        rect(20,this.y-30,10,60);
    }
    this.move = function() {
        this.y+= 7*this.dir;
        if(this.y-30 < 0){
            this.dir = 0;
        }else if(this.y+30 > height){
            this.dir = 0;;
        }
        this.previous.push(this.y);
        if(this.previous.length > 2){
            this.previous.shift();
        }
    }
    this.check = function(x,y) {
        if(x <= 30 && y >= this.y-30 && y <= this.y+30){
            return 180 + (y-this.y);
        }else{
            return 0;
        }
    }
}
function Player2() {
    this.y = height/2;
    this.previous = [];
    this.dir=0;
    this.show = function() {
        fill(255);
        rect(width-20,this.y-30,10,60);
    }
    this.move = function() {
        this.y+= 7*this.dir;
        if(this.y-30 < 0){
            this.dir = 0;
        }else if(this.y+30 > height){
            this.dir = 0;;
        }
        this.previous.push(this.y);
        if(this.previous.length > 2){
            this.previous.shift();
        }
    }
    this.check = function(x,y) {
        if(x >= width-30 && y >= this.y-30 && y <= this.y+30){
            return 180 + (y-this.y);
        }else{
            return 0;
        }
    }
}

function keyPressed(){
    if(keyCode === DOWN_ARROW){
        player2.dir = 1;
        if(player2.y+30 > height){
            player2.dir = 0;;
        }
    }
    if(keyCode === UP_ARROW){
        player2.dir = -1;
        if(player2.y-30 < 0){
            player2.dir = 0;;
        }
    }
    if(key === 'S'){
        player1.dir = 1;
        if(player1.y+30 > height){
            player1.dir = 0;;
        }
    }
    if(key === 'W'){
        player1.dir = -1;
        if(player1.y-30 < 0){
            player1.dir = 0;;
        }
    }
}

function keyReleased() {
    if(keyCode === DOWN_ARROW){
        if(player2.previous[1] > player2.previous[0]){
            player2.dir=0;
        }
    }
    if(keyCode === UP_ARROW){
        if(player2.previous[1] < player2.previous[0]){
            player2.dir=0;
        }
    }
    if(key === 'S'){
        if(player1.previous[1] > player1.previous[0]){
            player1.dir=0;
        }
    }
    if(key === 'W'){
        if(player1.previous[1] < player1.previous[0]){
            player1.dir=0;
        }
    }
}