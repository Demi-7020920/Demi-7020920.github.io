// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(windowWidth, windowHeight);
}
let currentBack = 0; 
let sky = 0;
function draw() {
  
  backgroundSetter();
  fill(255,255,255);
  text('DEMI',width - 40,height - 20)
  if (sky === 1){
    for(let x  = 0; x < (width - 100); x += 50){
      circle( 30 + x,40,50);
      circle( 50 + x,40,45);
      circle( 70 + x,40,50);
    }
    
  }
}
function mousePressed(){
  if (mouseButton.center){
    currentBack += 1;
    if (currentBack > 2){
      currentBack = 0;
    }
    print(currentBack);
  }
}
function keyPressed(){
  if (key === 'c'){
    if (sky === 0){
      sky = 1;
    }
    else if (sky === 1){
      sky = 0;
    }
    
    print("pressed" + sky);
  }

    
}
function clouds(){
  circle(70,40,30);
}
  

function aeroplane(){
  fill(255,255,255);
  noStroke();
  ellipse(mouseX + 50, mouseY,80,30)
  quad(mouseX - 50, mouseY - 15, mouseX - 80, mouseY - 15,  mouseX - 80, mouseY - 10,  mouseX - 50, mouseY + 15)
  quad(mouseX - 65, mouseY - 15, mouseX - 65, mouseY - 50, mouseX - 60, mouseY - 50, mouseX - 40, mouseY - 15 )
  rect(mouseX - 50,mouseY - 15,100,30);
  
}
function backgroundSetter(){
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
  background(135,206,235);
  fill(255,234,0);
  let sunpos = 50;
  let size = 100;
  circle(width - sunpos, sunpos,size);
  

  
}
function night(){
  fill(246, 241, 213);
  circle(width - 50, 50,100);
  
}
function cityscape(){
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