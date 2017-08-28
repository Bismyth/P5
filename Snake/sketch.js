var cellSize = 20;
var cells = 20;
var grid = new Array(cells);
gov = false;

function setup() {
	createCanvas(cellSize*cells, cellSize*cells);
	frameRate(10);
	for(var x = 0; x < grid.length; x++){
		grid[x] = new Array(cells);
	}
	for(var i = 0; i < grid.length; i++){
		for(var j = 0; j < grid[i].length; j++){
			temp = new cell(i,j);
			grid[i][j] = (temp);
		}
	}
	player = new snake(1);
	food();
}

function draw() {
	background(51);
	textSize(60);
	if(!gov){
		player.show();
		for(var x = 0; x < grid.length; x++){
			for(var y = 0; y < grid[x].length; y++){
				grid[x][y].show();
			}
		}
	} else {
		for(var x = 0; x < grid.length; x++){
			for(var y = 0; y < grid[x].length; y++){
				grid[x][y].colour = 51;;
			}
		}
		for(var x = 0; x < grid.length; x++){
			for(var y = 0; y < grid[x].length; y++){
				grid[x][y].show();
			}
		}
		textAlign(CENTER);
		fill(255);
		text("Game Over", floor(cells/2)*cellSize, floor(cells/2)*cellSize);
		textSize(30);
		text("Press R to play again!", floor(cells/2)*cellSize, floor(cells/2)*cellSize + 60);
	}
}


function cell (i,j){
	this.x = i *  cellSize;
	this.y = j * cellSize;
	this.colour = 51;
	this.show = function(){
		fill(this.colour);
		noStroke();
		rect(this.x,this.y,cellSize,cellSize);
	}
}

function snake(c){
	this.x = 3;
	this.y = 3;
	this.length = 5;
	this.position = [[this.x,this.y]];
	this.dir = 0;
	this.show = function(){
		if(!gov){
			if(this.dir == 0 && this.x+1 != cells){
				this.x += 1;
				this.position.push([this.x,this.y]);
			}
			if(this.dir == 1 && this.y+1 != cells){
				this.y += 1
				this.position.push([this.x,this.y]);
			}
			if(this.dir == 2 && this.x-1 != -1){
				this.x -= 1;
				this.position.push([this.x,this.y]);
			}
			if(this.dir == 3 && this.y-1 != -1){
				this.y -= 1;
				this.position.push([this.x,this.y]);
			}
			if(this.position.length > this.length){
				var temp = this.position.shift();
				grid[temp[0]][temp[1]].colour = 51;
			}
			if(grid[this.x][this.y].colour[0] == 255 && grid[this.x][this.y].colour[1] == 0 && grid[this.x][this.y].colour[2] == 0){
				this.length += 1;
				food();
			}
			for(var x = 0; x < this.position.length; x++){
				for(var y = 0; y < this.position.length; y++){
					if(this.position[x][0] == this.position[y][0] && this.position[x][1] == this.position[y][1] && x != y){
						gameOver();
					}
				}
				grid[this.position[x][0]][this.position[x][1]].colour = 255;
			}
		} else {
			
		}
	}
}
function food(){
	var xf = Math.floor((Math.random() * cells));
	var yf = Math.floor((Math.random() * cells));
	while(grid[xf][yf].colour == 255){
		xf = Math.floor((Math.random() * cells));
		yf = Math.floor((Math.random() * cells));
	}
	grid[xf][yf].colour = [255,0,0];
}


function keyPressed(){
    if(keyCode === DOWN_ARROW && player.dir != 3){
        player.dir = 1;
    }
    else if(keyCode === UP_ARROW && player.dir != 1){
        player.dir = 3;
    }
	else if(keyCode === LEFT_ARROW && player.dir != 0){
        player.dir = 2;
    }
	else if(keyCode === RIGHT_ARROW && player.dir != 2){
        player.dir = 0;
    }
	if(keyCode == 82){
		goAgain();
	}
    
}
function gameOver(){
	gov = true;
}
function goAgain(){
	if(gov){
		player = new snake(1);
		food();
		gov = false;
		score = 0;
	}
	
}