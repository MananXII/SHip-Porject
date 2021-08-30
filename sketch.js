var shipi,ship,ship_,oceanimage,ocean;


function preload(){
  ship_=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  oceanimage=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
 
  ocean=createSprite(200,150,400,40)
  ship=createSprite(200,200,100,100)
  ship.addAnimation("floating",ship_);
  ship.scale=0.2
  ocean.addImage(oceanimage)
 ocean.scale=0.5
 ocean.velocityX=-2
}

function draw() {
  background("blue");
 
  if(ocean.x<0){
    ocean.x=width/2



  }


  drawSprites();
}