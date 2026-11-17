// Image Manipulation Excercises
// Demi Bejide

let chip, race, nuit, hand;

async function loadAssets() {
  chip = await loadImage("/assets/chip.jpg");
  race = await loadImage("/assets/race.jpg");
  nuit = await loadImage("/assets/nuit.jpg");
  hand = await loadImage("assets/hand.jpg");
}

async function setup() {
  await loadAssets();
  createCanvas(hand.width, hand.height);

  
}

function draw() {
  background(220);
  image(hand,0,0);
  loadPixels();
  //majCol();
  //noGreenRightSide();
  //fiveColorPosterize();
  //horizontalMirror();
  //jigsaw();
  updatePixels();
}

function majCol(){
  //Majority Color
  for(let x = 0; x < width; x++ ){
    for(let y = 0; y < height; y++){
      let i = (y * width + x) * 4;
      let r = pixels[i];
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      if(r > g && r > b){
        pixels[i] = 255;
        pixels[i + 1] = 0;
        pixels[i + 2] = 0;
      }
      else if ( g > r && g > b){
        pixels[i] = 0;
        pixels[i + 1] = 255;
        pixels[i + 2] = 0;
      }
      else{
        pixels[i] = 0;
        pixels[i + 1] = 0;
        pixels[i + 2] = 255;
      }
    }
  }
}

function noGreenRightSide(){
  //No green on the right Side 
  for(let x = width/2; x < width; x++){
    for(let y = 0; y < height; y++){
      let i = (y * width + x) * 4;
      pixels[i + 1] = 0;
  
    }
  }
}

function fiveColorPosterize(){
  //Looks at avg intensity and overwrites
  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      let i = (y * width + x) * 4;
      let avg = int(pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
      if(avg >= 205 && avg <= 255 ){
        pixels[i] = 170;
        pixels[i + 1] = 230;
        pixels[i + 2] = 220;
      }
      else if(avg >= 155 && avg <= 204 ){
        pixels[i] = 105;
        pixels[i + 1] = 150;
        pixels[i + 2] = 210;
      }
      else if(avg >= 105 && avg <= 154 ){
        pixels[i] = 120;
        pixels[i + 1] = 180;
        pixels[i + 2] = 60;
      }
      else if(avg >= 55 && avg <= 104 ){
        pixels[i] = 130;
        pixels[i + 1] = 30;
        pixels[i + 2] = 130;
      }
      else if(avg >= 0 && avg <= 54 ){
        pixels[i] = 90;
        pixels[i + 1] = 10;
        pixels[i + 2] = 50;
      }
    }
  }
}

function horizontalMirror(){
  //copy all the pixels from right hand side
  //unto their mirror locations on the left hand side
  let values;
  for(let x = width; x > width/2; x--){
    for(let y = 0; y < height; y++){
      let i = (y * width + x) * 4;
      let rep = (y * width + (width - x) ) * 4;
      pixels[rep] = pixels[i];
      pixels[rep + 1] = pixels[i + 1];
      pixels[rep + 2] = pixels[i + 2];
    }
  }
}

function jigsaw(){
  // Divide image into four shapes
  // and rotate
  let one = [],two = [],three = [],four = [];
  for( let x = 0; x < width/2; x++){
    for(let y = 0; y < height/2; y++){
      let i = (y * width + x) * 4;
      one.push(pixels[i]);
      
    }
  }
  for(let x = width/2; x < width; x ++){
    for(let y = 0; y < height/2; y++){
      let i = (y * width + x) * 4;
      let count = 0;
      pixels[i] = one[count];
      pixels[i + 1] = one[count + 1];
      pixels[i + 2] = one[count + 2];
      count++;
    }
  }
}

function setPixeloneD(pos,r,g,b){
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;

}