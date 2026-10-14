// Object Oriented Programing 
// Demi Bejide
// October 14th 2026

//Global Variables
let myBook; let book2; let book3; //can't INITIALIZE objects here...
// Challenge 1: Add and display 2 more books
// Challenge 2: fill an array with 5 books
//                      use same title and author for ewach
//                      numeric can be random / pattern
let spot;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  //create a single book
  spot = width*0.3;
  myBook = new Book("The Godfather","Mr. Scott",
    1234567891011,"leatherbound", 500, spot);
  spot = spot + this.pages/10;
  book2 = new Book("Pride and Prejudice","William Shakespeare",5467283940573,"softcover",600,spot);
  spot += this.pages/10;
  book3 = new Book("Hanzel and Gretel","Superman",3049536274859,"hardcover",800,spot);
}

function draw() {
  background(220);
  
  myBook.display();
  
  book2.display();
  
  book3.display();
}

//Classes are nicely organized into the bottom of 
//Our file, or perhaps their own file...

class Book{
  //1. constructor 
  constructor(title,author,isbn,cover,pages,x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;
  }

  //2. class functions 
  //Inside a class, we omit the "function" keyword
  display(){
    //Render our book object on the Canvas.
    rectMode(CENTER); textAlign(CENTER,CENTER);
    textSize(20);

    //set fill color based on coverType (H,S,L)
    switch(this.cover){
      case "softcover":
        fill(220,220,0); break;
      case "hardcover":
        fill(100,255,255); break;
      case "leatherbound":
        fill(150,0,150); break;
    }

    //Finally, draw the book spine 
    rect(this.x,height/2,this.pages/10,150);
    fill(255);
    text(this.title[0], this.x, height/2+50);
  }
}