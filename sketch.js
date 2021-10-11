var path,boy,leftBoundry,rightBoundry;
var pathImg,boyImg,i;
function preload(){
  //pre-load images
  pathImg=loadImage("path.png");
  boyImg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  boy=createSprite(180,340,30,30);
  boy.scale=0.09;
  boy.addAnimation("JaxonRunning",boyImg);

  leftBoundry=createSprite(0,0,100,800);
  leftBoundry.visible=false;
  rightBoundry=createSprite(410,0,100,800);
  rightBoundry.visible=false;
}



function draw() {
  background(0);
  path.velocityY=4;
  boy.x=World.mouseX;
edges=createEdgeSprites();
boy.collide(edges[3]);
boy.collide(leftBoundry);
boy.collide(rightBoundry);
if(path.y>400){
  path.y=height/2;
  
}
drawSprites();
}
