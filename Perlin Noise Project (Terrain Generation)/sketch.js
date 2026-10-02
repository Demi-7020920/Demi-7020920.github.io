// Terrain Generator
// Demi Bejide
// 2nd October, 2026

// Global Variables
let xTime = 5; let xSpeed = 0.01;
let xStart = xTime; let rectWidth = 2;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  
}

function draw() {
  background(220);
  fill(0);
  xTime  =xStart;
  xStart += xSpeed;
  mountains();
  
}

function keyPressed(){
  if (key === 'a'){
    if (rectWidth < 17){
      rectWidth += 1;
    }
  }
  else if (key === 'd'){
    if (rectWidth > 1){
      rectWidth -= 1;
    }
    
  }
}

function mountains(){
  //create a rectangle with different heights
  let mountHeight = random(0,height);
  for(let x = 0; x < width; x += rectWidth){
    //perlin noise code (3 lines)
    let mountheight = noise(xTime); // 0 - 1
    mountHeight = map(mountheight,0,1,0,height);
    xTime += xSpeed;
    rect(x,height,rectWidth,mountHeight * -1);
    
  }
}
