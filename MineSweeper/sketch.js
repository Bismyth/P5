var cols = 10;
var cellSize = 50;
var grid = [];
var empties = [];
b = 69;
function setup() {
  createCanvas(cols*cellSize, cols*cellSize);
  for (var x=0;x<cols;x++){
    grid.push([])
    for (var y=0;y<cols;y++){
      grid[x].push(new Cell(x,y));
    }
  }
  generateMinefield(cols,10).forEach((x) => {grid[x[0]][x[1]].type = 'mine';});
  grid.forEach((x) =>{x.forEach((y)=>{
    c = findingProx(grid,y.x,y.y);
    if (c > 0){
      y.type = 'close';
      y.prox = c;
    }
  });});
  grid.forEach((x) =>{x.forEach((y)=>{
    findingEmp(grid,y.x,y.y);
  });});
}

function draw() {
  background(51);
  grid.forEach((x) =>{x.forEach((y)=>{
    y.show();
  });});
}

function generateMinefield(c,n){
  if (c*c <= n){
    console.error("More mines than field size");
    return -1;
  }
  pos = [];
  mines = [];
  for (var x=0;x<c;x++){
    for (var y=0;y<c;y++){
      pos.push([x,y]);
    }
  }
  for(var x = 0;x<n;x++){
    mines.push(pos.splice(Math.floor(Math.random() * pos.length),1)[0]);
  }
  mines.sort();
  return mines;
}
function findingProx(myArray, i, j) {
  if (myArray[i][j].type == 'mine'){
    return 0;
  }
  var rowLimit = myArray.length-1;
  var columnLimit = myArray[0].length-1;
  n = 0;
  for(var x = Math.max(0, i-1); x <= Math.min(i+1, rowLimit); x++) {
    for(var y = Math.max(0, j-1); y <= Math.min(j+1, columnLimit); y++) {
      if(x !== i || y !== j) {
        if(myArray[x][y].type == 'mine'){
          n++;
        }
      }
    }
  }
  return n;
}


function Cell(x,y){
  this.x = x;
  this.y = y;
  this.type = null;
  this.show = function(){
    noStroke();
    if(this.type == 'mine'){
      fill(255,0,0);
    } else {
      fill(0,128,0);
    }
    rect(this.x*cellSize,this.y*cellSize,cellSize,cellSize);
    if (this.type == 'close'){
      fill(255);
      textAlign(CENTER, CENTER);
      text(this.prox.toString(),this.x*cellSize,this.y*cellSize,cellSize,cellSize);
    }
    if (this.type == 'empty'){
      fill(255);
      textAlign(CENTER, CENTER);
      text(this.ec.toString(),this.x*cellSize,this.y*cellSize,cellSize,cellSize);
    }
  }
}

