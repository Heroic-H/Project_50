var Electrofast, ElectrofastImg;
var level;
let gold,drill;
let score;

function preload() {
  ElectrofastImg = loadAnimation("ElectroFast1_jump.svg", "ElectroFast2.svg", "ElectroFast3.svg", "ElectroFast4.svg", "ElectroFast5_stand.svg");
}

function setup() {
  createCanvas(1400,700);
  //createSprite(200, 200, 50, 50);
  Electrofast = createSprite(width/2,height/2);
  Electrofast.addAnimation("Electrofast_Running",ElectrofastImg);
}

function draw() {
  //background(255,255,255);  
  background("cyan")
  drawSprites();
  Electrofast.x=mouseX;
  Electrofast.y=mouseY;
}