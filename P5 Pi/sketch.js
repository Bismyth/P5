
function setup() {
  createCanvas(400,400);
  background(51);
}
p = 0;
s = 0;
points = []

function draw() {
  s ++;
  pa = Math.random() * 2 - 1;
  pb = Math.random() * 2 - 1;
  if(Math.sqrt(pa*pa+pb*pb) < 1){
    stroke('green');
    p ++;
  } else {
    stroke('red');
  }
  point((pa+1)*200,(pb+1)*200);
  //console.log((4*p)/s);
  
}
