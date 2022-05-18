// Vari�vel Global
var trex, trex_running;
var ground, groundImg, invisibleGround;
var cloud, cloudImg;
var cacto1, cacto2, cacto3, cacto4, cacto5, cacto6;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImg = loadImage("ground2.png");
  cloudImg = loadImage("cloud.png");
  cacto1 = loadImage("obstacle1.png");
  cacto2 = loadImage("obstacle2.png");
  cacto3 = loadImage("obstacle3.png");
  cacto4 = loadImage("obstacle4.png");
  cacto5 = loadImage("obstacle5.png");
  cacto6 = loadImage("obstacle6.png");
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
  createCactus();
  
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
     cloud.lifetime = 200;
   }
}

function createCactus()
{
  if (frameCount % 60 === 0) {
    var cacto = createSprite(400, 165, 10, 40);
    cacto.velocityX = -6;
    cacto.scale = 0.5;

    var randNumber = Math.round(random(1, 6));

    switch (randNumber) {
      case 1: 
        cacto.addImage(cacto1);
        break;
      case 2: 
        cacto.addImage(cacto2);
        break;
      case 3: 
        cacto.addImage(cacto3);
        break;
      case 4: 
        cacto.addImage(cacto4);
        break;
      case 5: 
        cacto.addImage(cacto5);
        break;
      case 6: 
        cacto.addImage(cacto6);
        break;
    
    }
  }

}
