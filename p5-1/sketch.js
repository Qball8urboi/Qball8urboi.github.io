// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let dvd;
let x;
let y;
let dx;
let dy;

function preload() {
  dvd = loadImage("assets/stopharper.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  x =  width/2 - dvd.width / 2;
  y = height/2 - dvd.height / 2;
  dx = random(3,20);
  dy = random(3,20);
}

function draw() {
  moveDVD();
  displayDVD();

}
function moveDVD() {
  x += dx;
  y += dy;
  if(x> width-dvd.width || x<0) {
    dx = dx * -1;
  }
  else if(y>height-dvd.height || y<0){
    dy=dy*-1;
  }

}

function displayDVD() {
  background(random(0,80),random(0,80),random(0,80));
  image(dvd,x,y);
}
