// Analogue Clock Face 
// Demi Bejide 


async function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  fill(255);
  circle(500,500,500);
  fill(0);
  circle(500,500,3);
  push();
  translate(500,500);
  let spin = 360/44;
  for(let i = 0; i < 44; i++){
    line(-200,0,-225,0);
    rotate(radians(spin));
  }
  
  
}
