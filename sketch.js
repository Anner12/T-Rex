
var trex, trex_running;
var edges;
var ground, groundImg;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImg = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();

  // alterar tamanho e posicao do trex
  trex.scale = 0.5;
  trex.x = 50;
  ground = createSprite(200, 180, 400, 20);
  ground.addImage(groundImg); 
}

function draw(){
  background("black");

  if (keyDown("space")) {
    trex.velocityY = -10;
  }
  ground.velocityX = -2;

  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(ground);

  drawSprites();
}
