// Randome vs. Noise
// Demi Bejide
// Sep 29, 2026
//
// Global variables/ Definitons
let minSize =  5; let maxSize = 200;
let x1 ; let y1;
let x2; let y2;
let x3 = 400; let y3 = 200;

//for noise()
let noiseTime = 10; let noiseSpeed = 0.01;
// noiseTime = current coordinate n noise graph
// noiseSpeed = Rate at which we move down the graph


async function setup() {
  createCanvas(windowWidth, windowHeight);
  y1 = height / 2; // Declare variable first and initialize after drawing canvas
  x1 = width * 0.3;
  x2 = width * 0.7;
  y2 = height/2;
}

function draw() {
  randomCircle();
  background(220);
  //randomSeed(0);//Use random seed to stabilize random()
  randomCircle();
  noiseCircle();
  moveCircle();
}

function noiseCircle(){
  // another circle, this time the
  //Diameter is generated using noise(), smoothly
  fill(255,50,150);
  let d = noise(noiseTime); //yield value b/w 0-1
  d = map(d,0,1,minSize,maxSize);
  noiseTime += noiseSpeed;
  circle(x2,y2,d);
}
function randomCircle(){
  //draw a fixed position circle with
  //randomly changing diameter 
  fill(50,150,250);
  let d = random(minSize,maxSize);
  circle(x1,y1,d);
}

function moveCircle(){
  // Challenge: using perlin noise(), draw a
  // 40px circle that moves left or right
  // randomly, wrapping around if it
  // leaves the screen.
  let dx = noise(noiseTime); //0-1
  dx = map(dx,0,1,-5,5);
  x3 += dx;
  circle(x3,y3,40);
  
  // wrap around
  if (x3 > width) x3 = 0;
  else if (x3 <  0) x3 = width;
}
