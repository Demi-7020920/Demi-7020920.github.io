// Puzzle Game Starter (2D Arrays)
// Demi Bejide
// 3rd November, 2026

// grid sized 6 x 5
// 0 (black)     255(White) 

let grid = [
  [0,   255,  0,    255,    0,    255],
  [255, 0,    255,  0,      255,  0],
  [255, 255,  255,  255,    255,  255],
  [0,   0,    0,    0,      0,    0],
  [255, 255,  0,    255,    255,  0]
];
let rows = grid.length;
let cols = grid[0].length;
let titleSize = 60;

async function setup() {
  createCanvas(cols*titleSize, rows*titleSize);
}

function draw() {
  background(220);
  renderGrid();
}

function renderGrid(){
  // interpret the data stores in 2D array
  // and draw a matrix to square to reflect it.

  for(let y = 0; y < rows; y++){//01234
    
    for(let x = 0; x < cols; x++){
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*titleSize,y*titleSize,titleSize);
    }
  }
}