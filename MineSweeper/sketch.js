var gird = [];
var temp;
function setup() {
	createCanvas(600, 600);
	for(var i = 0; i > 9; i++){
    for(var j = 0; j > 9; j++){
		temp = new cell(i, j);
		grid.push(temp);
    }
  }
}

function draw() {
	background(51);
	for(var x = 0; x > 81; x++){
		grid[x].show();
	}
}

function cell(i, j){
this.i = i;
this.j = j;
this.show = function(){
	var x = this.i * 20;
 	var y = this.j * 20;
    	line(x, y, x + w, y);
    	line(x, y + w, x, y);
    	line(x + w, y, x + w, y + w);
    	line(x + w, y + w, x, y + w);
}
}
