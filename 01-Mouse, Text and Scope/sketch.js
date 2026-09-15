



async function setup() {
  createCanvas(windowWidth,windowHeight);   
}


//Global Variables
let x = 100; let y = 100;

function draw(){
  background(220);
  textSize(40);

  //mouse-related system variables
  let mouseInfo = mouseIsPressed + " "  
                    + mouseButton.left + " "
                    + mouseButton.center + " "
                    + mouseButton.right;

  text(mouseInfo, mouseX, mouseY);
  drawSquare()
}

function drawSquare(){
    square(x,y,50)
}
function keyPressed(){
  //This function calls automatically
  // - for single press captures
  print("PRESS");
  print(key + " " + keyCode);

  // for interest's sake
  
  
}