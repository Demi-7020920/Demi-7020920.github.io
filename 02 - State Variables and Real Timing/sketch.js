// State Variable / Real Time
// Demi Bejide
// Septmber 23rd, 2026
//

// GLOBAL VARIABLES
let objectType = 0;
// 0 - circle
// 1 - triangle
// 2 - starburst
let startTime = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  //repeats at a target of 60 frames per second
  background(220);
  drawShape();
  let elapsed = millis()-startTime;
  if(elapsed > 2000){ //  2000 - 2 seconds;
    updateState();
    startTime = millis(); // resets Timer
  }
  //
}

function keyPressed(){
  // special 'event' function. Gets
  //called whenever we press a button
  //on the keyboard
  updateState();
  
}
function drawShape() {
  // Inspect state variable (objectType)
  // and draw one of the three possible
  // shapes on the Canvas.
  // [ALT][SHIFT][F] - Auto format your code

  let x = width/2; let y = height/2;
  switch (objectType) {
    case 0:
      circle(x,y,150);
      break;
    case 1:
      triangle(x-80,y+50,x+80,y+50,x,y-50);
      break;
    case 2:
      //Loop var ; condition; update
      for(let i = 0; i < 30 ; i++){
        let x2 = random(x-80,x+80);
        let y2 = random(y-80,y+80);
        line(x,y,x2,y2);
        
      }
  }
}

function updateState(){
  
  if (objectType >= 2){
    objectType = 0;
  }
  else{
    objectType++;
  }  
  
  
}