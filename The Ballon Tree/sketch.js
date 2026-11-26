// The Ballon Tree
// Demi Bejide

let scale = 15;

function setup() {
  createCanvas(500, 500);
  
  
}

function draw() {
  background(255);
  drawTree(width/2, height*.9, 90, 6);
  
}

function drawLine( x1,  y1,  x2,  y2,  depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  let width = map(depth,1,6,2,5);
  strokeWeight(width);
  line(x1, y1, x2, y2);
  strokeWeight(1);
  if( depth < 5){
    drawLeaf(x2,y2, depth);
  }
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale);     //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle))*depth*scale);     //using trig ratios. Get shorter based on depth

    drawLine(x1, y1, x2, y2, depth);

    //for a 2-branch tree:
    let space = map(mouseX,-500,500,0,36);
    drawTree(x2, y2, angle-space, depth-1);
    drawTree(x2, y2, angle+space, depth-1);
    drawTree(x2, y2, angle, depth-1);
    
  }
  
}

function drawLeaf(x,y, depth){
  let size = map(depth,4,1,20,15);
  randomSeed(255);
  let r = random(255);
  randomSeed(255);
  let g = random(255);
  randomSeed(255);
  let b = random(255);
  fill(r,g,b);
  circle(x,y,size);
}