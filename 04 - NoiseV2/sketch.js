// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Global Variables 
let xTime = 5; let xSpeed = 0.01;
let xStart = xTime;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  xTime = xStart;
  xStart += xSpeed;
  fill(0);
  tower();
}

function tower(){
  //create a tower with circles of different
  // y position. X position will be 
  // randomly selected 
  let x = random(0,width);
  for(let y = 0; y < height; y += 20){
    //perlin noise code (3 lines)
    let x = noise(xTime);// 0 - 1
    x = map(x,0,1,0,width);
    xTime += xSpeed;
    circle(x,y,20);
  }
}