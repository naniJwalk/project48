var player, playerImg, illusion, illusionImg, background1, light, lightImg, grassland;
var button, buttonImg, button1, button1Img, button2, button2Img;
var gameState=0;
var stress=0;
function preload(){
playerImg=loadAnimation("sadwalk1.png","sadwalk2.png","sadwalk3.png","sadwalk4.png","sadwalk5.png");
illusionImg=loadImage("skeleton.png");
background1=loadImage("grassland.jpg");
lightImg=loadImage("light.png");
buttonImg=loadImage("light.png");
button1Img=loadImage("light.png");
button2Img=loadImage("light.png");
grassland=loadImage("grassland.jpg");
}
function setup(){
createCanvas(1000,1000);
light=createSprite(500,500,100,100)
light.addImage(lightImg);
light.scale=0.5;

player=createSprite(100,100,200,100);
player.addAnimation("player",playerImg);
player.scale=0.2;
fill("black");
button=createSprite(100,100,70,70);
button.visible=false;
buttonImg.visible=false;
button.scale=0.15;
button1=createSprite(700,300,70,70);
button1.visible=false;
button1Img.visible=false;
button1.scale=0.15;
button2=createSprite(900,600,70,70);
button2.visible=false;
button2Img.visible=false;
button2.scale=0.15;
}
function draw(){
background(0);
light.x=player.x;
light.y=player.y;
//if(player.x<background1+100 || player.y<background1+100){

//}
    
//else{
  //background(0);
//}

if(getFrameRate()/60%120===0){
  illusion=createSprite(player.x-400,player.y-400,200,100);
  illusion.addImage("illusion",illusionImg);
  illusion.scale=0.3;
  }

if(player.x!==illusion.x && player.y!==illusion.y){
  illusion.x=illusion.x+1;
  illusion.y=illusion.y+1;
}
  //createEdgeSprites();
  //illusion.bounceOff(edges);
  
 if(gameState===0){
  fill("red");
  textSize(15);
  text("You Can't Escape",button.x-25,button.y-35);
  button.visible=true;
  buttonImg.visible=true;
  button.addImage(buttonImg);
if(player.isTouching(button)){
  button.x=random(1,1000);
  button.y=random(1,1000);
  gameState=1;
}
 }
 if(gameState===1){
  fill("red");
  textSize(15);
  text("You Are Stuck",button1.x-45,button1.y-35);
  button1.visible=true;
  button1Img.visible=true;
  button1.addImage(button1Img);
if(player.isTouching(button1)){
  button1.x=random(1,1000);
  button1.y=random(1,1000);
  gameState=2;
}
 }
 if(gameState===2){
  fill("red");
  textSize(15);
  text("The Doors Will Not Open",button2.x-76,button2.y-35);
  button2.visible=true;
  button2Img.visible=true;
  button2.addImage(buttonImg);
if(player.isTouching(button2)){
  button2.x=random(1,1000);
  button2.y=random(1,1000);
  gameState=0;
}
 }  

if(keyDown("w")){
  player.y=player.y-2;
}

if(keyDown("s")){
  player.y=player.y+2;
}

if(keyDown("d")){
  player.x=player.x+2;
}

if(keyDown("a")){
  player.x=player.x-2;
}
if(player.isTouching(illusion)){
    stress=stress+1;
  }
  if(stress===10){
  gameState=3;
  }

if(gameState===3){
  background(grassland);
  button.destroy();
  button1.destroy();
  button2.destroy();
  illusion.destroy();
  player.destroy();
  fill("red");
  textSize(35);
  text("Did You Feel Stress?",displayWidth/2-300,displayHeight/2+200);
  textSize(15);
  text("Many People Are Feel More Stress And Pain, Appricate What We Have And Understand How They Feel",displayWidth/2-455,displayHeight/2+230);
}


drawSprites();
}