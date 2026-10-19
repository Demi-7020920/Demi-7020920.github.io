// OOP Pair Programming Starter Code
// Your Names
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;let bullets = [];

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
  imageMode(CENTER);

}

function draw() {
  background("black");
  for (let bullet of bullets) {
    bullet.update();
    bullet.display();
  }
  enterprise.update();
  enterprise.display();
  

}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    this.Image = theImage;
    this.X = x;
    this.Y= y;
  }

  update() {
    // move ship -- you might want to use the keyIsDown() function here
    if (keyIsDown(LEFT_ARROW) === true){
      this.X -= 10;
    }
    else if (keyIsDown(RIGHT_ARROW) === true){
      this.X += 10;
    }
    else if (keyIsDown(UP_ARROW) === true){
      this.Y -= 10;
    }
    else if (keyIsDown(DOWN_ARROW) === true){
      this.Y += 10;
    }
    // if doing extra for experts, show bullet(s)
  }

  display() {
    // show the ship
    image(this.Image,this.X,this.Y);
  }

  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
    
    if (keyCode === 32) {
      console.log("fxf");
      bullets.push(new Bullet(this.X,this.Y,0,0,bulletImage));
  
    }
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    // define the variables needed for the bullet here
    this.Image = theImage;
    this.X = x;
    this.Y = y;

  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    
    this.Y -=5;
  }

  display() {
    // show the bullet
    image(this.Image,this.X,this.Y -100);
    this.update();
    this.isOnScreen();
  }

  isOnScreen() {
    // check if the bullet is still on the screen
    for(let bullet of bullets){
      if(bullet.Y < 0){
        bullets.splice(bullet-1,bullet + 1);
      }
    }
  }
}

