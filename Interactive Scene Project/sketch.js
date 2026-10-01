// Interactive Scene Project
// Demi Bejide
// 1st October, 2026
// Computer Science 30

//GLOBAL VARIABLES
let currentBack = 0; 
let sky = 0;
let planeCol = 0;

// CONTROLS
// [Middle Mouse Button] - Adjusts background colour
// [c] - Adjusts whether there are clouds in the sky
// [f] - Adjusts the color of the aeroplane
// [Mouse Cursor] - Controls the location of the aeroplane

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  backgroundSetter();//Constantly runs checking for input
  fill(255,255,255);

  text('DEMI',width - 40,height - 20)// Artist Mark for the project

  if (sky === 1){//checks for chnge in variable to draw clouds
    clouds() 
  }
}
function mousePressed(){
  //Checks if a mouse key is clicked
  if (mouseButton.center){
    //Confims if the center button clicked,
    //then changes the number of the current background 
    currentBack += 1;
    if (currentBack > 2){
      currentBack = 0;
    }
    
  }
}
function keyPressed(){
  //Checks for if a key on the keyboard is pressed
  if (key === 'c'){
    //Functions by setting the value of sky
    //to either 0 or 1.
    if (sky === 0){
      sky = 1;
    }
    else if (sky === 1){
      sky = 0;
    }  
  }
  else if (key === 'f'){
  // rotates the color of the aeroplane
    planeCol += 1;
    if (planeCol > 3){
      planeCol = 0;
    }
    print(planeCol);
  }
}

function clouds(){
  for(let x  = 0; x < (width - 200); x += 100){
      circle( 30 + x,40,50);
      circle( 50 + x,35,45);
      circle( 70 + x,40,50);
    }
}

function aeroplane(){
  //Covers the required instructions to form the main sprite
  //Aka the aeroplane.
  // Also follows the x and y values of the mouse cursor
  if(planeCol === 0){
    fill(255,255,255);
  }
  else if(planeCol === 1){
    fill(0);
  }
  else if(planeCol === 2){
    fill(255,0,0);
  }
  else if(planeCol === 3){
    fill(0,255,0);
  }
  
  noStroke();
  ellipse(mouseX + 50, mouseY,80,30)
  quad(mouseX - 50, mouseY - 15, mouseX - 80, mouseY - 15,  mouseX - 80, mouseY - 10,  mouseX - 50, mouseY + 15)
  quad(mouseX - 65, mouseY - 15, mouseX - 65, mouseY - 50, mouseX - 60, mouseY - 50, mouseX - 40, mouseY - 15 )
  rect(mouseX - 50,mouseY - 15,100,30);
  
}
function backgroundSetter(){
  //Using the values from the mouse button function,
  //It switches between the three available background options
  //Morning, Afternoon, and Night
  switch (currentBack){
    case 0:
      morning();
      break;
    case 1:
      background(41,43,49);
      night();
      break;
    case 2:
      background(246,206,138);
      break;

  }

  
  cityscape();
  aeroplane();
  
}
function morning(){
  // Adjusts the sun
  background(135,206,235);
  fill(255,234,0);
  let sunpos = 50;
  let size = 100;
  circle(width - sunpos, sunpos,size);
  

  
}
function night(){
  //Adjusts the sun to the moon for the night scene
  fill(246, 241, 213);
  circle(width - 50, 50,100);
  
}
function cityscape(){
  //Creates the buildings, roads, and parks seen in on the website
  // Also adjusts their colours based on the current
  //Background colour
  fill(145,142,133);
  quad(0, height - 100, width, height - 100, width, height, 0, height);
  let x = 0;
  let space = floor(width/10);
  fill(0, 154, 23);
  rect(0, height - 90, width, 50 );
  fill(255, 255, 255);
  for (let i = 0; i < 10; i++){
    stroke(100);
    if (currentBack === 0){
      fill(62,56,78);
    }

    else if (currentBack === 1){
      fill(192,192,192);
    }
    else{
      fill(145,142,133);
    }
    rect(x + 20, height - 500,60,400 );
    rect(x , height - 300, 60, 200);
    fill(0,0,0);
    rect(x, height - 100,height - 20,10);
    fill(255,255,0);
    rect(x + 5, height - 20, 30,4);
    x = x  + space;
  }
  
}