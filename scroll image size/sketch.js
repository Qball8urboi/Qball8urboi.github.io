// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let simplePlan;
let scaler;

function preload() {
  simplePlan= loadImage("assets/simple plan.jfif");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  scalar = 1.0;
}

function draw() {
  background(0);
  image(simplePlan, mouseX, mouseY, simplePlan.width * scaler, simplePlan.height * scaler);

}
function mouseWheel(event) {
  if(event.delta > 0 && scaler < 2.5) {
    scaler *= 1.1;
  }

  else if (event.delta < 0 && scaler > 0.2) {
    scaler *= 0.9;
  }

}
