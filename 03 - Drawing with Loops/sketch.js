// Drawing with Single Loops
// Demi Bejide
// 25th September, 2026


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function worm(y, size){
  //Use this function to draw a line of circles
  // y  = (num) height at which to draw line
  // size = (num) diameter of each circle
  for(let x = size/2; x < width; x += size){
    circle(x,y,size);
  }
}

function gradientBackground(){
  //creates a gradient to use as background
  let h = 2; //Rectangle Height

  //could use FOR or WHILE loop here...
  let y = 0; // have to make variable before running loop
  while (y < height){
    let mappedY = map(y,0,height,0,255);
    fill(mappedY, mouseX/5, 255 - mappedY); // fill(n) - greyscale
    rect(0,y,width,h);
    
    y += h;
  }
}
function draw() {
  
  background(220);
  challenge();
  // noStroke() 
  // gradientBackground();
  // worm(height/2, 50);
  challenge(25);
}//Screen Stuck Here

function challenge(size){
  let x = 0;
  let y = 0;
  for(let i = 0; i < width; i += size){
    line(x,0,mouseX, mouseY);
    circle(x,0,size);
    line(width,y,mouseX, mouseY);
    circle(width, y, size);
    line(x,height,mouseX, mouseY);
    circle(x, height, size);
    line(0,y,mouseX, mouseY);
    circle(0, y, size);
    
    x += size * 3;
    y += size * 3;
  }
  
}