var grid = new Array(9);
var bCell = [];
var temp, w;
var cellT = [];
var mouseCellX, mouseCellY;
var go = false;
function setup() {
	createCanvas(603, 603);
	for(var x = 0; x < grid.length; x++){
		grid[x] = new Array(9);
	}
	w = floor(603/9);
	for(var i = 0; i < 9; i++){
		for(var j = 0; j < 9; j++){
			temp = new cell(i, j);
			grid[i][j] = (temp);
		}
	}
	// for(var i = 0; i < 3; i++){
		// for(var j = 0; j < 3; j++){
			// for(var h = 0; h < 3; h++){
				// for(var k = 0; k < 3; k++){
					// cellT.push(grid[i*3+k][j*3+h]);
				// }
			// }
			// bCell.push(cellT);
			// cellT = [];
		// }
	// }
}

function draw() {
	background(51);
	textSize(60);
	for(var i = 0; i < grid.length; i++){
		for(var j = 0; j < grid[i].length; j++){
			grid[i][j].show();
			
		}
	}
	grid[0][2].value = 3;
	grid[2][4].value = 5;
}

function mouseClicked() {
  mouseCellX = floor(mouseX/(width/9));
  mouseCellY = floor(mouseY/(height/9));
  grid[mouseCellX][mouseCellY].background = 75;
  go = true;
  return false;
}

function keyPressed() {
	if(go) {
		grid[mouseCellX][mouseCellY].value = keyCode - 48;
		grid[mouseCellX][mouseCellY].background = 53;
		go = false;
	}
}

function cell(i, j){
this.i = i;
this.j = j;
this.value;
this.background = [51,51,51];
this.show = function(){
	stroke(255);
	fill(this.background);
	var x = this.i * w;
 	var y = this.j * w;
    rect(x,y,w,w);
	if(this.value != undefined){
		fill(255);
		text(this.value, x + 17, y,x+w,y+w);
	}
}
}
