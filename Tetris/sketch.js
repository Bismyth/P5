var cellSize = 40;
var grid = [];
gov = false;

function setup() {
	createCanvas(650, 650);
	frameRate(10);
	for(var i = 0; i < 10; i++){
		grid.push([]);
		for(var j = 0; j < 16; j++){
			temp = new cell(i,j);
			grid[i].push(temp);
		}
	}
}

function draw() {
	background(51);
	textSize(60);
	for(var i = 0; i < grid.length; i++){
		for(var j = 0; j < grid[i].length; j++){
			grid[i][j].show();
		}
	}
}


function cell (i,j){
	this.x = i *  cellSize + 125;
	this.y = j * cellSize + 5;
	this.colour = 0;
	this.show = function(){
		fill(this.colour);
		rect(this.x,this.y,cellSize,cellSize);
	}
}
function blocks(){
	
}

