// Cars Cars Cars!
// Demi Bejide
// 20th October,2026.

//GLOBAL VARIABLES
let eastbound = [];
let westbound = [];
let test;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  test = new Vehicle(0,(255),30,height/2 + 50,1,5);
}

function draw() {
  background(220);
  drawRoad();
  test.display();
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

function car(x,y,color){
  //Displays the car
  fill(color);
  rect(x,y,60,20);
  fill(255);
  rect(x + 5,y - 10,15,3);
  rect(x + 10,y - 10,15,3);
  rect(x + 5,y + 10,15,3);
  rect(x + 10,y + 10,15,3);
}

function truck(x,y,color){
  //Displays the Truck
  fill(color);
  rect(x,y,13,5);
  fill(0);
  rect(x + 11, y,1,5);
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
      car(this.x,this.y,this.color);
    }
    else if(this.type === 1){
      truck(this.x,this.y,this.color);
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
  speedUp(){
    if(this.direction === 0){
      if(this.xSpeed > -15){
        this.xSpeed -= 1;
      }  
    }
    else if(this.direction === 1){
      if(this.xSpeed < 15){
        this.xSpeed += 1;
      }
    }
  }
  speedDown(){
    if(this.direction === 0){
      if(this.xSpeed < 0){
        this.xSpeed += 1;
      }  
    }
    else if(this.direction === 1){
      if(this.xSpeed > 0){
        this.xSpeed -= 1;
      }
    }
  }
  changeColor(){
    this.color = (random(255),random(255),random(255));
  }

  action(){
    this.move();
    this.display();
  }
}


