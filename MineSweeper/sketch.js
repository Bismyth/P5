var grid = new Array(9);
var bCell = [];
var temp, w;
var cellT = [];
var mouseCellX, mouseCellY;
var go = false;
var testX = 0, testY = 0;

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
	
}

function mouseClicked() {
	if (go) {
		grid[mouseCellX][mouseCellY].background = 53;
	}
	if(mouseX < width && mouseY < height){
		mouseCellX = floor(mouseX/(width/9));
		mouseCellY = floor(mouseY/(height/9));
		if(grid[mouseCellX][mouseCellY].pValue == undefined){
			grid[mouseCellX][mouseCellY].background = 75;
			go = true; 
		}
	}
	return false;
}

function keyPressed() {
	if(go && keyCode > 48 && keyCode < 58) {
		grid[mouseCellX][mouseCellY].value = keyCode - 48;
		grid[mouseCellX][mouseCellY].background = 53;
		go = false;
	}
}

function cell(i, j){
this.i = i;
this.j = j;
this.value;
this.pValue;
this.background = [51,51,51];
this.show = function(){
	stroke(255);
	fill(this.background);
	var x = this.i * w;
 	var y = this.j * w;
    rect(x,y,w,w);
	fill(255);
	if(this.i == 2){ rect(x+w-3,y,w,w); }
	if(this.i == 5){ rect(x+w-3,y,w,w); }
	if(this.j == 2){ rect(x,y+w-3,w,w); }
	if(this.j == 5){ rect(x,y+w-3,w,w); }
	if(this.value != undefined){ text(this.value, x + 17, y,x+w,y+w);}
	if(this.pValue != undefined){ text(this.pValue, x + 17, y,x+w,y+w);}
}
}

function check(){
	bCell = [];
	for(var i = 0; i < 3; i++){
		for(var j = 0; j < 3; j++){
			for(var h = 0; h < 3; h++){
				for(var k = 0; k < 3; k++){
					cellT.push(grid[i*3+k][j*3+h]);
				}
			}
			bCell.push(cellT);
			cellT = [];
		}
	}
	for(var i = 0; i < grid.length; i++){
		for(var j = 0; j < grid[i].length; j++){
			if(grid[i][j].value == undefined){
				return false;
			} else {
				testX += grid[i][j].value;
				testY += grid[j][i].value;
			}
		}
		if(testX == 45 && testY == 45){
			testX = 0;
			testY = 0;
		} else {
			return false;
		}
	}
	testX = 0;
	for(var i = 0; i < bCell.length; i++){
		for(var j = 0; j < bCell[i].length; j++){
			testX += bCell[i][j].value;
		}
		if(testX == 45){
			testX = 0;
		} else {
			return false;
		}
	}
	return true;
}

function ftc(){
	for(var i =0; i < grid.length; i++){
		for(var j =0; j < grid[i].length; j++){
			if(j + 1 + i - 9 > 0){
				grid[i][j].value = j + 1 + i - 9;
			} else {
				grid[i][j].value = j + 1 + i;
			}
		}
	}
}