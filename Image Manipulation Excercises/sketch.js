// Image Manipulation Excercises
// Demi Bejide

let chip, race, nuit;

async function loadAssets() {
  chip = await loadImage("/assets/chip.jpg");
  race = await loadImage("/assets/race.jpg");
  nuit = await loadImage("/assets/nuit.jpg");
}

async function setup() {
  await loadAssets();
  createCanvas(nuit.width, nuit.height);

  
}

function draw() {
  background(220);
  image(nuit,0,0);
  loadPixels();
  //majCol();
  //noGreenRightSide();
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
  //Looks at avg intensity and overites
  for(let x = width/2; x < width; x++){
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
      //Continues here future Demi
    }
  }
}


function setPixeloneD(pos,r,g,b){
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;

}