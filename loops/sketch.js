// Loops Examples
// Dan Schellenberg
// Sept 27/18

let diameter, sliceWidth;
let x, y;
let targetColors = ["white", "white", "black", "black", "blue", "blue", "red", "red", "yellow", "yellow"];
let dart;
let scaler;
let hand, release;
let dartX,dartY;
let i = 500;
let wind;

function preload(){
  dart = loadImage("assets/dart.png");
  hand = loadImage("assets/handdart.png");

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  noCursor();
  scaler=0.001;
  //alert(wind);


}
function dartBoard(){
  stroke(200);
  diameter = width/2;
  sliceWidth = diameter / 10;
  for (let i = 0; i < 10; i++) {
    fill(targetColors[i]);
    ellipse(x, y, diameter, diameter);
    diameter -= sliceWidth;
  }

}
function keyPressed(){
  if(keyCode===32){
    wind= random(-100,100);
    hand = loadImage("assets/toss.png");
    dartX=mouseX+wind;
    dartY=mouseY+wind;
    i = 500;
  }
}
function distance(){
  if  (i>=100){
    i=i-5;
  }
  image(dart,dartX,dartY,i,i);
}
function draw() {
  background("green");
  dartBoard();
  distance();
  image(hand, mouseX, mouseY, image.width, image.height);

}
