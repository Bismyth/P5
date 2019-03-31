fr = 50;
wl = 10;
coll = 0;
n = 9;
iter = 10000000;
finishup = 100;
ended = false;
run = false;
function setup() {
  createCanvas(800, 400);
  block1 = new Block(50+wl,10,0,1);
  countDiv = createDiv();
  digit = createSlider(1,9,n,1);
  digitDiv = createDiv();
  button = createButton('submit');
  button.mousePressed(start);
}

function draw() {
  background(51);
  scene(fr,wl);
  if(run){
    block2 = new Block(200+wl,50,-1/iter,100**(n-1));
    if(!ended || finishup > 0 ){
      for (x = 0; x < iter;x++){
        block1.update();
        block2.update();
        block1.collide(block2);
      }
      ended = block1.v > 0 && block2.v >= block1.v;
      finishup = ended ? finishup-1 : finishup;

    }else {
      stroke(255);
      fill(255);
      text("Simulation Ended",200,200);
    }
  }
  block1.show();
  block2.show();
  countDiv.html("Collisions:&nbsp"+ coll + "<br>Actual:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+floor(PI*10**(n-1)));
  digitDiv.html("Digits of Pi: " + n);
}

function scene(f,w) {
  fill(150);
  stroke(150);
  rect(-1,height-f,width+1,f);
  rect(-1,-1,w,height+1);
}

function start(){
  block2 = new Block(200+wl,50,-1/iter,100**(n-1)); 
  run = true;
}

function reset(){
  ended = false;
  run = false;
  block1 = new Block(50+wl,10,0,1);
  block2 = new Block(200+wl,50,-1/iter,0);
  coll = 0;
}


