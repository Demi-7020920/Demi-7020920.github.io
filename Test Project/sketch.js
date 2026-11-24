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
  background(220);
  let hours = new Map();
  //Names and Shifts
  hours.set("Alice", 8);
  hours.set("Bob", 7);
  hours.set("Charlie", 9);

  //Bob worked an Extra Hour
  hours.set("Bob",8)

  // Add Dana with 8 hours if not on map
  if(!hours.has("Dana")){
	  hours.set("Dana",8);
  }

  //Retreive Charlies hours and store
  let charlieHours = hours.get("Charlie");


  //FINAL CONTENTS OF THE MAP
  // ("Alice", 8)
  // ("Bob",8)
  // ("Charlie",9)
  // ("Dana", 8)
  
  for(let people of hours){
    console.log(people);
  }
}
