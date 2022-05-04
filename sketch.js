
var trex, trex_running;
var ground, groundImg, invisibleGround;
var cloud, cloudImg;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImg = loadImage("ground2.png");
  cloudImg = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);

  // alterar tamanho e posicao do trex
  trex.scale = 0.5;
  trex.x = 50;
  ground = createSprite(200, 180, 400, 20);
  ground.addImage(groundImg);

  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;
}

function draw(){
  background("black");

  if ( keyDown("space") && trex.y >= 150) {
    trex.velocityY = -10;  
  }
  ground.velocityX = -2;
  
  // impedir que o ch�o acabe
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  // impedir que o trex caia saindo da tela
  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(invisibleGround);

  createClouds();
  
  drawSprites();
}

function createClouds()  
{
   if (frameCount % 60 === 0) {
    var randNumber = Math.round(random(10, 60));
     cloud = createSprite(600, 100, 40, 10);
     cloud.addImage(cloudImg);
     cloud.velocityX = -3;
     cloud.scale = 0.5;
     cloud.y = randNumber;
   }
}
