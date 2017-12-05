var cells = [];
var cellstemp = [];
var w=30;
var cols=30;
var rows=30;
var gridon = true;
var player;
var grav = 10;
var mvspd = 5;
var render = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,12,13,14,14,10,10,10,14,14,13,12,11,10,10,10,10,10];
var offset = 0;
var offsetcalc = 0;

function setup(){
	createCanvas(cols*w, rows*w);
	for (var i = 0; i < render.length; i++) {
		for (var j = 0; j < rows; j++) {
			var cell = new Cell(i, j);
			cellstemp.push(cell);
		}
		cells.push(cellstemp);
		cellstemp = [];
	}
	for (var j = 0; j < render.length; j++) {
		for(var k = rows - render[j]; k < rows; k++){
			cells[j][k].ground = true;
		}
	}
	player = new Player();
}

function draw() {
	background(51);
	if(offset < 0){
		offsetcalc = -floor(offset/w)-1;
		if(render.length-2 < cols+offsetcalc){
			offsetcalc = render.length - cols - 2;
		}
	}
	if(offset > 0){
		offsetcalc = -floor(offset/w)-1;
		if(render.length-2 < cols+offsetcalc){
			offsetcalc = render.length - cols - 2;
		}
	}
	if (offset == 0){
		offsetcalc=0;
	}
	for (var i = 0; i < cols+2; i++) {
		for (var j = 0; j < rows; j++) {
			if(i+offsetcalc>render.length){
				offsetcalc = render.length - cols;
			}
			cells[i+offsetcalc][j].show();
		}
	}
	player.show();
}

function Cell(i,j){
	this.k = i*w;
	this.y = j*w;
	this.ground = false;
	this.show = function(){
		this.x = this.k + offset;
		if(gridon){
			stroke(255);
		}else{
			noStroke();
		}
		if(this.ground){
			fill(0,150,0);
		}else{
			noFill();
		}
		rect(this.x,this.y,w,w);
	}
}

function Player(){
	this.c = 300;
	this.y = 300;
	this.dir=0;
	this.jump = false;
	this.jumper = 0;
	this.show = function(){
		console.log(this.dir);
		this.x = this.c - offset;
		this.touchy = cells[floor(this.x/w)][floor(this.y/w)+1].ground || cells[floor((this.x+(w-1))/w)][floor(this.y/w)+1].ground;
		this.touchxr = cells[floor(this.x/w)+1][floor(this.y/w)].ground || cells[floor(this.x/w)+1][floor((this.y+(w-1))/w)].ground;
		this.touchxl = cells[floor((this.x-1)/w)][floor(this.y/w)].ground || cells[floor((this.x-1)/w)][floor((this.y+(w-1))/w)].ground;
		if (!this.touchy && this.jumper == 0) { this.y += grav; }
		if (this.dir == 1 && this.c + mvspd * this.dir > 20 * w && !this.touchxr && (this.x/w)+10 < render.length) { offset -= mvspd * this.dir; } 
		else if ((this.dir == -1) && (this.c + mvspd * this.dir < 10 * w) && (!this.touchxl) && ((this.x/w)-10 > 0)) { offset -= mvspd * this.dir; } 
		else {
			if(this.dir == 1 && !this.touchxr){ this.c += mvspd * this.dir; }
			if(this.dir == -1 && !this.touchxl){ this.c += mvspd * this.dir; }
		}
		if(this.jump && this.touchy){
			this.jumper = 10;
			this.jump = false
		}
		if (this.jumper > 0){
			this.y -= 15;
			this.jumper --;
		}
		fill(255,0,0);
		rect(this.c,this.y,w,w);	
	}	
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) { player.dir = 1; }
  if (keyCode === UP_ARROW) { player.jump = true; }
  if (keyCode === LEFT_ARROW) { player.dir = -1; }
}

function keyReleased() {
	if (keyCode === RIGHT_ARROW) {
    player.dir = 0;
  }
  if (keyCode === LEFT_ARROW) {
    player.dir = 0;
  }
}
