// Puzzle Game 
// Demi Bejide
// 3rd November, 2026

// grid sized 6 x 5
// 0 (black)     255(White) 

let grid = [
  [0, 255, 0, 255, 0, 255],
  [255, 0, 255, 0, 255, 0],
  [255, 255, 255, 255, 255, 255],
  [0, 0, 0, 0, 0, 0],
  [255, 255, 0, 255, 255, 0]
];
let rows = grid.length;
let cols = grid[0].length;
let titleSize = 60;
let black = 0;
let white = 0;
let mode = "cross";


async function setup() {
  StartingArrangement();// Calls the Randomizer function
  //Creates canvas based on size of titles in array
  createCanvas(cols * titleSize, rows * titleSize);

}

function draw() {
  background(220);
  renderGrid();
  getCurrentX();
  overlay();
  let gameOver = win();
  // Displays win Text
  if (gameOver){
    textSize(100);
    text("You Win!",0,height/2);
  }
}

function keyPressed(){
  //Alternates between cross and square flip
  if (key === ' '){
    if (mode === "cross"){
      mode = "square";
    }
    else{
      mode = "cross";
    }
  }
}

function StartingArrangement() {
  //Randomizes the set rows and colums using a 2 digit array
  for (let y = 0; y < rows; y++) {//01234
    for (let x = 0; x < cols; x++) {
      grid[y][x] = random([0,255]);
    }
  }
}

function win() {
  // Checks for either no black or white squares
  black = 0;
  white = 0;
  for (let y = 0; y < rows; y++) {//01234
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        black += 1;
      }
      else if (grid[y][x] === 255) {
        white += 1;
      }
    }
  }
  if (black === 30 || white === 30) {
    return true;
  }
  else {
    return false;
  }
}

function flip(x, y) {
  //flip the tile at position (x,y);
  if (grid[y][x] === 255) {
    grid[y][x] = 0;
  }
  else {
    grid[y][x] = 255;
  }
}

function mousePressed() {
  //Only do a flip if mouse is on the Canvas
  if (mouseX < width && mouseY < height) {

    let x = getCurrentX();
    let y = getCurrentY();

    //ALWAYS:
    flip(x, y);

    //IF THEY EXIST:
    //flip the cardinal neighbours (NSEW)
    if (!keyIsDown(SHIFT)) { 
      if (mode === "cross"){
        if (x - 1 >= 0) {
          flip(x - 1, y);
        }
        if (y - 1 >= 0) {
          flip(x, y - 1);
        }
        if (x < 5) {
          flip(x + 1, y);
        }  
        if (y < 4) {
          flip(x, y + 1);
        }
      }
      else if (mode === "square"){
        // Flips out a square rather than a cross
        if( x + 1 >= 0){
          flip(x + 1,y);
        }
        if(y + 1 >= 0){
          flip(x,y + 1);
        }
        if(x + 1 >= 0 && y + 1 >= 0){
          flip(x + 1, y + 1);
        }
      }
      
    }

  }
}


function renderGrid() {
  // interpret the data stores in 2D array
  // and draw a matrix to square to reflect it.

  for (let y = 0; y < rows; y++) {//01234
    for (let x = 0; x < cols; x++) {
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x * titleSize, y * titleSize, titleSize);
    }
  }
}

function getCurrentX() {
  //generate current col position of mouse
  fill(255, 0, 0);
  let constrainedX = constrain(mouseX, 0, width - 1);
  return int(constrainedX / titleSize);
}

function getCurrentY() {
  //determine current row position of mouse
  let constrainedY = constrain(mouseY, 0, height - 1);
  return int(constrainedY / titleSize);
}

function overlay(){
  // Draws a green transparent square in place of
  //Possible flip
  let x = getCurrentX();
  let y = getCurrentY();

  fill(0,255,0,150);
  if (keyIsDown(SHIFT)){
    //Cheater mode
    square(x * titleSize, y * titleSize, titleSize);
  }
  else if (mode === "cross"){
    //Cross
    square(x * titleSize, y * titleSize, titleSize);
    square((x + 1) * titleSize, y * titleSize, titleSize);
    square((x - 1) * titleSize, y * titleSize, titleSize);
    square(x * titleSize, (y - 1) * titleSize, titleSize);
    square(x * titleSize, (y + 1) * titleSize, titleSize);
  }
  else if (mode === "square"){
    //Square
    square(x * titleSize, y * titleSize, titleSize);
    square((x + 1) * titleSize, y * titleSize, titleSize);
    square(x * titleSize, (y + 1) * titleSize, titleSize);
    square((x + 1) * titleSize, (y + 1) * titleSize, titleSize);
  }
  
}