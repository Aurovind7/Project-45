var player, playerImg;
var protein, proteinImg;
var score=0;
var ground,groundImg;
var backgroundImg;
var gameState="play"

function preload(){
playerImg=loadImage("runningStage1.png")
groundImg=loadImage("ground.png")
proteinImg=loadImage("protein.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player=createSprite(windowWidth/2,windowHeight-200,100,50)
  ground=createSprite(windowWidth/2,windowHeight+60,windowWidth,20)
  player.addImage(playerImg)
  ground.addImage(groundImg)
  player.scale=0.3;
  ground.scale=0.7;
  

}

function draw() {
  background(255,255,255);
  player.velocityY+=0.8
  if(gameState==="play"){
    if(frameCount%100===0){
      createProtein();
    }
    if(keyDown(UP_ARROW)){
      player.velocityY-=5
    }
    if(keyDown(LEFT_ARROW)){
      player.velocityX-=5
    }
    if(keyDown(RIGHT_ARROW)){
      player.velocityX+=5
    }
    
  }
  drawSprites();
}

function createProtein(){
  protein=createSprite(Math.round(random(50,windowWidth-50),-windowHeight,50,50))
  protein.addImage(proteinImg)
  protein.scale=0.3
  protein.velocityY=4
}