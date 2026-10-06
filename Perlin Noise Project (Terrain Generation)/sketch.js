// Terrain Generator
// Demi Bejide
// 2nd October, 2026

// Global Variables
let xTime = 5; let xSpeed = 0.01;
let xStart = xTime; let rectWidth = 2;
let flagHeight; let flagX; let flagY; 
let averageHeight; let numMount; 

async function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
  fill(0);

  // Restores previous Values, updating the start var
  //  and slightly pushes the new image.
  xTime  =xStart;
  xStart += xSpeed;
  mountains();
  flag();
  average();
  
}

function keyPressed(){
  if (keyCode === 39){ // Right arrow pressed increased rect width.
    if (rectWidth < 17){
      rectWidth += 1;
    }
  }
  else if (keyCode === 37){ // Left arrow pressed reduces rect width.
    if (rectWidth > 1){
      rectWidth -= 1;
    }
    
  }
}

function mountains(){
  //create a rectangle with different heights
  let mountHeight = random(0,height);

  //resets all the variables before running the loop again
  flagHeight = 0;
  flagY = 0;
  flagX = 0;
  averageHeight = 0;
  numMount = 0;

  for(let x = 0; x < width; x += rectWidth){
    //perlin noise code (3 lines)
    let mountheight = noise(xTime); // 0 - 1
    mountHeight = map(mountheight,0,1,0,height);
    
    
    xTime += xSpeed;
    fill(0);
    rect(x,height,rectWidth,mountHeight * -1);

    // Stores total mountain heights as well as numbers of rectangles generated
    averageHeight += mountHeight;
    numMount += 1;

    // Constantly checking for a taller rectangles height, x, and y position
    if (flagHeight < mountHeight){
      flagHeight = mountHeight;
      flagY = height - mountHeight;
      flagX = x;
    }
    
  }
}

function flag(){
  //Drawws a flag at the mountains peak using the stored flagX and flagY variables
  fill(255,0,0);
  stroke(20);
  rect(flagX,flagY - 40, 2,40 );
  triangle(flagX + 2, flagY- 40, flagX + 2, flagY -19, flagX + 20, flagY - 25);
}

function average(){
  //Collects total height of mountains and divides by amount of mountains generated
  averageHeight = averageHeight / numMount;
  let averageY = height - averageHeight;
  fill(255,0,0, 150);
  noStroke();
  rect(0,averageY, width,5);
  //print("Average Height: " + floor(averageHeight)); - USed this to confirm avg Height
}