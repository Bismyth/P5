var grid = [];
var temp, w;
function setup() {
	createCanvas(600, 600);
	w = floor(600/9);
	for(var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
		temp = new cell(i, j);
		grid.push(temp);
    }
  }
}

function draw() {
	background(51);
	for(var x = 0; x < grid.length; x++){
		grid[x].show();
	}
}

function cell(i, j){
this.i = i;
this.j = j;
this.show = function(){
	stroke(255);
	var x = this.i * w;
 	var y = this.j * w;
    	line(x, y, x + w, y);
    	line(x, y + w, x, y);
    	line(x + w, y, x + w, y + w);
    	line(x + w, y + w, x, y + w);
}
}
