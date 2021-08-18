var button
var ball
var blower
var blowerMouth

function setup() {
  createCanvas(800,400);
  ball= createSprite(650, 150, 50,50);
  blower=createSprite(700,400,350,100);
  blowerMouth= createSprite(645,290,50,150)

  button= createButton("Click to blow");
  button.position(50,350);
  button.mousePressed(blow)
}

function draw() {
  background("black");  
  drawSprites()
}

function blow(){
  Matter.Body.applyForce(ball.Body,{x:0,y:0},{x:0,y:0.05})
}