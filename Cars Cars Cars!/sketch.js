// Cars Cars Cars!
// Demi Bejide
// 20th October,2026.

//GLOBAL VARIABLES
let eastbound = [];
let westbound = [];
let test; let chance;let test2;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  //test = new Vehicle(0,(255,0,0),width - 200,250 + 50,0,5);
  //test2 = new Vehicle(1,(255,0,0),0,height/2 + 50,1,5);

  for(let i = 0; i < 20; i++ ){
    eastbound.push(new Vehicle(floor(random(0,1)), 
      color(random(255),random(255), random(255)),
      0,floor(floor(random(height/2 + 25, height/2 + 225)))));
  }
}

function draw() {
  background(220);
  drawRoad();
  for(car of eastbound){
    car.action();
  }
  //test.action();
  //test2.action();
}

function drawRoad(){
  //Draw a black road and dashed yellow lane dividing line
  fill(0);
  rect(0,height/2-250,width,500);
  let space = width/20;
  fill(255,255,0);
  for(let i = 0; i < width; i = i += space ){
    rect(i + 15,height/2,30,5);
  }
}

function car(x,y,color,direction){
  //Displays the car
  if(direction === 0){ // Pointless, but why not 
    fill(color);
    rect(x,y,60,20);
    fill(255);
    rect(x + 5,y -3,15,3);
    rect(x + 40,y - 3,15,3);
    rect(x + 5,y +20,15,3);
    rect(x + 40,y + 20,15,3);
  }
  else if(direction === 1){
    fill(color);
    rect(x,y,60,20);
    fill(255);
    rect(x + 5,y -3,15,3);
    rect(x + 40,y - 3,15,3);
    rect(x + 5,y +20,15,3);
    rect(x + 40,y + 20,15,3);
  }
  
}

function truck(x,y,color,direction){
  //Displays the Truck
  if(direction === 0){ // Changes the windsheild direction of the truck
    fill(color);
    rect(x,y,60,40);
    fill(0);
    rect(x + 10, y,1,40);
  }
  else if(direction === 1){
    fill(color);
    rect(x,y,60,40);
    fill(0);
    rect(x + 49, y,1,40);
  }

}

class Vehicle{
  constructor(type,color,x,y,direction,xSpeed){
    this.type = type;
    this.color = color;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.xSpeed = xSpeed;
  }
  display(){
    if(this.type === 0){
      car(this.x,this.y,this.color,this.direction);
    }
    else if(this.type === 1){
      truck(this.x,this.y,this.color,this.direction);
    }
  }
  move(){
    if(this.direction === 0 ){
      this.x -= this.xSpeed;
      if(this.x < 0){
        //Moving Left 
        this.x = width;
      }
    }
    else if(this.direction === 1){
      //Moving Right
      this.x += this.xSpeed;
      if(this.x > width){
        this.x = 0;
      }
    }
  }
  speedUp(){//Work In progress
    if(this.direction === 0){
      if(this.xSpeed < 15){
        this.xSpeed += 1;
      }  
    }
    else if(this.direction === 1){
      if(this.xSpeed < 15){
        this.xSpeed += 1;
      }
    }
  }
  speedDown(){ //Pointless differentiating between directions ig
    if(this.direction === 0){
      if(this.xSpeed > 0){
        this.xSpeed -= 1;
      }  
    }
    else if(this.direction === 1){
      if(this.xSpeed > 0){
        this.xSpeed -= 1;
      }
    }
  }
  changeColor(){
    this.color = color(random(255),random(255),random(255));
    
  }

  action(){
    this.move();
    chance = floor(random(1,100));
    if(chance === 1){
      this.speedUp();
    }
    chance = floor(random(1,100));
    if(chance === 1){
      this.speedDown();
    }
    chance = floor(random(1,100));
    if(chance === 1){
      this.changeColor();
    }
    this.display();
  }
}


