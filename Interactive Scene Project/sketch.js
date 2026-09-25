// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(windowWidth, windowHeight);
}
let num = 0; 
function draw() {
  
  backgroundSetter();
  
  
  
  
  
  

  //triangle(mouseX + 50 , mouseY - 15 ,mouseX + 50 , mouseY + 15, mouseX + 80, mouseY);
}
function keyPressed(){
  if (key === 'f'){
    num += 1
    if (num > 2){
      num = 0
    }
    print(num);
  }
}
function aeroplane(){
  noStroke();
  ellipse(mouseX + 50, mouseY,80,30)
  quad(mouseX - 50, mouseY - 15, mouseX - 80, mouseY - 15,  mouseX - 80, mouseY - 10,  mouseX - 50, mouseY + 15)
  quad(mouseX - 65, mouseY - 15, mouseX - 65, mouseY - 50, mouseX - 60, mouseY - 50, mouseX - 40, mouseY - 15 )
  rect(mouseX - 50,mouseY - 15,100,30);
  
}
function backgroundSetter(){
  switch (num){
    case 0:
      morning();
      break;
    case 1:
      background(41,43,49);
      break;
    case 2:
      background(246,206,138);
      break;

  }

  fill(255,255,255);
  
  aeroplane();
  
}
function morning(){
  background(135,206,235);
  fill(145,142,133);
  quad(0, height - 100, width, height - 100, width, height, 0, height);
  fill(255,234,0);
  circle(width - 50, 50,100);
  let x = 0;
  let space = floor(width/10);
  fill(0, 154, 23);
  rect(0, height - 90, width, 50 );
  fill(255, 255, 255);
  for (let i = 0; i < 10; i++){
    stroke(100);
    rect(x + 20, height - 500,60,400 );
    rect(x , height - 300, 60, 200);
    
    x = x  + space;
  }
  
  
  
}