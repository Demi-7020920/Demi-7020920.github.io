// Find The Smallest Circle
// Demi Bejide
// Oct 5th, 2026

const NUM_CIRCLEs = 100;
let seed;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
}

function drawCircles(){
  //draw NUM_CIRCLES circles all over the screen
  //sizes are random, nofill() by deafault 

  let smallDiameter = Infinity;
  let smallX  =-1; // Placeholder
  let smallY = -1; // 'Dummy' Values
  

  noFill();
  for(let i = 0; i < NUM_CIRCLEs; i++){
    let x = random(0,width); //random(width)
    let y = random(0,height);
    let d = random(20,60);
    circle(x,y,d);

    //is this the new smallest Circle???
    if (d < smallDiameter){
      smallDiameter = d;
      smallX = x;
      smallY = y;
    }
  }
  // DRAW/COLOUR IN the smallest Circle
  fill(255, 165, 0);
  circle(smallX,smallY,smallDiameter);
}