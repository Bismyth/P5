var w = 40;
var mouth = 0;
var pacman;
function setup() {
    createCanvas(400, 400);
    pacman = new Player();
}

function draw() {
    background(51);
    if(pacman.mouth > w/2){
        pacman.mouth = 1;
    }
    stroke(255);
    for(var i=0;i <= width/w; i++) {
        line(i*w,0,i*w,height);
        line(0,i*w,width,i*w);
    }
    pacman.show();
    pacman.move();
    pacman.mouth += w/50;
}

function Player() {
    this.x = (width/2)+(w/2);
    this.y = (height/2)+(w/2);
    this.mouth = 4;
    this.mvs = 4;
    this.dir = -1;
    this.show = function() {
        noStroke();
        fill(255,238,0);
        ellipse(this.x,this.y,w,w);
        fill(51);
        if (this.dir == 3){
            triangle(this.x,this.y,this.x-w/2,this.y+(w/4)-this.mouth,this.x-w/2,this.y-(w/4)+this.mouth);
        } else if (this.dir == 2) {
            triangle(this.x,this.y,this.x+(w/4)-this.mouth,this.y+(w/2),this.x-(w/4)+this.mouth,this.y+(w/2));
        } else if (this.dir == 0) {
            triangle(this.x,this.y,this.x+(w/4)-this.mouth,this.y-(w/2),this.x-(w/4)+this.mouth,this.y-(w/2));
        } else if (this.dir == 1) {
            triangle(this.x,this.y,this.x+(w/2),this.y+(w/4)-this.mouth,this.x+(w/2),this.y-(w/4)+this.mouth);
        }
        
    }
    this.move = function(){
        if(this.dir == 0){
            this.x += 0;
            this.y += -this.mvs;
        }
        if(this.dir == 1){
            this.x += this.mvs;
            this.y += 0;
        }
        if(this.dir == 2){
            this.x += 0;
            this.y += this.mvs;
        }
        if(this.dir == 3){
            this.x += -this.mvs;
            this.y += 0;
        }
    }
}

function keyPressed() {
    if(keyCode === UP_ARROW){
        if(pacman.x-(w/2)%w==0 && pacman.y-(w/2)%w==0) {
            pacman.dir = 0;
        }
    } else if(keyCode === RIGHT_ARROW){
        if(pacman.x-(w/2)%w==0 && pacman.y-(w/2)%w==0) {
            pacman.dir = 1;
        }
    } else if(keyCode === DOWN_ARROW){
        if(pacman.x-(w/2)%w==0 && pacman.y-(w/2)%w==0) {
            pacman.dir = 2;
        }
    } else if(keyCode === LEFT_ARROW){
        if(pacman.x-(w/2)%w==0 && pacman.y-(w/2)%w==0) {
            pacman.dir = 3;
        }
    }
}