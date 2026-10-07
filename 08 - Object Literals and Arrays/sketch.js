// Simple Objects and Arrays
// Demi Bejide
// Oct 7, 2026

let ball;
let ballArray = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  // ball = {//object notation
  //   //inside the brakets set uo several property:value
  //   //pairs
  //   x: 300, y : 400, size: 20,
  //   c: color(random(255), random(255), random(255)),
  //   xSpeed: 5, ySpeed: 4
  // };
}

function moveBall(b){
  //b = Ball type object
  // update position and draw the ball

  //Update
  b.x = b.x + b.xSpeed; b.y += b.ySpeed;

  //walls
  if(b.x < 0 || b.x > width) {
    b.xSpeed *= -1;
  }
  if(b.y < 0 || b.y > height) {
    b.ySpeed *= -1;
  }

  //draw
  fill(b.c);
  circle(b.x,b.y,b.size);
}

function generateBall(x,y){
  //Create and RETURN a ball object.
  //Initial position x,y
  let b = {
    x:x, y:y, size:20,
    c: color(random(255),random(255),random(255)),
    xSpeed: random(-6,6), ySpeed: random(-6,6)
  };
  return b;
}

function initObjects(n){
  //creare/add n ball objets in our array
  for(let i = 0; i < n; i++){
    ballArray.push(generateBall(mouseX, mouseY));
  }
  
}

function keyPressed(){
  initObjects(10);
}

function draw() {
  background(220);
  for(let i = 0; i < ballArray.length; i++){
    let b = ballArray[i];
    moveBall(b);
    // b.lifeTime --;
    // if(b.lifeTime < 1){
    //   //.splice(pos, #ofItemsToDel,[add]) = deleyes items from array
    //   ballArray.splice(i,1);
    // }
  }
  
}
