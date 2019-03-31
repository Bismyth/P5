//height of floor and how far out the wall is
fr = 50;
wl = 10;
//slider varviables (digits of pi and calculations per cycle)
n = 9;
iter = 1000000;
//Initiialising random other things
coll = 0; //count to contain collisions
finishup = 100; //buffer before stopping simulation
ended = false; //has the simulation ended
run = false; //has the simulations started
function setup() {
  createCanvas(800, 400);
  block1 = new Block(50+wl,10,0,1);
  block2 = new Block(200+wl,50,-1/iter,0);
  countDiv = createDiv();
  digit = createSlider(1,9,n,1);
  digitDiv = createDiv();
  itera = createSlider(1,9,7,1);
  iteraDiv = createDiv();
  sb = createButton('Start');
  sb.mousePressed(start);
  rb = createButton('Reset');
  rb.mousePressed(reset)  ;
}

function draw() {
  background(51);
  scene(fr,wl);
  n = digit.value();
  iter = 10**itera.value();
  if(run){  
    if(!ended || finishup > 0 ){
      for (x = 0; x < iter;x++){
        block1.update();
        block2.update();
        block1.collide(block2);
      }
      ended = block1.v >= 0 && block2.v >= block1.v;
      finishup = ended ? finishup-1 : finishup;
    }else {
      stroke(255);
      fill(255);
      textSize(20);
      text("Simulation Ended",200,200);
    }
  }
  block1.show();
  block2.show();
  countDiv.html("Collisions:&nbsp"+ coll + "<br>Actual:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+floor(PI*10**(n-1)));
  digitDiv.html("Digits of Pi: " + n);
  iteraDiv.html("Calculations per Cycle: " + iter + " (note that the higher this is the more lag it will cause");
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
  location.reload();
}


