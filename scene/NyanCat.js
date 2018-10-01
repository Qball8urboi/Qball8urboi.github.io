// Nyan Cat Fun Times
// Quintan Fast
// sept 17th 2018
//
//
//

let normal, rainbow;
let scaler;
let backgroundMusic;
let poop;
let poopX,poopY;


function preload(){
  normal=loadImage('assets/neoncaught.png');
  rainbow=loadImage('assets/nyonrainbow.png');
  backgroundMusic = loadSound("assets/Nyanyanyanyanyanyanya.mp3");
  nyanBackground = loadImage("assets/Nyanbackground.png");
  poopEmoji = loadImage('assets/poopemoji.png');

}



function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundMusic.setVolume(0.2);
  backgroundMusic.loop();
  imageMode(CENTER);
  scaler = 0.65;

}

function keyPressed() {
  if (keyCode === 32) {
    poop=true;
    poopX=mouseX;
    poopY=mouseY;
  


  }
}



function draw(){
  image(nyanBackground, 0, 0, window.width*2, window.height*2);
  if(poop===true){
    image(poopEmoji, poopX, poopY, poopEmoji.width/12, poopEmoji.height/12);
  }
  if(mouseIsPressed){
    background(random(0,255),random(0,255),random(0,255));
    image(rainbow, mouseX, mouseY,rainbow.width*scaler,rainbow.height*scaler);
   }
  else{
     image(normal,mouseX,mouseY,normal.width,normal.height);

   }
}
