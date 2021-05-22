var goku,gokuImg, goku_running, goku_punch, goku_kick;
var ground;
var background1, backgroundImg;
var itachi, itachiImg, itachiGroup;
var kakashi, kakashiImg;
var test, testimg;

function preload(){
gokuImg = loadImage("goku.png");
goku_running = loadAnimation("goku running1.png","goku running2.png","goku running3.png","goku running4.png","goku running5.png","goku running6.png","goku running7.png");
//goku_punch = loadAnimation("goku punch.png","goku kick.png");
//itachiImg = loadImage("itachi.png");
kakashiImg = loadImage("kakashi.png");
backgroundImg = loadImage("CITY BACKGROUND.jpg");


itachiGroup = createGroup();
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  background1= createSprite(width/2,height/2,width,height)
  background1.addImage(backgroundImg);
  background1.scale = 3.27;
  //background1.velocityX = -4;

  goku = createSprite(50,height-70,20,50);
  goku.addAnimation("running", goku_running);
  goku.scale = 2.0;

  test = createSprite(100,140,20,50)
  test.addImage(goku_punch);
  test.scale = 0.1
  
  ground = createSprite(width/2,height,width,20);
  ground.velocityX = -4;

 
  
}

function draw() {
  
  background("black");

  if (background1.x < 0){
    background1.x = background1.width/2;
  }

  
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  if(keyDown("space")&& goku.y >= 100){
    goku.velocityY = -12;
}

goku.velocityY = goku.velocityY + 0.8

//if(keyDown("W")){
  //console.log("KeyCodeWorking");
  //goku.addAnimation("goku_running",goku_punch);
//}

//if(key("Q")){
 //goku.addImage(gokuImg);
//}


  goku.collide(ground);
  //itachi.collide(ground);


  //spawnitachi();
  

  drawSprites();
}



function spawnitachi() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var itachi = createSprite(600,height-95,20,30);
    itachi.y = Math.round(random(20,80));
    //itachi.addImage(itachiImg);
    //itachi.scale = 0.5;
    itachi.velocityX = -3;
    
     //assign lifetime to the variable
    itachi.lifetime = 200;
    
    //adjust the depth
    itachi.depth = goku.depth;
    itachi.depth = goku.depth + 1;
    
    //add each cloud to the group
    itachigroup.add(itachi);
  }
}



