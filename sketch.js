var hr,mn,sc;
var hrAngleMode, minAngleMode, secAngleMode;


function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 angleMode(DEGREES);
}

function draw() {
  background(20,20,20);
  translate(350, 250);
  rotate(-90);
 

  hr= hour();
mn= minute();
sc= second();

fill(rgb(44,111,123));
textSize(28);
text("!!!TIC TIC TIC!!! ", 10,300); 

strokeWeight(9);
  stroke(rgb(9,121,321));
  noFill();
scAngleMode = map(sc, 0, 60, 0, 360);
arc(0,0,300,300,0,scAngleMode);
  minAngleMode = map(min, 0, 60, 0, 360);
  arc(0,0,280,280,0,minAngleMode);
  hrAngleMode = map(hr%12, 0, 12, 0, 360);
  arc(0,0,260,260,0,hrAngleMode);

  push();
  rotate(scAngleMode);
  stroke("light pink");
  line(0,0,98,0);
  pop();
  
  push();
  rotate(minAngleMode);
  stroke(rgb(55,106,509));
  line(0,0,75,0);
  pop();
  
  push();
  rotate(hrAngleMode);
  stroke(rgb(0,628,129));
  line(0,0,60,0);
  pop();
  
  stroke(rgb(528,0,129));
  point (0,0);


  //To focus on center
  strokeWeight(2);
  stroke(220, 20, 60);
  point(0, 0);

  //To draw arcs
  strokeWeight(10);
  noFill();

  //Arc format
  //arc(x, y, w, h, start, stop);

  //To draw sec
  stroke(60, 179, 113);
  arc(0, 0, 300, 300, 0, secAngleMode);

  //To draw min
  stroke(176, 224, 230);
  arc(0, 0, 280, 280, 0, minAngleMode);

  //To draw hour
  stroke(72, 61, 139);
  arc(0, 0, 260, 260, 0, hrAngleMode);


  
  drawSprites();
}