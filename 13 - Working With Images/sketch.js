// 13 - Working With Images
// Demi Bejide

let lionL, lionR;
let dir;
let pinImages = [];
let pinIndex = 0;

async function loadAssets(){
  // lionL = loadImage("assets/lion-left.png");
  // lionR = loadImage("assets/lion-right.png");

  //Pinwheel Images
}

async function setup() {  
  createCanvas(windowWidth, windowHeight);
  //await loadAssets();
  imageMode(CENTER);

  //Lion Images
  lionL = await loadImage("assets/lion-left.png");
  lionR = await loadImage("assets/lion-right.png");

  //PINWHEEL IMAGES 
  for (let i = 0; i < 9; i++){
    pinImages.push(await loadImage("/assets/pin-0" + i + ".png"));
  }
  
}

function draw() {
  background(220);
  drawLion();
  drawPin();
}

function drawLion(){
  //Update Direction
  if(movedX > 0){
    dir = "right";
  }
  else if(movedX < 0){
    dir = "left";
  }

  switch(dir){
    case "left":
      image(lionL, mouseX, mouseY,lionL.width /2 ,lionL.height / 2);
    break;

    case "right":
      image(lionR, mouseX, mouseY, lionR.width /2, lionR.height /2);
    break;

  }
}

function drawPin(){
  image(pinImages[pinIndex],width/2,height/5);
  if(frameCount %2 === 0){
    if(pinIndex < 8){
      pinIndex++;
    }
    else{
      pinIndex = 0;
    } 
  }

}

