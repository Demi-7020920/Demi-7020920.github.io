// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(135,206,235);


  ellipse(mouseX + 50, mouseY,80,30)
  quad(mouseX - 50, mouseY + 15 )
  rect(mouseX - 50,mouseY - 15,100,30);
  
  //triangle(mouseX + 50 , mouseY - 15 ,mouseX + 50 , mouseY + 15, mouseX + 80, mouseY);
}
