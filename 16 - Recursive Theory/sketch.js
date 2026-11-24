// Recutsive Imagery 
// Demi Bejide


async function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(220);
  //cocentric(width/2,height/2,width);
  circleFractal(width/2,height/2,width/2);
}

function cocentric(x,y,d){
  circle(x,y,d);
  if(d > 10){  //recursive case
    cocentric(x,y,d/1.1);
  }
  //Implicit Based case
  // if d <= 10, END FUNCTION AND UNRAVEL
}

function circleFractal(x,y,d){
  circle(x,y,d);
  if(d > 1){
    let newX = x - d/2;
    circleFractal(x - d/2,y,d/2);
    circleFractal(x + d/2,y,d/2);
    circleFractal(x,y- d/2,d/2);
    circleFractal(x,-y- d/2,d/2);
  }
}