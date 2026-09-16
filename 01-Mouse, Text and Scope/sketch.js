



async function setup() {
  createCanvas(windowWidth,windowHeight);   
}


//Global Variables
let x = 100; let y = 100;
let c = "green";

function draw(){
  background(220);
  mouseReport();
  updateSquare();
}
function mouseReport(){
  textSize(40);

  //mouse-related system variables
  fill("purple")
  let mouseInfo = mouseIsPressed + " "  
                    + mouseButton.left + " "
                    + mouseButton.center + " "
                    + mouseButton.right;

  text(mouseInfo, mouseX, mouseY);
  drawSquare()
}
function updateSquare(){
  //movement code here
  //keycode is LAST PRESSED CODE
 // if(keyCode===40 && keyIsPressed){ - Dont use, code is too slow
  //  y += 2;
  //}
  if(keyIsDown(LEFT_ARROW)){
    x -= 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    x += 5;
  }
  if(keyIsDown(UP_ARROW)){
    y -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    y += 5;
  }
}
function drawSquare(){
  // draw our square on the screen
  fill(c)
  square(x,y,50)
}
function keyPressed(){
  //This function calls automatically
  // - for single press captures
  print("PRESS");
  print(key + " " + keyCode);


  if(key==="a"){
    c = "red"
  }
  else if(key==="f"){
    c = "blue"
  }
  else if(keyCode===40){
    //down

  }
  // for interest's sake
  
  
}