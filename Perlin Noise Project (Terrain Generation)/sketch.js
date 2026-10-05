// Terrain Generator
// Demi Bejide
// 2nd October, 2026

// Global Variables
let xTime = 5; let xSpeed = 0.01;
let xStart = xTime; let rectWidth = 2;
let flagHeight; let flagX; let flagY;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  
}

function draw() {
  background(220);
  fill(0);
  xTime  =xStart;
  xStart += xSpeed;
  mountains();
  flag();
  
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
  flagHeight = 0;
  flagY = 0;
  flagX = 0
  for(let x = 0; x < width; x += rectWidth){
    //perlin noise code (3 lines)
    let mountheight = noise(xTime); // 0 - 1
    mountHeight = map(mountheight,0,1,0,height);
    
    
    xTime += xSpeed;
    fill(0);
    rect(x,height,rectWidth,mountHeight * -1);
    
    if (flagHeight < mountHeight){
      flagHeight = mountHeight;
      flagY = height - mountHeight;
      flagX = x;
    }
    
  }
}

function flag(){
  fill(255,0,0);
  rect(flagX,flagY - 40, 2,40 );
  triangle(flagX + 2, flagY- 40, flagX + 2, flagY -10, flagX + 20, flagY - 25);
}