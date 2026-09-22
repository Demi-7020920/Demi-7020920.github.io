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
  
  if (num === 0){// morning 
    background(135,206,235);
    fill(145,142,133);
    quad(0, height - 100, width, height - 100, width, height, 0, height);
    fill(255,234,0);
    circle(width - 50, 50,100);
  }
  
  else if (num === 1){// Evening
    background(41,43,49);
  }
  else if (num === 2){//Afternoon
    background(246,206,138);
  }
  fill(255,255,255);
  aeroplane();
  
  
  
  
  
  

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
  noStroke()
  ellipse(mouseX + 50, mouseY,80,30)
  quad(mouseX - 50, mouseY - 15, mouseX - 80, mouseY - 15,  mouseX - 80, mouseY - 10,  mouseX - 50, mouseY + 15)
  quad(mouseX - 65, mouseY - 15, mouseX - 65, mouseY - 50, mouseX - 60, mouseY - 50, mouseX - 40, mouseY - 15 )
  rect(mouseX - 50,mouseY - 15,100,30);
  
}
